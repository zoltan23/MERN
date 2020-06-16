import React from 'react'

export const UserContext = React.createContext({
    isAuth: false,
    userData: {},
    setIsAuth: () => {},
    setUserData: () => {}
})

const UserContextProvider = (props) => {

    const [isAuthenticated, setIsAuthenticated] = React.useState(false)
    const [userData, setUserData] = React.useState({})

    const setIsAuth = (value) => {
        setIsAuthenticated(value)
    }

    const setUser = (value) => {
        setUserData(value)
    }

    return (
        <UserContext.Provider value={{ isAuth: isAuthenticated, userData: userData, setIsAuth, setUser }}>
            {props.children}
        </UserContext.Provider>
    )
}

export default UserContextProvider