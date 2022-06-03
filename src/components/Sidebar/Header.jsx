import React from "react";
import {useUsersCContext} from "../../context/usersCarlosContext";
import {Link, useParams} from "react-router-dom";
import OptionsBtn from "../OptionsButton";
import Icon from "components/Icon";

const Header = () => {

    const { Carlos, agregarUsuario} = useUsersCContext();
    const {idUsu} = useParams();
    let user = Carlos.filter((user) => user.id === Number(idUsu))[0];

    return (

        <header className="header chat__header">
            <div className="chat__avatar-wrapper" >
                <img src={user.profile_picture}  className="avatar" />
            </div>

            <div className="chat__contact-wrapper" >
                <h2 className="chat__contact-name"> {user?.name}</h2>

            </div>
          <Link
                         className="sidebar-contact"
                         to={`/`} >

                         <button className="btn btn-danger btn-sm">SALIR
                             <Icon id="block" className="profile__danger-icon" >

                             </Icon>
                         </button>

                     </Link>

        </header>
    );
};

export default Header;