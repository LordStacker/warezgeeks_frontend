import { Route,Redirect } from "react-router-dom"

const PrivateRouteStudent = ({component: Component, otherProps}) => {
    const isAuth = localStorage.getItem("isAuth")
    const user = JSON.parse(localStorage.getItem("user"))
    const isStudent = user.role
    return <Route {...otherProps }render={ (props)=> isAuth && isStudent === 3 ? <Component {...props}/> : <Redirect to="/Login"/>} />
}
export default PrivateRouteStudent;