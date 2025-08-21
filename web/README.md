# Bio-Aryavedic Website

This is a [Next.js](https://nextjs.org) project for the Bio-Aryavedic website with integrated contact form email functionality.

## Features

- 🌱 Modern Next.js 15 with App Router
- 📧 Working contact form with email notifications
- 🔒 Google reCAPTCHA v2 protection against spam
- 🛒 Shopify integration for e-commerce
- 🎨 Tailwind CSS for styling
- 📱 Responsive design
- ♿ Accessibility features

## Quick Setup

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure Email & Security (Required for Contact Form)

Run the interactive setup script for both email and reCAPTCHA:

```bash
npm run setup
```

Or manually create `.env.local`:

```env
# Email Configuration
EMAIL_USER=your-email@example.com
EMAIL_PASSWORD=your-email-password
SMTP_HOST=smtp.example.com
SMTP_PORT=587
SMTP_SECURE=false

# reCAPTCHA Configuration (Required)
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=your-site-key
RECAPTCHA_SECRET_KEY=your-secret-key
```

**📝 Setup Guides:**
- Email: [EMAIL_SETUP.md](./EMAIL_SETUP.md)
- reCAPTCHA: [RECAPTCHA_SETUP.md](./RECAPTCHA_SETUP.md)

### 3. Start Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the website.

## Contact Form

The contact form sends emails to `info@aryavedicnaturals.com` and includes:

- ✅ Form validation (client & server-side)
- ✅ Loading states during submission  
- ✅ Success/error notifications
- ✅ Professional HTML email template
- 🔒 **Google reCAPTCHA v2 protection** - Prevents spam and bot submissions
- 🛡️ **Server-side verification** - Double security layer
- 🚫 **Anti-spam protection** - Blocks automated form submissions

### Security Features
- **Required reCAPTCHA**: Users must complete "I'm not a robot" verification
- **Token Validation**: Server verifies reCAPTCHA tokens with Google
- **Error Handling**: Clear feedback for failed verifications
- **Automatic Reset**: CAPTCHA resets after successful submission or errors

Test the form at: [http://localhost:3000/#contact](http://localhost:3000/#contact)

## Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
npm run setup    # Configure email & reCAPTCHA settings
```

## Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| **Email Configuration** | | |
| `EMAIL_USER` | Email address for sending emails | Yes |
| `EMAIL_PASSWORD` | Email password or app password | Yes |
| `SMTP_HOST` | SMTP server hostname | Yes |
| `SMTP_PORT` | SMTP server port (usually 587) | Yes |
| `SMTP_SECURE` | Use SSL (true/false) | Yes |
| **Security Configuration** | | |
| `NEXT_PUBLIC_RECAPTCHA_SITE_KEY` | Google reCAPTCHA Site Key (public) | Yes |
| `RECAPTCHA_SECRET_KEY` | Google reCAPTCHA Secret Key (private) | Yes |
| **Optional Shopify Integration** | | |
| `NEXT_PUBLIC_SHOPIFY_DOMAIN` | Shopify store domain | Optional |
| `NEXT_PUBLIC_SHOPIFY_STOREFRONT_TOKEN` | Shopify API token | Optional |

## Project Structure

```
web/
├── app/                    # Next.js App Router pages
│   ├── api/contact/       # Contact form API endpoint
│   ├── about/             # About page
│   ├── products/          # Product pages
│   └── ...
├── components/            # React components
│   ├── Contact.tsx        # Contact form component
│   ├── Header.tsx         # Navigation header
│   └── ...
├── lib/                   # Utilities and integrations
└── public/               # Static assets
```

## Setup Help

- 📖 **Email Guide**: [EMAIL_SETUP.md](./EMAIL_SETUP.md)
- 🔒 **Security Guide**: [RECAPTCHA_SETUP.md](./RECAPTCHA_SETUP.md)
- 🔧 **Quick Setup**: `npm run setup` (configures both email and reCAPTCHA)
- 🔗 **Gmail App Passwords**: [myaccount.google.com/apppasswords](https://myaccount.google.com/apppasswords)

## Troubleshooting

### Common Issues

1. **Contact form not working**
   - Check if `.env.local` exists with correct credentials
   - Verify Gmail app password is 16 characters
   - Ensure 2FA is enabled on Gmail account

2. **Build errors**
   - Run `npm install` to install dependencies
   - Check Node.js version (recommended: 18+)

3. **Email not received**
   - Check spam folder
   - Verify `info@aryavedicnaturals.com` is correct
   - Test with different email address

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS 4
- **Email**: Nodemailer with Gmail SMTP
- **Notifications**: React Hot Toast
- **Icons**: React Icons
- **TypeScript**: Full type safety

## Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Connect to [Vercel](https://vercel.com)
3. Add environment variables in Vercel dashboard
4. Deploy automatically

### Other Platforms

Make sure to set environment variables:
- `EMAIL_USER`
- `EMAIL_APP_PASSWORD`

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Nodemailer Guide](https://nodemailer.com/about/)

## Support

For technical issues with the contact form, see [EMAIL_SETUP.md](./EMAIL_SETUP.md) or check the API logs.
