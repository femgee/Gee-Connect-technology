# 🚀 Supabase Connection Setup Guide

## Quick Setup Steps

### 1. Access Supabase Settings in Bolt
- Look for the **⚙️ settings icon** at the top of the preview window
- Click it and select **"Supabase"** from the menu

### 2. Create Your Supabase Project
If you don't have a Supabase account:

1. **Visit [supabase.com](https://supabase.com)**
2. **Sign up** with your email or GitHub
3. **Create New Project**:
   ```
   Project Name: HRJ Consulting Website
   Database Password: [Choose a strong password - SAVE THIS!]
   Region: [Select closest to your users]
   ```
4. **Wait 2-3 minutes** for project creation

### 3. Get Your Credentials
Once your project is ready:

1. **Navigate to**: Settings → API
2. **Copy these values**:
   - **Project URL**: `https://your-project-id.supabase.co`
   - **Anon Key**: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...`

### 4. Connect in Bolt
1. **Paste Project URL** in the first field
2. **Paste Anon Key** in the second field  
3. **Click "Connect"**

## ✅ What Happens After Connection

Your application will automatically:
- ✅ Create `.env` file with credentials
- ✅ Run database migration (creates tables)
- ✅ Set up security policies
- ✅ Insert default services data
- ✅ Enable contact form submissions
- ✅ Activate real-time features

## 🧪 Test Your Connection

After connecting:

1. **Submit a test contact form**
2. **Check Supabase Dashboard**:
   - Go to Table Editor
   - View `contact_submissions` table
   - Verify your test submission appears

## 📊 Database Tables Created

Your database will have:

### `contact_submissions`
- Stores contact form data
- Fields: name, email, message, status, created_at

### `services` 
- Manages service offerings
- Pre-populated with 3 default services
- Fields: title, description, icon, is_active

## 🔒 Security Features

- **Row Level Security (RLS)** enabled
- **Public access** for viewing services and submitting forms
- **Rate limiting** prevents spam (3 submissions per 5 minutes)
- **Input validation** and sanitization

## 🚨 Troubleshooting

**Connection Issues:**
- Verify Project URL format: `https://[project-id].supabase.co`
- Use **anon/public key**, not service role key
- Ensure project is fully created (not still initializing)

**Form Not Working:**
- Check browser console for errors
- Verify credentials in Bolt settings
- Test with simple form data first

**Database Issues:**
- Check Supabase project status
- Verify migration ran successfully
- Look for errors in Supabase logs

## 📞 Need Help?

If you encounter issues:
1. Check the browser console for error messages
2. Verify your Supabase project is active
3. Double-check your credentials are correct
4. Try refreshing the page after connection

---

**Your application is production-ready once connected!** 🎉