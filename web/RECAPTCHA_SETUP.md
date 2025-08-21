# 🔒 reCAPTCHA Security Setup Guide

This guide will help you set up Google reCAPTCHA v2 to protect your contact form from spam and bot submissions.

## 📋 Prerequisites

- Google account
- Domain name (or localhost for development)
- Access to your website's environment variables

## 🚀 Step-by-Step Setup

### 1. Create reCAPTCHA Keys

1. **Visit Google reCAPTCHA Admin Console**
   - Go to: https://www.google.com/recaptcha/admin/create

2. **Create a New Site**
   - **Label**: `Bio-Aryavedic Contact Form` (or any descriptive name)
   - **reCAPTCHA type**: Select `reCAPTCHA v2` → `"I'm not a robot" Checkbox`

3. **Add Domains**
   - For **development**: Add `localhost`
   - For **production**: Add your actual domain (e.g., `yourdomain.com`)
   - You can add multiple domains separated by new lines

4. **Accept Terms**
   - Check "Accept the reCAPTCHA Terms of Service"
   - Optionally check "Send alerts to owners"

5. **Submit**
   - Click "Submit" to create your reCAPTCHA

### 2. Get Your Keys

After creation, you'll receive two keys:

- **Site Key** (Public): Used in the frontend React component
- **Secret Key** (Private): Used in the backend API for verification

⚠️ **Important**: Keep your Secret Key private and never expose it in client-side code!

### 3. Configure Environment Variables

#### Option A: Use the Setup Script (Recommended)
```bash
npm run setup
```
The script will guide you through both email and reCAPTCHA configuration.

#### Option B: Manual Configuration
Create or edit your `.env.local` file:

```env
# Google reCAPTCHA v2 Configuration
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=your-site-key-here
RECAPTCHA_SECRET_KEY=your-secret-key-here
```

### 4. Test the Implementation

1. **Start Development Server**
   ```bash
   npm run dev
   ```

2. **Navigate to Contact Form**
   - Open: http://localhost:3000
   - Scroll to the contact section

3. **Verify reCAPTCHA Appears**
   - You should see the "I'm not a robot" checkbox
   - The form should require completing the CAPTCHA before submission

4. **Test Form Submission**
   - Fill out the form completely
   - Complete the reCAPTCHA challenge
   - Submit the form
   - Verify the email is sent successfully

## 🔧 Configuration Details

### Frontend Integration
The Contact component now includes:
- `react-google-recaptcha` library for the CAPTCHA widget
- Form validation to ensure CAPTCHA completion
- Automatic CAPTCHA reset on form submission or errors
- Responsive styling that matches your design

### Backend Verification
The API route (`/api/contact`) now:
- Validates the reCAPTCHA token on every submission
- Verifies the token with Google's verification endpoint
- Rejects requests without valid CAPTCHA verification
- Provides clear error messages for CAPTCHA failures

### Security Features
- **Bot Protection**: Prevents automated spam submissions
- **Rate Limiting**: Google's built-in rate limiting
- **Privacy Focused**: Uses reCAPTCHA v2 (less invasive than v3)
- **Server-Side Validation**: Double verification on backend

## 🛠️ Troubleshooting

### Common Issues

1. **CAPTCHA Not Appearing**
   - Check if `NEXT_PUBLIC_RECAPTCHA_SITE_KEY` is set correctly
   - Verify the domain is added to your reCAPTCHA configuration
   - Check browser console for JavaScript errors

2. **"reCAPTCHA verification failed" Error**
   - Verify `RECAPTCHA_SECRET_KEY` is correct
   - Check if the secret key matches your site configuration
   - Ensure your server can reach Google's verification endpoint

3. **Domain Errors**
   - For development: Make sure `localhost` is added to allowed domains
   - For production: Verify your production domain is configured
   - Check for typos in domain names

4. **Keys Not Working**
   - Regenerate keys if needed from the reCAPTCHA admin console
   - Ensure you're using the correct keys for the right environment
   - Check that keys haven't expired or been revoked

### Testing in Different Environments

#### Development (localhost)
- Add `localhost` to allowed domains
- Use development keys for local testing

#### Production
- Add your production domain
- Use production keys
- Test thoroughly before going live

## 📊 Monitoring and Analytics

- Monitor form submissions in Google reCAPTCHA admin console
- Track success/failure rates
- Review security analytics and threat patterns
- Adjust security levels if needed

## 🔄 Maintenance

### Regular Tasks
- Monitor reCAPTCHA admin console for alerts
- Review domain configurations when moving sites
- Update keys if compromised
- Test functionality after any changes

### Key Rotation
If you need to rotate keys:
1. Generate new keys in reCAPTCHA admin console
2. Update environment variables
3. Deploy changes
4. Monitor for any issues
5. Delete old keys once confirmed working

## 🆘 Support

If you encounter issues:
1. Check this guide first
2. Review Google reCAPTCHA documentation
3. Check the browser console for errors
4. Verify environment variables are loaded correctly
5. Test with a fresh browser/incognito mode

---

✅ **Security Best Practices Applied:**
- Server-side token verification
- Environment variable protection
- Proper error handling
- Rate limiting via Google
- Privacy-focused implementation 