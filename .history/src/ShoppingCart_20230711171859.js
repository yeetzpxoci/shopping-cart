function ShoppingCart(props) {
    const products = props.products.map(product => product.amount !== 0 ? 
        (
        <div id='product-card'>
            <img class='sushi-img-shopping-cart' src={product.url}></img>
            <span>{product.name}</span>
        </div>
        ) : (<></>)

    );

    let shoppingCardID = props.shoppingCartOn ? 'shopping-cart-visible' : 'shopping-cart-hidden';

    return (
        <div id={shoppingCardID}>
            {products}
        </div>
    );
}

export default ShoppingCart;
