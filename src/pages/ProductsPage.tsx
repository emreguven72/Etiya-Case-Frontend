import { Button } from "antd";
import { useState } from "react";
import AddProductInputArea from "../components/AddProductInputArea";
import SearchProductArea from "../components/SearchProductArea";
import AllProductsTable from "../components/AllProductsTable";

const ProductsPage = () => {
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
                        <AddProductInputArea />
                        <Button onClick={() => closeInputArea()} className='text-red-500' type='default'>İptal</Button>
                    </div> 
                : null}
                <SearchProductArea />
                <AllProductsTable />
                
            </div>
        </div>
    );
}

export default ProductsPage;