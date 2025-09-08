import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, contactNumber, companyName, message } = body

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json({ error: "Name, email, and message are required" }, { status: 400 })
    }

    // Create email content
    const emailContent = `
New Contact Form Submission from Orrmira Website

Name: ${name}
Email: ${email}
Contact Number: ${contactNumber || "Not provided"}
Company Name: ${companyName || "Not provided"}

Message:
${message}

---
This email was sent from the Orrmira website contact form.
    `.trim()

    // For now, we'll log the email content
    // In production, you would integrate with an email service like Resend, SendGrid, or Nodemailer
    //console.log("[v0] Email would be sent to info@harguons.com:")
   // console.log(emailContent)

    // Simulate email sending delay
    //await new Promise((resolve) => setTimeout(resolve, 1000))
        // Setup Nodemailer with GoDaddy SMTP
    const transporter = nodemailer.createTransport({
      host: "smtpout.secureserver.net",
      port: 465,
      secure: true, // SSL
      auth: {
        user: process.env.SMTP_USER, // full email (e.g., info@harguons.com)
        pass: process.env.SMTP_PASS, // your email password
      },
    })

    // Send email
    await transporter.sendMail({
      from: `"Orrmira Website" <${process.env.SMTP_USER}>`,
      to: "info@harguons.com", // receiver email
      subject: "New Contact Form Submission",
      text: emailContent,
    })

    return NextResponse.json({
      success: true,
      message: "Contact form submitted successfully",
    })
  } catch (error) {
    console.error("[v0] Contact form submission error:", error)
    return NextResponse.json({ error: "Failed to submit contact form" }, { status: 500 })
  }
}
