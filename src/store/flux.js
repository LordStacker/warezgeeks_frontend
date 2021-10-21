export const getState = ({ setStore, getStore, getActions }) => {
    return {
        store: {
            infoUser: {},
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
                    .then(resp => {
                        if (resp.status === 200)
                            history.push('/dash/')
                        return resp.json();
                    })
                    .then((data) => {

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
                fetch("http://localhost:8080/profile", {
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
            }
        }
    }
}