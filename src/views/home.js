import Slider from '../components/slider/slider';
import Products from '../components/products/products';
import Faq from '../components/FAQ/faq';

function Home({productsArr}) {
    return (
        <div>
            <Slider/>
            <Products productsArr={productsArr}/>
            <Faq/>
        </div>
    )
}

export default Home;