import logo from "../assets/images/logo.svg";
const Header = () => {
  return (
    <section className=" fixed z-50 w-full bg-[#101111] py-11.5 border border-white/10 hover:border-[#B1CAFD] " >
      <div className="container mx-auto px-20"> 
        <div className="flex justify-between items-center">
      <div className="flex items-center gap-x-3">
        <img src={logo} alt="logo" />
      </div>
      {/* navigation bar */}
      <div className="p-[2px] rounded-full bg-gradient-to-r from-[#7A87FB] to-[#FFD49C]">
        <div className="px-3 py-1.5 bg-[#101111] text-white rounded-full">
<div className=" flex items-center gap-x-10">
        <a href="#" className="py-2 px-4  hover:bg-[#292929] duration-200 text-white rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-5"
          >
            <path d="M13 19H19V9.97815L12 4.53371L5 9.97815V19H11V13H13V19ZM21 20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V9.48907C3 9.18048 3.14247 8.88917 3.38606 8.69972L11.3861 2.47749C11.7472 2.19663 12.2528 2.19663 12.6139 2.47749L20.6139 8.69972C20.8575 8.88917 21 9.18048 21 9.48907V20Z"></path>
          </svg>
        </a>
        <a href="#" className="py-2 px-4 hover:bg-[#292929] duration-200  rounded-full">About</a>
        <a href="#" className="py-2 px-4 hover:bg-[#292929] duration-200  rounded-full">Projects</a>
        <a href="#" className="py-2 px-4 hover:bg-[#292929] duration-200  rounded-full">Content me</a>
      </div>
        </div>

      </div>
      
      <div className="flex items-center ">
        <button className="p-[2px] bg-gradient-to-r from-[#FFD49C] to-[#7A87FB] rounded-full">
        <p className="font-md px-5 py-3.5 bg-gradient-to-r from-[#7A87FB] to-[#FFD49C] rounded-full w-full h-full">Hire me</p>

        </button>
        <button className="p-[2px] size-[54px] bg-gradient-to-r from-[#FFD49C] to-[#7A87FB] rounded-full">
          <p className=" flex items-center justify-center bg-gradient-to-r from-[#7A87FB] to-[#FFD49C] w-full h-full rounded-full">

          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="size-5" fill="#000000"><path d="M4 22C4 17.5817 7.58172 14 12 14C16.4183 14 20 17.5817 20 22H18C18 18.6863 15.3137 16 12 16C8.68629 16 6 18.6863 6 22H4ZM12 13C8.685 13 6 10.315 6 7C6 3.685 8.685 1 12 1C15.315 1 18 3.685 18 7C18 10.315 15.315 13 12 13ZM12 11C14.21 11 16 9.21 16 7C16 4.79 14.21 3 12 3C9.79 3 8 4.79 8 7C8 9.21 9.79 11 12 11Z"></path></svg>
          </p>
        </button>
      </div>
    </div>
      </div>
    </section>
    
  );
};

export default Header;
