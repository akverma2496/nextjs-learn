import { NextResponse } from "next/server";

export async function GET() {
  console.log('API was called');
  const response = await fetch("https://dummyjson.com/products")
  const products = await response.json()
  return NextResponse.json(products)
}