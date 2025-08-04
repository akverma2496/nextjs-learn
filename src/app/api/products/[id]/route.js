import { NextResponse } from "next/server";

export async function GET(request, {params}) {
    const {id} = params
  const response = await fetch(`https://dummyjson.com/products/${id}`)
  const product = await response.json()
  return NextResponse.json(product)
}