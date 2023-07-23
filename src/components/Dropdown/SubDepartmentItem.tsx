import {useEffect, useState} from 'react';
import {ListItemText, ListItemButton, Checkbox} from '@mui/material';

const SubDepartmentItem = (props: {subDepartment : string, selected: boolean}) => {

  const subDepartmentName = props.subDepartment;

  const [selected, setSelected] = useState(false);

  useEffect(() => {
    setSelected(props.selected);
  }, [props.selected]);

  const handleSelect = () => {
    setSelected(!selected);
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