import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
const Home = () => {
  const params = useParams();
  const [data, setData] = useState();
  const [spinner, setSpinner] = useState(<div id="preloader"></div>);

  console.log(params);

  const getDataById = async (id) => {
    const response = await axios.get(`https://dummyjson.com/products/${id}`);
    setData(response.data);

    setTimeout(() => {
      setSpinner();
    }, 1000);
  };

  useEffect(() => {
    getDataById(params.id);
  }, []);
  return (
    <div className="Background">
      {/* {spinner} */}
      <div>
        {data && (
          <div style={{ display: "flex" }}>
            <img src={data.thumbnail} alt="" />
            <div style={{ fontSize: 20, color: "white" }}>
              <div>{data.brand}</div>
              <div>{data.price}</div>
              <div>{data.discountPercentage}</div>
              <div>{data.title}</div>
              <div>{data.category}</div>
              <div>{data.stock}</div>
              <div>{data.description}</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default Home;
