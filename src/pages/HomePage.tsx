import CompanyTable from "../components/CompanyTable";
import { useAuth } from "../providers/AuthProvider";

const HomePage = () => {
    const { logout, auth }: any = useAuth();

    return(
        <div className="h-screen">
            <div className="mx-6 mt-12">
                <CompanyTable />
            </div>
        </div>
    );
}

export default HomePage;