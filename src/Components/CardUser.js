import { Link } from "react-router-dom"

const CardUser=({el})=>{
    return(
        <div>   
            <Link to={`/Profil/${el.id}`}><h2>{el.name}</h2></Link>

        </div>
    )
}

export default CardUser