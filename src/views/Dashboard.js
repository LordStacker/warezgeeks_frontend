import React, { useEffect, useState } from "react";

const Dashboard = () => {
    const [user, setUser] = useState("");
    useEffect(() => {
        fetch("http://localhost:8080/me", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                'Authorization': `Bearer ${JSON.parse(localStorage.getItem("access_token"))}`
            },
            body: JSON.stringify("")
        })
            .then(resp => resp.json())
            .then((data) => {
                setUser(data.current_user)
            })
            .catch(error => {
                console.error(error);
            })
    }, [])
    return <h1>Hola {user} history</h1>
}

export default Dashboard;