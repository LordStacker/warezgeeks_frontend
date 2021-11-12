import { Route,Redirect } from "react-router-dom"

const PrivateRoute = ({component: Component, otherProps}) => {
    const isAuth = localStorage.getItem("isAuth")
    return <Route {...otherProps }render={ (props)=> isAuth ? <Component {...props}/> : <Redirect to="/Login"/>} />
}

export default PrivateRoute;