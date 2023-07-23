import React, { useContext, useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { FormControl, FormLabel, FormHelperText } from "@mui/material";
import GlobalContext from "../../context/globalContext";

interface FormState {
    name: string;
    phoneNumber: string;
    email: string;
}

const Form = () => {
  const { performLogin } = useContext(GlobalContext);
  
  const [formState, setFormState] = useState<FormState>({name: '', phoneNumber: '', email: ''});

  const handleLogin = () => {
    const {name, phoneNumber, email} = formState;
    performLogin(name, phoneNumber, email);
    window.location.href = "/home";
  };

  const handleUpdate = (e: React.ChangeEvent<HTMLInputElement>) => {
    // update the formState
    setFormState({...formState, [e.target.name]: e.target.value});
    };

  return (
    <>
      <FormControl>
        <FormLabel sx={{ mt: 2 }}>Enter Name</FormLabel>
        <TextField
          type="text"
          variant="outlined"
          size="small"
          placeholder="Name"
          onChange={handleUpdate}
          value={formState.name}
          name="name"
        ></TextField>

        <FormLabel sx={{ mt: 2 }}>Enter Phone Number</FormLabel>
        <TextField
          type="text"
          variant="outlined"
          size="small"
          placeholder="Phone Number"
          onChange={handleUpdate}
          value={formState.phoneNumber}
          name="phoneNumber"
        ></TextField>

        <FormLabel sx={{ mt: 2 }}>Enter Email</FormLabel>
        <TextField
          type="email"
          variant="outlined"
          size="small"
          placeholder="Email"
          onChange={handleUpdate}
          value={formState.email}
          name="email"
        ></TextField>

        <FormHelperText sx={{ m: 1 }} id="my-helper-text">
          We'll never share your personal info.
        </FormHelperText>

        <Button variant="contained" onClick={handleLogin}>Login</Button>
      </FormControl>
    </>
  );
};

export default Form;
