import React, {useContext, useEffect} from 'react'
import GlobalContext from '../context/globalContext'
import { Button, Grid, Typography } from "@mui/material";

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
        
        <Typography fontWeight={700} variant="h2" component="h2">
            Home
        </Typography>
      </Grid>
    </>
  )
}

export default Home