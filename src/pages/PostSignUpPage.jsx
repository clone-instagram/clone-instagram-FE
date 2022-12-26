import { useNavigate } from "react-router-dom";
import styled, { css } from "styled-components";
import { __postSignup } from "../redux/modules/loginSlice";
import { useInput } from "../lib/utils/useInput";
// import Button from "../components/button/Button";
// import insta from "../assets/images/instaImage.png";
import logo from "../assets/images/instaLogo.png";
import line from "../assets/images/loginLine.png";
// import { useDispatch } from "react-redux";
// import { apis } from "../lib/axios";

const PostSignUpPage = () => {
  const url1 =
    "https://play.google.com/store/apps/details?id=com.instagram.android&referrer=utm_source%3Dinstagramweb%26utm_campaign%3DloginPage%26ig_mid%3D15FEFE7D-0D09-478E-8972-E3FCBF1C8B88%26utm_content%3Dlo%26utm_medium%3Dbadge&hl=ko";
  const url2 =
    "ms-windows-store://pdp/?productid=9nblggh5l9xt&referrer=appbadge&source=www.instagram.com&mode=mini&pos=-1287%2C0%2C1294%2C1399&hl=ko";

  const [email, setEmail] = useInput();
  const [username, setUserName] = useInput();
  const [password, setPassword] = useInput();

  // const dispatch = useDispatch();

  const navigate = useNavigate();
  // 로그인 관련
  // const onSubmitSignup = (e) => {
  //   e.preventDefault();
  //   // dispatch(__postSignup({ email, username, password }))
  //   apis.postSignup({ email, username, password }).then((res) => {
  //     // if (res.statusCode === 200) {
  //     //   alert(res.statusMsg);
  //     // }

  //     navigate("/main");
  //   });
  // };

  const onSubmitSignup = (e) => {
    e.preventDefault();
    __postSignup({
      email,
      username,
      password,
    }).then((res) => {
      console.log("signup res: ", res);
      // if (res.data.statusCode === 200) {
      //   alert(res.data.msg);
      // }
      // localStorage.setItem("id", res.headers.authorization);
      navigate("/login");
    });
    // .catch((err) => {
    //   // console.log("error: ", err);
    // });
  };

  // id 중복 체크 확인
  // const onCheckUserName = (username) => {
  //   console.log("username---->", username);
  //   __checkUserName(username).then((res) => {
  //     console.log(res);
  //   });
  // };

  return (
    <StContainer onSubmit={onSubmitSignup}>
      <div>
        <StRightBox1>
          <StRightBox2>
            <img src={logo} alt="" />

            <StH>
              친구들의 사진과 동영상을 보려면<br></br>가입하세요.
            </StH>
            <StButton>KaKao로 로그인</StButton>
            <div>
              <img src={line} alt="" />
            </div>
            <StInput
              type="text"
              id="email"
              value={email}
              onChange={setEmail}
              placeholder="휴대폰 번호 또는 이메일 주소"
              required
              minLength={4}
              maxLength={30}
            />
            <StInput
              type="text"
              id="username"
              value={username}
              onChange={setUserName}
              placeholder="사용자 이름"
              required
              minLength={4}
              maxLength={10}
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
            <StP>
              저희 서비스를 이용하는 사람이 회원님의 연락처<br></br>정보를
              Instagram에 업로드 했을 수도 있습니다.
              <br></br>
              <a href="https://www.facebook.com/help/instagram/261704639352628?hl=ko">
                더 알아보기
              </a>
            </StP>
            <StButton log>가입</StButton>
          </StRightBox2>
          <StRightBox3>
            <div>
              계정이 있으신가요? &nbsp;
              <StButtons reg onClick={() => navigate("/login")}>
                로그인
              </StButtons>
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

export default PostSignUpPage;

const StContainer = styled.form`
  width: 100%;
  height: 100vh;
  display: flex;
  background-color: #fafafa;
  align-items: center;
  justify-content: center;
  background-size: cover;
`;

const StRightBox1 = styled.div`
  width: 400px;
  height: 950px;
  align-items: center;
  border: 0;
  border-radius: 1px;
  box-sizing: border-box;
  display: flex;
  float: right;
  flex-direction: column;
  flex-shrink: 0;
  font-size: 100%;
  padding: 30px 0px;
  /* position: relative; */
  /* vertical-align: baseline; */
`;

const StRightBox2 = styled.div`
  background-color: white;
  width: 350px;
  height: 550px;
  align-items: center;
  border: 1px solid #dbdbdb;
  border-radius: 1px;
  box-sizing: border-box;
  display: flex;
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
  height: 35px;
  background-color: #fafafa;
  border: 0.5px solid #b2b3b2;
  border-radius: 3px;
  padding-left: 10px;
  margin-top: 5px;
  font-size: 12px;
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

const StButton = styled.button`
  margin-top: 5px;
  margin-bottom: 20px;
  width: 280px;
  height: 33px;
  border: 0;
  font-size: 14px;
  font-weight: bold;
  border-radius: 10px;
  background-color: #0095f6;
  font-family: georgia;
  color: white;
  cursor: pointer;
  &:hover {
    background-color: #1877f2;
  }
  //   width: 100%;
  //
`;
const StH = styled.h4`
  color: #8e8e8e;
  text-align: center;
  font-weight: bold;
`;

const StP = styled.p`
  color: #989c98;
  font-size: 12px;
  text-align: center;
`;

const StButtons = styled.button`
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
      width: 70px;
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
