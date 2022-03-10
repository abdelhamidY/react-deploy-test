import { Link } from "react-router-dom";
const OrderDetails = () => {
  return (
    <>
      <h1>order Now</h1>
      <button>
        <Link to={"/form"}>Order Now</Link>
      </button>
    </>
  );
};

export default OrderDetails;
