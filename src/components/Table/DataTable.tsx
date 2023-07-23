import { DataGrid } from '@mui/x-data-grid';

const DataTable = ({data}: {data: Data[]}) => {
    
    const columns = [
        { field: 'id', headerName: 'ID', width: 50 },
        { field: 'userId', headerName: 'User ID', width: 70 },
        { field: 'title', headerName: 'Title', width: 230 },
        { field: 'body', headerName: 'Body', width: 530 },
    ];

    return (
        <DataGrid
            rows={data}
            columns={columns}
        />
    )
}

export default DataTable