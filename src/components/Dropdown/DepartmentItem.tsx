import {useState} from 'react';
import {Collapse, ListItemText, ListItemButton, List, Checkbox} from '@mui/material';
import SubDepartmentItem from './SubDepartmentItem';

const DepartmentItem = ({department}: {department: Department}) => {

  const departmentName = department.department;
  const subDepartments = department.sub_departments;

  const [open, setOpen] = useState(true);
  const [selected, setSelected] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const handleSelect = () => {
    setSelected(!selected);
  };


  return (
    <>
    <ListItemButton>
        <Checkbox onChange={handleSelect} value={selected}/>
        <ListItemText onClick={handleClick} primary={`${departmentName} (${subDepartments.length})`}/>
    </ListItemButton>
    <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
            {subDepartments.map((subDepartment, index) => (
                <SubDepartmentItem key={index} subDepartment={subDepartment} selected={selected} />
            ))}
        </List>
      </Collapse>
    </>
  )
}

export default DepartmentItem