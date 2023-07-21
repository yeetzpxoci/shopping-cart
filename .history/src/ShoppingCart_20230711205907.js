function ShoppingCart(props) {
    const products = props.products.map(product => product.amount !== 0 ? 
        (
        <div id='product-card-shopping-cart'>
            <img class='sushi-img-shopping-cart' src={product.url}></img>
            <span>{product.name}</span>
            <span className="amount">x{product.amount}</span>
            <button id='remove-button' onClick={props.removeItem}>x</button>
        </div>
        ) : (<></>)

    );

    let shoppingCardID = props.shoppingCartOn ? 'shopping-cart-visible' : 'shopping-cart-hidden';

    return (
        <div id={shoppingCardID}>
            {products}
            <button>Checkout</button>
        </div>
    );
}

export default ShoppingCart;