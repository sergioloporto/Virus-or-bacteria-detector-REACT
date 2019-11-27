

//////////////
// SAVE USER TO LOCAL STORAGE
//////////////




class LoginCheck {
    newLoggedinUser = {
        email: "",
        isTheUserLoggedIn: ""
    };

     saveUserToLocalStorage=(newLoggedinUser) =>{
        let dataFromLocalStorage = [];
        if (localStorage.getItem("loggedInUsers") != null) {
            dataFromLocalStorage = JSON.parse(localStorage.getItem("loggedInUsers"));
            dataFromLocalStorage.push(newLoggedinUser);
            localStorage.setItem("loggedInUsers", JSON.stringify(dataFromLocalStorage))
        } else {
            dataFromLocalStorage.push(newLoggedinUser);
            localStorage.setItem("loggedInUsers", JSON.stringify(dataFromLocalStorage));
        }
        alert("Zalogowany");
    };

    isValidUser = (email, password) => {
        return fetch('http://localhost:3005/users').then(
            res => res.json()
        ).then(res => {
                const correctUsersList = res.filter(user => user.email === email && user.password === password);
                if ( correctUsersList.length > 0) {
                    this.newLoggedinUser.email = correctUsersList[0].email;
                    this.newLoggedinUser.isTheUserLoggedIn = true;
                    this.saveUserToLocalStorage(this.newLoggedinUser);

                    return true
                } else {
                    throw new Error()
                }
            }
        );
    };

    getUtilities = () => {
        return { isValidUser: this.isValidUser }
    }
}
const service = new LoginCheck();

export default service.getUtilities();