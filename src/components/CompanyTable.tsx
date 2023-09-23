import { Space, Table, Tag } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { useEffect, useState } from 'react';
import { useCompanies } from '../providers/CompanyProvider';

const CompanyTable = () => {

    //TODO: sayfaya ilk girdiğinde hata alıyorsun muhtemelen companies boş geldiği için.

    const { companies, getLatestCompanies }: any = useCompanies();

    interface DataType {
        id: number,
        company_name: String,
        company_legal_number: String,
        incorporation_country: String,
        website: String,
    }

    useEffect(() => {
        if(!companies) {
            getLatestCompanies();
        }
    }, [companies, getLatestCompanies])

    const columns: ColumnsType<DataType> = [
        {
            title: 'company_name',
            dataIndex: 'company_name',
            key: 'company_name',
            render: (text) => <a>{text}</a>,
        },
        {
            title: 'company_legal_number',
            dataIndex: 'company_legal_number',
            key: 'company_legal_number',
        },
        {
            title: 'incorporation_country',
            dataIndex: 'incorporation_country',
            key: 'incorporation_country',
        },
        {
            title: 'website',
            dataIndex: 'website',
            key: 'website',
        },
    ];

    

    const App: React.FC = () => <Table columns={columns} dataSource={!companies ? [] : companies} />;

    return(
        <App />
    );
}

export default CompanyTable;