import { useState } from "react";
import GlobalContext from "./globalContext";

const GlobalState = (props:any) => {

    const [data, setData] = useState([]);

    const performLogin = (name: string, phoneNumber: string, email: string) => {
        const userObject = {
            name: name,
            phoneNumber: phoneNumber,
            email: email
        }
        localStorage.setItem('user', JSON.stringify(userObject));
    };

    const performLogout = () => {
        localStorage.removeItem('user');
    };

    const checkIfLoggedIn = () => {
        const user = localStorage.getItem('user');
        if (user) {
            return true;
        } else {
            return false;
        }
    };

    const fetchData = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();
        const arrayData = data.map((item: Data) => {
            return {
                id: item.id,
                userId: item.userId,
                title: item.title,
                body: item.body
            }
        });
        setData(arrayData);
    };

  return (
    <GlobalContext.Provider value={{performLogin, performLogout, checkIfLoggedIn, fetchData, data}}>{props.children}</GlobalContext.Provider>
  );
};

export default GlobalState;
