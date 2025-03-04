"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { backend } from "@/http/api";

const MainPage = () => {
  const [users, setUsers] = useState([]);
  const [products, setProducts] = useState([]);
  const [loadingUsers, setLoadingUsers] = useState(true);
  const [loadingProducts, setLoadingProducts] = useState(true);
  const router = useRouter();

  useEffect(() => {}, [router]);

  return (
    <div className="h-screen bg-slate-900 text-white">
      <div className="p-6 space-y-6">
        <header className="flex justify-between items-center">
          <h1 className="text-3xl font-bold">Admin Dashboard</h1>
        </header>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          <div className="bg-slate-800 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold">Umumiy Arizalar</h2>
            <p className="text-3xl font-bold mt-2">{users.length}</p>
          </div>
          <div className="bg-slate-800 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold">Javob Berilganlar</h2>
            <p className="text-3xl font-bold mt-2">{products.length}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
