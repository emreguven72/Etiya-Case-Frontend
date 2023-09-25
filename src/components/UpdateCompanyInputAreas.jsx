import { Button, Input, Form } from 'antd';
import { useCompanies } from '../providers/CompanyProvider';
import { useEffect, useState } from 'react';
import { Navigate, useLocation, useNavigate, useParams } from 'react-router-dom';

const UpdateCompanyInputAreas = ({ id }) => {

    const { updateCompany, getCompanyById, companies } = useCompanies();

    const location = useLocation();
    const navigate = useNavigate();

    const { companyName, companyLegalNumber, incorporationCountry, website } = location.state;

    const OnFinish = (values) => {
        updateCompany(id, values.company_name, values.company_legal_number, values.incorporation_country, values.website);
        navigate('/companies')
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    const goToCompanyPage = () => {
        navigate('/companies');
        document.location.reload();
    }

    useEffect(() => {
        if(!companies) {
            getCompanyById(id);
        }
    }, [companies, getCompanyById])

    return(
        <div className='flex flex-row gap-2 justify-center'>
            <Form 
            onFinish={OnFinish}
            onFinishFailed={onFinishFailed}
            className='flex flex-row gap-2 mb-4 justify-center'
            >
                <Form.Item
                    name="company_name"
                    rules={[{ required: true, message: 'Şirket adı giriniz!' }]}
                    >
                        <Input defaultValue={companyName} className='w-[300px] border-gray-400 placeholder-black' placeholder="Şirket Adı" />
                </Form.Item>

                <Form.Item
                    name="company_legal_number"
                    rules={[{ required: true, message: 'Yasal numara giriniz!' }]}
                    >
                        <Input defaultValue={companyLegalNumber} className='w-[300px] border-gray-400 placeholder-black' placeholder="Yasal Numara" />
                </Form.Item>

                <Form.Item
                    name="incorporation_country"
                    rules={[{ required: true, message: 'Kuruluş ülkesi giriniz!' }]}
                    >
                        <Input defaultValue={incorporationCountry} className='w-[300px] border-gray-400 placeholder-black' placeholder="Kurulduğu Ülke" />
                </Form.Item>

                <Form.Item
                    name="website"
                    rules={[{ required: true, message: 'Websitesi giriniz' }]}
                    >
                        <Input defaultValue={website} className='w-[300px] border-gray-400 placeholder-black' placeholder="Websitesi" />
                </Form.Item>
                
                <Button className="text-yellow-500" type="default" htmlType="submit">Şirketi Güncelle</Button>
            </Form>
            <Button onClick={goToCompanyPage} className="text-red-500" type="default">İptal</Button>
        </div>

    );
}

export default UpdateCompanyInputAreas;