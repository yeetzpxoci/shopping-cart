import Header from "./Header";
import HomeContent from "./HomeContent";

function Home(props) {
  let contentID = 

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
