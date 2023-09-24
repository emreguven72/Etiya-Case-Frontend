import { Button, Space, Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { useEffect } from 'react';
import { useCompanies } from '../providers/CompanyProvider';
import { useNavigate } from 'react-router-dom';

const AllCompaniesTable = () => {
    const { companies, getAllCompanies, deleteCompany }: any = useCompanies();
    const navigate = useNavigate();

    const deleteCompanyRecord = (id: number) => {
        deleteCompany(id);
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
            render: (text, record) => <a onClick={() => navigate(`/company/${record.id}`)}>{text}</a>,
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
                <Button onClick={() => null} className='text-yellow-500' type='default'>Güncelle</Button>
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