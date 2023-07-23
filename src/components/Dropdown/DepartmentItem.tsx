import { useState } from 'react';
import {Collapse, ListItemText, ListItemButton, List, Checkbox} from '@mui/material';
import SubDepartmentItem from './SubDepartmentItem';

const DepartmentItem = ({department}: {department: Department}) => {

  const departmentName = department.department;
  const subDepartments = department.sub_departments;

  const [open, setOpen] = useState(true);
  const [selected, setSelected] = useState(false);
  const [subDepartmentSelected, setSubDepartmentSelected] = useState<boolean[]>(new Array(subDepartments.length).fill(false));

  const handleClick = () => {
    setOpen(!open);
  };

  const handleSelectAll = () => {
    setSubDepartmentSelected((prevState) => {
      const newState: boolean[] = [...prevState];
      newState.fill(!selected);
      return newState;
    });
    setSelected(!selected);
  };

  const handleSubDepartmentSelect = (index: number, selected: boolean) => {
    setSubDepartmentSelected((prevState: boolean[]) => {
      const newState: boolean[] = [...prevState];
      newState[index] = selected;
      setSelected(newState.every((item) => item === true));
      return newState;
    });
  };

  return (
    <>
    <ListItemButton>
        <Checkbox onChange={handleSelectAll} checked={selected}/>
        <ListItemText onClick={handleClick} primary={`${departmentName} (${subDepartments.length})`}/>
    </ListItemButton>
    <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
            {subDepartments.map((subDepartment, index) => (
                <SubDepartmentItem key={index} index={index} subDepartment={subDepartment} subDepartmentSelected={subDepartmentSelected}  handleSubDepartmentSelect={handleSubDepartmentSelect} />
            ))}
        </List>
      </Collapse>
    </>
  )
}

export default DepartmentItem