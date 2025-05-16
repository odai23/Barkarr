"use client";

import { useRouter } from "next/navigation";

export default function ProductsPage() {
  const router = useRouter();

  return (
    <div style={{ padding: "100px", textAlign: "center" }}>
      <h1>🚧 Coming Soon</h1>
      <p>We’re working hard to bring our products online. Stay tuned!</p>

      <button
        onClick={() => router.push("/")}
        style={{
          marginTop: "30px",
          padding: "10px 20px",
          fontSize: "16px",
          backgroundColor: "black",
          color: "white",
          border: "1px solid white",
          cursor: "pointer",
          borderRadius: "6px",
        }}>
        ⬅ Back to Home
      </button>
    </div>
  );
}
