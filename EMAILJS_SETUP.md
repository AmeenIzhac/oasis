# EmailJS Setup Instructions

This project uses EmailJS to handle contact form submissions. Follow these steps to configure EmailJS:

## 1. Create EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## 2. Set Up Email Service

1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions for your provider
5. Note down your **Service ID**

## 3. Create Email Template

1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Use this template structure:

```
Subject: New Contact Form Submission from {{from_name}}

From: {{from_name}} <{{from_email}}>
To: your-email@example.com
Message: {{message}}

Reply to: {{from_email}}
```

**Important**: Make sure to set the "From" field to `{{from_name}} <{{from_email}}>` so emails appear to come from the form submitter, not your EmailJS account email.

4. Save the template and note down your **Template ID**

## 4. Get Public Key

1. Go to "Account" in your dashboard
2. Find your **Public Key** in the API Keys section

## 5. Configure Environment Variables

Create a `.env` file in your project root with:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id_here
VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
```

Replace the placeholder values with your actual EmailJS credentials.

## 6. Test the Form

1. Start your development server: `npm run dev`
2. Navigate to the Contact page
3. Fill out and submit the form
4. Check your email for the message

## Troubleshooting

- Make sure all environment variables are set correctly
- Check the browser console for any error messages
- Verify your EmailJS service is active
- Ensure your email template variables match the form data structure

## Security Notes

- Never commit your `.env` file to version control
- The `.env` file is already included in `.gitignore`
- EmailJS public key is safe to use in frontend applications
