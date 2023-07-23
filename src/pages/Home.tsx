import {useContext, useEffect} from 'react'
import GlobalContext from '../context/globalContext'
import { Button, Grid} from "@mui/material";
import TableComponent from '../components/Table/TableComponent';
import Dropdown from '../components/Dropdown/Dropdown';
import PageTitle from '../components/PageTitle/PageTitle';

const Home = () => {

    const { checkIfLoggedIn, performLogout } = useContext(GlobalContext);

    useEffect(() => {
        const loggedIn = checkIfLoggedIn();
        if (!loggedIn) {
            window.location.href = "/";
        }
    }, []);

    const handleLogout = () => {
        performLogout();
        window.location.href = "/";
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