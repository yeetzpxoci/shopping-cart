import Header from "./Header";

function Contact(props) {
    return (
        <div id='contact-page'>
            <Header toggleShoppingCart={props.toggleShoppingCart}>
            </Header>
            <div></div>
        </div>
    );
}

export default Contact;
