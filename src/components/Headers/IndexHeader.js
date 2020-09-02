/*!

=========================================================
* Paper Kit React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
/*eslint-disable*/
import React from "react";

import SectionHeaderMenu from "views/index-sections/SectionHeaderMenu.js";
// reactstrap components
import {
  UncontrolledCollapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
} from "reactstrap";

// core components

function IndexHeader() {
  return (
    <>
      <div
        className="page-header section-dark"
        style={{
          backgroundImage:
            "url(" + require("assets/img/antoine-barres.jpg") + ")",
        }}
      >
        

        <div  />
        <div className="main">                       
        <SectionHeaderMenu />
        </div>
        <div className="filter" />
        <div className="content-left">
          <Container>
            <div className="title-brand">
              <h1 className="presentation-title">Kisan Sanchar</h1>              
            </div>            
          </Container>
        </div>        
      </div>
    </>
  );
}

export default IndexHeader;
