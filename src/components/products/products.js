import React, { useState, useEffect } from 'react';
import SmallscreenProducts from './smallscreenProducts'
import WidescreenProducts from './widescreenProducts'

function Products({productsArr}) {

    const [windowWidth, setwindowWidth] = useState(window.innerWidth);
    const [loadMore, setLoadMore] = useState(4);

    //track window width changes
    //clean up event listener when component is unmounted
    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize)
    }}, [])

    //Set window width every time window width changes
    const handleResize = () => {
        setwindowWidth(window.innerWidth);
    }

    //load more products when inquired
    const loadMoreProducts = () => {
        setLoadMore(loadMore + 4);
    }

    //load restricted amount of products depending on window width
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