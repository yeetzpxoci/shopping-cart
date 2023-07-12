import Header from "./Header";
import HomeContent from "./HomeContent";

function Home() {
  return (
    <div id="home-content">
      <Header shoppingCartOn={props.shoppingCartOn}>
      </Header>

      <HomeContent>
      </HomeContent>
    </div>
  );
}

export default Home;
