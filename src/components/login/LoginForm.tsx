import { useState } from "react";
import { Eye, EyeOff, LockKeyhole, Mail } from "lucide-react";
import { Link } from "react-router-dom";

function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <section className="bg-[#F0EDED] py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-5 md:px-16">
        <div className="mx-auto max-w-md">
          <div className="rounded-[24px] border border-[#DBC18D] bg-white p-6 shadow-[0_8px_32px_rgba(90,0,0,0.06)] sm:p-8">
            {/* Form Header */}
            <div className="text-center">
              <h2 className="font-serif text-2xl font-bold text-[#570000]">
                Sign In
              </h2>

              <p className="mt-2 text-sm text-[#5A413D]">
                Enter your details to continue
              </p>
            </div>

            {/* Login Form */}
            <form
              className="mt-8 space-y-5"
              onSubmit={(event) => {
                event.preventDefault();
              }}
            >
              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-semibold text-[#3F302D]"
                >
                  Email Address
                </label>

                <div className="relative">
                  <Mail
                    size={19}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-[#775A19]"
                  />

                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                    autoComplete="email"
                    required
                    className="w-full rounded-xl border border-[#D8CFC8] bg-[#FDFBF7] py-3 pl-11 pr-4 text-sm text-[#1C1B1B] outline-none transition placeholder:text-[#9A8C87] focus:border-[#570000] focus:ring-2 focus:ring-[#570000]/10"
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <div className="mb-2 flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="block text-sm font-semibold text-[#3F302D]"
                  >
                    Password
                  </label>

                  <Link
                    to="/forgot-password"
                    className="text-xs font-semibold text-[#570000] hover:underline"
                  >
                    Forgot Password?
                  </Link>
                </div>

                <div className="relative">
                  <LockKeyhole
                    size={19}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-[#775A19]"
                  />

                  <input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    autoComplete="current-password"
                    required
                    className="w-full rounded-xl border border-[#D8CFC8] bg-[#FDFBF7] py-3 pl-11 pr-12 text-sm text-[#1C1B1B] outline-none transition placeholder:text-[#9A8C87] focus:border-[#570000] focus:ring-2 focus:ring-[#570000]/10"
                  />

                  <button
                    type="button"
                    aria-label={
                      showPassword ? "Hide password" : "Show password"
                    }
                    onClick={() => setShowPassword((previous) => !previous)}
                    className="absolute right-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-lg text-[#775A19] transition hover:bg-[#F0EDED] hover:text-[#570000]"
                  >
                    {showPassword ? (
                      <EyeOff size={19} />
                    ) : (
                      <Eye size={19} />
                    )}
                  </button>
                </div>
              </div>

              {/* Remember Me */}
              <div className="flex items-center gap-2">
                <input
                  id="remember"
                  name="remember"
                  type="checkbox"
                  className="h-4 w-4 accent-[#570000]"
                />

                <label
                  htmlFor="remember"
                  className="text-sm text-[#5A413D]"
                >
                  Remember me
                </label>
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full rounded-full bg-[#570000] px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-[#5A0000] hover:shadow-md"
              >
                Sign In
              </button>
            </form>

            {/* Register */}
            <div className="mt-7 border-t border-[#E5DDD6] pt-6 text-center">
              <p className="text-sm text-[#5A413D]">
                Don't have an account?{" "}
                <Link
                  to="/register"
                  className="font-semibold text-[#570000] hover:underline"
                >
                  Create an account
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LoginForm;