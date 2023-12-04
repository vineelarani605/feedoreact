import Header from "./Header";
import Footer from "./Footer";
import ContentView from "./ContentView";


const FeedoView: React.FC = () => {
  return (
    <div>
      <Header></Header>
      <div className="container">
        <ContentView></ContentView>
      </div>
      <hr></hr>
      <Footer></Footer>
    </div>
  );
};

export default FeedoView;
