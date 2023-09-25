import { Button, Form, Input, Space, Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { useEffect } from 'react';
import { useCompanies } from '../providers/CompanyProvider';
import { useNavigate } from 'react-router-dom';

const AllCompaniesTable = () => {
    const { companies, getAllCompanies, deleteCompany }: any = useCompanies();
    const navigate: any = useNavigate();

    const deleteCompanyRecord = (id: number) => {
        deleteCompany(id);
    }

    const goToUpdateCompanyPage = (id: number, companyName: String, companyLegalNumber: String, incorporationCountry: String, website: String) => {
        navigate(`/companies/update/${id}`, {
            state: {
                companyName: companyName,
                companyLegalNumber: companyLegalNumber,
                incorporationCountry: incorporationCountry,
                website: website
            }
        });
        document.location.reload();
    }

    interface DataType {
        id: number
        company_name: String,
        company_legal_number: String,
        incorporation_country: String,
        website: String,
    }

    useEffect(() => {
        if(!companies) {
            getAllCompanies();
        }
    }, [companies, getAllCompanies])

    const columns: ColumnsType<DataType> = [
        {
            title: 'Şirket Adı',
            dataIndex: 'company_name',
            key: 'company_name',
            },
        {
            title: 'Yasal Numara',
            dataIndex: 'company_legal_number',
            key: 'company_legal_number',
        },
        {
            title: 'Kurulduğu ülke',
            dataIndex: 'incorporation_country',
            key: 'incorporation_country',
        },
        {
            title: 'Websitesi',
            dataIndex: 'website',
            key: 'website',
        },
        {
            key: 'action',
            render: (_, record) => (
              <Space size="middle">
                <Button onClick={() => goToUpdateCompanyPage(record.id, record.company_name, record.company_legal_number, record.incorporation_country, record.website)} className='text-yellow-500' type='default'>Güncelle</Button>
                <Button onClick={() => deleteCompanyRecord(record.id)} className='text-red-500' type='default'>Sil</Button>
              </Space>
            ),
        },
    ];

    const App: React.FC = () => <Table columns={columns} dataSource={!companies ? [] : companies} />;

    return(
        <App />
    );
}

export default AllCompaniesTable;