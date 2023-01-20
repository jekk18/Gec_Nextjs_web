import { useState, useEffect } from 'react'
import { useRouter } from "next/router"
import Link from 'next/link'  
import Image from 'next/image' 




const Header = () => {
   const [langVector, setLangVector] = useState(false);
   
   const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    function watchScroll() {
      window.addEventListener("scroll", () => {setScrollY(window.pageYOffset) });
    }
    watchScroll();
  });


  const router = useRouter();
  
  return (
     <header> 
        <div className={`__header ${scrollY > 10 ? 'change-header' : ''}`}>
           <div className="container">
            <div className="__header-child">
               <div className="__header-left">
               <Link href="/" className="logo"> 
                  {scrollY > 10 ? 
                     <Image 
                        src={require('../../assets/img/logo2.png')}  
                        alt="img"
                     />
                  :
                     <Image 
                        src={require('../../assets/img/logo1.png')}   
                        alt="img"  
                     />
                  } 
               </Link>
                  <nav className='__nav'>
                     <ul>
                        <li className={router.pathname == "/services" ? "active-link" : ""}>
                           <Link href="/services" className='nav-link'>
                              Services
                           </Link>
                        </li>
                        <li className={router.pathname == "/portfolio" ? "active-link" : ""}>
                           <Link href="/portfolio" className='nav-link'>
                              Portfolio
                           </Link>
                        </li>
                        <li className={router.pathname == "/insights" ? "active-link" : ""}>
                           <Link href="/insights" className='nav-link'>
                              Insights
                           </Link>
                        </li>
                        <li className={router.pathname == "/team" ? "active-link" : ""}>
                           <Link href="/team" className='nav-link'>
                              Team
                           </Link>
                        </li>
                        <li className={router.pathname == "/career" ? "active-link" : ""}>
                           <Link href="/career" className='nav-link'>
                              Career
                           </Link>
                        </li>
                     </ul>
                  </nav>
               </div>
               <div className="__search-lang-cont">
                  <div className="__search-icon-link">
                     <Link href="/search">
                        <span> 
                           <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <g clipPath="url(#clip0_1_388)">
                              <path d="M11 2C15.968 2 20 6.032 20 11C20 15.968 15.968 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2ZM11 18C14.867 18 18 14.867 18 11C18 7.132 14.867 4 11 4C7.132 4 4 7.132 4 11C4 14.867 7.132 18 11 18ZM19.485 18.071L22.314 20.899L20.899 22.314L18.071 19.485L19.485 18.071Z" fill="white"/>
                              </g>
                           </svg> 
                        </span>
                     </Link>
                  </div>
                  <div className="contact-btn-link">
                     <Link href="/contact" className='contact-link-btn' >Contact Us</Link>
                  </div>
                  <div className={`__lang-box ${langVector ? "select-open" : ''}`}>
                     <div className="lang-select">
                        <Link href="#">en</Link>
                        <Link href="#">ka</Link>
                        <Link href="#">ru</Link>
                     </div>
                     <span className="lang-vector" onClick={() => {setLangVector(!langVector)}}>
                        <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <path d="M7.00001 5.17192L11.95 0.221924L13.364 1.63592L7.00001 7.99992L0.636014 1.63592L2.05001 0.221923L7.00001 5.17192Z" fill="white"/>
                        </svg> 
                     </span>
                  </div>
               </div>
            </div>
           </div>
           <div className="__header-line"></div>
        </div>
     </header>
  )
}

export default Header