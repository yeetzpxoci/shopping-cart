import Header from "./Header";
import ContactContent from "./ContactContent"

function Contact(props) {
    let contentID = props.shoppingCartOn ? 'home-content-small' : 'home-content';

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
