import { useNavigate } from "react-router-dom"

const useNavigation=()=>{
      const navigate = useNavigate();
  const loginNavigate = () => {
    navigate("/Login");
  };

  const SignUpNavigate = () => {
    navigate("/SignUp");
  };

  const afterAuth=()=>{
    navigate('/Cameras');
  }

  return {loginNavigate,SignUpNavigate,afterAuth
    
  }
}

export default useNavigation;