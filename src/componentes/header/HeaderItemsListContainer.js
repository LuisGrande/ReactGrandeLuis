import { NavLink} from "react-router-dom"

const HeaderItemListContainer = (props) => {
    return(
        <ul>
            <li><NavLink to="/categoria/Nike">{props.opcion1}</NavLink></li>
            <li><NavLink to="/categoria/Adidas">{props.opcion2}</NavLink></li>
            <li><NavLink to="/categoria/Puma">{props.opcion3}</NavLink></li>
            <li><NavLink to="/categoria/Otras">{props.opcion4}</NavLink></li>
        
            
        </ul>
    )
}


export default HeaderItemListContainer