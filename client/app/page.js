"use client";

import Image from "next/image";
import styles from "./page.module.css";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/auth";
import Layout from "@/components/Layout";

export default function Home() {
  const router = useRouter();
  const [auth, setAuth] = useAuth();
  return (
    <>
      <Layout>
        <button
          onClick={(e) => {
            router.push("/login", { scroll: false });
          }}
        >
          Login
        </button>

        <p>_id: {auth?.user?._id} </p>
        <p>username: {auth?.user?.username} </p>
        <p>email: {auth?.user?.email} </p>
        <p>token:{auth?.token}</p>
      </Layout>
    </>
  );
}
