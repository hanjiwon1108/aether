import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const data = await request.json();

    if (!data.name || !data.email || !data.message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 },
      );
    }

    // Simulate database save or email sending delay
    await new Promise((resolve) => setTimeout(resolve, 800));

    // Logging the data as a placeholder for real backend logic like Resend/DB
    console.log("Contact Submitter:", data.name);
    console.log("Contact Email:", data.email);
    console.log("Message:", data.message);

    return NextResponse.json(
      { success: true, message: "Message sent successfully!" },
      { status: 200 },
    );
  } catch (error) {
    console.error("Contact API Error:", error);
    return NextResponse.json(
      { error: "Failed to send message." },
      { status: 500 },
    );
  }
}
