
"use server";

import * as z from "zod";

const contactFormSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(10).max(500),
});

interface SubmissionResult {
  success: boolean;
  error?: string;
}

export async function submitContactForm(
  data: z.infer<typeof contactFormSchema>
): Promise<SubmissionResult> {
  const validationResult = contactFormSchema.safeParse(data);

  if (!validationResult.success) {
    return { success: false, error: "Invalid form data." };
  }

  // --- START OF EXPLANATION FOR SIMULATED EMAIL ---
  // The following section simulates an email submission for demonstration purposes.
  // In a real-world application, you would integrate an email sending service here.
  // Examples include:
  // - Nodemailer (with an SMTP provider like Gmail, SendGrid, etc.)
  // - API-based services like SendGrid, Mailgun, AWS SES.
  //
  // This would involve:
  // 1. Installing necessary packages (e.g., nodemailer).
  // 2. Configuring the email service provider (e.g., setting up API keys in environment variables).
  // 3. Writing the logic to construct and send the email.
  //
  // For now, we are logging the data to the console. The email will NOT actually be sent.
  // --- END OF EXPLANATION FOR SIMULATED EMAIL ---

  console.log("SIMULATED EMAIL SUBMISSION:");
  console.log("Received contact form data:", validationResult.data);
  console.log("To implement actual email sending, you need to integrate an email service provider in this server action.");
  // Updated the log to specifically mention the user's email address as the intended recipient.
  console.log(`An email would typically be sent to the portfolio owner (soumyaj470@gmail.com) with the following details:`);
  console.log(`  From: ${validationResult.data.name} <${validationResult.data.email}>`);
  console.log(`  Message: ${validationResult.data.message}`);
  
  // Simulate email sending delay
  await new Promise(resolve => setTimeout(resolve, 1000));

  // Simulate potential failure (can be uncommented for testing error handling)
  // if (Math.random() < 0.2) { // 20% chance of failure
  //   console.error("Simulated: Failed to send email.");
  //   return { success: false, error: "Simulated: Failed to send email." };
  // }

  console.log("Simulated email submission: Success.");
  return { success: true };
}

