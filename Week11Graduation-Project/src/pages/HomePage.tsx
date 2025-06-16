import { useNavigate } from 'react-router-dom';
import UserInfoForm from '../components/forms/UserInfoForm';
import '../styles/homePage.css';

const HomePage = () => {
  const navigate = useNavigate();

  const handleSubmit = (values: { firstName: string; lastName: string; nickname: string }) => {
    console.log(values);
    navigate('/quiz');
  };

  return (
    <div className="home-container">
      <h1 className="home-title">Teste Hoş Geldiniz!</h1>
      <p className="home-info">
        Test 10 sorudan oluşur. Her soru için 30 saniyeniz vardır. Joker haklarınızı akıllıca kullanın.
      </p>

      <UserInfoForm onSubmit={handleSubmit} />
    </div>
  );
};

export default HomePage;
