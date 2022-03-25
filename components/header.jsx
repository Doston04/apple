import { useState } from "react";

const Header = () => {
    const [isSearchBar, setIsSearchBar] = useState(false);
    const [isMobileHeader, setIsMobileHeader] = useState(false)

    const openSearchBar = () => {
      setIsSearchBar(true);
    };

    const openMobileHeader = () => {
      setIsMobileHeader(true)
    }

    return (
      <header className="bg-neutral-800 bg-opacity-95 backdrop-blur-sm sticky top-0 z-10">
        <div id="headerInner" className="h-10 text-white flex items-center justify-center"> 
          <nav className="flex items-center text-[12px] space-x-10 tracking-wide">
            <span onClick={openMobileHeader}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 opacity-80 hover:opacity-100 transition duration-300 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
              </svg>  
            </span> 
            <a className="opacity-80 hover:opacity-100 transition duration-300" href="#">Store</a>
            <a className="opacity-80 hover:opacity-100 transition duration-300" href="#">Mac</a>
            <a className="opacity-80 hover:opacity-100 transition duration-300" href="#">iPad</a>
            <a className="opacity-80 hover:opacity-100 transition duration-300" href="#">iPhone</a>
            <a className="opacity-80 hover:opacity-100 transition duration-300" href="#">Watch</a>
            <a className="opacity-80 hover:opacity-100 transition duration-300" href="#">AirPods</a>
            <a className="opacity-80 hover:opacity-100 transition duration-300" href="#">TV & Home</a>
            <a className="opacity-80 hover:opacity-100 transition duration-300" href="#">Only on Apple</a>
            <a className="opacity-80 hover:opacity-100 transition duration-300" href="#">Accessories</a>
            <a className="opacity-80 hover:opacity-100 transition duration-300" href="#">Support</a>
            <span onClick={openSearchBar} id="searchBtn" className="opacity-80 hover:opacity-100 transition duration-300 hover:cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </span>
            <span id="shopBtn" className="opacity-80 hover:opacity-100 transition duration-300 hover:cursor-pointer relative">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              <div className="absolute -bottom-1 -right-1 bg-white w-3 h-3 rounded-full flex justify-center items-center">
                <span className="text-black text-[10px]">1</span>
              </div>
            </span>
          </nav>
        </div>
        {isSearchBar && <SearchBar setIsSearchBar={setIsSearchBar} />}
        {isMobileHeader && <MobileHeader setIsMobileHeader={setIsMobileHeader} />}
      </header>
    )
  }

export default Header;  

const SearchBar = ({ setIsSearchBar }) => {
  const closeSearchBar = () => {
    setIsSearchBar(false)
  }

  return (
    <div id="searchBar" className="text-white fixed inset-0 bg-black">
      <form className="flex items-center max-w-xl mx-auto relative h-10">
        <span className="opacity-60" id="searchBtn">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </span>
        <input id="searchInp" className="bg-black flex-auto text-white opacity-80 text-[14px] px-4" type="text" placeholder="Search apple.com" />
        <span onClick={closeSearchBar} id="xBtn" className="cursor-pointer opacity-60">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </span>
      </form>
    </div>
  )
}

const MobileHeader = ({ setIsMobileHeader }) => {
  // const closeMobileMenu = () => {
  //   setIsMobileHeader(true)
  // }

  return (
    <div id="mobileHeader" className="absolute inset-0 w-full h-screen text-white">
      <p>PPP</p>
    </div>
  )
}