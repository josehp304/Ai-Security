import { useNavigate } from "react-router-dom"

const useNavigation=()=>{
      const navigate = useNavigate();
  const loginNavigate = () => {
    navigate("/Login");
  };

  const SignUpNavigate = () => {
    navigate("/SignUp");
  };

  return {loginNavigate,SignUpNavigate}
}

export default useNavigation;