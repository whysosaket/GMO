import {useContext, useEffect} from 'react'
import GlobalContext from '../context/globalContext'
import { Button, Grid} from "@mui/material";
import TableComponent from '../components/Table/TableComponent';
import Dropdown from '../components/Dropdown/Dropdown';
import PageTitle from '../components/PageTitle/PageTitle';
import { useNavigate } from 'react-router-dom';

const Home = () => {

    const { checkIfLoggedIn, performLogout } = useContext(GlobalContext);
    const navigate = useNavigate();

    useEffect(() => {
        const loggedIn = checkIfLoggedIn();
        if (!loggedIn) {
            navigate("/login");
        }
    }, []);

    const handleLogout = () => {
        performLogout();
        navigate("/login");
    };

  return (
    <>
    {/* add a logout button on top */}
    <Button variant="contained" color="error" sx={{ mt: 2 }} onClick={handleLogout}>
        Logout
    </Button>
     <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        sx={{ minHeight: "100vh" }}
      >
        
        <PageTitle name="Home" />
        <TableComponent />
        <Dropdown />
      
      </Grid>
    </>
  )
}

export default Home