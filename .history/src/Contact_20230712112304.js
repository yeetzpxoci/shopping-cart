import Header from "./Header";

function Contact(props) {
    return (
        <div id='contact-page'>
            <Header toggleShoppingCart={props.toggleShoppingCart}>
            </Header>
            <div id="contact-content"></div>
        </div>
    );
}

export default Contact;
