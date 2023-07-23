import { useContext, useEffect } from "react";
import Form from "../components/Form/Form";
import { Grid } from "@mui/material";
import GlobalContext from "../context/globalContext";
import PageTitle from "../components/PageTitle/PageTitle";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { checkIfLoggedIn } = useContext(GlobalContext);

  const navigate = useNavigate();

  useEffect(() => {
    const loggedIn = checkIfLoggedIn();
    if (loggedIn) {
      navigate("/home");
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
        <PageTitle name="Login" />
        <Form />
      </Grid>
    </div>
  );
};

export default Login;
