import IndexLayout from "@/components/layouts/IndexLayout";
import DetailNewsComponent from "@/components/news/DetailNewsComponent";
import ListNewsComponent from "@/components/news/ListNewsComponent";
import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

interface Props {
  news: Array<any>;
  title: string;
}

export default function index() {
  const router = useRouter();
  const [news, setNews] = useState([]);
  const indexNews = router.query.id;

  const getNews = async () => {
    const api =
      "https://newsapi.org/v2/everything?q=bitcoin&apiKey=740bd6efce924c4cbf7de16fd514252e";
    const res = await axios({
      method: "get",
      url: api,
    });
    console.log(res.data.articles);
    setNews(res.data.articles);
  };

  useEffect(() => {
    if (indexNews) {
      getNews();
    }
  }, [indexNews]);

  return (
    <IndexLayout>
      <div style={{ padding: "20px" }}>
        <DetailNewsComponent news={news} indexNews={indexNews} />
      </div>
    </IndexLayout>
  );
}
