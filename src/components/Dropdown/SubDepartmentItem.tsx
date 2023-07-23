import {useEffect, useState} from 'react';
import {ListItemText, ListItemButton, Checkbox} from '@mui/material';

interface SubDepartmentItemProps {
  subDepartment : string,
  subDepartmentSelected: boolean[],
  handleSubDepartmentSelect: (index: number, selected: boolean)=>void,
  index: number
}

const SubDepartmentItem = (props: SubDepartmentItemProps) => {

  const subDepartmentName = props.subDepartment;
  const subDepartmentSelected = props.subDepartmentSelected;
  const handleSubDepartmentSelect = props.handleSubDepartmentSelect;

  const [selected, setSelected] = useState(false);

  useEffect(() => {
    if(subDepartmentSelected.length === 0) return;
    setSelected([...subDepartmentSelected][props.index]);
  }, [subDepartmentSelected]);

  const handleSelect = () => {
    handleSubDepartmentSelect(props.index, !selected);
  };

  return (
    <>
        <ListItemButton sx={{ pl: 4 }}>
            <Checkbox checked={selected} onChange={handleSelect}/>
            <ListItemText primary={subDepartmentName} />
        </ListItemButton>
    </>
  )
}

export default SubDepartmentItem