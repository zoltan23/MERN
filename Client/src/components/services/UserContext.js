import React from 'react'

export const UserContext  = React.createContext({ role: '', 
                                                  isAuth: false,
                                                   setIsAuth: () => {},
                                                   setUserRole: () => {} })

const UserContextProvider = (props) => {

    const [isAuthenticated, setIsAuthenticated] = React.useState(false)
    const [role, setRole] = React.useState('')

    const setIsAuth = (value) => {
        setIsAuthenticated(value)
    }

    const setUserRole = (value) => {
        setRole(value)
    }

    return (
    <UserContext.Provider value={{role: role, isAuth: isAuthenticated, setIsAuth}}>
        {props.children}
    </UserContext.Provider>        
    )
}

export default UserContextProvider