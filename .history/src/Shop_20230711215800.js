import Header from "./Header";
import ShoppingCart from "./ShoppingCart";

function Shop(props) {
    const products = props.products.map(product => { 
        return (<div id='product-card'>
            <img class='sushi-img' src={product.url}></img>
            <span>{product.name}</span>
            <form className='item-count-form'>
                <button onClick={(e) => props.removeProduct(product.name, e)}>-</button>
                <input type='number' value={product.amount} onChange={(e) => props.setProduct(product.name, e)} min='0' max='100'></input>
                <button onClick={(e) => props.addProduct(product.name, e)}>+</button>
                <span>product.price</span>
            </form>
            </div>
        )
    });

    let contentID = props.shoppingCartOn ? 'shop-content-small' : 'shop-content';

    return (
        <>
            <div id={contentID}>
                <Header toggleShoppingCart={props.toggleShoppingCart}>
                </Header>
                <div id='products-container'>
                    {products}
                </div>
            </div>
        </>
    );
};

export default Shop;