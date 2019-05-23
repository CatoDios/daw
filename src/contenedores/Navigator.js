import React, { Component } from 'react';
import SideNav, {NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import { FaUser, FaStore, FaHandsHelping, FaReadme, FaBook } from "react-icons/fa";
import { IoIosLogOut } from "react-icons/io";
import { Link } from 'react-router-dom';

import '@trendmicro/react-sidenav/dist/react-sidenav.css';

class Navigator extends Component {
    render() {
        return (
<div class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

<a class="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
  <div class="sidebar-brand-icon rotate-n-15">
    <i class="fas fa-laugh-wink"></i>
  </div>
  <div class="sidebar-brand-text mx-3">Cachimbo GO</div>
</a>

<hr class="sidebar-divider my-0"/>

<div class="imagen">
</div>

<hr class="sidebar-divider"/>

<li class="nav-item collapsed"  >

    <Link to="/perfil" className="nav-link" > 
        <i class="fas fa-fw fa-user-circle"></i>
          <span>Perfil</span>
    </Link>


</li>

<li class="nav-item collapsed"  >

    <Link to="/tienda" className="nav-link" > 
        <i class="fas fa-fw fa-store"></i>
          <span>Tienda</span>
    </Link>


</li>

<li class="nav-item collapsed"  >

    <Link to="/practicar" className="nav-link" > 
        <i class="fas fa-fw fa-pencil-alt"></i>
          <span>Practicar</span>
    </Link>


</li>


<li class="nav-item collapsed"  >

    <Link to="/nosotros" className="nav-link" > 
        <i class="fas fa-fw fa-building"></i>
          <span>Nosotros</span>
    </Link>


</li>



<li class="nav-item collapsed"  >

    <Link to="/ayuda" className="nav-link" > 
        <i class="fas fa-fw fa-question"></i>
          <span>Ayuda</span>
    </Link>


</li>



<hr class="sidebar-divider d-none d-md-block"/>
</div>


           /*  <SideNav
                style={{position:'fixed'}}
            >
                <SideNav.Toggle />
                <SideNav.Nav defaultSelected="home">
                    <NavItem eventKey="home">
                        <NavIcon>
                            <Link to="/perfil"><FaUser style={{ fontSize: '1.75em' }} /></Link>
                        </NavIcon>
                        <NavText>
                            <Link to="/asignaturas">Perfil</Link>
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="home">
                        <NavIcon>
                            <Link to="/"><FaBook style={{ fontSize: '1.75em' }} /></Link>
                        </NavIcon>
                        <NavText>
                            <Link to="/">Practicar</Link>
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="home">
                        <NavIcon>
                            <Link to="/tienda"><FaStore style={{ fontSize: '1.75em' }} /></Link>
                        </NavIcon>
                        <NavText>
                            <Link to="/tienda">Tienda</Link>
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="home">
                        <NavIcon>
                            <Link to="/ayuda"><FaHandsHelping style={{ fontSize: '1.75em' }} /></Link>
                        </NavIcon>
                        <NavText>
                            <Link to="/ayuda"> Ayuda</Link>
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="home">
                        <NavIcon>
                            
                            <Link to="/nosotros"><FaReadme style={{ fontSize: '1.75em' }} /></Link>
                        </NavIcon>
                        <NavText>
                             <Link to="/nosotros"> Nosotros</Link>
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="home">
                        <NavIcon>
                            <Link to="/#" onClick={this.props.logout}><IoIosLogOut style={{ fontSize: '1.75em' }} /></Link>
                        </NavIcon>
                        <NavText>
                            <Link to="/#" onClick={this.props.logout}>Cerrar Sesion</Link>
                        </NavText>
                    </NavItem>
                </SideNav.Nav>
            </SideNav> */

        );
    }
}

export default Navigator;
