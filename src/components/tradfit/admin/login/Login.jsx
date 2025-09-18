"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
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

    // Simple admin credentials (in production, this would be handled securely)
    const adminCredentials = {
      username: "tradfit_admin",
      password: "TradFit2024!",
    };

    // Simulate API call delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    if (username === adminCredentials.username && password === adminCredentials.password) {
      // Set admin session in localStorage
      localStorage.setItem(
        "tradfit_admin_session",
        JSON.stringify({
          isAuthenticated: true,
          loginTime: new Date().toISOString(),
          username: username,
        })
      );

      router.push("/tradfit/admin");
    } else {
      setError("Invalid username or password. Please try again.");
    }

    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#C90A1D]/10 to-white flex items-center justify-center pt-28 pb-10 px-4">
      <div className="w-full max-w-md border border-[#C90A1D]/30 rounded-lg bg-white shadow-lg">
        <div className="text-center p-6">
          <div className="mx-auto w-16 h-16 bg-[#C90A1D]/10 rounded-full flex items-center justify-center mb-4">
            <Shield className="w-8 h-8 text-[#C90A1D]" aria-label="Shield icon" />
          </div>
          <h2 className="text-2xl font-bold text-[#C90A1D]">Admin Login</h2>
          <p className="text-[#C90A1D]/80">Access the TRADFIT RHYTHMS admin dashboard</p>
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
                    <EyeOff className="h-4 w-4 text-[#C90A1D]" aria-label="Eye off icon" />
                  ) : (
                    <Eye className="h-4 w-4 text-[#C90A1D]" aria-label="Eye icon" />
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

          <div className="mt-6 p-4 bg-[#C90A1D]/5 rounded-lg border border-[#C90A1D]/30">
            <h4 className="font-semibold text-[#C90A1D] mb-2">Demo Credentials:</h4>
            <p className="text-sm text-[#C90A1D]/80">
              <strong>Username:</strong> tradfit_admin
              <br />
              <strong>Password:</strong> TradFit2024!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}