import { useParams } from "react-router-dom";
import UpdateProductInputArea from "../components/UpdateProductInputArea";

const UpdateProductPage = () => {
    const { id } = useParams();

    return(
        <div className="mt-12">
            <UpdateProductInputArea id={id} />
        </div>
    );
}

export default UpdateProductPage;