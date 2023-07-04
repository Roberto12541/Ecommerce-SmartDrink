import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom';
import Logo from '../../assets/Logo.png'
import LogoCorto from '../../assets/Logo-mobile.png'
import Search from './Search';

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);

  const changeState = () => {
    setNavbar(!navbar);
  }

  return (
    <header className='py-4 bg-white relative z-50'>
      <div className="flex items-center justify-between px-4 max-w-[1200px] mx-auto">
        <ul className='gap-4 hidden text-lg lg:flex'>
          <li><NavLink to={'/'}>Inicio</NavLink></li>
          <li><NavLink to={'/servicios'}>Servicios</NavLink></li>
          <li><NavLink to={'/productos'}>Productos</NavLink></li>
          <li><NavLink to={'/nosotros'}>Nosotros</NavLink></li>
        </ul>
        <Link to={'/'}>
          <img src={Logo} className='hidden h-14 lg:block' alt="Logo largo" />
          <img src={LogoCorto} className='h-14 lg:hidden' alt="Logo largo" />
        </Link>
        <div className="flex items-center gap-4">
          <Search/>
          <button type="button" className="relative inline-flex items-center py-2.5 text-sm font-medium text-center cursor-pointer
          ml-1" data-drawer-target="drawer-right-example" data-drawer-show="drawer-right-example" data-drawer-placement="right" aria-controls="drawer-right-example">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
            </svg>
            <span className="sr-only">Cart Items</span>
            <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-black border-2 rounded-full -top-1 -left-4 dark:border-gray-900">8</div>
          </button>
          <button type="button" className="relative inline-flex items-center py-2.5 text-sm font-medium text-center cursor-pointer" data-modal-target="authentication-modal" data-modal-toggle="authentication-modal">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span className="sr-only">Profile</span>
          </button>
          {
            navbar ?
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 lg:hidden" onClick={changeState}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg> :
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 lg:hidden" onClick={changeState}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
          }
        </div>
      </div>
      {
        navbar &&
        <div className="-z-10 animate-[aparecer_300ms_ease-in-out] bg-white w-full absolute p-6 font-medium">
          <ul className='flex flex-col gap-4'>
            <li><NavLink to={'/'} onClick={changeState}>Inicio</NavLink></li>
            <li><NavLink to={'/servicios'} onClick={changeState}>Servicios</NavLink></li>
            <li><NavLink to={'/productos'} onClick={changeState}>Productos</NavLink></li>
            <li><NavLink to={'/nosotros'} onClick={changeState}>Contacto</NavLink></li>
            <li>
              <form className="flex items-center">
                <label htmlFor="simple-search" className="sr-only">Buscar</label>
                <div className="relative w-full">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" /></svg>
                  </div>
                  <input type="text" id="simple-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Buscar" required />
                </div>
                <button type="submit" className="p-2.5 ml-2 text-sm font-medium text-white bg-black rounded-lg border hover:scale-105 focus:ring-blue-300">
                  <svg className="w-5 h-5" fill="none" stroke="white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                  <span className="sr-only">Search</span>
                </button>
              </form>
            </li>
          </ul>
        </div>
      }
    </header>
  )
}

export default Navbar