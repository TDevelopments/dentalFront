import React from 'react'

import { MyDrawer } from './Drawer'

const Layout: React.FC = ({children}) => {
    return(
        <>
            <MyDrawer>
                {children}
            </MyDrawer>
        </>
    )
}

export default Layout