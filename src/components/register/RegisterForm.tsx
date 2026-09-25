import { useState } from "react";
import {
  Eye,
  EyeOff,
  LockKeyhole,
  Mail,
  Phone,
  User,
} from "lucide-react";
import { Link } from "react-router-dom";

function RegisterForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <section className="bg-[#F0EDED] py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-5 md:px-16">
        <div className="mx-auto max-w-lg">
          <div className="rounded-[24px] border border-[#DBC18D] bg-white p-6 shadow-[0_8px_32px_rgba(90,0,0,0.06)] sm:p-8">
            {/* Form Header */}
            <div className="text-center">
              <h2 className="font-serif text-2xl font-bold text-[#570000]">
                Create Account
              </h2>

              <p className="mt-2 text-sm text-[#5A413D]">
                Join the Telangana Folk Songs community
              </p>
            </div>

            {/* Registration Form */}
            <form
              className="mt-8 space-y-5"
              onSubmit={(event) => {
                event.preventDefault();
              }}
            >
              {/* Full Name */}
              <div>
                <label
                  htmlFor="fullName"
                  className="mb-2 block text-sm font-semibold text-[#3F302D]"
                >
                  Full Name
                </label>

                <div className="relative">
                  <User
                    size={19}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-[#775A19]"
                  />

                  <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    placeholder="Enter your full name"
                    autoComplete="name"
                    required
                    className="w-full rounded-xl border border-[#D8CFC8] bg-[#FDFBF7] py-3 pl-11 pr-4 text-sm text-[#1C1B1B] outline-none transition placeholder:text-[#9A8C87] focus:border-[#570000] focus:ring-2 focus:ring-[#570000]/10"
                  />
                </div>
              </div>

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

              {/* Mobile Number */}
              <div>
                <label
                  htmlFor="mobile"
                  className="mb-2 block text-sm font-semibold text-[#3F302D]"
                >
                  Mobile Number
                </label>

                <div className="relative">
                  <Phone
                    size={19}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-[#775A19]"
                  />

                  <input
                    id="mobile"
                    name="mobile"
                    type="tel"
                    placeholder="Enter your mobile number"
                    autoComplete="tel"
                    inputMode="tel"
                    required
                    className="w-full rounded-xl border border-[#D8CFC8] bg-[#FDFBF7] py-3 pl-11 pr-4 text-sm text-[#1C1B1B] outline-none transition placeholder:text-[#9A8C87] focus:border-[#570000] focus:ring-2 focus:ring-[#570000]/10"
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <label
                  htmlFor="password"
                  className="mb-2 block text-sm font-semibold text-[#3F302D]"
                >
                  Password
                </label>

                <div className="relative">
                  <LockKeyhole
                    size={19}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-[#775A19]"
                  />

                  <input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Create a password"
                    autoComplete="new-password"
                    required
                    minLength={8}
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

                <p className="mt-2 text-xs text-[#806F69]">
                  Password must contain at least 8 characters.
                </p>
              </div>

              {/* Confirm Password */}
              <div>
                <label
                  htmlFor="confirmPassword"
                  className="mb-2 block text-sm font-semibold text-[#3F302D]"
                >
                  Confirm Password
                </label>

                <div className="relative">
                  <LockKeyhole
                    size={19}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-[#775A19]"
                  />

                  <input
                    id="confirmPassword"
                    name="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Confirm your password"
                    autoComplete="new-password"
                    required
                    minLength={8}
                    className="w-full rounded-xl border border-[#D8CFC8] bg-[#FDFBF7] py-3 pl-11 pr-12 text-sm text-[#1C1B1B] outline-none transition placeholder:text-[#9A8C87] focus:border-[#570000] focus:ring-2 focus:ring-[#570000]/10"
                  />

                  <button
                    type="button"
                    aria-label={
                      showConfirmPassword
                        ? "Hide confirm password"
                        : "Show confirm password"
                    }
                    onClick={() =>
                      setShowConfirmPassword((previous) => !previous)
                    }
                    className="absolute right-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-lg text-[#775A19] transition hover:bg-[#F0EDED] hover:text-[#570000]"
                  >
                    {showConfirmPassword ? (
                      <EyeOff size={19} />
                    ) : (
                      <Eye size={19} />
                    )}
                  </button>
                </div>
              </div>

              {/* Terms */}
              <div className="flex items-start gap-3">
                <input
                  id="terms"
                  name="terms"
                  type="checkbox"
                  required
                  className="mt-1 h-4 w-4 shrink-0 accent-[#570000]"
                />

                <label
                  htmlFor="terms"
                  className="text-sm leading-6 text-[#5A413D]"
                >
                  I agree to the{" "}
                  <Link
                    to="/terms"
                    className="font-semibold text-[#570000] hover:underline"
                  >
                    Terms & Conditions
                  </Link>{" "}
                  and{" "}
                  <Link
                    to="/privacy-policy"
                    className="font-semibold text-[#570000] hover:underline"
                  >
                    Privacy Policy
                  </Link>
                  .
                </label>
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full rounded-full bg-[#570000] px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-[#5A0000] hover:shadow-md"
              >
                Create Account
              </button>
            </form>

            {/* Login Link */}
            <div className="mt-7 border-t border-[#E5DDD6] pt-6 text-center">
              <p className="text-sm text-[#5A413D]">
                Already have an account?{" "}
                <Link
                  to="/login"
                  className="font-semibold text-[#570000] hover:underline"
                >
                  Sign In
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default RegisterForm;