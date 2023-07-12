function ShoppingCart(props) {
    const products = props.products.map(product => product.amount !== 0 ? 
        (
        <div id='product-card'>
            <img class='sushi-img' src={product.url}></img>
            <span>{product.name}</span>
        </div>
        ) : (<></>)

    );

    let shoppingCardID = props.ShoppingCartOn ? 'shopping-cart-visible': 'shopping-cart-hidden';

    return (
        <div id="shopping-cart-hidden">
            {products}
        </div>
    );
}

export default ShoppingCart;
