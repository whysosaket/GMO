import { useContext, useEffect } from "react";
import Form from "../components/Form/Form";
import { Grid, Typography } from "@mui/material";
import GlobalContext from "../context/globalContext";

const Login = () => {
  const { checkIfLoggedIn } = useContext(GlobalContext);

  useEffect(() => {
    const loggedIn = checkIfLoggedIn();
    if (loggedIn) {
        window.location.href = "/home";
    }
  }, []);

  return (
    <div>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        sx={{ minHeight: "100vh" }}
      >
        <Typography fontWeight={700} variant="h2" component="h2">
          Login
        </Typography>
        <Form />
      </Grid>
    </div>
  );
};

export default Login;
