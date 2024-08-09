import App from "../components/Card";
// custom hooks
import { useFetch } from "../hooks/useFetch";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { AddProduct } from "../features/productSlice";

function Home() {
  const url =
    "https://online-json-server-api.up.railway.app/project/66adfd4d340dd55056fb30aa/products";
  const { data, isPending, error } = useFetch(url);
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);

  useEffect(() => {
    if (data) {
      dispatch(AddProduct(data));
    }
  }, [data, dispatch]);

  return (
    <div className="grid-container">
      {isPending && (
        <h2
          style={{
            fontSize: "50px",
            letterSpacing: "4px",
          }}
        >
          Loading...
        </h2>
      )}
      {products?.map((product) => {
        return (
          <div key={product.id}>
            <App product={product} />
          </div>
        );
      })}
    </div>
  );
}

export default Home;
