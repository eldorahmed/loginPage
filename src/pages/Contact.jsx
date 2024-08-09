import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { TiPlusOutline } from "react-icons/ti";
import { TiMinusOutline } from "react-icons/ti";
import { incrementProduct, decrimentProduct } from "../features/productSlice";

function Orders() {
  const { products } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  return (
    <div>
      {products?.map((prod) => {
        if (prod.amount) {
          return (
            <div
              key={prod.id}
              style={{
                borderBottom: "1px solid black",
                display: "flex",
                alignItems: "center",
                gap: "20px",
                paddingLeft: "20px",
                paddingRight: "20px",
              }}
            >
              <img style={{ width: "65px" }} src={prod.thumbnail} alt="" />
              <div>
                <h3>{prod.title}</h3>
                <p style={{ fontSize: "13px" }}>{prod.brand}</p>
              </div>
              <div>
                <p
                  style={{
                    textDecoration: "line-through",
                    opacity: "0.5",
                  }}
                >
                  Old Price: ${prod.price}
                </p>
                <p>
                  Sale Price: $
                  {(
                    prod.price -
                    (prod.price * prod.discountPercentage) / 100
                  ).toFixed(2)}
                </p>
              </div>
            </div>
          );
        }
      })}
    </div>
  );
}

export default Orders;
