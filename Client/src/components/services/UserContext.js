import React from 'react'

export const UserContext  = React.createContext({ role: '', 
                                                  isAuth: false,
                                                  userInfo: {},
                                                   setIsAuth: () => {},
                                                   setUserRole: () => {},
                                                   setUser: () =>  {}
                                                })

const UserContextProvider = (props) => {

    const [isAuthenticated, setIsAuthenticated] = React.useState(false)
    const [role, setRole] = React.useState('')
    const [ userInfo, setUserInfo ] = React.useState({})
 
    const setIsAuth = (value) => {
        setIsAuthenticated(value)
    }

    const setUserRole = (value) => {
        setRole(value)
    }

    return (
    <UserContext.Provider value={{role: role, isAuth: isAuthenticated, setIsAuth, setUserRole }}>
        {props.children}
    </UserContext.Provider>        
    )
}

export default UserContextProvider