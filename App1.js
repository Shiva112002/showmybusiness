import React from 'react'
import {
    Routes,
    Route,
    useNavigationType,
    useLocation,
  } from "react-router-dom";
 import Desktop1 from './Desktop1';
  import { useEffect } from "react";
  const Navbar = () => {
    return (
      <nav className="nav">
        <ul>
          <li><a href="/">Google</a></li>
          <li><a href="/business">Business Profile</a></li>
          <li><a href="/overview">Overview</a></li>
        </ul>
        <ul className="right">
          <li><a href="/signin">Sign In</a></li>
          <li><a href="https://www.google.com/search?q=my+business&mat=CW9RcB1_sYuaEkwBeenfiFbToGjV948NO1C0lCTPUvgwuNFMpXkxyj_thI8a1yQyjGkOK9dAWtOqeYbBt0RYFNrNsGKZlXL2L04e5fbpM9NAaouMd0xC&hl=en&authuser=0" target="_blank" rel="noopener noreferrer">Manage Now</a></li>
        </ul>
      </nav>
    );
  };
export default function App1() {
    const action = useNavigationType();
    const location = useLocation();
    const pathname = location.pathname;
  
    useEffect(() => {
      if (action !== "POP") {
        window.scrollTo(0, 0);
      }
    }, [action, pathname]);
  
    useEffect(() => {
      let title = "";
      let metaDescription = "";
  
      switch (pathname) {
        case "/":
          title = "";
          metaDescription = "";
          break;
      }
  
      if (title) {
        document.title = title;
      }
  
      if (metaDescription) {
        const metaDescriptionTag = document.querySelector(
          'head > meta[name="description"]'
        );
        if (metaDescriptionTag) {
          metaDescriptionTag.content = metaDescription;
        }
      }
    }, [pathname]);
  return (
    <div>
    <Desktop1/>

    </div>
  )
}
