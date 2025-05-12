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

  // In a real application, you would send an email here.
  // For this example, we'll just log the data and simulate success.
  console.log("Contact form submitted:", validationResult.data);
  
  // Simulate email sending delay
  await new Promise(resolve => setTimeout(resolve, 1000));

  // Simulate potential failure
  // if (Math.random() < 0.2) { // 20% chance of failure
  //   return { success: false, error: "Simulated: Failed to send email." };
  // }

  return { success: true };
}
