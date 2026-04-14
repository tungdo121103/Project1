import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./pages/Home";
import Layout from "./components/Layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
/* footer */
import About from "./pages/About"; 
import Partners from "./pages/Partners";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import ContactVify from "./pages/ContactVify";
/* header */
import Features from "./pages/Features";
import ScreenShots from "./pages/ScreenShots";
import WhyChoose from "./pages/WhyChoose";
import Faq from "./pages/Faq";
import Blog from "./pages/Blog";
function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/about" element={<About />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/privacyPolicy" element={<PrivacyPolicy/>} />
          <Route path="/contactVify" element={<ContactVify />} />

          <Route path="/whyChoose" element={<WhyChoose/>} />
          <Route path="/blog" element={<Blog/>} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;