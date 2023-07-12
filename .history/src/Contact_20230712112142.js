import Header from "./Header";

function Contact(props) {
    return (
        <div id='contact-content'>
            <Header toggleShoppingCart={props.toggleShoppingCart}>
            </Header>
        </div>
    );
}

export default Contact;
