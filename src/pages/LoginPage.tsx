import LoginForm from "../components/LoginForm";

const LoginPage = () => {
    return(
        <div className="h-screen flex items-center justify-center">
            <div className="flex flex-col mr-52">
                <div>
                    <h1 className="text-center ml-32 -mt-24 font-bold text-5xl text-blue-600">ETIYA</h1>
                </div>
                <div className="w-[400px]">
                    <LoginForm />
                </div>
                <div className="flex flex-row gap-2 ml-32">
                    <p>You don't have an account?</p>
                    <a href="" className="underline font-bold">Sign Up</a>
                </div>
            </div>

        </div>
    );
}

export default LoginPage;