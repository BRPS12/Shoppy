import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import axios from "axios";
import Users from "./Users";
const Products = () => {
  const [data, setData] = useState([]);
  const [id, setId] = useState(0);
  const [spinner, setSpinner] = useState(<div id="preloader"></div>);
  const instance = axios.create({
    baseURL: "https://dummyjson.com/products",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
  instance.interceptors.response.use(
    function (response) {
      console.log("savdjhsadgjacdvgjahdgashjdsgaja", response);
      return response;
    },
    function (error) {
      console.log(error);
      return Promise.reject(error);
    }
  );
  const getData = async () => {
    const rosponse = await instance.get();
    console.log(rosponse.data);
    setData(rosponse.data.products);
    setTimeout(() => {
      setSpinner();
    }, 2000);
  };
  const getId = async () => {
    const response = await instance.get(`https://dummyjson.com/products/${id}`);
    const result = data.filter((el) => Number(el.id) === Number(id));
    setData(result);
    setData([response.data]);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      {spinner}
      <center
        style={{
          marginBottom: 10,
        }}
      >
        <input
          class="rounded-5"
          style={{ height: 50, width: 500 }}
          onChange={(e) => setId(e.target.value)}
        ></input>
        <button
          style={{ height: 50, marginLeft: 10 }}
          class="btn btn-light"
          type="button"
          onClick={getData}
        >
          GetProducts
        </button>
        <button
          style={{ height: 50, marginLeft: 10 }}
          class="btn btn-light"
          type="button"
          onClick={getId}
        >
          GetByID
        </button>
        <button
          style={{ height: 50, marginLeft: 10 }}
          class="btn btn-light"
          type="button"
        >
          Delete
        </button>
      </center>
      <center>
        <div className="grid-container">
          {data &&
            data.map((user, id) => {
              return (
                <div>
                  <Users key={id} user={user} />
                </div>
              );
            })}
        </div>
      </center>
    </div>
  );
};
export default Products;
