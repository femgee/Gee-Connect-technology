# HRJ Consulting Website

A modern, responsive business consulting website built with React, TypeScript, Tailwind CSS, and Supabase.

## 🚀 Features

- **Modern Design**: Clean, professional design with smooth animations
- **Responsive**: Fully responsive design that works on all devices
- **Contact Forms**: Integrated contact form with database storage
- **Real-time Updates**: Real-time form submissions using Supabase
- **Performance Optimized**: Built with Vite for fast development and production builds
- **Type Safe**: Full TypeScript support for better development experience
- **Analytics**: Built-in analytics tracking for user interactions

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript, Tailwind CSS
- **Backend**: Supabase (PostgreSQL database, real-time subscriptions)
- **Build Tool**: Vite
- **Icons**: Lucide React
- **Styling**: Tailwind CSS with custom components
- **Deployment**: Ready for deployment to any static hosting service

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (version 18 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- A [Supabase](https://supabase.com) account

## 🚀 Quick Start

### 1. Clone the Repository

```bash
git clone https://github.com/YOUR_USERNAME/hrj-consulting-website.git
cd hrj-consulting-website
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Set Up Environment Variables

1. Copy the example environment file:
```bash
cp .env.example .env
```

2. Update the `.env` file with your Supabase credentials:
```env
VITE_SUPABASE_URL=https://your-project-id.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key-here
```

### 4. Set Up Supabase Database

1. Create a new project in [Supabase](https://supabase.com)
2. Go to the SQL Editor in your Supabase dashboard
3. Run the migration file located in `supabase/migrations/` to create the necessary tables
4. The migration will create:
   - `contact_submissions` table for storing contact form data
   - `services` table for managing service offerings
   - Row Level Security (RLS) policies for data protection

### 5. Start Development Server

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## 📁 Project Structure

```
hrj-consulting-website/
├── public/                 # Static assets
├── src/
│   ├── components/        # React components
│   │   ├── ContactForm.tsx
│   │   └── DatabaseStatus.tsx
│   ├── hooks/            # Custom React hooks
│   │   ├── useServices.ts
│   │   └── useContactSubmissions.ts
│   ├── lib/              # Utility libraries
│   │   ├── supabase.ts   # Supabase client and functions
│   │   ├── validation.ts # Form validation utilities
│   │   ├── api.ts        # API utilities and error handling
│   │   └── analytics.ts  # Analytics and monitoring
│   ├── utils/            # Utility functions
│   ├── App.tsx           # Main application component
│   ├── main.tsx          # Application entry point
│   └── index.css         # Global styles
├── supabase/
│   └── migrations/       # Database migration files
├── package.json
├── vite.config.ts
├── tailwind.config.js
└── README.md
```

## 🗄️ Database Schema

### Contact Submissions Table
```sql
contact_submissions (
  id: uuid (primary key)
  name: text (required)
  email: text (required)
  message: text (required)
  status: text (default: 'new')
  created_at: timestamp with time zone
)
```

### Services Table
```sql
services (
  id: uuid (primary key)
  title: text (required)
  description: text (required)
  icon: text (required)
  is_active: boolean (default: true)
  created_at: timestamp with time zone
  updated_at: timestamp with time zone
)
```

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint
- `npm run typecheck` - Run TypeScript type checking

## 🚀 Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Connect your GitHub repository to [Vercel](https://vercel.com)
3. Add your environment variables in Vercel dashboard
4. Deploy!

### Deploy to Netlify

1. Push your code to GitHub
2. Connect your GitHub repository to [Netlify](https://netlify.com)
3. Set build command: `npm run build`
4. Set publish directory: `dist`
5. Add your environment variables in Netlify dashboard
6. Deploy!

### Other Hosting Services

The built application is a static site that can be deployed to any static hosting service:
- GitHub Pages
- AWS S3 + CloudFront
- Firebase Hosting
- Surge.sh

## 🔒 Security Features

- **Row Level Security (RLS)**: Enabled on all database tables
- **Input Validation**: Client-side and server-side validation
- **Rate Limiting**: Prevents spam submissions
- **Data Sanitization**: All user inputs are sanitized
- **CORS Protection**: Proper CORS headers configured

## 📊 Analytics

The application includes built-in analytics tracking for:
- Page views
- Contact form submissions
- Service interactions
- Performance metrics

Analytics data is logged to the browser console in development. In production, you can integrate with your preferred analytics service.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Support

For support, email admins@hrjconsulting.eu or create an issue in this repository.

## 🙏 Acknowledgments

- [React](https://reactjs.org/) - UI library
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework
- [Supabase](https://supabase.com/) - Backend as a Service
- [Vite](https://vitejs.dev/) - Build tool
- [Lucide](https://lucide.dev/) - Icon library