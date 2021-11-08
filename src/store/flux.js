export const getState = ({ setStore, getStore, getActions }) => {
    return {
        store: {
            isAuth: localStorage.getItem("isAuth"),
            Documents: [],
        },
        actions: {
            setInfo: (data) => {
                setStore({ infoUser: data })
            },
            onSumbitLogin: (e, User, history) => {
                e.preventDefault();
                fetch("http://localhost:8080/login", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        email: User.email,
                        password: User.password
                    })
                })
                    .then(resp => resp.json())
                    .then((data) => {
                        if (data.msg === "Logged in succesfully") {
                            localStorage.setItem("isAuth", JSON.stringify(true))
                            localStorage.setItem("access_token", JSON.stringify(data.access_token))
                            history.push('/dash/')
                        }
                        if (typeof data == 'object') {
                            console.log(data)
                            alert(data["msg"])
                        }
                        else {
                            alert(data)
                        }

                    })
                    .catch(error => {
                        console.error(error);
                    })
            },
            onSubmitRegister: (e, profile, history) => {
                e.preventDefault();
                fetch("http://localhost:8080/register", {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        full_name: profile.full_name,
                        last_name: profile.last_name,
                        email: profile.email,
                        password: profile.password,
                        knowledge: profile.knowledge,
                        phone: profile.phone,
                        question: profile.question,
                        answer: profile.answer,
                        username: profile.username
                    })
                }).then(resp => {
                    if (resp.status === 200) {
                        alert("Account Created")
                        history.push('/dash/')
                        return resp.json();
                    }
                    else alert("There was a mistake")
                })
                    .catch(error => {
                        console.error("there was an error!!", error);
                    })
            },
            getDocumentation: () => {
                fetch("http://localhost:8080/documentation", {
                    method: "GET",
                    headers: { "Content-Type": "application/json" }
                }).then(response => response.json())
                    .then(data => setStore({ Documents: data }))
            }
        }
    }
}