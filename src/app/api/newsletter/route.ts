import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const data = await request.json();

    if (!data.email) {
      return NextResponse.json(
        { error: "Email is required" },
        { status: 400 },
      );
    }

    // Simulate database save or external API call delay
    await new Promise((resolve) => setTimeout(resolve, 800));

    console.log("New Newsletter Subscription:", data.email);

    return NextResponse.json(
      { success: true, message: "Subscription successful!" },
      { status: 200 },
    );
  } catch (error) {
    console.error("Newsletter API Error:", error);
    return NextResponse.json(
      { error: "Failed to subscribe." },
      { status: 500 },
    );
  }
}
