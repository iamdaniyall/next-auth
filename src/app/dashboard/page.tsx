"use client";

import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const DashboardPage = () => {
  const { data: session, status } = useSession();
  const router = useRouter();
const userData = localStorage.getItem("userData") ?? ""
const user = userData ? JSON.parse(userData) : ''
  useEffect(() => {
    if (status === "unauthenticated" && !user) {
      router.push("/");  // Redirect to home if not logged in
    }
  }, [status, router]);
  console.log({session,status});
  if (status === "loading") return <p>Loading...</p>;

  const handleLogout = () => {
    localStorage.removeItem("userData"); 
    signOut()
    router.push("/"); 
  };

  return (
    <div>
      <h1>Welcome, {session?.user?.name ?? user?.email}</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default DashboardPage;
