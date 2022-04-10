import React from "react";
import { useHistory, useLocation } from "react-router-dom";

import { LinkArea, LinkIcon } from "./styles";

const MenuItem = ({ icon, link })=>{
    const location = useLocation();
    const history = useHistory();

    let isActive = location.pathname === link;

    function handleLinkClick(e){
        e.preventDefault();
        history.push(link);
    }

    return(
        <LinkArea href={link} onClick={handleLinkClick} active={isActive}>
            <LinkIcon src={icon}/>
        </LinkArea>
    );
}

export default MenuItem;