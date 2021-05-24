
function Shop({productsArr}) {
    return (
        <div className="products-container d-flex jc-center">
            {productsArr.map((product, index) => {
                return (
                    <div key={index} className="single-product">
                        <img src={product.imageURL} alt=""></img>
                        <h5>{product.title}</h5>
                        <h5>{product.price} EU</h5>
                    </div>
                )
            })}
        </div>
    )
}

export default Shop;