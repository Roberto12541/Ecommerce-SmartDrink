const AboutUs = () => {
    return (
        <>
            <section className="grid grid-cols-1 gap-0 bg-opacity-25 md:grid-cols-2">
                <div className="flex flex-col items-start bg-black justify-center px-4 py-24 lg:px-20">
                    <span className="mb-4 p-2 px-4 rounded-xl bg-white badge text-black font-semibold">SmartDrink</span>
                    <h1 className="mb-6 text-4xl font-bold leading-tight text-white md:text-4xl lg:text-5xl">¿Quienes Somos?</h1>
                    <p className="pr-0 mb-4 text-lg text-white tracking-relaxed text-justify lg:pr-16">Somos un equipo de jovenes desarrolladores que busca
                        facilitar y agilizar la preparacion de bebidas
                        de nuestros clientes con metodos tecnologicos
                        ya que nuestro principal objetivo es que nuestros clientes se posicionen
                        entre los mejores siendo distintos a los demas.
                    </p>
                </div>
                <div>
                    <img src="https://s1.1zoom.me/big0/126/Drinks_Strawberry_Cocktail_Black_background_548048_1280x893.jpg" alt="" className="object-cover w-full h-64 md:h-full" loading="lazy" />
                </div>
            </section>
            <section className="grid grid-cols-1 gap-0 bg-opacity-25 md:grid-cols-2">
                <div className="order-2 md:order-1">
                    <img src="https://static7.depositphotos.com/1000589/717/i/600/depositphotos_7172080-stock-photo-mojito-cocktail-on-white-background.jpg" alt="" className="object-cover w-full h-64 md:h-full" loading="lazy" />
                </div>
                <div className="flex flex-col items-start justify-center px-4 py-24 lg:px-20 order-1 md:order-2">
                    <h1 className="mb-6 text-4xl font-bold leading-tight text-black md:text-4xl lg:text-5xl">Misión y Visión</h1>
                    <p className="pr-0 mb-4 text-lg text-black tracking-relaxed text-justify lg:pr-24">Ser reconocidos a nivel nacional e internacional
                        siendo diferentes a los demas, teniendo la mejor
                        calidad posible y principios eticos para ofrecer nuestros
                        servicios y productos de excelencia.</p>
                </div>
            </section>
        </>
    )
}

export default AboutUs
