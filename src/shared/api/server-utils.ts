import { NextResponse } from "next/server";

export async function simulateDelay(ms: number = 800) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export function createSuccessResponse(message: string, data?: any, status: number = 200) {
  return NextResponse.json({ success: true, message, ...data }, { status });
}

export function createErrorResponse(error: string, status: number = 500) {
  return NextResponse.json({ error }, { status });
}
