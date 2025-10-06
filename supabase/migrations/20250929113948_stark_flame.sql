/*
  # Initial Database Schema

  1. New Tables
    - `contact_submissions`
      - `id` (uuid, primary key)
      - `name` (text, required)
      - `email` (text, required)
      - `message` (text, required)
      - `status` (text, default 'new')
      - `created_at` (timestamp)
    - `services`
      - `id` (uuid, primary key)
      - `title` (text, required)
      - `description` (text, required)
      - `icon` (text, required)
      - `is_active` (boolean, default true)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)

  2. Security
    - Enable RLS on all tables
    - Add policies for public access to services (read-only)
    - Add policies for contact submissions (insert-only for public)
    - Add policies for authenticated users to manage content
*/

-- Contact submissions table
CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  message text NOT NULL,
  status text DEFAULT 'new' CHECK (status IN ('new', 'in_progress', 'resolved')),
  created_at timestamptz DEFAULT now()
);

-- Services table
CREATE TABLE IF NOT EXISTS services (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text NOT NULL,
  icon text NOT NULL,
  is_active boolean DEFAULT true,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE services ENABLE ROW LEVEL SECURITY;

-- Policies for contact submissions
CREATE POLICY "Anyone can submit contact forms"
  ON contact_submissions
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can view contact submissions"
  ON contact_submissions
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Authenticated users can update contact submissions"
  ON contact_submissions
  FOR UPDATE
  TO authenticated
  USING (true);

-- Policies for services
CREATE POLICY "Anyone can view active services"
  ON services
  FOR SELECT
  TO anon, authenticated
  USING (is_active = true);

CREATE POLICY "Authenticated users can manage services"
  ON services
  FOR ALL
  TO authenticated
  USING (true);

-- Insert default services
INSERT INTO services (title, description, icon) VALUES
  ('Strategic Planning', 'Comprehensive business strategy development to achieve your goals and maximize growth potential.', 'Target'),
  ('Team Development', 'Building high-performance teams through training, coaching, and organizational development.', 'Users'),
  ('Quality Assurance', 'Ensuring excellence in every aspect of your business operations and customer experience.', 'Award')
ON CONFLICT DO NOTHING;