function Shop(props) {
    const products = this.props.products.map(product => { return (<div><span>{product}</span></div>)} )

    return (
        <div id='products-container'>
            
        </div>
    );
};

export default Shop;