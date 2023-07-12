import { useEffect } from "react";

function ShoppingCart(props) {
    const products = props.products.map(product => product.amount !== 0 ? 
        (
        <div id='product-card'>
            <img class='sushi-img' src={product.url}></img>
            <span>{product.name}</span>
        </div>
        ) : (<></>)

    );

    let shoppingCardID;

    useEffect(() => {
        shoppingCardID = props.ShoppingCartOn ? 'shopping-cart-visible' : 'shopping-cart-hidden';
    }, [ShoppingCartOn]);

    return (
        <div id={shoppingCardID}>
            {products}
        </div>
    );
}

export default ShoppingCart;
