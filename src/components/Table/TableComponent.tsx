import {useContext, useEffect} from 'react'
import GlobalContext from "../../context/globalContext";
import DataTable from './DataTable';

const TableComponent = () => {

  const {data, fetchData} = useContext(GlobalContext);

  useEffect(() => {
    fetchData();
    }, []);

  return (
    <>
        <div style={{ height: 400, width: '80%', marginBottom: '3rem' }}>
            <DataTable data={data} />
        </div>
    
    </>
  )
}

export default TableComponent