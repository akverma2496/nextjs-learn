import { jwtVerify, SignJWT } from "jose";

// let secretKey = "abc012xyz"

const secretKey = new TextEncoder().encode("abc012xyz");
export async function signToken(payload){
    return await new SignJWT(payload).setProtectedHeader({alg : "HS256"}).setExpirationTime("1h").sign(secretKey)
}

export async function verifyToken(token){
    try {
        const {payload} = await jwtVerify(token, secretKey)
        return payload
    } catch (error) {
        return null
    }
}