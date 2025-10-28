"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { Shield, Eye, EyeOff, Loader2, AlertCircle } from "lucide-react";

export default function AdminLoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  // Enhanced logging function
  const logLoginError = (context, error, extraData = {}) => {
    const errorLog = {
      timestamp: new Date().toISOString(),
      context,
      error: {
        message: error.message,
        name: error.name,
        stack: error.stack,
        code: error.code,
      },
      userData: {
        email: username,
      },
      extraData,
      userAgent: navigator?.userAgent,
      url: window?.location.href,
    };

    console.error("🚨 LOGIN ERROR:", errorLog);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    // Enhanced validation
    if (!username.trim() || !password.trim()) {
      const missingFields = [];
      if (!username.trim()) missingFields.push('username');
      if (!password.trim()) missingFields.push('password');
      
      setError(`Please enter ${missingFields.join(' and ')}`);
      setIsLoading(false);
      return;
    }

    // Validate email format if it looks like an email
    if (username.includes('@')) {
      const emailRegex = /^\S+@\S+\.\S+$/;
      if (!emailRegex.test(username)) {
        setError("Please enter a valid email address");
        setIsLoading(false);
        return;
      }
    }

    try {
      // Prepare payload for API
      const payload = {
        email: username.trim().toLowerCase(),
        password: password.trim(),
      };

      console.log("📤 Sending login payload for:", payload.email);

      // Make API call to /api/login with enhanced configuration
      const response = await axios.post("/api/login", payload, {
        headers: {
          "Content-Type": "application/json",
        },
        timeout: 30000, // 30 seconds timeout
        validateStatus: (status) => status < 500, // Don't throw on 4xx errors
      });

      console.log("✅ API login response received:", {
        status: response.status,
        statusCode: response.data?.statusCode,
        hasData: !!response.data
      });

      const result = response.data;

      if (result.statusCode === "00" && result.data) {
        // Store admin session in localStorage
        const adminSession = {
          isAuthenticated: true,
          loginTime: new Date().toISOString(),
          username: result.data.username || username,
          email: result.data.email || username,
          token: result.data.token || result.data.access_token,
          userData: result.data, // Store entire user data for future use
          requestId: result.requestId, // Store request ID for debugging
        };

        localStorage.setItem("tradfit_admin_session", JSON.stringify(adminSession));
        
        // Also store token separately for easy access
        if (result.data.token || result.data.access_token) {
          localStorage.setItem("admin_token", result.data.token || result.data.access_token);
        }

        console.log("🎉 Admin login successful, redirecting to dashboard...");
        
        // Redirect to admin dashboard
        router.push("/admin/tradfit");
      } else {
        const errorMsg = result.message || "Invalid username or password. Please try again.";
        logLoginError("API returned error status", new Error(errorMsg), { 
          apiResponse: result,
          statusCode: result.statusCode 
        });
        setError(errorMsg);
        setIsLoading(false);
      }
    } catch (error) {
      // Enhanced error handling with detailed logging
      let errorMessage = "An error occurred during login. Please try again later.";
      let errorContext = "unknown_login_error";

      if (axios.isAxiosError(error)) {
        if (error.code === 'ECONNABORTED') {
          errorMessage = "Login timeout. Please check your connection and try again.";
          errorContext = "login_timeout";
        } else if (error.response) {
          // Server responded with error status
          const status = error.response.status;
          errorContext = `login_http_${status}`;
          
          switch (status) {
            case 400:
              errorMessage = error.response.data?.message || "Invalid login data. Please check your information.";
              break;
            case 401:
              errorMessage = "Invalid username or password. Please try again.";
              break;
            case 403:
              errorMessage = "Access denied. Your account may be restricted.";
              break;
            case 404:
              errorMessage = "Account not found. Please check your username/email.";
              break;
            case 408:
              errorMessage = "Login timeout. Please try again.";
              break;
            case 423:
              errorMessage = "Account temporarily locked. Please try again later or contact support.";
              break;
            case 429:
              errorMessage = "Too many login attempts. Please wait a moment.";
              break;
            case 500:
              errorMessage = "Server error during login. Our team has been notified.";
              break;
            case 503:
              errorMessage = "Authentication service unavailable. Please try again later.";
              break;
            default:
              errorMessage = error.response.data?.message || `Login error (${status}). Please try again.`;
          }
        } else if (error.request) {
          // Request made but no response received
          errorContext = "login_network_error";
          errorMessage = "Network error. Please check your internet connection and try again.";
        }
      } else if (error instanceof Error) {
        errorContext = "login_client_error";
        errorMessage = error.message || "An unexpected error occurred during login.";
      }

      logLoginError(errorContext, error, {
        axiosError: axios.isAxiosError(error),
        responseStatus: error.response?.status,
        responseData: error.response?.data,
        requestId: error.response?.data?.requestId
      });

      setError(errorMessage);
      setIsLoading(false);
    }
  };

  const clearError = () => {
    if (error) setError("");
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
                  clearError();
                }}
                className="w-full border border-[#C90A1D]/30 focus:border-[#C90A1D] rounded-md p-3 focus:outline-none transition-all duration-300 focus:ring-2 focus:ring-[#C90A1D]/20 disabled:opacity-50 disabled:cursor-not-allowed"
                required
                disabled={isLoading}
                aria-label="Username or email input"
                aria-describedby="username-error"
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
                    clearError();
                  }}
                  className="w-full border border-[#C90A1D]/30 focus:border-[#C90A1D] rounded-md p-3 pr-12 focus:outline-none transition-all duration-300 focus:ring-2 focus:ring-[#C90A1D]/20 disabled:opacity-50 disabled:cursor-not-allowed"
                  required
                  disabled={isLoading}
                  aria-label="Password input"
                  aria-describedby="password-error"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  disabled={isLoading}
                  className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-[#C90A1D]/10 rounded-r-md transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
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

            {/* Enhanced Error Display */}
            {error && (
              <div 
                className="bg-red-50 border border-red-200 rounded-md p-4 transition-all duration-300"
                role="alert"
                aria-live="polite"
              >
                <div className="flex items-start">
                  <AlertCircle className="h-5 w-5 text-red-400 mt-0.5 flex-shrink-0" />
                  <div className="ml-3">
                    <h3 className="text-sm font-medium text-red-800">Login Error</h3>
                    <p className="text-sm text-red-700 mt-1">{error}</p>
                    {/* <p className="text-xs text-red-600 mt-2">
                      If this continues, please check the browser console for details.
                    </p> */}
                  </div>
                </div>
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

          {/* Debug info for development */}
          {process.env.NODE_ENV === 'development' && error && (
            <div className="mt-4 p-3 bg-gray-100 rounded-md">
              <p className="text-xs text-gray-600">
                {/* <strong>Debug Info:</strong> Check browser console for detailed error logs. */}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}