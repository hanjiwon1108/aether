import {
  createErrorResponse,
  createSuccessResponse,
  simulateDelay,
} from "@/shared/api/server-utils";

export async function POST(request: Request) {
  try {
    const data = await request.json();

    if (!data.name || !data.email || !data.message) {
      return createErrorResponse("Missing required fields", 400);
    }

    // Simulate database save or email sending delay
    await simulateDelay();

    // Logging the data as a placeholder for real backend logic like Resend/DB
    console.log("Contact Submitter:", data.name);
    console.log("Contact Email:", data.email);
    console.log("Message:", data.message);

    return createSuccessResponse("Message sent successfully!");
  } catch (error) {
    console.error("Contact API Error:", error);
    return createErrorResponse("Failed to send message.", 500);
  }
}

