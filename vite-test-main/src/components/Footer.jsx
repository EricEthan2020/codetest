import logo from "../assets/images/logo.svg";
const Footer = () => {
  return (
    <section className="  py-11.5 border border-white/10 hover:border-[#B1CAFD] ">
        <div className="container mx-auto px-20">
            <div className="flex justify-between items-center">
      <div className="flex items-center gap-x-3">
        <img src={logo} alt="logo" />
      </div>
      {/* navigation bar */}
      <div className="p-[2px] rounded-full bg-gradient-to-r from-[#7A87FB] to-[#FFD49C]">
        <div className="px-3 py-1.5 bg-[#101111] text-white rounded-full">
<div className=" flex items-center gap-x-10">
        <a href="#" className="py-2 px-4  text-white rounded-full">
          <svg xmlns="http://www.w3.org/2000/svg" className="size-5 fill-white" viewBox="0 0 24 24">
            <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
       </svg>
        </a>
        <a href="#" className="py-2 px-4  rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" className="size-5 fill-white" viewBox="0 0 512 512">
          <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"></path>
        </svg>
        </a>
        <a href="#" className="py-2 px-4  rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" className="size-5 fill-white" viewBox="0 0 24 24">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path>
       </svg>
        </a>
        <a href="#" className="py-2 px-4  rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" className="size-5 fill-white" viewBox="-4 -2 32 32">
            <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"></path>
       </svg>
        </a>
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

export default Footer;
