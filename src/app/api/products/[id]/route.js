import { NextResponse } from "next/server";

export async function GET(request, {params}) {
    const {id} = params
  const response = await fetch(`https://dummyjson.com/products/${id}`, {cache: "force-cache",
    next: {revalidate : 3200}
  })
  const product = await response.json()
  return NextResponse.json(product)
}