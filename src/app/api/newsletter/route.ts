import {
  createErrorResponse,
  createSuccessResponse,
  simulateDelay,
} from "@/shared/api/server-utils";

export async function POST(request: Request) {
  try {
    const data = await request.json();

    if (!data.email) {
      return createErrorResponse("Email is required", 400);
    }

    // Simulate database save or external API call delay
    await simulateDelay();

    console.log("New Newsletter Subscription:", data.email);

    return createSuccessResponse("Subscription successful!");
  } catch (error) {
    console.error("Newsletter API Error:", error);
    return createErrorResponse("Failed to subscribe.", 500);
  }
}
