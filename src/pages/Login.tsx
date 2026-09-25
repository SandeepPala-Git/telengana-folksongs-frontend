import LoginHeroSection from "../components/login/LoginHeroSection";
import LoginForm from "../components/login/LoginForm";
import LoginBenefitsSection from "../components/login/LoginBenefitsSection";

function Login() {
  return (
    <div className="bg-[#FDFBF7] text-[#1C1B1B]">
      <LoginHeroSection />
      <LoginForm />
      <LoginBenefitsSection />
    </div>
  );
}

export default Login;