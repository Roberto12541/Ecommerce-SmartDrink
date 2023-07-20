import { Link } from 'react-router-dom'
import carrito from '../../assets/carrito.png'

const PromoProducts = () => {
  return (
    <div className=' mt-20 flex flex-col md:flex-row md:gap-10 bg-black rounded-xl w-11/12 m-auto p-5 justify-center' >
        <div className=' rounded-xl p-6  flex flex-col justify-center items-center  '>
            <h1 className='text-white text-3xl md:text-6xl   font-semibold md:text-6x1 text-center'>Productos</h1>
            <p className='text-white text-1xl font-sans mt-8 text-justify  md:text-3xl w-60 md:w-auto lg:w-auto md:pl-10'>Los mejores productos inteligentes para cambiar el ambiente donde te ubiques, 
            encuentra los mejores precios solo en SmartDrink! Y disfruta de cada uno de ellos.</p>
            <Link to={'/productos'} type="highlight" className="w-40 mt-20 items-center block px-10 text-sm py-3.5 md:text-2xl md:w-80 font-semibold text-center text-white bg-black transition duration-500 ease-in-out transform border-2 border-white shadow-md rounded-xl hover:bg-white hover:border-black hover:text-black"> Comprar ahora </Link>

        </div>
        
        <div className="flex justify-center items-center">
            <a href="/productos"><img className='rounded-2xl w-40 md:w-auto' src={carrito} alt="" /></a>
            
        </div>
        

      
    </div>
  )
}

export default PromoProducts
