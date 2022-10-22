import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SinglePostPage from "./pages/SinglePostPage";
import NotFoundPage from "./pages/NotFoundPage";
import MainNavbar from "./components/general/MainNavbar";
import PostsContextProvider from "./contexts/PostsContext";
import "./App.scss";
import EditPostPage from "./pages/EditPostPage";
import SamplePage from "./pages/SamplePage";
import AddPostPage from "./pages/AddPost";

function App() {
  return (
    <div className="App">
      <PostsContextProvider>
        <BrowserRouter>
          <MainNavbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/post/:id" element={<SinglePostPage />} />
            <Route path="/add-post/" element={<AddPostPage />} />
            <Route path="/edit-post/:id" element={<EditPostPage />} />
            <Route path="/sample-page" element={<SamplePage />} />
            <Route path="/*" element={<NotFoundPage />} />
          </Routes>
        </BrowserRouter>
      </PostsContextProvider>
    </div>
  );
}

export default App;
