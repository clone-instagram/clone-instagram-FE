import { useNavigate } from "react-router-dom";
import styled, { css } from "styled-components";
import { __postLogin } from "../redux/modules/loginSlice";
import { useInput } from "../lib/utils/useInput";
// import StButton from "../components/button/Button";
import insta from "../assets/images/instaImage.png";
import logo from "../assets/images/instaLogo.png";
import line from "../assets/images/loginLine.png";
// import kakao from "../assets/images/kakao.png";

const PostLoginPage = () => {
  const url1 =
    "https://play.google.com/store/apps/details?id=com.instagram.android&referrer=utm_source%3Dinstagramweb%26utm_campaign%3DloginPage%26ig_mid%3D15FEFE7D-0D09-478E-8972-E3FCBF1C8B88%26utm_content%3Dlo%26utm_medium%3Dbadge&hl=ko";
  const url2 =
    "ms-windows-store://pdp/?productid=9nblggh5l9xt&referrer=appbadge&source=www.instagram.com&mode=mini&pos=-1287%2C0%2C1294%2C1399&hl=ko";

  const [email, setEmail] = useInput();
  const [password, setPassword] = useInput();

  const navigate = useNavigate();
  // 로그인 관련
  const onSubmitLogin = (e) => {
    e.preventDefault();
    __postLogin({
      email,
      password,
    }).then((res) => {
      console.log("res:::::", res);
      if (res.statusCode === 200) {
        alert(res.statusMsg);
      }
      localStorage.setItem("id", res.headers.authorization);
      localStorage.setItem("username", res.data.data.username);
      // localStorage.setItem("profileUrl", res.data.data.profileUrl);
      navigate("/main");
    });
  };
  return (
    <StContainer onSubmit={onSubmitLogin}>
      <div>
        <StLeftBox>
          <img src={insta} alt="" width={380} height={580} />
        </StLeftBox>
        <StRightBox1>
          <StRightBox2>
            <img src={logo} alt="" />
            <br></br>

            <StInput
              type="text"
              id="email"
              value={email}
              onChange={setEmail}
              placeholder="전화번호,사용자 이름 또는 이메일"
              required
              minLength={4}
              maxLength={30}
            />
            <StInput
              type="password"
              id="password"
              value={password}
              onChange={setPassword}
              placeholder="비밀번호"
              required
              minLength={8}
              maxLength={15}
            />
            <StButton log>로그인</StButton>
            <div>
              <img src={line} alt="" />
            </div>
            {/* <KakaoBtn kakao href="">카카오 로그인</KakaoBtn> */}
          </StRightBox2>
          <StRightBox3>
            <div>
              계정이 없으신가요?{" "}
              <StButton reg onClick={() => navigate("/signup")}>
                가입하기
              </StButton>
            </div>
          </StRightBox3>
          <br></br>
          앱을 다운로드하세요.
          <br></br>
          <br></br>
          <div>
            <StImgButton
              onClick={() => {
                window.open(url1);
              }}
            />
            <StImgButtons
              onClick={() => {
                window.open(url2);
              }}
            />
          </div>
        </StRightBox1>
      </div>
      {/* <div>
        <h1>로그인</h1>
        <StDiv inputbox>
          <StLabel htmlFor="username">ID</StLabel>
          <StInput
            type="text"
            id="username"
            value={username}
            onChange={setUserName}
            required
            minLength={5}
            maxLength={10}
          />
          <StLabel htmlFor="password">PW</StLabel>
          <StInput
            type="password"
            id="password"
            value={password}
            onChange={setPassword}
            required
            minLength={8}
            maxLength={15}
          />
        </StDiv>
      </div>
      <StDiv btns>
        <Stbutton log>로그인</Stbutton>
        <Stbutton reg onClick={() => navigate("/signup")}>
          회원가입
        </Stbutton>
      </StDiv> */}
    </StContainer>
  );
};
const StContainer = styled.form`
  width: 100%;
  height: 100vh;
  display: flex;
  background-color: #fafafa;
  align-items: center;
  justify-content: center;
  background-size: cover;
`;
const StLeftBox = styled.div`
  background: #c0e9fc;
  box-sizing: border-box;
  float: left;
  height: 580px;
  width: 380px;
  margin-bottom: 10px;
  margin: 0px 10px 12px 0px;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
`;
const StRightBox1 = styled.div`
  width: 400px;
  height: 600px;
  align-items: center;
  border: 0;
  border-radius: 1px;
  box-sizing: border-box;
  display: flex;
  float: right;
  flex-direction: column;
  flex-shrink: 0;
  font-size: 100%;
  /* margin: 5px 0 0px;
  padding: 30px 0px; */
  /* position: relative; */
  /* vertical-align: baseline; */
`;

