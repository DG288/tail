
function Nav() {
    return(
    <nav className="nav bg-[black] flex w-[99%] min-w-[320px] h-[100px] border-[4px] rounded-[30px] drop-shadow-[0_4px_20px_#09090b]">
        <div className="">
            <img 
            src="/capdra.png" 
            alt="Logo"
            className='w-[100px] h-[100px] rounded-full'
            />
        </div>
        <div className="text-[white] columns-3 flex justify-around items-center w-[100%]">
            <a href="https://github.com/DG288" className="no-underline text-[white] [text-shadow:2px_2px_9px_rgba(255,255,255,1)]"><h2>info</h2></a>
            <a href="https://github.com/DG288" className="no-underline text-[white] [text-shadow:2px_2px_9px_rgba(255,255,255,1)]"><h2>detalles</h2></a>
            <a href="https://github.com/DG288" className="no-underline text-[white] [text-shadow:2px_2px_9px_rgba(255,255,255,1)]"><h2>contacto</h2></a>
        </div>
    </nav>
    )
}

export default Nav;
