import React from 'react'
import { DataGrid } from '@mui/x-data-grid';

const DataTable = ({data}: {data: Data[]}) => {
    
    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'userId', headerName: 'User ID', width: 130 },
        { field: 'title', headerName: 'Title', width: 130 },
        { field: 'body', headerName: 'Body', width: 130 },
    ];

    return (
        <DataGrid
            rows={data}
            columns={columns}
        />
    )
}

export default DataTable