import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Placeholder } from "react-bootstrap";
import DOMPurify from "dompurify";

export const DetailArticle = () => {
  const { slug } = useParams();
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getArticle = async (s) => {
      const response = await fetch(`https://hakimrizm.github.io/data/articles.json`);
      let result = await response.json();
      result = result.articles;
      console.log(result);
      const data = result.filter((a) => a.slug == s);
      setArticle(data[0]);
      setLoading(false);
    };

    getArticle(slug);
  }, [slug]);

  return (
    <div className="mt-3">
      {loading && (
        <Placeholder as="p" animation="glow">
          <Placeholder xs={12} />
        </Placeholder>
      )}
      {!loading && (
        <div>
          <h1 className="">{article.title}</h1>
          <div className="mt-3 mb-3 img-wrapper">
            <figure>
              <img src={article.img} alt="" />
              <figcaption className="text-center" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(article.imgCopyright) }}></figcaption>
            </figure>
          </div>
          <article dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(article.body) }}></article>
        </div>
      )}
    </div>
  );
};
