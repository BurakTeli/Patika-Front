import { useNavigate } from "react-router-dom";
import UserInfoForm from "../components/forms/UserInfoForm";
import "../styles/homePage.css";

const HomePage = () => {
  const navigate = useNavigate();

  const handleSubmit = (values: {
    firstName: string;
    lastName: string;
    nickname: string;
  }) => {
    console.log(values);
    navigate("/quiz");
  };

  const handleFunnyPage = () => {
    navigate("/funny");
  };

  return (
    <div className="home-container">
      <h1 className="home-title">Welcome to the Quiz!</h1>
      <p className="home-info">
        This quiz contains 10 questions. You have 30 seconds for each. Use your
        jokers wisely!
      </p>

      <UserInfoForm onSubmit={handleSubmit} />

      <button className="funny-button" onClick={handleFunnyPage}>
        Funny Page
      </button>
    </div>
  );
};

export default HomePage;
