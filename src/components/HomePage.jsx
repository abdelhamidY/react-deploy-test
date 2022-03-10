import { Link } from "react-router-dom";
const HomePage = () => {
  return (
    <>
      <h1>Our apis here</h1>
      <button>
        <Link to={"/order-details"}>Order details</Link>
      </button>
    </>
  );
};

export default HomePage;
