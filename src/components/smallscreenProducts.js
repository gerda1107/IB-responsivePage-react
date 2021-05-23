function SmallscreenProducts({productsArr, loadMore, loadMoreProducts}) {
    return (
        <div className="products-container d-flex jc-center">
            {productsArr.slice(0, loadMore).map((product, index) => {
                return (
                    <div key={index} className="single-product">
                        <img src={product.imageURL} alt=""></img>
                        <h5>{product.title}</h5>
                    </div>
                )
                })}
                {loadMore < productsArr.length && <button onClick={loadMoreProducts} className="btn"> Show More </button>}
        </div>
    )
}

export default SmallscreenProducts;