import {List} from '@mui/material';
import { departments } from '../../seeds';
import DepartmentItem from './DepartmentItem';
import PageTitle from '../PageTitle/PageTitle';


const Dropdown = () => {
  return (
    <>
    <PageTitle name="Dropdown - Component 2" />
    <div style={{margin: '2rem'}}>
      <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'lightgray', border: 'blue 1px solid' }}>
        {departments.map((department, index) => (
          <DepartmentItem key={index} department={department} />
        ))}
      </List>
    </div>
    </>
  )
}

export default Dropdown