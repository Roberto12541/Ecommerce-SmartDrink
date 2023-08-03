import BannerT from '../../assets/bannert.png'

const BannerThree = () => {
    return (
        <div className="relative overflow-hidden bg-white">
            <div className="pb-10 pt-16 sm:pb-40 sm:pt-24 lg:pb-12 lg:pt-12">
                <div className="flex flex-col gap-4 md:flex-row-reverse justify-between relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
                    <div className="sm:max-w-lg">
                        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-7xl">
                            Drinker.
                        </h1>
                        <p className="mt-6 text-xl text-slate-500 text-justify">
                            Conoce nuestro producto!
                        </p>
                        <p className="mt-6 text-xl text-slate-900 text-justify">
                        Te presentamos nuestro innovador producto, diseñado especialmente para satisfacer tus necesidades y superar tus expectativas,
Un dispositivo que combina funcionalidad, elegancia y rendimiento excepcionales en un solo paquete.  ¿Quieres destacar entre la multitud? Con nuestro producto, podrás hacerlo. No pierdas la oportunidad de adquirir este increíble producto y adquiere tu Plan SmartDrink.
                        </p>
                    </div>
                    <div>
                        <img src={BannerT} alt="" className='rounded-lg shadow-lg' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BannerThree
