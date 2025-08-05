import { NextResponse } from "next/server"
import { verifyToken } from "./lib/auth"


export async function middleware(req){
    console.log("i am invoked")
    const token = req.cookies.get("token");
    console.log(token)
    const user = token ? await verifyToken(token) : null
    console.log(user)

    if(!user){
        return NextResponse.redirect(new URL("/login", req.url))
    }

    return NextResponse.next()
}

export const config = {
    matcher : "dashboard/:path*"
}