import { Button, Input, Form } from 'antd';
import { useCompanies } from '../providers/CompanyProvider';

const AddCompanyInputArea = () => {

    const { createCompany } = useCompanies();

    const OnFinish = (values) => {
        createCompany(values.company_name, values.company_legal_number, values.incorporation_country, values.website);
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
                rules={[{ required: true, message: 'Şirket adı giriniz!' }]}
                >
                    <Input className='w-[300px] border-gray-400 placeholder-black' placeholder="Şirket Adı" />
            </Form.Item>

            <Form.Item
                name="company_legal_number"
                rules={[{ required: true, message: 'Yasal numara giriniz!' }]}
                >
                    <Input className='w-[300px] border-gray-400 placeholder-black' placeholder="Yasal Numara" />
            </Form.Item>

            <Form.Item
                name="incorporation_country"
                rules={[{ required: true, message: 'Kuruluş ülkesi giriniz!' }]}
                >
                    <Input className='w-[300px] border-gray-400 placeholder-black' placeholder="Kurulduğu Ülke" />
            </Form.Item>

            <Form.Item
                name="website"
                rules={[{ required: true, message: 'Websitesi giriniz' }]}
                >
                    <Input className='w-[300px] border-gray-400 placeholder-black' placeholder="Websitesi" />
            </Form.Item>
            
            <Button className="text-green-600" type="default" htmlType="submit">Şirket Ekle</Button>
        </Form>
    );
}

export default AddCompanyInputArea;