import { apis } from "../../lib/axios";
// import axios from "axios";

export const __postLogin = async (post) => {
  try {
    const data = await apis.postLogin(post);
    return data;
  } catch (error) {
    console.log("error::", error);
    alert(error.response.data.statusMsg);
  }
};

export const __postSignup = async (post) => {
  try {
    const data = await apis.postSignup(post);

    // alert("회원가입 성공!");
    return data;
  } catch (error) {
    console.log("err :::", error);
    alert(error.response.data.statusMsg);
  }
};

export const __postLogout = async () => {
  try {
    await apis.postLogout();
    // localStorage.removeItem("username")
    // localStorage.removeItem("profileUrl")
    alert("로그아웃 성공");
  } catch (error) {
    alert(error.respose.data.statusMsg);
  }
};

// id 중복체크
// export const __checkEmail = async (email) => {
//   try {
//     const data = await apis.checkUserName(email);
//     console.log("email: ", email);
//     console.log("data: ", data);
//     if (data.data.statusCode === 200) {
//       alert(data.data.msg);
//     }
//     // useSweet(1000, "success", "회원가입 성공");
//     return data;
//   } catch (error) {
//     alert(error.response.data.msg);
//     // useSweet(1000, "error", error.response.data.msg);
//   }
// };
