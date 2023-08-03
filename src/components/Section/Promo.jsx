import { Link } from "react-router-dom"

const Promo = () => {
    return (
        <div className="relative overflow-hidden bg-white">
            <div className="pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
                <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
                    <div className="sm:max-w-lg">
                        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                            Cambiando la manera de preparar bebidas.
                        </h1>
                        <p className="mt-6 text-xl text-gray-500 text-justify">
                            Comprometidos con la innovación, creatividad y servicio para que puedas brindar
                            la mejor experiencia a tus clientes con un estilo original. <br></br><br></br>Con nuestra app móvil tu clientes podrán pedir su bebida preferida, personalizarla y pagarla desde su celular .
                        </p>
                    </div>
                    <div>
                        <div className="mt-10">
                            <div aria-hidden="true" className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl">
                                <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                                    <div className="flex items-center space-x-6 lg:space-x-8">
                                        <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                                            <div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                                                <img
                                                    src="https://www.cocteleria.com.mx/2017/wp-content/uploads/2018/01/coctel.png"
                                                    alt=""
                                                    className="h-full object-cover object-center rotate-12"
                                                />
                                            </div>
                                            <div className="h-64 w-44 overflow-hidden rounded-lg">
                                                <img
                                                    src="https://asianbistro.mx/upload/platillos/bebidas/ancho-maracuya.png"
                                                    alt=""
                                                    className="h-full w-full object-cover object-center -rotate-12"
                                                />
                                            </div>
                                        </div>
                                        <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                                            <div className="h-64 w-44 overflow-hidden rounded-lg">
                                                <img
                                                    src="https://style.shockvisual.net/wp-content/uploads/2021/05/mezcal.png"
                                                    alt=""
                                                    className="h-full w-full object-cover object-center"
                                                />
                                            </div>
                                            <div className="h-64 w-44 overflow-hidden rounded-lg">
                                                <img
                                                    src="https://www.alcossebrehotel.com/wp-content/uploads/2022/03/tropical.png"
                                                    alt=""
                                                    className="h-full w-full object-cover object-center"
                                                />
                                            </div>
                                            <div className="h-64 w-44 overflow-hidden rounded-lg">
                                                <img
                                                    src="https://i.pinimg.com/originals/b9/db/1a/b9db1ae0c2df52def3e0e029fd9d9da3.png"
                                                    alt=""
                                                    className="h-full w-full object-cover object-center"
                                                />
                                            </div>
                                        </div>
                                        <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                                            <div className="h-64 w-44 overflow-hidden rounded-lg">
                                                <img
                                                    src="https://i.pinimg.com/originals/f0/82/c1/f082c1fd98314d3054c9345f3d34a593.png"
                                                    alt=""
                                                    className="h-full w-full object-cover object-center"
                                                />
                                            </div>
                                            <div className="h-64 w-44 overflow-hidden rounded-lg">
                                                <img
                                                    src="https://asianbistro.mx/upload/platillos/bebidas/mezcal-jamaica.png"
                                                    alt=""
                                                    className="h-full w-full object-cover object-center -rotate-12"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <Link
                                to={'/servicios'}
                                className="inline-block rounded-md border border-transparent bg-black px-8 py-3 text-center font-medium text-white hover:bg-white hover:text-black hover:border-black"
                            >
                                Conocer servicios
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Promo
