import Header from "./Header";

function Shop(props) {
    const products = props.products.map(product => { return (<div id='product-card'><span>{product}</span></div>)});

    return (
        <div id="home-container">
            <Header>
            </Header>
            <div id='products-container'>
                {products}
            </div>
        </div>
    );
};

export default Shop;