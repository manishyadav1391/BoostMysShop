"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLoginPage() {
  const router = useRouter();

  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();

    setLoading(true);
    setError("");

    const res = await fetch("/api/admin/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ password }),
    });

    const data = await res.json();

    setLoading(false);

    if (!res.ok) {
      setError(data.error || "Login failed");
      return;
    }

    router.push("/admin");
    router.refresh();
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100 px-5">
      <form
        onSubmit={handleLogin}
        className="bg-white w-full max-w-md rounded-3xl shadow-xl border p-8"
      >
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-black mb-2">
            Admin Login
          </h1>

          <p className="text-gray-500">
            Enter password to access dashboard.
          </p>
        </div>

        {error && (
          <div className="mb-4 bg-red-50 text-red-600 border border-red-200 rounded-xl p-3 text-sm">
            {error}
          </div>
        )}

        <label className="block mb-2 font-semibold">
          Password
        </label>

        <input
          type="password"
          value={password}
          placeholder="Enter admin password"
          onChange={(e) => setPassword(e.target.value)}
          className="w-full border rounded-xl px-4 py-3 mb-6 outline-none focus:ring-2 focus:ring-black"
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-black text-white py-4 rounded-xl font-semibold disabled:opacity-60"
        >
          {loading ? "Checking..." : "Login"}
        </button>
      </form>
    </main>
  );
}