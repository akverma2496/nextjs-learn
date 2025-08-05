"use client"

import { useRouter } from "next/navigation"

export default function Dashboard() {

    const router = useRouter()

    const logoutHandler = async (e) => {
        e.preventDefault()
        let res = await fetch("/api/logout", {
            method: "POST"
        })

        if(res.ok){
            router.push("/login")
        }
        else{
            alert("Error Logging Out")
        }

    }

     
    return <>
    <h1>This is the dashboard</h1>
    <button onClick={logoutHandler}>Logout</button>
    </>
}