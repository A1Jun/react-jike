import {Outlet} from 'react-router-dom'

const Layout = () => {
    return (
        <div>
            <p>这是首页</p>
            <Outlet />
        </div>
    )
}

export default Layout