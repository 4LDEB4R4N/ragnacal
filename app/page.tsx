'use client'
import { useState } from "react";

export default function Page() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {

    e.preventDefault()

    const res = await fetch('/api/register', {
      method: 'POST',
      body: JSON.stringify({email, password})
    })

    console.log(res)

  }

  return (
    <>
      <form className="flex flex-col gap-4 justify-center w-1/4 m-4 p-2" onSubmit={handleSubmit}>
        <input type="email" className="text-black " name="email" onChange={e=>setEmail(e.target.value)} />
        <input type="password" className="text-black " name="password" onChange={e=>setPassword(e.target.value)} />
        <button type="submit">Submit</button>
      </form>
    </>
  )
}