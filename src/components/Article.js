import { Row, Col, Card } from "react-bootstrap";
import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Loading } from "./Loading";

export default function Article() {
  let { ctg } = useParams();
  const [datas, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async (category) => {
      const response = await fetch(`https://hakimrizm.github.io/data/articles.json`);
      let result = await response.json();
      result = result.articles;

      if (category == "All") {
        setData(result);
        setLoading(false);
        return;
      }

      const articleCtg = result.filter((a) => a.category == category);
      setData(articleCtg);
      setLoading(false);
    };

    getData(ctg);
  }, [ctg]);

  if (ctg == undefined) {
    ctg = "All";
  }

  return (
    <div className="mt-3">
      <h1 className="text-capitalize">{ctg.replace(/-/g, " ")}</h1>
      {loading && <Loading />}
      {!loading && (
        <Row>
          {datas.map((data) => (
            <Col md={4} className="mt-3" key={data.id}>
              <Card className="mb-3 border-red">
                <Card.Body>
                  <h6 className="letter-3">{data.category.replace(/-/g, " ")}</h6>
                  <Link to={`/article/detail/${data.slug}`} className="link-article">
                    <h4>{data.title}</h4>
                  </Link>
                  <p className="text-muted">{data.subArticle}</p>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      )}
    </div>
  );
}
