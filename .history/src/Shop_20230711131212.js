import Header from "./Header";

function Shop(props) {
    const products = props.products.map(product => { 
        return (<div id='product-card'>
            <img class='sushi-img' src={product.url}></img>
            <span>{product.name}</span>
            <form className='item-count-form'>
                <button>-</button>
                <input value={props.product.amount}></input>
                <button>+</button>
            </form>
            </div>)});

    return (
        <>
            <div id="shop-content">
            <div id='shop-background-img'></div>
                <Header>
                </Header>
                <div id='products-container'>
                    {products}
                </div>
            </div>
        </>
    );
};

export default Shop;