import { useNavigate } from "react-router-dom";
import LoginForm from "../components/LoginForm";

const LoginPage = () => {
    const navigate = useNavigate();

    const goToSignUpPage = () => {
        navigate("/signup");
    }

    return(
        <div className="h-screen flex items-center justify-center">
            <div className="flex flex-col mr-52">
                <div>
                    <h1 className="text-center ml-32 -mt-24 font-bold text-5xl text-blue-600">ETİYA</h1>
                </div>
                <div className="w-[400px]">
                    <LoginForm />
                </div>
                <div className="flex flex-row gap-2 ml-32">
                    <p>Hesabınız yok mu?</p>
                    <a onClick={goToSignUpPage} className="underline font-bold">Kayıt Ol</a>
                </div>
            </div>

        </div>
    );
}

export default LoginPage;