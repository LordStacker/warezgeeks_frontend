import { Route,Redirect } from "react-router-dom"

const PrivateRouteTeacher = ({component: Component, otherProps}) => {
    const isAuth = localStorage.getItem("isAuth")
    const user = JSON.parse(localStorage.getItem("user"))
    const isTeacher = user.role
    console.log(isTeacher)
    return <Route {...otherProps }render={ (props)=> isAuth && isTeacher === 2 ? <Component {...props}/> : <Redirect to="/"/>} />
}
export default PrivateRouteTeacher;