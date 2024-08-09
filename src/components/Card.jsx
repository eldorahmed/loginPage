import React from "react";
import { Card } from "antd";
import { Link } from "react-router-dom";
const { Meta } = Card;
const App = ({ product }) => (
  <Card
    hoverable
    style={{
      width: 280,
      maxHeight: 500,
    }}
    cover={<img alt="example" src={product.thumbnail} />}
  >
    <Meta title={product.title} description={`$ ${product.price}`} />
    <Link
      to={`/singleProduct/${product.id}`}
      style={{
        display: "block",
        backgroundColor: "#c81e1e",
        paddingTop: "5px",
        paddingBottom: "5px",
        borderRadius: "30px",
        textAlign: "center",
        color: "white",
        fontWeight: "bold",
        letterSpacing: "2px",
        marginTop: "10px",
      }}
    >
      About
    </Link>
  </Card>
);
export default App;
