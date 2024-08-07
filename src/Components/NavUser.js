import { Link } from "react-router-dom"

const NavUser=({auth,setAuth})=>{
    return(
        <ul>
            <Link to={'/'}><li>Home</li></Link>
            {
                auth ? 
                <>
                    <Link to={'/ListUser'}><li>Users</li></Link>
                    <button onClick={()=>setAuth(false)}>Logout</button>
                </>
                :
                <button onClick={()=> setAuth(true)}>Login</button>             

            }
            
            
        </ul>
    )
}

export default NavUser