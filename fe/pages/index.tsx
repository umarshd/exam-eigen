import IndexLayout from "@/components/layouts/IndexLayout";
import ListNewsComponent from "@/components/news/ListNewsComponent";
import axios from "axios";
import React, { useEffect, useState } from "react";

export default function index() {
  const [news, setNews] = useState([]);

  const getNews = async () => {
    const api =
      "https://newsapi.org/v2/everything?q=bitcoin&apiKey=740bd6efce924c4cbf7de16fd514252e";
    const res = await axios({
      method: "get",
      url: api,
    });
    // console.log(res.data.articles);
    setNews(res.data.articles);
  };

  useEffect(() => {
    getNews();
  }, []);

  return (
    <IndexLayout>
      <h1 style={{ margin: "100px 0px", textAlign: "center" }}>List News</h1>
      <div style={{ padding: "20px" }}>
        <ListNewsComponent news={news} />
      </div>
    </IndexLayout>
  );
}
