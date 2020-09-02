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
import React from "react";

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

function SectionNavigation() {
  return (
    <>
      <div className="section section-navigation">
        <Container className="tim-container">          
        </Container>
        <div id="navbar">
          <div
            className="navigation-example"
            style={{
              backgroundImage:
                "url(" + require("assets/img/ilya-yakover.jpg") + ")",
            }}
          >
            <Navbar className="bg-primary" expand="lg">
              <Container>
                <NavbarBrand href="#pablo" onClick={(e) => e.preventDefault()}>
                  Products
                </NavbarBrand>
                <button
                  aria-controls="navbarNav"
                  aria-expanded={false}
                  aria-label="Toggle navigation"
                  className="navbar-toggler navbar-toggler-right burger-menu"
                  data-target="#navbar-primary"
                  data-toggle="collapse"
                  id="navbar-primary"
                  type="button"
                >
                  <span className="navbar-toggler-bar" />
                  <span className="navbar-toggler-bar" />
                  <span className="navbar-toggler-bar" />
                </button>
                <UncontrolledCollapse navbar toggler="#navbar-primary">
                  <Nav className="ml-auto" navbar>
                    <NavItem>
                      <NavLink
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        <i
                          aria-hidden={true}
                          className="nc-icon nc-compass-05"
                        />
                         BLOGS
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        <i
                          aria-hidden={true}
                          className="nc-icon nc-single-02"
                        />
                         Contact US
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        <i
                          aria-hidden={true}
                          className="nc-icon nc-settings-gear-65"
                        />
                         Settings
                      </NavLink>
                    </NavItem>
                  </Nav>
                </UncontrolledCollapse>
              </Container>
            </Navbar>            
          </div>
        </div>
      </div>{" "}
    </>
  );
}

export default SectionNavigation;
