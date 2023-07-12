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
            </form>
            </div>
        )
    });

    return (
        <>
            <div id="shop-content">
                <div id='shop-background-img'></div>
                <Header>
                </Header>
                <div id='products-container'>
                    {products}
                </div>
                <ShoppingCart>
                    
                </ShoppingCart>
            </div>
        </>
    );
};

export default Shop;