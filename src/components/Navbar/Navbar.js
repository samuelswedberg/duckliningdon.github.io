import { Nav, NavLink, Bars, NavMenu, NavLogo, NavMenuMobile, NavLinkMobile} from './NavbarElements';
import React, { useState } from 'react';

function Navbar() {
    const [isOpen , setOpen] = useState(false);
    const openMenu = () => setOpen(!isOpen);
    /*  |<div style={{cursor: 'pointer', fontStyle: 'italic', padding: '0 0.5rem', color: '#808080' }}>blog</div> */
    return (
        <>
            <Nav>
                <NavLogo to='/'>SAMUEL SWEDBERG</NavLogo>
                <Bars onClick={openMenu} toggle={() => setOpen(!isOpen)}></Bars>

                {isOpen && <NavMenuMobile onClick={openMenu}>
                    <NavLinkMobile to='/projects' activeStyle>
                        PROJECTS
                    </NavLinkMobile>
                    <NavLinkMobile to='/about' activeStyle>
                        ABOUT
                    </NavLinkMobile>
                    <NavLinkMobile to='/contact' activeStyle>
                        CONTACT
                    </NavLinkMobile>
                </NavMenuMobile>}
                <NavMenu>
                    <NavLink to='/projects' activeStyle>
                        PROJECTS
                    </NavLink>
                    <NavLink to='/about' activeStyle>
                        ABOUT
                    </NavLink>
                    <NavLink to='/contact' activeStyle>
                        CONTACT
                    </NavLink>
                </NavMenu>
            </Nav>

        </>
    );
}

export default Navbar