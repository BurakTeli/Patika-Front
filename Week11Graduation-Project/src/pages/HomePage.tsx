import { useNavigate } from "react-router-dom";
import UserInfoForm from "../components/forms/UserInfoForm";
import "../styles/homePage.css";

const HomePage = () => {
  const navigate = useNavigate();

  // 📦 Handles form submission and navigates to quiz page
  const handleSubmit = (values: {
    firstName: string;
    lastName: string;
    nickname: string;
  }) => {
    console.log(values);
    navigate("/quiz");
  };

  // 🎉 Navigates to the funny page
  const handleFunnyPage = () => {
    navigate("/funny");
  };

  return (
    <div className="home-container">
      {/* 🏠 Page Title */}
      <h1 className="home-title">Welcome to the Quiz!</h1>

      {/* 📃 Short Quiz Info */}
      <p className="home-info">
        This quiz contains 10 questions. You have 30 seconds for each. Use your
        jokers wisely!
      </p>

      {/* 🧾 User Information Form */}
      <UserInfoForm onSubmit={handleSubmit} />

      {/* 🤪 Funny Page Redirect Button */}
      <button className="funny-button" onClick={handleFunnyPage}>
        Funny Page
      </button>
    </div>
  );
};

export default HomePage;
