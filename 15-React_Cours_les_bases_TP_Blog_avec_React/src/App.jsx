import { useHashNavigation } from "./hooks/useHashNavigation";
import { Home } from "./pages/Home.jsx";
import { Contact } from "./pages/Contact.jsx";
import { Single } from "./pages/Single.jsx";
import { NotFound } from "./pages/NotFound.jsx";
import {Header} from "./components/Header.jsx";
import { Alert } from "./components/Alert.jsx";

function App() {
  const { page, param } = useHashNavigation();
  const pageContent = getPageContent(page, param);

  return (
    <>
    <Header page={page}/>
    <div className="container my-3">
      <p>Page: {page}</p>
      {pageContent}
      </div>
    </>
  );
}

function getPageContent(page, param) {
  if (page === "home") {
    return <Home />;
  }
  if (page === "contact") {
    return <Contact />;
  }
  if (page === "post") {
    return <Single postId={param}/>;
  }
  return <NotFound page={page} />;
}

export default App;
