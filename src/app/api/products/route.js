import { NextResponse } from "next/server";

export async function GET() {
  console.log('API was called');
  const response = await fetch("https://dummyjson.com/products", {cache: "force-cache",
    next: {revalidate : 3200}
  })
  const products = await response.json()
  return NextResponse.json(products)
}