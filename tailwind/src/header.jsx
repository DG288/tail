import logo1 from './assets/logo1.png';
import carrito from './assets/carrito.png';

function Header(){
    return(
        <header className="w-[100%] h-[60px] bg-[black] mb-[10px] flex justify-center items-center rounded-[20px] border-[1px] border-[white] drop-shadow-[0_4px_20px_#09090b] ">
            <h1 className="text-[white] font-[100] [text-shadow:2px_2px_9px_rgba(255,255,255,1)] ">My Website</h1>
            <div className="img ml-[15px]">
            <img src={logo1} alt="logo-empresa " className="w-[50px] rounded-full h-[45px]"/>
            </div>
            <div className="logo-compra">
            <img src={carrito} alt="logo_compra" className="w-[40px] rounded-full h-[30px] cursor-pointer"/>
            </div>
        </header>
    );
}
export default Header;