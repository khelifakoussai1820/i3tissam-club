function Header() {
  return (
    <>
      <header className="flex items-center justify-between ">
        
        <h1 className="font-bold text-3xl text-emerald-600">
          I3tissamClub
        </h1>


        <nav > 
          <ul className="flex items-center justify-center gap-8 text-xl">
            <li> About US </li>
            <li> Our Events </li>
            <li> Testimonials </li>
          </ul>
        </nav>

          <button className="text-center text-white font-bold text-xl cursor-pointer w-28 h-10 bg-linear-to-br from-emerald-700 to-green-400 rounded-lg hover:bg-linear-to-br hover:from-black hover:to-gray-700 hover:transition-colors duration-500 ">
            Join us
          </button>  


      </header>
    </>
  )
}

export default Header
