import { Link } from 'react-router-dom'
import { LoginContext } from "../../context/LoginContext.jsx"

import gif from '../../assets/promocion.gif'
const PromoService = () => {
  return (
    <div className="p-4 md:p-8 max-w-[1300px] mx-auto ">
            <div className="bg-white   rounded-[2rem] md:rounded-[4rem] p-8 sm:flex sm:items-center md:p-12 sm:justify-center justify-items-center ">
                <div className=" flex  flex-col md:flex-row justify-center items-center">
                  <div className='flex flex-col items-center'>
                    <h1 className="text-black text-2xl mb-3 md:text-3xl lg:text-4xl md:mb-8 font-semibold text-center">Promoción servicio de instalación</h1>
                    <Link to={'/productos'}><img src={gif} alt="" /> </Link>
                  </div>
                    <div className='flex flex-col ' >
                    <p className="text-black  mb-6  text-1xl w-60 text-justify lg:text-2xl lg:w-auto md:w-auto md:mb-10 ">A partir de $1500 MXN en compra el servicio de instalación es
                     <span className='text-red-600 font-bold'> GRATIS!</span> No te
                    pierdas de esta gran promoción!  </p> 
                    <Link to={'/productos'} type="highlight" className="w-80 items-center block px-10 py-3.5 text-base font-medium text-center text-white bg-black transition duration-500 ease-in-out transform border-2 border-white shadow-md rounded-xl hover:bg-white hover:border-black hover:text-black"> Comprar ahora </Link>
                    </div>
                    
                    
                    
                </div>
            </div>
        </div>
  )
}

export default PromoService
