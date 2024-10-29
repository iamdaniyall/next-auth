"use client";

import axios from "axios";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = async () => {
    try {
      setIsLoading(true)
      const response = await axios.post("/api/login", { email, password });
      console.log(response);
      if (response.data.success) {
        localStorage.setItem("userData", JSON.stringify(response.data.user));
        router.push("/dashboard"); 
      } else {
      setIsLoading(false)
        alert(response.data.message);
      }
    } catch (error) {
      setIsLoading(false)
      console.error("Login error:", error);
      alert("Login failed");
    }
  };
  
  if (isLoading) return <p>Loading...</p>;


  return (
    <div>
      <h1>Login</h1>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
      <button onClick={() => signIn("google",{ callbackUrl: "/dashboard" })}>Sign in with Google</button>
      <Link href="/register">Register</Link>

    </div>
  );
};

export default LoginPage;
