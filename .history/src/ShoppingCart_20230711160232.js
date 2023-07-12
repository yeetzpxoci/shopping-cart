function ShoppingCart(props) {
    const products = props.products.map(product => product.amount !== 0 ? 
        (
        <div id='product-card'>
            <img class='sushi-img' src={product.url}></img>
            <span>{product.name}</span>
        </div>
        ) : (<></>)

    );

    return (
        <div id="shopping-cart">
            {products};
        </div>
    );
}

export default ShoppingCart;
