import Header from "./Header";
import ContactContent from "./ContactContent"

function Contact(props) {
    let contentID = props.shoppingCartOn ? 'contact-page-small' : 'contact-page';

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
