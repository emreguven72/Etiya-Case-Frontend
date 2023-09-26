import { Button, Form, Input, Space, Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { useEffect } from 'react';
import { useCompanies } from '../providers/CompanyProvider';
import { useNavigate } from 'react-router-dom';
import { useProduct } from '../providers/ProductProvider';

const AllProductsTable = () => {

    const { products, getAllProducts, deleteProduct}: any = useProduct();
    const navigate: any = useNavigate();

    const deleteProductRecord = (id: String) => {
        deleteProduct(id);
    }

    const goToUpdateProductPage = (id: String, productName: String, productAmount: String, amountUnit: String, companyId: String, productCategory: String) => {
        navigate(`/products/update/${id}`, {
            state: {
                productName: productName,
                productAmount: productAmount,
                amountUnit: amountUnit,
                companyId: companyId,
                productCategory: productCategory
            }
        });
        document.location.reload();
    }

    interface DataType {
        _id: String
        product_name: String,
        product_amount: String,
        amount_unit: String,
        company_id: String,
        product_category: String,
        company_name: String
    }

    useEffect(() => {
        if(!products) {
            getAllProducts();
        } else {
            for (let index = 0; index < products.length; index++) {
                products[index].company_name = products[index].company.company_name
            }
            console.log(products);
        }
    }, [products, getAllProducts]) //do it for products

    const columns: ColumnsType<DataType> = [
        {
            title: 'Ürün Adı',
            dataIndex: 'product_name',
            key: 'product_name',
        },
        {
            title: 'Ürün Miktarı',
            dataIndex: 'product_amount',
            key: 'product_amount',
        },
        {
            title: 'Miktar Birimi',
            dataIndex: 'amount_unit',
            key: 'amount_unit',
        },
        {
            title: 'Şirket Adı',
            dataIndex: 'company_name',
            key: 'company_name',
        },
        {
            title: 'Kategori',
            dataIndex: 'product_category',
            key: 'product_category',
        },
        {
            key: 'action',
            render: (_, record) => (
              <Space size="middle">
                <Button onClick={() => goToUpdateProductPage(record._id, record.product_name, record.product_amount, record.amount_unit, record.company_id, record.product_category)} className='text-yellow-500' type='default'>Güncelle</Button>
                <Button onClick={() => deleteProductRecord(record._id)} className='text-red-500' type='default'>Sil</Button>
              </Space>
            ),
        },
    ];

    const App: React.FC = () => <Table columns={columns} dataSource={!products ? [] : products} />;

    return(
        <App />
    );
}

export default AllProductsTable;