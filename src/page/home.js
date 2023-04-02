import Header from "../component/header";
import About from "../component/about";
import Portforio from  "../component/portforio";
import Blog from "../component/blog";
import VideoHeader from "../component/VideoHeader";
import VideoContent from "../component/VideoContent";
import Footer from "../component/footer";

function Home() {
  return (
    <div>
      <Header />
      <About />
      <Portforio />
      <Blog />
      <VideoHeader />
      <VideoContent />
      <Footer />
    </div>
  );
}

export default Home;