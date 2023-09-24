import { Button, Input, Form } from 'antd';
import { useCompanies } from '../providers/CompanyProvider';

const SearchCompanyArea = () => {
    const { getCompanyByName, getAllCompanies } = useCompanies();

    const OnFinish = (values) => {
        if(values.company_name) {
            getCompanyByName(values.company_name);
        } else {
            getAllCompanies();
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

export default SearchCompanyArea;