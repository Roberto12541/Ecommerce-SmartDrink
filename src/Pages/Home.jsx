import BannerTwo from "../components/Banner/BannerTwo"
// import Carrusel from "../components/Carousel/Carousel"
import Pricing from "../components/Pricing/Pricing"
import AppSection from "../components/Section/AppSection"
import BannerThree from "../components/Section/BannerThree"
import Promo from "../components/Section/Promo"
import PromoProducts from "../components/Section/PromoProducts"
import PromoService from "../components/Section/PromoService"
import Team from "../components/Section/Team"

const Home = () => {
    return (
        <>
            {/* <Carrusel/> */}
            <Promo />
            <BannerThree />
            <Pricing />
            <PromoProducts/>
            <PromoService />
            <AppSection />
            <Team />
            <BannerTwo />
        </>
    )
}

export default Home
