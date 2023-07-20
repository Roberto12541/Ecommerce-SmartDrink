import { Link } from "react-router-dom"
import { LoginContext } from "../../context/LoginContext.jsx"
import { useContext } from "react"

const Pricing = () => {
    const { datos } = useContext(LoginContext);
    return (
        <section>
            <div className="relative items-center w-full mx-auto md:px-12 lg:px-16 max-w-7xl">
                <div>
                    <h1 className="text-center text-3xl font-semibold mt-10 md:text-4xl">Selecciona tu plan SmartDrink</h1>
                    <div className="relative p-10 space-y-12 overflow-hidden lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-8 rounded-xl">
                        <div className="relative flex flex-col p-8 bg-white border rounded-xl">
                            <div className="flex-1">
                                <h3 className="text-xl font-semibold text-neutral-600">SmartBasic</h3>
                                <p className="flex items-baseline mt-4 text-neutral-600">
                                    <span className="text-5xl font-bold tracking-tight">$29,999</span>
                                    <span className="ml-1 text-xl font-semibold">MXN</span>
                                </p>
                                <p className="mt-6 text-gray-500 text-justify">Con el paquete SmartBasic tendrás acceso a tutoriales detallados
                                    para un mejor manejo de tu Drinker y soporte básico para dudas o preguntas.
                                </p>
                                <ul role="list" className="pt-6 mt-6 space-y-6 border-t">
                                    <span className="text-lg font-semibold text-neutral-600">¿Qué incluye?</span>
                                    <li className="flex">
                                        <div className="inline-flex items-center bg-black rounded-xl w-6 h-6">
                                            <svg className="flex-shrink-0 w-4 h-4 mx-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="white" aria-hidden="true">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                        <span className="ml-3 text-neutral-600">Instalación básica del modelo de dispensador de bebidas automatizado.</span>
                                    </li>
                                    <li className="flex">
                                        <div className="inline-flex items-center bg-black rounded-xl w-6 h-6">
                                            <svg className="flex-shrink-0 w-4 h-4 mx-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="white" aria-hidden="true">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                        <span className="ml-3 text-neutral-600">Tutoriales detallados sobre el manejo y uso de los dispositivos.</span>
                                    </li>
                                    <li className="flex">
                                        <div className="inline-flex items-center bg-black rounded-xl w-6 h-6">
                                            <svg className="flex-shrink-0 w-4 h-4 mx-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="white" aria-hidden="true">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                        <span className="ml-3 text-neutral-600">Soporte técnico básico.</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="mt-6 rounded-lg">
                                {
                                    datos ?
                                        <Link to={'/checkout/9200/SmartBasic'} type="highlight" className="w-full items-center block px-10 py-3.5 text-base font-medium text-center text-white bg-black transition duration-500 ease-in-out transform border-2 border-white shadow-md rounded-xl hover:bg-white hover:border-black hover:text-black"> Comprar ahora </Link>
                                        :
                                        <Link to={'/login'} type="highlight" className="w-full items-center block px-10 py-3.5 text-base font-medium text-center text-white bg-black transition duration-500 ease-in-out transform border-2 border-white shadow-md rounded-xl hover:bg-white hover:border-black hover:text-black"> Comprar ahora </Link>
                                }
                            </div>
                        </div>
                        <div className="relative flex flex-col p-8 bg-black border rounded-2xl">
                            <div className="relative flex-1">
                                <h3 className="text-xl font-semibold text-white">SmartInter</h3>
                                <p className="flex items-baseline mt-4 text-white">
                                    <span className="text-5xl font-bold tracking-tight text-white">$36,999</span>
                                    <span className="ml-1 text-xl font-semibold text-white">MXN</span>
                                </p>
                                <p className="mt-6 text-white text-solitud line-clamp-5 text-justify">Con el paquete SmartInter obtendrás la capacitación
                                    completa para el personal, de esta manera se tendrá  un mejor funcionamiento y durabilidad
                                    del Drinker.</p>
                                <ul role="list" className="pt-6 mt-6 space-y-6 border-t">
                                    <span className="text-lg font-semibold text-white">¿Qué incluye?</span>
                                    <li className="flex">
                                        <div className="inline-flex items-center w-6 h-6 bg-white rounded-xl">
                                            <svg className="flex-shrink-0 w-4 h-4 mx-auto text-neutral-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                        <span className="ml-3 text-white">Instalación básica del modelo de dispensador de bebidas automatizado.</span>
                                    </li>
                                    <li className="flex">
                                        <div className="inline-flex items-center w-6 h-6 bg-white rounded-xl">
                                            <svg className="flex-shrink-0 w-4 h-4 mx-auto text-neutral-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                        <span className="ml-3 text-white">Capacitación completa del personal en el manejo y uso de la aplicación
                                            así como del dispositivo.</span>
                                    </li>
                                    <li className="flex">
                                        <div className="inline-flex items-center w-6 h-6 bg-white rounded-xl">
                                            <svg className="flex-shrink-0 w-4 h-4 mx-auto text-neutral-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                        <span className="ml-3 text-white">Soporte remoto para resolver cualquier duda o problema.</span>
                                    </li>
                                    <li className="flex">
                                        <div className="inline-flex items-center w-6 h-6 bg-white rounded-xl">
                                            <svg className="flex-shrink-0 w-4 h-4 mx-auto text-neutral-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                        <span className="ml-3 text-white">Actualizaciones gratuitas para mejorar y agregar nuevas funcionalidades.</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="z-50 mt-6 rounded-lg">
                                {
                                    datos ?
                                        <Link to={'/checkout/11400/SmartInter'} type="highlight" className="w-full items-center block px-10 py-3.5 text-base font-medium text-center text-white bg-black transition duration-500 ease-in-out transform border-2 border-white shadow-md rounded-xl hover:bg-white hover:border-black hover:text-black"> Comprar ahora </Link>
                                        :
                                        <Link to={'/login'} type="highlight" className="w-full items-center block px-10 py-3.5 text-base font-medium text-center text-white bg-black transition duration-500 ease-in-out transform border-2 border-white shadow-md rounded-xl hover:bg-white hover:border-black hover:text-black"> Comprar ahora </Link>
                                }
                            </div>
                        </div>
                        <div className="relative flex flex-col p-8 bg-white border rounded-xl">
                            <div className="flex-1">
                                <h3 className="text-xl font-semibold text-neutral-600">SmartPro</h3>
                                <p className="flex items-baseline mt-4 text-neutral-600">
                                    <span className="text-5xl font-bold tracking-tight">$49,999</span>
                                    <span className="ml-1 text-xl font-semibold">MXN</span>
                                </p>
                                <p className="mt-6 text-gray-500 line-clamp-5 text-justify">Con el paquete SmartPro podrás elegir el diseño de tu preferencia
                                    para tu Drinker. Asi como capacitaciones completas al personal, Soporte técnico 24/7 más.</p>
                                <ul role="list" className="pt-6 mt-6 space-y-6 border-t">
                                    <span className="text-lg font-semibold text-neutral-600">¿Qué incluye?</span>
                                    <li className="flex">
                                        <div className="inline-flex items-center bg-black rounded-xl w-6 h-6">
                                            <svg className="flex-shrink-0 w-4 h-4 mx-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="white" aria-hidden="true">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                        <span className="ml-3 text-neutral-600">Instalación personalizada con la posibilidad de elegir entre tres <a href="/">diseños</a> .</span>
                                    </li>
                                    <li className="flex">
                                        <div className="inline-flex items-center bg-black rounded-xl w-6 h-6">
                                            <svg className="flex-shrink-0 w-4 h-4 mx-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="white" aria-hidden="true">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                        <span className="ml-3 text-neutral-600">Capacitación continúa y constante al personal.</span>
                                    </li>
                                    <li className="flex">
                                        <div className="inline-flex items-center bg-black rounded-xl w-6 h-6">
                                            <svg className="flex-shrink-0 w-4 h-4 mx-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="white" aria-hidden="true">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                        <span className="ml-3 text-neutral-600">Creación de una página web personalizada para promocionar tus servicios al público.</span>
                                    </li>
                                    <li className="flex">
                                        <div className="inline-flex items-center bg-black rounded-xl w-6 h-6">
                                            <svg className="flex-shrink-0 w-4 h-4 mx-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="white" aria-hidden="true">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                        <span className="ml-3 text-neutral-600">Soporte remoto 24/7 para asistir en cualquier momento.</span>
                                    </li>
                                    <li className="flex">
                                        <div className="inline-flex items-center bg-black rounded-xl w-6 h-6">
                                            <svg className="flex-shrink-0 w-4 h-4 mx-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="white" aria-hidden="true">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                        <span className="ml-3 text-neutral-600">Actualizaciones periódicas para mantenerte actualizado.</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="mt-6 rounded-lg">
                                {
                                    datos ?
                                        <Link to={'/checkout/13000/SmartPro'} type="highlight" className="w-full items-center block px-10 py-3.5 text-base font-medium text-center text-white bg-black transition duration-500 ease-in-out transform border-2 border-white shadow-md rounded-xl hover:bg-white hover:border-black hover:text-black"> Comprar ahora </Link>
                                        :
                                        <Link to={'/login'} type="highlight" className="w-full items-center block px-10 py-3.5 text-base font-medium text-center text-white bg-black transition duration-500 ease-in-out transform border-2 border-white shadow-md rounded-xl hover:bg-white hover:border-black hover:text-black"> Comprar ahora </Link>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Pricing
