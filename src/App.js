import { Container, Row, Col } from "react-bootstrap";
import { Route, Routes, Navigate } from "react-router-dom";
import NavigationLink from "./components/NavigationLink";
import Article from "./components/Article";
import { DetailArticle } from "./pages/DetailArticle";
import { SocialMedia } from "./components/SocialMedia";

function App() {
  return (
    <>
      <NavigationLink />
      <Container>
        <Row>
          <Col>
            <Routes>
              <Route path="/" element={<Article />} />
              <Route path="article/category/:ctg" element={<Article />} />
              <Route path="article/detail/:slug" element={<DetailArticle />} />
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </Col>
        </Row>
      </Container>
      <SocialMedia />
    </>
  );
}

export default App;
