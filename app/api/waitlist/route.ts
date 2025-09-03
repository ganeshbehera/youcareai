import { NextRequest, NextResponse } from 'next/server'
import * as brevo from '@getbrevo/brevo'

// Initialize Brevo API
const apiInstance = new brevo.TransactionalEmailsApi()
apiInstance.setApiKey(brevo.TransactionalEmailsApiApiKeys.apiKey, process.env.BREVO_API_KEY || '')

export async function POST(request: NextRequest) {
  try {
    const { name, email, phone, message } = await request.json()

    // Validate required fields
    if (!name || !email) {
      return NextResponse.json(
        { error: 'Name and email are required' },
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

    // Prepare email content
    const emailContent = `
      <html>
        <body style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="text-align: center; margin-bottom: 30px;">
            <h1 style="color: #2563eb; margin-bottom: 10px;">Welcome to YourCareAI!</h1>
            <p style="color: #6b7280; font-size: 16px;">You're now on our exclusive waitlist</p>
          </div>
          
          <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
            <h2 style="color: #1f2937; margin-top: 0;">Hi ${name}!</h2>
            <p style="color: #4b5563; line-height: 1.6;">
              Thank you for joining the YourCareAI waitlist! You're among the first to experience 
              AI-powered health monitoring that predicts risks 6 months early.
            </p>
          </div>

          <div style="background-color: #dbeafe; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
            <h3 style="color: #1e40af; margin-top: 0;">What's Next?</h3>
            <ul style="color: #1e40af; line-height: 1.8;">
              <li>🎉 <strong>6 months free</strong> when we launch</li>
              <li>📧 Early access notifications</li>
              <li>💡 Exclusive health tips and insights</li>
              <li>🏥 Priority support from our team</li>
            </ul>
          </div>

          ${message ? `
          <div style="background-color: #f0f9ff; padding: 15px; border-radius: 8px; margin-bottom: 20px;">
            <h4 style="color: #0369a1; margin-top: 0;">Your Message:</h4>
            <p style="color: #0369a1; font-style: italic;">"${message}"</p>
            <p style="color: #0369a1; font-size: 14px;">We'll get back to you soon!</p>
          </div>
          ` : ''}

          <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
            <p style="color: #6b7280; font-size: 14px;">
              Stay healthy,<br>
              <strong style="color: #2563eb;">The YourCareAI Team</strong>
            </p>
            <p style="color: #9ca3af; font-size: 12px; margin-top: 20px;">
              You can unsubscribe from these emails at any time.
            </p>
          </div>
        </body>
      </html>
    `

    // Send confirmation email to user
    const sendSmtpEmail = new brevo.SendSmtpEmail()
    sendSmtpEmail.to = [{ email: email, name: name }]
    sendSmtpEmail.sender = { 
      email: process.env.BREVO_SENDER_EMAIL || 'noreply@yourcareai.com', 
      name: 'YourCareAI Team' 
    }
    sendSmtpEmail.subject = 'Welcome to YourCareAI Waitlist! 🎉'
    sendSmtpEmail.htmlContent = emailContent

    await apiInstance.sendTransacEmail(sendSmtpEmail)

    // Send notification email to admin
    const adminNotification = new brevo.SendSmtpEmail()
    adminNotification.to = [{ 
      email: process.env.ADMIN_EMAIL || 'admin@yourcareai.com', 
      name: 'YourCareAI Admin' 
    }]
    adminNotification.sender = { 
      email: process.env.BREVO_SENDER_EMAIL || 'noreply@yourcareai.com', 
      name: 'YourCareAI Waitlist' 
    }
    adminNotification.subject = `New Waitlist Signup: ${name}`
    adminNotification.htmlContent = `
      <h2>New Waitlist Signup</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ''}
      ${message ? `<p><strong>Message:</strong> ${message}</p>` : ''}
      <p><strong>Timestamp:</strong> ${new Date().toISOString()}</p>
    `

    await apiInstance.sendTransacEmail(adminNotification)

    return NextResponse.json(
      { message: 'Successfully joined waitlist' },
      { status: 200 }
    )

  } catch (error) {
    console.error('Waitlist signup error:', error)
    return NextResponse.json(
      { error: 'Failed to join waitlist. Please try again.' },
      { status: 500 }
    )
  }
}
