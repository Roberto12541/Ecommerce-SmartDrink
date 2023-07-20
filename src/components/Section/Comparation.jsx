import { Link } from "react-router-dom"

const Comparation = () => {
    return (
        <>
            <h1 className="mb-12 text-center text-3xl font-semibold mt-10 md:text-4xl">Compara nuestros planes de SmartDrink</h1>
            <div id="detailed-pricing" className="w-full max-w-[1200px] mx-auto overflow-x-auto">
                <div className="overflow-hidden min-w-max">
                    <div className="grid grid-cols-4 p-4  text-sm font-medium text-gray-900 bg-gray-100 border-t border-b border-gray-200 gap-x-16">
                        <div className="flex justify-center">Funciones del plan</div>
                        <div className="flex  justify-center " >Plan SmartBasic</div>
                        <div className="flex  justify-center ">Plan SmartInter</div>
                        <div className="flex  justify-center ">Plan SmartPro</div>
                    </div>
                    <div className="grid grid-cols-4 px-4 py-5 text-sm text-gray-700 border-b border-gray-200 gap-x-16 dark:border-gray-700">
                        <div className="text-gray-500 dark:text-gray-400 flex items-center   justify-center ">Instalación</div>
                        <div className="flex  justify-center">
                            <svg className="w-5 h-5 text-green-500 flex items-center" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                        </div>
                        
                        <div className="flex  justify-center">
                            <svg className="w-5 h-5 text-green-500" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                        </div>
                        <div className="flex  justify-center">
                            <svg className="w-5 h-5 text-green-500" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                        </div>
                    </div>
                    <div className="grid grid-cols-4 px-4 py-5 text-sm text-gray-700 border-b border-gray-200 gap-x-16 dark:border-gray-700">
                        <div className="text-gray-500 dark:text-gray-400 flex  justify-center " >Aplicación Móvil</div>
                        <div className="flex  justify-center">
                            <svg className="w-5 h-5 text-green-500" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                        </div>
                        <div className="flex  justify-center">
                            <svg className="w-5 h-5 text-green-500" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                        </div  >
                        <div className="flex  justify-center">
                            <svg className="w-5 h-5 text-green-500" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                        </div>
                    </div>
                    <div className="grid grid-cols-4 px-4 py-5 text-sm text-gray-700 border-b border-gray-200 gap-x-16 dark:border-gray-700">
                        <div className="text-gray-500 dark:text-gray-400 flex  justify-center ">Soporte 24/7</div>
                        <div className="flex  justify-center">
                            <svg className="w-5 h-5 text-red-500" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
                        </div>
                        <div className="flex  justify-center">
                            <svg className="w-5 h-5 text-green-500" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                        </div>
                        <div className="flex  justify-center">
                            <svg className="w-5 h-5 text-green-500" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                        </div>
                    </div>
                        <div className="grid grid-cols-4 px-4 py-5 text-sm text-gray-700 border-b border-gray-200 gap-x-16 dark:border-gray-700 ">
                        <div className="text-gray-500 dark:text-gray-400 flex  justify-center ">Pagina web </div>
                        <div className="flex  justify-center">
                            <svg className="w-5 h-5 text-red-500" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
                        </div>
                        <div className="flex  justify-center">
                            <svg className="w-5 h-5 text-red-500" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
                        </div>
                        <div className="flex  justify-center">
                            <svg className="w-5 h-5 text-green-500" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                        </div>
                    </div>
                    <div className="grid grid-cols-4 px-4 py-5 text-sm text-gray-700 border-b border-gray-200 gap-x-16 dark:border-gray-700">
                        <div className="text-gray-500 dark:text-gray-400" />
                        <div>
                            <Link to={'/checkout/9500/SmartBasic'} className="text-white block w-full border bg-black transition duration-500 ease-in-out hover:bg-white hover:border-black hover:text-black font-medium rounded-lg text-sm px-4 py-2.5 text-center">Comprar Ahora</Link>
                        </div>
                        <div>
                            <Link to={'/checkout/11400/SmartInter'} className="text-white block w-full border bg-black transition duration-500 ease-in-out hover:bg-white hover:border-black hover:text-black font-medium rounded-lg text-sm px-4 py-2.5 text-center">Comprar Ahora</Link>
                        </div>
                        <div>
                            <Link to={'/checkout/13000/SmartPro'} className="text-white block w-full border bg-black transition duration-500 ease-in-out hover:bg-white hover:border-black hover:text-black font-medium rounded-lg text-sm px-4 py-2.5 text-center">Comprar Ahora</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Comparation
