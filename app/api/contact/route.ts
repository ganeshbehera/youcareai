import { NextRequest, NextResponse } from 'next/server'
import * as brevo from '@getbrevo/brevo'

// Initialize Brevo API
const apiInstance = new brevo.TransactionalEmailsApi()
apiInstance.setApiKey(brevo.TransactionalEmailsApiApiKeys.apiKey, process.env.BREVO_API_KEY || '')

export async function POST(request: NextRequest) {
  try {
    const { name, email, subject, message } = await request.json()

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      )
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      )
    }

    // Send confirmation email to user
    const userConfirmation = new brevo.SendSmtpEmail()
    userConfirmation.to = [{ email: email, name: name }]
    userConfirmation.sender = { 
      email: process.env.BREVO_SENDER_EMAIL || 'noreply@yourcareai.com', 
      name: 'YourCareAI Team' 
    }
    userConfirmation.subject = 'Thank you for contacting YourCareAI'
    userConfirmation.htmlContent = `
      <html>
        <body style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="text-align: center; margin-bottom: 30px;">
            <h1 style="color: #2563eb; margin-bottom: 10px;">Thank You for Contacting Us!</h1>
            <p style="color: #6b7280; font-size: 16px;">We've received your message</p>
          </div>
          
          <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
            <h2 style="color: #1f2937; margin-top: 0;">Hi ${name}!</h2>
            <p style="color: #4b5563; line-height: 1.6;">
              Thank you for reaching out to YourCareAI. We've received your message and will get back to you within 24 hours.
            </p>
          </div>

          <div style="background-color: #f0f9ff; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
            <h3 style="color: #0369a1; margin-top: 0;">Your Message:</h3>
            <p style="color: #0369a1;"><strong>Subject:</strong> ${subject}</p>
            <p style="color: #0369a1; font-style: italic;">"${message}"</p>
          </div>

          <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
            <p style="color: #6b7280; font-size: 14px;">
              Best regards,<br>
              <strong style="color: #2563eb;">The YourCareAI Team</strong>
            </p>
          </div>
        </body>
      </html>
    `

    await apiInstance.sendTransacEmail(userConfirmation)

    // Send notification email to admin
    const adminNotification = new brevo.SendSmtpEmail()
    adminNotification.to = [{ 
      email: process.env.ADMIN_EMAIL || 'admin@yourcareai.com', 
      name: 'YourCareAI Admin' 
    }]
    adminNotification.sender = { 
      email: process.env.BREVO_SENDER_EMAIL || 'noreply@yourcareai.com', 
      name: 'YourCareAI Contact Form' 
    }
    adminNotification.subject = `New Contact Form: ${subject}`
    adminNotification.htmlContent = `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Subject:</strong> ${subject}</p>
      <p><strong>Message:</strong></p>
      <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px; margin: 10px 0;">
        ${message}
      </div>
      <p><strong>Timestamp:</strong> ${new Date().toISOString()}</p>
    `

    await apiInstance.sendTransacEmail(adminNotification)

    return NextResponse.json(
      { message: 'Message sent successfully' },
      { status: 200 }
    )

  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Failed to send message. Please try again.' },
      { status: 500 }
    )
  }
}
