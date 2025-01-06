"use client";
import React, { useEffect } from 'react';
import { useRouter } from "next/navigation"; //import from next navigation
import Loading from '@/app/loading/page';



export default function Logout() {
  const router = useRouter();

  useEffect(() => {
    // Clear session data (example: remove token)
    localStorage.removeItem('token'); // Remove the token from localStorage
    sessionStorage.clear(); // Optionally clear sessionStorage

    // Redirect to login page
    router.push('/login'); // Redirect to login or home page
  }, []);

  return (
    <div>
      <h2>Logging you out...</h2>
      <Loading />
     
    </div>
  );
}

