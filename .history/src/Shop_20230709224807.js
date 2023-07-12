function Shop(props) {
    const products = props.products.map(product => { return (<div><span>{product}</span></div>)});

    return (
        <div id='products-container'>
            {products}
        </div>
    );
};

export default Shop;