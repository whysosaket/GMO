import GlobalContext from "./globalContext";

const GlobalState = (props:any) => {

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

  return (
    <GlobalContext.Provider value={{performLogin, performLogout, checkIfLoggedIn}}>{props.children}</GlobalContext.Provider>
  );
};

export default GlobalState;
