import React from "react";

interface Props {
  news: Array<any>;
  indexNews: any;
}

export default function DetailNewsComponent({ news, indexNews }: Props) {
  const numberIndexNews = Number(indexNews);
  //   console.log(indexNews, "indexNews");
  console.log(news[numberIndexNews]);

  return (
    <>
      {news?.map((item: any, index) => {
        if (index === numberIndexNews) {
          //   console.log(true);
          return (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                margin: "0px 100px",
                textAlign: "center",
              }}
            >
              <h1 style={{ margin: "10px 0px" }}>{item.title}</h1>
              <p style={{ margin: "10px 0px" }}>{item.description}</p>
              <img
                style={{ margin: "10px 0px" }}
                src={item.urlToImage}
                alt=""
              />
              <p dangerouslySetInnerHTML={{ __html: item.content }}></p>
            </div>
          );
        } else {
          console.log(false);
        }
      })}
    </>
  );
}