const StRightBox2 = styled.div`
  background-color: white;
  width: 350px;
  height: 380px;
  align-items: center;
  border: 1px solid #dbdbdb;
  border-radius: 1px;
  box-sizing: border-box;
  display: flex;
  float: right;
  flex-direction: column;
  flex-shrink: 0;
  font-size: 100%;
  margin: 5px 0 0px;
  padding: 30px 0px;
  /* position: relative; */
  vertical-align: baseline;
`;
const StRightBox3 = styled.div`
  width: 350px;
  height: 70px;
  align-items: center;
  background-color: white;
  border: 1px solid #dbdbdb;
  box-sizing: border-box;
  display: flex;
  margin-top: 10px;
  flex-direction: column;
  flex-shrink: 0;
  font-size: 100%;
  padding: 10px 0px;
  /* position: relative; */
  vertical-align: baseline;
`;

const StInput = styled.input`
  width: 268px;
  height: 38px;
  background-color: #fafafa;
  border: 0.5px solid #dbdbdb;
  border-radius: 3px;
  padding-left: 10px;
  margin-top: 5px;
  font-size: 15px;
  /* &:hover {
    border: 0.5px solid black;
  } */
`;

const StImgButton = styled.button`
  width: 150px;
  height: 45px;
  border: 0px;
  background-image: url("https://static.cdninstagram.com/rsrc.php/v3/ye/r/UtJtFmFLCiD.png");
  background-size: cover;
  cursor: pointer;
`;

const StImgButtons = styled.button`
  width: 130px;
  height: 45px;
  border: 0px;
  background-image: url("https://static.cdninstagram.com/rsrc.php/v3/yw/r/LBxTdceDfgS.png");
  background-size: cover;
  margin-left: 10px;
  cursor: pointer;
`;

// const KakaoBtn = styled.button`
//   ${(props) =>
//     props.kakao &&
//     css`
//       margin: 15px 40px;
//       width: 280px;
//       height: 37px;
//       border: 0;
//       font-size: 17px;
//       font-weight: bold;
//       border-radius: 10px;
//       background-color: #0095f6;
//       font-family: georgia;
//       color: white;
//       cursor: pointer;
//       &:hover {
//         background-color: #1877f2;
//       }
//     `}
// `;

// const StButton = styled.button`
//   margin: 15px 40px;
//   width: 280px;
//   height: 37px;
//   border: 0;
//   font-size: 17px;
//   font-weight: bold;
//   border-radius: 10px;
//   background-color: #0095f6;
//   font-family: georgia;
//   color: white;
//   cursor: pointer;

//   &:hover {
//     background-color: #1877f2;
//   }

// `;

const StButton = styled.button`
  cursor: pointer;
  ${(props) =>
    props.log &&
    css`
      margin: 15px 40px;
      width: 280px;
      height: 37px;
      border: 0;
      font-size: 17px;
      font-weight: bold;
      border-radius: 10px;
      background-color: #0095f6;
      font-family: georgia;
      color: white;
      cursor: pointer;
      &:hover {
        background-color: #1877f2;
      }
    `}
  ${(props) =>
    props.reg &&
    css`
      width: 80px;
      height: 40px;
      border: 0px;
      background-color: white;
      color: #0095f6;
      font-weight: bold;
      font-size: 15px;
      margin-top: 5px;
      padding-right: 10px;
      font-size: 15px;
      cursor: pointer;
    `}
`;
export default PostLoginPage;
