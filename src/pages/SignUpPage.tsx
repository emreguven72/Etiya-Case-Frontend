import { useNavigate } from "react-router-dom";
import SignUpFormComponent from "../components/SignUpForm";

const SignUpPage = () => {
    const navigate = useNavigate();

    const goToLoginPage = () => {
        navigate("/login");
    }

    return(
        <div className="h-screen flex items-center justify-center">
            <div className="flex flex-col mr-52">
                <div>
                    <h1 className="text-center ml-32 -mt-24 font-bold text-5xl text-blue-600">ETİYA</h1>
                </div>
                <div className="w-[400px]">
                    <SignUpFormComponent />
                </div>
                <div className="flex flex-row gap-2 ml-32">
                    <p>Zaten hesabınız var mı?</p>
                    <a onClick={goToLoginPage} className="underline font-bold">Giriş yap</a>
                </div>
            </div>

        </div>
    );
}

export default SignUpPage;