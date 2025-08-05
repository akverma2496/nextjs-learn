"use client"

import { useRouter } from "next/navigation"
import { useState } from "react"

export default function Login(){
    const [formValues, setFormValues] = useState({email: "", password: ""})
    const router = useRouter()

    const onSubmitHandler = async (e) => {
        e.prevenDefault()

        const res = await fetch("/api/login", {
            method: "POST",
            body: JSON.stringify({email: formValues.email, password: formValues.password}),
            headers: {
                "Content-Type": "application/json"
            }
        })

        if(res.ok){
            router.push("/dashboard")
        }
        else{
            alert("Login Failed!!!")
        }
    }

    return <div>
        <form onSubmit={onSubmitHandler}>
            <label>Email</label>
            <input type="text" value={formValues.email} 
            onChange={(e) => setFormValues({...formValues, email: e.target.value})}/>

            <label>Password</label>
            <input type="password" value={formValues.password} 
            onChange={(e) => setFormValues({...formValues, password: e.target.value})}/>

            <button type="submit">Login</button>
        </form>
    </div>
}
