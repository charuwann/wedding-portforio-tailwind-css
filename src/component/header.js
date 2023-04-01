import { useEffect } from "react";

import "../styles/header.css";
import Banner from "./banner";

const navigation = [
  { name: 'HOME', href: '#' },
  { name: 'ABOUT', href: '#about' },
  { name: 'PORTFORIO', href: '#portforio' },
  { name: 'BLOG', href: '#blog' },
  { name: 'VIDEO', href: '#video' },
  { name: 'TESTMONAILS', href: '#' },
  { name: 'CONTACT', href: '#' },
]

export default function Header() {
  useEffect(() => {
    window.onscroll = function() {myFunction()};

    var navbar = document.getElementById("navbar");
    var sticky = navbar.offsetTop;

    function myFunction() {
      if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
      } else {
        navbar.classList.remove("sticky");
      }
    }
  }, [])

  return (
    <div className="bg-white">
      <header className="relative inset-x-0 top-0 z-50">
        <Banner />
        <nav id="navbar" className="flex justify-center top-3 fixed navbar">
          <div  className="body top-3 py-7 flex justify-between ">
            {
              navigation.map(item => (
                  <a key={item.name} href={item.href}  className="text-2xl font-normal no-underline text-white">
                    {item.name}
                  </a>
              ))
            }
          </div>
        </nav>
      </header>
    </div>
  )
}
