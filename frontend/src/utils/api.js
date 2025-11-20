// src/utils/api.js
export async function apiFetch(endpoint, options = {}) {
  const token = localStorage.getItem("token")

  const headers = {
    ...(options.headers || {}),
    "Content-Type": "application/json",
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
  }

  const res = await fetch(`${import.meta.env.VITE_API_URL}${endpoint}`, {
    ...options,
    headers,
  })

  // Handle non-OK responses gracefully
  if (!res.ok) {
    const errorData = await res.json().catch(() => ({}))
    throw new Error(errorData.error || errorData.message || "API request failed")
  }

  return res.json()
}
