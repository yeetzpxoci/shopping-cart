import Header from "./Header";
import HomeContent from "./HomeContent";

function Home(props) {
  let contentID = props.shoppingCartOn ? 'home-content-small' : 'home-content';

  return (
    <div id={contentID}>
      <Header toggleShoppingCart={props.toggleShoppingCart}>
      </Header>

      <HomeContent>
      </HomeContent>
    </div>
  );
}

export default Home;
