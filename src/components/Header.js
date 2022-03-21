import React, {useRef} from 'react';
import {Link, NavLink} from 'react-router-dom'
import logo from '../static/img/header_logo.png'

export const Header = () => {
    const ref = useRef(null)
    const navRef = useRef(null)
    const menuHandler = () => {
        ref.current.classList.toggle("_active")
        navRef.current.classList.toggle("_active")
        const links = document.getElementsByClassName("nav-link");
        for(let i = 0; i < links.length; i++){
            links[i].onclick = () => {
                ref.current.classList.remove("_active")
                navRef.current.classList.remove("_active")
            }
        }
    }
    return (
        <header className="header">
            <div className="header__container">
                <Link className="header__logo" to="/index">
                    <img src={logo} className="logo" alt="logo"/>
                </Link>
                <nav className="nav" ref={navRef}>
                    <NavLink to="/index" className="nav-link">
                        Главная
                    </NavLink>
                    <NavLink to="/technology" className="nav-link">
                        Технология
                    </NavLink>
                    <NavLink to="/graphic" className="nav-link">
                        График полетов
                    </NavLink>
                    <NavLink to="/warranty" className="nav-link">
                        Гарантии
                    </NavLink>
                    <NavLink to="/about" className="nav-link">
                        О компании
                    </NavLink>
                    <NavLink to="/contacts" className="nav-link">
                        Контакты
                    </NavLink>
                </nav>
                <div className="mobile_menu_place" ref={ref} onClick={menuHandler}>
                        <span>

                        </span>
                        <span>

                        </span>
                        <span>

                        </span>
                </div>
            </div>
        </header>
    );
};

