function ShoppingCart(props) {
    const products = props.products.map(product => product.amount !== 0 ? 
        (
        <div id='product-card-shopping-cart'>
            <img class='sushi-img-shopping-cart' src={product.url}></img>
            <span>{product.name}</span>
            <span className="amount">x{product.amount}</span>
            <span>${product.price * product.amount}</span>
            <button id='remove-button' onClick={(e) => props.deleteProduct(product.name, e)}>x</button>
        </div>
        ) : (<></>)

    );

    function getTotalPrice() {
        let total = 0;

        for (let i = 0; i < props.products.length; i++) {
            total += props.products[i].amount * props.products[i].price;
        }

        return total;
    }

    let shoppingCardID = props.shoppingCartOn ? 'shopping-cart-visible' : 'shopping-cart-hidden';

    return (
        <div id={shoppingCardID}>
            {products}
            <span>Total: ${getTotalPrice()}</span>
            <button>Checkout</button>
        </div>
    );
}

export default ShoppingCart;
