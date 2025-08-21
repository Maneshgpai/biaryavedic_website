# Email Setup Guide for Contact Form

The contact form has been implemented with Nodemailer to send emails to `info@aryavedicnaturals.com`. Follow these steps to configure email functionality:

## 1. Environment Variables

Create a `.env.local` file in the web directory with the following variables:

### For Gmail (Google):
```env
# Gmail Configuration
EMAIL_USER=your-gmail-address@gmail.com
EMAIL_PASSWORD=your-gmail-app-password
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
```

### For Outlook/Hotmail:
```env
# Outlook Configuration
EMAIL_USER=your-email@outlook.com
EMAIL_PASSWORD=your-outlook-password
SMTP_HOST=smtp-mail.outlook.com
SMTP_PORT=587
SMTP_SECURE=false
```

### For Yahoo Mail:
```env
# Yahoo Configuration
EMAIL_USER=your-email@yahoo.com
EMAIL_PASSWORD=your-yahoo-app-password
SMTP_HOST=smtp.mail.yahoo.com
SMTP_PORT=587
SMTP_SECURE=false
```

### For Custom SMTP/Corporate Email:
```env
# Custom SMTP Configuration
EMAIL_USER=your-email@yourdomain.com
EMAIL_PASSWORD=your-email-password
SMTP_HOST=smtp.yourdomain.com
SMTP_PORT=587
SMTP_SECURE=false
```

## 2. Gmail Setup

### Step 1: Enable 2-Factor Authentication
1. Go to your Google Account settings
2. Navigate to Security
3. Enable 2-Step Verification if not already enabled

### Step 2: Generate App Password
1. Go to [Google App Passwords](https://myaccount.google.com/apppasswords)
2. Select "Mail" and your device
3. Google will generate a 16-character app password
4. Use this password (not your regular Gmail password) as `EMAIL_APP_PASSWORD`

### Step 3: Update Environment Variables
Replace the placeholder values in `.env.local` based on your email provider (see section 1 above).

**Important Notes:**
- For Gmail: Use App Password (16 characters) instead of regular password
- For Outlook: Use regular password or App Password if 2FA is enabled
- For Yahoo: Use App Password (generate at Yahoo Account Security)
- For Corporate/Custom: Use your email password or as configured by IT

## 3. Alternative Email Providers

If you prefer not to use Gmail, you can modify the transporter configuration in `/app/api/contact/route.ts`:

### For Outlook/Hotmail:
```javascript
const transporter = nodemailer.createTransport({
  service: 'outlook',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_APP_PASSWORD,
  },
});
```

### For Custom SMTP:
```javascript
const transporter = nodemailer.createTransport({
  host: 'your-smtp-server.com',
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});
```

## 4. Security Notes

- Never commit the `.env.local` file to version control
- Use App Passwords, not regular passwords
- The `.env.local` file is already in `.gitignore`
- Environment variables are only accessible on the server-side

## 5. Testing

After setup:
1. Start the development server: `npm run dev`
2. Fill out the contact form
3. Check that emails are received at `info@aryavedicnaturals.com`
4. Verify that success/error messages appear correctly

## 6. Features Implemented

- ✅ Form validation (client and server-side)
- ✅ Loading states during submission
- ✅ Success/error notifications with react-hot-toast
- ✅ Professional HTML email template
- ✅ Form reset after successful submission
- ✅ Responsive design maintained
- ✅ Accessibility features (required fields marked)

## 7. Email Template

The email sent includes:
- Contact information (name, email, phone)
- Subject selection
- Full message content
- Professional HTML formatting
- Bio-Aryavedic branding

## 8. Troubleshooting

### Common Issues:
1. **"Invalid login"** - Check app password generation
2. **"Network error"** - Verify environment variables are set
3. **"Missing required fields"** - Ensure form validation is working
4. **Emails not received** - Check spam folder and email configuration 