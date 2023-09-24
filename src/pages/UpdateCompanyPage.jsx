import { useParams } from "react-router-dom";
import UpdateCompanyInputAreas from "../components/UpdateCompanyInputAreas";

const UpdateCompanyPage = () => {
    const { id } = useParams();

    return(
        <div className="mt-12">
            <UpdateCompanyInputAreas id={id} />
        </div>
    );
}

export default UpdateCompanyPage;