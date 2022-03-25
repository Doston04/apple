const Footer = () => {
  const currentYear = new Date().getFullYear();  
  return (
    <footer>
      <div id="footerInner" className="max-w-6xl mx-auto px-4 flex flex-col justify-center py-8">
        <div id="inner1" className="grid grid-cols-5 justify-start items-start">
          <div id="1" className="w-full flex flex-col justify-center items-start">
            <h1 className="text-[12px] text-white">Shop and Learn</h1>
            <div className="navigation flex flex-col mt-2 space-y-2 text-[12px] text-white opacity-80">
              <a className="hover:hover:underline" href="#">Store</a>
              <a className="hover:hover:underline" href="#">Mac</a>
              <a className="hover:hover:underline" href="#">iPad</a>
              <a className="hover:hover:underline" href="#">iPhone</a>
              <a className="hover:hover:underline" href="#">Watch</a>
              <a className="hover:hover:underline" href="#">AirPods</a>
              <a className="hover:hover:underline" href="#">TV & Home</a>
              <a className="hover:hover:underline" href="#">iPod touch</a>
              <a className="hover:hover:underline" href="#">AirTag</a>
              <a className="hover:hover:underline" href="#">Accessories</a>
              <a className="hover:hover:underline" href="#">Gift Cards</a>
            </div>
          </div>
          <div id="2" className="w-full flex flex-col justify-center items-start">
            <h1 className="text-[12px] text-white">Services</h1>
            <div className="navigation flex flex-col mt-2 space-y-2 text-[12px] text-white opacity-80">
              <a className="hover:hover:underline" href="#">Apple Music</a>
              <a className="hover:hover:underline" href="#">Apple TV+</a>
              <a className="hover:hover:underline" href="#">Apple Fitness+</a>
              <a className="hover:hover:underline" href="#">Apple News+</a>
              <a className="hover:hover:underline" href="#">Apple Arcade</a>
              <a className="hover:hover:underline" href="#">iCloud</a>
              <a className="hover:hover:underline" href="#">Apple One</a>
              <a className="hover:hover:underline" href="#">Apple Card</a>
              <a className="hover:hover:underline" href="#">Apple Books</a>
              <a className="hover:hover:underline" href="#">Apple Podcasts</a>
              <a className="hover:hover:underline" href="#">App Store</a>
            </div>
            <div className="mt-5">
              <h1 className="text-[12px] text-white">Account</h1>
              <div className="navigation flex flex-col mt-2 space-y-2 text-[12px] text-white opacity-80">
                <a className="hover:hover:underline" href="#">Manage Your Apple ID</a>
                <a className="hover:hover:underline" href="#">Apple Store Account</a>
                <a className="hover:hover:underline" href="#">iCloud.com</a>
              </div>
            </div>
          </div>
          <div id="3" className="w-full flex flex-col justify-center items-start">
            <h1 className="text-[12px] text-white">Apple Store</h1>
            <div className="navigation flex flex-col mt-2 space-y-2 text-[12px] text-white opacity-80">
              <a className="hover:hover:underline" href="#">Find a Store</a>
              <a className="hover:hover:underline" href="#">Genius Bar</a>
              <a className="hover:hover:underline" href="#">Today at Apple</a>
              <a className="hover:hover:underline" href="#">Apple Camp</a>
              <a className="hover:hover:underline" href="#">Apple Store App</a>
              <a className="hover:hover:underline" href="#">Refurbished and Clearence</a>
              <a className="hover:hover:underline" href="#">Financing</a>
              <a className="hover:hover:underline" href="#">Apple Trade In</a>
              <a className="hover:hover:underline" href="#">Order Status</a>
              <a className="hover:hover:underline" href="#">Shopping Help</a>
            </div>
          </div>
          <div id="4" className="w-full flex flex-col justify-center items-start">
            <h1 className="text-[12px] text-white">For Business</h1>
            <div className="navigation flex flex-col mt-2 space-y-2 text-[12px] text-white opacity-80">
              <a className="hover:hover:underline" href="#">Apple and Business</a>
              <a className="hover:hover:underline" href="#">Shop for Business</a>
            </div>
            <div className="mt-5">
              <h1 className="text-[12px] text-white">For Education</h1>
              <div className="navigation flex flex-col mt-2 space-y-2 text-[12px] text-white opacity-80">
                <a className="hover:hover:underline" href="#">Apple and Education</a>
                <a className="hover:hover:underline" href="#">Shop for K-12</a>
                <a className="hover:hover:underline" href="#">Shop for College</a>
              </div>
            </div>
            <div className="mt-5">
              <h1 className="text-[12px] text-white">For Healthcare</h1>
              <div className="navigation flex flex-col mt-2 space-y-2 text-[12px] text-white opacity-80">
                <a className="hover:hover:underline" href="#">Apple in Healthcare</a>
                <a className="hover:hover:underline" href="#">Health on Apple Watch</a>
                <a className="hover:hover:underline" href="#">Health Records on iPhone</a>
              </div>
            </div>
            <div className="mt-5">
              <h1 className="text-[12px] text-white">For Government</h1>
              <div className="navigation flex flex-col mt-2 space-y-2 text-[12px] text-white opacity-80">
                <a className="hover:hover:underline" href="#">Shop for Government</a>
                <a className="hover:hover:underline" href="#">Shop for Veterans and Military</a>
              </div>
            </div>
          </div>
          <div id="5" className="w-full flex flex-col justify-center items-start">
            <h1 className="text-[12px] text-white">Apple Values</h1>
            <div className="navigation flex flex-col mt-2 space-y-2 text-[12px] text-white opacity-80">
              <a className="hover:hover:underline" href="#">Accesibility</a>
              <a className="hover:hover:underline" href="#">Education</a>
              <a className="hover:hover:underline" href="#">Environment</a>
              <a className="hover:hover:underline" href="#">Inclusion and Diversity</a>
              <a className="hover:hover:underline" href="#">Privacy</a>
              <a className="hover:hover:underline" href="#">Racial Equaility and Justice</a>
              <a className="hover:hover:underline" href="#">Supplier Responsibility</a>
            </div>
            <div className="mt-5">
              <h1 className="text-[12px] text-white">About Apple</h1>
              <div className="navigation flex flex-col mt-2 space-y-2 text-[12px] text-white opacity-80">
                <a className="hover:hover:underline" href="#">Newsroom</a>
                <a className="hover:hover:underline" href="#">Apple Leadership</a>
                <a className="hover:hover:underline" href="#">Career Opportunities</a>
                <a className="hover:hover:underline" href="#">Investors</a>
                <a className="hover:hover:underline" href="#">Ethicks & Compilance</a>
                <a className="hover:hover:underline" href="#">Events</a>
                <a className="hover:hover:underline" href="#">Contact Apple</a>
              </div>
            </div>
          </div>
        </div>
        <div id="inner2">
          <div id="moreInfo" className="mt-6 mb-3">
            <p className="text-[13px] tracking-wide">More ways to shop: <span className="ehSpan text-blue-500 hover:underline"><a href="#">Find an Apple Store</a></span> or <span className="ehSpan text-blue-500 hover:underline"><a href="#">other retailer</a></span> near you. Or call 1-800-MY-APPLE.</p>
          </div> 
          <hr /> 
          <div className="flex items-center justify-center relative mt-2"> 
            <p id="copyParagraph" className="text-[12px] tracking-wide absolute left-0">Copyright &copy; <span>{currentYear}</span> Apple Inc. All rights reserved.</p>  
            <nav id="footerNav" className="flex">
              <a className="text-[12px] text-white opacity-80 px-4 hover:underline" href="#">Privacy Policy</a>  
              <a className="text-[12px] text-white opacity-80 px-4 hover:underline" href="#">Terms of Use</a>  
              <a className="text-[12px] text-white opacity-80 px-4 hover:underline" href="#">Sales and Refunds</a>  
              <a className="text-[12px] text-white opacity-80 px-4 hover:underline" href="#">Legal</a>  
              <a className="text-[12px] text-white opacity-80 px-4 hover:underline" href="#">Site Map</a>  
            </nav>
            <a id="USA" href="#" className="text-[12px] tracking-wide text-white opacity-80 absolute right-0 hover:underline">United States</a>
          </div>
        </div>
      </div>
    </footer>  
  )  
} 

export default Footer;