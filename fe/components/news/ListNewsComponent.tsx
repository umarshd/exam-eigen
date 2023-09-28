import { Card, Col, Row } from "antd";
import React from "react";

const { Meta } = Card;

interface Props {
  news: Array<any>;
}

export default function ListNewsComponent({ news }: Props) {
  // const newsArray = [];
  // for (let i = 0; i < news.length; i++) {
  //   newsArray.push(news[i]);
  // }
  // console.log(typeof newsArray);
  console.log(news[0]);
  return (
    <>
      <Row gutter={16}>
        {news?.map((item: any, index) => {
          return (
            <Col
              className="gutter-row"
              span={6}
              style={{ margin: "10px 0px", overflow: "hidden" }}
            >
              <Card style={{ overflowX: "hidden", minHeight: "450px" }}>
                <p>
                  <img
                    style={{
                      height: 240,
                      width: "100%",
                      objectFit: "cover",
                    }}
                    alt="example"
                    src={item.urlToImage}
                  />
                </p>
                <a href={`/news/${index}`}>
                  <h4>{item.title}</h4>
                </a>
                <small>{item.description}</small>
              </Card>
            </Col>
          );
        })}
      </Row>
    </>
  );
}
