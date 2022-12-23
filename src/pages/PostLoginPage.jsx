import { useNavigate } from "react-router-dom";
import styled, { css } from "styled-components";
import { __postLogin } from "../redux/modules/loginSlice";
import { useInput } from "../lib/utils/useInput";

import insta from "../assets/images/instaImage.png";
import logo from "../assets/images/instaLogo.png";
import line from "../assets/images/loginLine.png";
import googleplay from "../assets/images/googlePlay.png";
import microsoft from "../assets/images/microSoft.png";

const PostLoginPage = () => {
  const url1 =
    "https://l.instagram.com/?u=https%3A%2F%2Fplay.google.com%2Fstore%2Fapps%2Fdetails%3Fid%3Dcom.instagram.android%26referrer%3Dutm_source%253Dinstagramweb%2526utm_campaign%253DloginPage%2526ig_mid%253D15FEFE7D-0D09-478E-8972-E3FCBF1C8B88%2526utm_content%253Dlo%2526utm_medium%253Dbadge%26hl%3Dko&e=AT00UlRQXf-NWLxVS3ahFTCNPno2nq1jw86E8PFCCwMeDMU8sr1URCCUNcDjh7lzJme4p3kE_4glBi4qBndsLCprk89wJGwPlCYH4wIOjdlxpcqL1m2D5QbuVRcxB68upXZkopSPLKsPYpqQFlUyJQ";
  const url2 =
    "ms-windows-store://pdp/?productid=9nblggh5l9xt&referrer=appbadge&source=www.instagram.com&mode=mini&pos=-1287%2C0%2C1294%2C1399&hl=ko";

  const [username, setUserName] = useInput();
  const [password, setPassword] = useInput();

  const navigate = useNavigate();
  // 로그인 관련
  const onSubmitLogin = (e) => {
    e.preventDefault();
    __postLogin({
      username,
      password,
    })
      .then((res) => {
        console.log("res: ", res);
        if (res.data.statusCode === 200) {
          alert("로그인 성공");
        }
        localStorage.setItem("id", res.headers.authorization);
        navigate("/main");
      })
      .catch((error) => alert("ID 또는 비밀번호가 틀립니다!"));
    // .catch((error) => alert(error.response.data.msg));
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
              id="username"
              value={username}
              onChange={setUserName}
              placeholder="전화번호,사용자 이름 또는 이메일"
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
              minLength={4}
              maxLength={10}
            />
            <StButton>로그인</StButton>
            <div>
              <img src={line} alt="" />
            </div>
          </StRightBox2>
          <StRightBox3>
            <div>
              계정이 없으신가요?{" "}
              <a href="https://www.instagram.com/accounts/emailsignup/?hl=ko">
                가입하기
              </a>
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

export default PostLoginPage;

const StContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
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

  border: 1px solid #dbdbdb;

  box-sizing: border-box;
  display: flex;
  margin-top: 10px;
  flex-direction: column;
  flex-shrink: 0;
  font-size: 100%;
  padding: 23px 0px;
  /* position: relative; */
  vertical-align: baseline;
`;

const StInput = styled.input`
  width: 268px;
  height: 38px;
  border: 0.5px solid #b2b3b2;
  border-radius: 3px;
  padding-left: 10px;
  margin-top: 5px;
  font-size: 15px;
  cursor: pointer;
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
  //   width: 100%;
  //
`;
