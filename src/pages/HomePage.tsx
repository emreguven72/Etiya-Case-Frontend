import { useAuth } from "../providers/AuthProvider";

const HomePage = () => {
    const { logout, auth }: any = useAuth();

    return(
        <div>
            <h1>HomePage</h1>
            <button onClick={logout}>Logout</button>
            <h1>{auth.username}</h1>
        </div>
    );
}

export default HomePage;