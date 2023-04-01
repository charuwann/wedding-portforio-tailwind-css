import Header from "../component/header";
import About from "../component/about";
import Porforio from  "../component/porforio";
import Blog from "../component/blog";
import VideoHeader from "../component/VideoHeader";
import VideoContent from "../component/VideoContent";
import Footer from "../component/footer";

function Home() {
  return (
    <div>
      <Header />
      <About />
      <Porforio />
      <Blog />
      <VideoHeader />
      <VideoContent />
      <Footer />
    </div>
  );
}

export default Home;