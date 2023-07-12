function Shop(props) {
    const products = props.products.map(product => { return (<div><span>{product}</span></div>)});

    return (
        <Header>
        </Header>
        <div id='products-container'>
            {products}
        </div>
    );
};

export default Shop;