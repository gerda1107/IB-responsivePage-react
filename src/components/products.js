import React, { useState, useEffect } from 'react';
import SmallscreenProducts from './smallscreenProducts'
import WidescreenProducts from './widescreenProducts'
import Axios from 'axios'

function Products() {

    const [productsArr, setproductsArr] = useState([]);
    const [windowWidth, setwindowWidth] = useState(window.innerWidth);

    const [loadMore, setLoadMore] = useState(4);

    
    useEffect(() => {
            getProducts();
            window.addEventListener('resize', handleResize);
            return () => {
                window.removeEventListener('resize', handleResize)
            }
        }, [])

    const handleResize = () => {
        setwindowWidth(window.innerWidth);
    }

    const getProducts = () => {
        Axios.get('https://api.jsonbin.io/b/60a916bae2fa0d4db8abd1d5')
            .then(res => {
                setproductsArr(res.data);
        })
    }

    const loadMoreProducts = () => {
        setLoadMore(loadMore + 4);
    }


    const productsAmount = (screenSize) => {
        if (screenSize > 600) {
            return <WidescreenProducts
                productsArr={productsArr} />
        } else {
            return <SmallscreenProducts
                productsArr={productsArr}
                loadMore={loadMore}
                loadMoreProducts={loadMoreProducts}/>
        }
    }

    return (
        <div>
            {productsAmount(windowWidth)}
        </div>
    )
}

export default Products;