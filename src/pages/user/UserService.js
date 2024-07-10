import { Axios } from "axios";

export default function LoginService() {
  const post = async ($data) => {
      //Cookies.set("logged", true, { expires: 30 });
    return "TESTE";
  };

  return {
    post,
  };
}
