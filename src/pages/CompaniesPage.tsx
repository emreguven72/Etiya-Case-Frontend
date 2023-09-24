import { Button } from "antd";
import AllCompaniesTable from "../components/AllCompaniesTable";
import AddCompanyInputArea from "../components/AddCompanyInputArea";
import { useState } from "react";

const CompaniesPage = () => {
    const [shouldInputAreaOpen, setShouldInputAreaOpen]: any = useState(false);

    const openInputArea = () => {
        setShouldInputAreaOpen(true);
    }

    const closeInputArea = () => {
        setShouldInputAreaOpen(false);
    }

    return(
        <div className="h-screen">
            <div className="mx-6 mt-12 flex flex-col">
                <Button onClick={() => openInputArea()} className="text-green-600 h-10 mb-4" type="default">+ Ekle</Button>
                {shouldInputAreaOpen ? 
                    <div className="flex flex-row justify-center gap-2">
                        <AddCompanyInputArea />
                        <Button onClick={() => closeInputArea()} className='text-red-500' type='default'>İptal</Button>
                    </div> 
                : null}
                <AllCompaniesTable />
            </div>
        </div>
    );
}

export default CompaniesPage;