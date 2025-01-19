import { NextResponse } from 'next/server';
import { auth } from "~/auth"

export type ApiContext<T = Record<string, string>> = {
  params: T;
};

export async function withAuth<T = Record<string, string>>(
  handler: (session: any, context: ApiContext<T>) => Promise<Response>,
  context: Partial<ApiContext<T>> = { params: {} as T }
) {
  try {
    const session = await auth();
    if (!session) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }
    return await handler(session, context as ApiContext<T>);
  } catch (error) {
    console.error("Error occurred:", error);
    return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
  }
}

export async function makeApiRequest(url: string, options: RequestInit = {}) {
  // Ensure URL is valid
  try {
    new URL(url);
  } catch (e) {
    const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://www.astrobirb.dev';
    url = `${baseUrl}${url.startsWith('/') ? url : `/${url}`}`;
  }

  console.log("Debug - makeApiRequest called with:", {
    url,
    method: options.method || 'GET'
  });

  const response = await fetch(url, {
    ...options,
    credentials: 'same-origin',
    headers: {
      "Content-Type": "application/json",
      ...options.headers
    }
  });

  if (!response.ok) {
    console.error("Debug - API request failed:", {
      status: response.status,
      statusText: response.statusText,
      url: url
    });
    throw new Error(`API request failed with status ${response.status}`);
  }

  return response.json();
}
