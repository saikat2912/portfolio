import React,{useState,useEffect} from "react"
import {Navbar,Container} from "react-bootstrap"
import logo from '../assets/img/logo.svg'
import navIcon from '../assets/img/nav-icon1.svg'
import navIcon2 from '../assets/img/nav-icon2.svg'
import navIcon3 from '../assets/img/nav-icon3.svg'

export const Navbar=()=>{
    const [activeLink,setACtiveLink] = useState('home');
    const [scolled,setScrolled] = useState(false);

    useEffect(()=>{
        const onScroll = ()=>{
            if(window.scrollY>50){
                setScrolled(true);
            }
            else{
                setScrolled(false);
            }
        }

        window.addEventListener("scroll",onScroll);

        return ()=> window.removeEventListener("scroll",onScroll)
    })

    return(
        <Navbar expand="lg" className={scolled? "scrolled":""}>
        <Container>
          <Navbar.Brand href="#home"><img src={logo} alt="logo"/></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" >
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home" className={activeLink==='home'?'active-navbar-link':'navbar-link'} onClick={()=>onUpdateActiveLink('home')}>Home</Nav.Link>
              <Nav.Link href="#link"  className={activeLink==='skills'?'active-navbar-link':'navbar-link'} onClick={()=>onUpdateActiveLink('skills')}>Skills</Nav.Link>
              <Nav.Link href="#projects"  className={activeLink==='projects'?'active-navbar-link':'navbar-link'} onClick={()=>onUpdateActiveLink('projects')}>Projects</Nav.Link>
              
            </Nav>
            <span className="navbar-text">
                <div className="social-icon">
                    <a href="#"><img src={navIcon} alt=""/></a>
                    <a href="#"><img src={navIcon2} alt=""/></a>
                    <a href="#"><img src={navIcon3} alt=""/></a>
                </div>
                </span>

          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}