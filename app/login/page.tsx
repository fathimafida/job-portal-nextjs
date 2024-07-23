"use client";
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

const LoginPage = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  return (
    <div className="flex h-screen">
    
      <div className="flex flex-col w-1/2 justify-center items-center bg-gray-100">
        <div className="text-center p-4">
         <h1>Hello ,get Start with glassdoor</h1>
          <h1 className="text-xl font-bold text-green-300">Welcome Back!!</h1>
          <p className="text-black text-sm">
            Enter your details to start searching for your dream job on this job.
          </p>
        </div>
        <form
          id="loginForm"
          onSubmit={async (e) => {
            e.preventDefault();
            const email = e.target.email.value;
            const password = e.target.password.value;

            try {
              setLoading(true);
              const resp = await fetch("https://job.kunjappu.online/api/login", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                  Accept: "application/json",
                },
                body: JSON.stringify({
                  email: email,
                  password: password,
                }),
              });

              if (resp.ok) {
                setLoading(false);
                router.push("/");
              } else {
                alert("Invalid credentials");
              }
            } catch (error) {
              setLoading(false);
              alert("Something went wrong");
              console.log(error);
            }
          }} 
          className="flex flex-col gap-2 p-4"
        >
          <label className="font-bold text-black">Email</label>
          <input
            name="email"
            className="text-black border rounded-md p-1"
            type="text"
            placeholder="Enter your email"
          />

          <label className="font-bold text-black">Password</label>
          <input
            name="password"
            className="text-black border rounded-md p-1"
            type="password"
            placeholder="Enter your password"
          />

          <button
            form="loginForm"
            className="text-black border bg-green-500 rounded-md p-1"
          >
            Login
          </button>
        </form>
      </div>

      
      <div className="flex w-1/2 items-center justify-center">
        <div className="w-full h-full relative">
          <Image
            src="/loginBg.jpg"
            alt="Background Image"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
