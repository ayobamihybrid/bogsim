import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Timeline from "./pages/Timeline";
import ChatbotPage from "./pages/ChatbotPage";
import BogdanoffInstitute from "./pages/BogdanoffInstitute";
import LandingPage from "./pages/LandingPage";
import LandingPage1 from "./pages/LandingPage1";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/chatbot-page-7":
        title = "";
        metaDescription = "";
        break;
      case "/bogdanoff-institute":
        title = "";
        metaDescription = "";
        break;
      case "/landing-page1":
        title = "";
        metaDescription = "";
        break;
      case "/landing-page":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<LandingPage1 />} />
      <Route path="/timeline" element={<Timeline />} />
      <Route path="/bogdanoff-institute" element={<BogdanoffInstitute />} />
      <Route path="/chatbot-page-7" element={<ChatbotPage />} />
    </Routes>
  );
}
export default App;
