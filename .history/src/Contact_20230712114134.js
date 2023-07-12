import Header from "./Header";
import ContactContent from "./ContactContent"

function Contact(props) {
    let contentID = props.shoppingCartOn ? 'contact-content-small' : 'contact-content';

    return (
        <div id={contentID}>
            <Header toggleShoppingCart={props.toggleShoppingCart}>
            </Header>
            <ContactContent>
            </ContactContent>
        </div>
    );
}

export default Contact;
