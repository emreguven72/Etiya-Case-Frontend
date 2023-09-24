import { Button, Input, Form } from 'antd';
import { useProduct } from '../providers/ProductProvider';

const SearchProductArea = () => {

    const { getProductsByCompany, getAllProducts } = useProduct();

    const OnFinish = (values) => {
        if(values.company_name) {
            getProductsByCompany(values.company_name)
        } else {
            getAllProducts()
        }
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
                name="company_name"
                >
                    <Input className='w-[300px] border-gray-400 placeholder-black' placeholder="Şirket Adı" />
            </Form.Item>
            
            <Button className="text-blue-600" type="default" htmlType="submit">Ara</Button>
        </Form>
    );

}

export default SearchProductArea;