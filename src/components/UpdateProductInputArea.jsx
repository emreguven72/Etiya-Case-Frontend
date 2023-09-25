import { Button, Input, Form } from 'antd';
import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useProduct } from '../providers/ProductProvider';

const UpdateProductInputArea = ({ id }) => {

    const { updateProduct, getProductById, products } = useProduct();

    const location = useLocation();
    const navigate = useNavigate();

    const { productName, productAmount, amountUnit, companyId, productCategory } = location.state;

    const OnFinish = (values) => {
        updateProduct(id, values.product_name, values.product_amount, values.amount_unit, values.company_id, values.product_category);
        navigate('/products')
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    const goToCompanyPage = () => {
        navigate('/products');
        document.location.reload();
    }

    useEffect(() => {
        if(!products) {
            getProductById(id);
        }
    }, [products, getProductById])

    return(
        <div className='flex flex-row gap-2 justify-center'>
            <Form 
            onFinish={OnFinish}
            onFinishFailed={onFinishFailed}
            className='flex flex-row gap-2 mb-4 justify-center'
            >
                <Form.Item
                    name="product_name"
                    rules={[{ required: true, message: 'Şirket adı giriniz!' }]}
                    >
                        <Input defaultValue={productName} className='w-[300px] border-gray-400 placeholder-black' placeholder="Ürün Adı" />
                </Form.Item>

                <Form.Item
                    name="product_amount"
                    rules={[{ required: true, message: 'Ürün miktarı giriniz!' }]}
                    >
                        <Input defaultValue={productAmount} className='w-[300px] border-gray-400 placeholder-black' placeholder="Ürün Miktarı" />
                </Form.Item>

                <Form.Item
                    name="amount_unit"
                    rules={[{ required: true, message: 'Miktar Birimi giriniz!' }]}
                    >
                        <Input defaultValue={amountUnit} className='w-[300px] border-gray-400 placeholder-black' placeholder="Miktar Birimi" />
                </Form.Item>

                <Form.Item
                    name="company_id"
                    rules={[{ required: true, message: 'Şirket ID giriniz!' }]}
                    >
                        <Input defaultValue={companyId} className='w-[300px] border-gray-400 placeholder-black' placeholder="Şirket ID" />
                </Form.Item>

                <Form.Item
                    name="product_category"
                    rules={[{ required: true, message: 'Kategori ID giriniz' }]}
                    >
                        <Input defaultValue={productCategory} className='w-[300px] border-gray-400 placeholder-black' placeholder="Kategori ID" />
                </Form.Item>
                
                <Button className="text-yellow-500" type="default" htmlType="submit">Şirketi Güncelle</Button>
            </Form>
            <Button onClick={goToCompanyPage} className="text-red-500" type="default">İptal</Button>
        </div>

    );
}

export default UpdateProductInputArea;