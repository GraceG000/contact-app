import React from 'react';
import user from '../images/user-image.png';

//another functional component...
const ContactCard = (props) =>{
    const {id, name, email} = props.contact;
return(
    <div className = "item">
        <image className="ui avatar image" src={user} alt="user"/>
    <div className="content">
    <div className="header">{name}</div>
    <div className>{email}</div>
    </div>{' '}
    <i className = "trash alternate outline icon"></i>
    style={{color: "red", marginTop:"7px"}}
</div>
)

}

export default ContactCard;