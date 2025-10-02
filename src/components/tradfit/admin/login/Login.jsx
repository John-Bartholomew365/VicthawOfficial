"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios"; // Import axios
import { Shield, Eye, EyeOff } from "lucide-react";

export default function AdminLoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      // Prepare payload for API
      const payload = {
        email: username, // Using username as email, as per API payload
        password,
      };

      console.log("Sending login payload:", payload); // Log payload for debugging

      // Make API call to /api/tradfit/login
      const response = await axios.post("/api/login", payload, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      const result = response.data;
      console.log("API response:", result); // Log response for debugging

      if (result.statusCode === "00") {
        // Store admin session in localStorage
        localStorage.setItem(
          "tradfit_admin_session",
          JSON.stringify({
            isAuthenticated: true,
            loginTime: new Date().toISOString(),
            username: result.data.username || username, // Use API-provided username if available
            token: result.data.token, // Store token for future API calls
          })
        );

        // Redirect to admin dashboard
        router.push("/admin/tradfit");
      } else {
        setError(
          result.message || "Invalid username or password. Please try again."
        );
        setIsLoading(false);
      }
    } catch (error) {
      console.error("Login error:", {
        message: error.message,
        response: error.response?.data,
        status: error.response?.status,
      });
      setError(
        error.response?.data?.message ||
          "An error occurred. Please try again later."
      );
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#C90A1D]/10 to-white flex items-center justify-center pt-28 pb-10 px-4">
      <div className="w-full max-w-md border border-[#C90A1D]/30 rounded-lg bg-white shadow-lg">
        <div className="text-center p-6">
          <div className="mx-auto w-16 h-16 bg-[#C90A1D]/10 rounded-full flex items-center justify-center mb-4">
            <Shield
              className="w-8 h-8 text-[#C90A1D]"
              aria-label="Shield icon"
            />
          </div>
          <h2 className="text-2xl font-bold text-[#C90A1D]">Admin Login</h2>
          <p className="text-[#C90A1D]/80">
            Access the TRADFIT RHYTHMS admin dashboard
          </p>
        </div>
        <div className="p-6">
          <form onSubmit={handleLogin} className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="username" className="text-[#C90A1D] font-medium">
                Username
              </label>
              <input
                id="username"
                type="text"
                placeholder="Enter admin username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full border border-[#C90A1D]/30 focus:border-[#C90A1D] rounded-md p-2 focus:outline-none"
                required
                aria-label="Username"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="password" className="text-[#C90A1D] font-medium">
                Password
              </label>
              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter admin password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full border border-[#C90A1D]/30 focus:border-[#C90A1D] rounded-md p-2 pr-10 focus:outline-none"
                  required
                  aria-label="Password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-[#C90A1D]/10 rounded-r-md"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? (
                    <EyeOff
                      className="h-4 w-4 text-[#C90A1D]"
                      aria-label="Eye off icon"
                    />
                  ) : (
                    <Eye
                      className="h-4 w-4 text-[#C90A1D]"
                      aria-label="Eye icon"
                    />
                  )}
                </button>
              </div>
            </div>

            {error && (
              <div className="bg-red-50 border border-red-200 rounded-md p-3">
                <p className="text-red-800 text-sm">{error}</p>
              </div>
            )}

            <button
              type="submit"
              className="w-full bg-[#C90A1D] hover:bg-[#A30818] text-white rounded-md py-3 font-semibold disabled:bg-[#C90A1D]/50"
              disabled={isLoading}
              aria-label="Sign in"
            >
              {isLoading ? "Signing in..." : "Sign In"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
