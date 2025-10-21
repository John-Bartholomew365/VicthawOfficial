"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { Shield, Eye, EyeOff, Loader2 } from "lucide-react";

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

    // Basic validation
    if (!username.trim() || !password.trim()) {
      setError("Please enter both username and password");
      setIsLoading(false);
      return;
    }

    try {
      // Prepare payload for API
      const payload = {
        email: username.trim().toLowerCase(),
        password: password.trim(),
      };

      console.log("Sending login payload:", payload);

      // Make API call to /api/login
      const response = await axios.post("/api/login", payload, {
        headers: {
          "Content-Type": "application/json",
        },
        // timeout: 15000, // 15 second timeout
      });

      const result = response.data;
      console.log("API response:", result);

      if (result.statusCode === "00" && result.data) {
        // Store admin session in localStorage
        const adminSession = {
          isAuthenticated: true,
          loginTime: new Date().toISOString(),
          username: result.data.username || username,
          email: result.data.email || username,
          token: result.data.token || result.data.access_token,
          userData: result.data, // Store entire user data for future use
        };

        localStorage.setItem("tradfit_admin_session", JSON.stringify(adminSession));
        
        // Also store token separately for easy access
        if (result.data.token || result.data.access_token) {
          localStorage.setItem("admin_token", result.data.token || result.data.access_token);
        }

        console.log("Admin login successful, redirecting...");
        
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

      let errorMessage = "An error occurred. Please try again later.";
      
      if (error.response?.status === 401) {
        errorMessage = "Invalid username or password.";
      } else if (error.response?.status === 404) {
        errorMessage = "User not found.";
      } else if (error.code === 'NETWORK_ERROR' || error.message.includes('Network Error')) {
        errorMessage = "Network error. Please check your connection.";
      } else if (error.response?.data?.message) {
        errorMessage = error.response.data.message;
      }

      setError(errorMessage);
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#C90A1D]/10 to-white flex items-center justify-center pt-28 pb-10 px-4">
      <div className="w-full max-w-md border border-[#C90A1D]/30 rounded-lg bg-white shadow-lg transition-all duration-300 hover:shadow-xl">
        <div className="text-center p-6">
          <div className="mx-auto w-16 h-16 bg-[#C90A1D]/10 rounded-full flex items-center justify-center mb-4 transition-all duration-300 hover:bg-[#C90A1D]/20">
            <Shield
              className="w-8 h-8 text-[#C90A1D] transition-transform duration-300 hover:scale-110"
              aria-label="Admin Shield Icon"
            />
          </div>
          <h2 className="text-2xl font-bold text-[#C90A1D] mb-2">Admin Login</h2>
          <p className="text-[#C90A1D]/80 text-sm">
            Access the TRADFIT RHYTHMS admin dashboard
          </p>
        </div>
        
        <div className="p-6 pt-0">
          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="username" className="text-[#C90A1D] font-medium block text-sm">
                Username / Email
              </label>
              <input
                id="username"
                type="text"
                placeholder="Enter admin username or email"
                value={username}
                onChange={(e) => {
                  setUsername(e.target.value);
                  if (error) setError("");
                }}
                className="w-full border border-[#C90A1D]/30 focus:border-[#C90A1D] rounded-md p-3 focus:outline-none transition-all duration-300 focus:ring-2 focus:ring-[#C90A1D]/20"
                required
                disabled={isLoading}
                aria-label="Username or email input"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="password" className="text-[#C90A1D] font-medium block text-sm">
                Password
              </label>
              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter admin password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    if (error) setError("");
                  }}
                  className="w-full border border-[#C90A1D]/30 focus:border-[#C90A1D] rounded-md p-3 pr-12 focus:outline-none transition-all duration-300 focus:ring-2 focus:ring-[#C90A1D]/20"
                  required
                  disabled={isLoading}
                  aria-label="Password input"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  disabled={isLoading}
                  className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-[#C90A1D]/10 rounded-r-md transition-colors duration-200 disabled:opacity-50"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? (
                    <EyeOff
                      className="h-5 w-5 text-[#C90A1D]"
                      aria-label="Hide password icon"
                    />
                  ) : (
                    <Eye
                      className="h-5 w-5 text-[#C90A1D]"
                      aria-label="Show password icon"
                    />
                  )}
                </button>
              </div>
            </div>

            {error && (
              <div 
                className="bg-red-50 border border-red-200 rounded-md p-3 transition-all duration-300"
                role="alert"
                aria-live="polite"
              >
                <p className="text-red-800 text-sm font-medium">{error}</p>
              </div>
            )}

            <button
              type="submit"
              disabled={isLoading || !username.trim() || !password.trim()}
              className="w-full bg-[#C90A1D] hover:bg-[#A30818] text-white rounded-md py-3 font-semibold transition-all duration-300 transform hover:scale-[1.02] disabled:bg-[#C90A1D]/50 disabled:transform-none disabled:cursor-not-allowed flex items-center justify-center gap-2"
              aria-label={isLoading ? "Signing in..." : "Sign in"}
            >
              {isLoading ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" aria-label="Loading spinner" />
                  Signing in...
                </>
              ) : (
                "Sign In"
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}