import { Button, Input, Form } from 'antd';
import { useProduct } from '../providers/ProductProvider';

const AddProductInputArea = () => {

    const { createProduct } = useProduct();

    const OnFinish = (values) => {
        createProduct(values.product_name, values.product_amount, values.amount_unit, values.company_id, values.product_category);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return(
        <Form 
        onFinish={OnFinish}
        onFinishFailed={onFinishFailed}
        className='flex flex-row gap-2 mb-4 justify-center'
        >
            <Form.Item
                name="product_name"
                rules={[{ required: true, message: 'Şirket adı giriniz!' }]}
                >
                    <Input className='w-[300px] border-gray-400 placeholder-black' placeholder="Ürün Adı" />
            </Form.Item>

            <Form.Item
                name="product_amount"
                rules={[{ required: true, message: 'Yasal numara giriniz!' }]}
                >
                    <Input className='w-[300px] border-gray-400 placeholder-black' placeholder="Ürün Miktarı" />
            </Form.Item>

            <Form.Item
                name="amount_unit"
                rules={[{ required: true, message: 'Kuruluş ülkesi giriniz!' }]}
                >
                    <Input className='w-[300px] border-gray-400 placeholder-black' placeholder="Miktar Birimi" />
            </Form.Item>

            <Form.Item
                name="company_id"
                rules={[{ required: true, message: 'Websitesi giriniz' }]}
                >
                    <Input className='w-[300px] border-gray-400 placeholder-black' placeholder="Şirket ID" />
            </Form.Item>

            <Form.Item
                name="product_category"
                rules={[{ required: true, message: 'Websitesi giriniz' }]}
                >
                    <Input className='w-[300px] border-gray-400 placeholder-black' placeholder="Kategori" />
            </Form.Item>
            
            <Button className="text-green-600" type="default" htmlType="submit">Ürün Ekle</Button>
        </Form>
    );
}

export default AddProductInputArea;