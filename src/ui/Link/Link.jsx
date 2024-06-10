import "./Link.scss"
import {NavLink} from "react-router-dom"

const Link = ({children, to, ...props}) => {
    return (
        <NavLink
            to={to}
            {...props}
        >
            {children}
        </NavLink>
    );
};

export default Link;