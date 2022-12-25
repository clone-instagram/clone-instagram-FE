import React, { useState, useRef } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
// import { apis } from "../lib/axios";

import { useDispatch } from "react-redux";
import { __addPost } from "../redux/modules/postSlice";

// import axios from "axios";

const PostPostPage = () => {
  const navigate = useNavigate();

  // // const [imageUrl, setImageUrl] = useState(null);
  // const imgRef = useRef();
  // // const [post, setPost] = useState();
  // const dispatch = useDispatch();

  // const onChangeImage = (event) => {
  //   const file = event.target.files[0];
  //   setImageFile(file);
  //   const reader = new FileReader();
  //   // const file = imgRef.current.files[0];
  //   console.log(file);
  //   reader.readAsDataURL(file);
  //   reader.onloadend = () => {
  //     setImageUrl(reader.result);
  //     // const image = reader.result;
  //     setPost({
  //       ...post,

  //       imageUrl: reader.result,
  //     });
  //   };
  // };
  // // console.log(imageUrl);
  // const [imagefile, setImageFile] = useState("");
  // const [imageUrl, setImageUrl] = useState("");
  // const [title, setTitle] = useState("");
  // const [content, setContent] = useState("");
  // const [category, setCategory] = useState("");
  // const [post, setPost] = useState([]);
  // const setFile = (e) => {};

  // const setFileImage = (event) => {
  //   if (event.target.files[0]) {
  //     setImageFile(event.target.files[0]);
  //     const formdata = new FormData();
  //     formdata.append("imageUrl", imagefile);
  //     formdata.append("title", title);
  //     formdata.append("content", content);
  //     formdata.append("category", category);
  //     console.log(formdata);
  //     console.log(typeof formdata);
  //     dispatch(__addPost(formdata));
  //     console.log(title);
  //   }
  // };

  // const [post, setPost] = useState({
  //   title: "",
  //   imageUrl: "",
  //   content: "",
  //   category: "",
  // });

  // useEffect(() => {
  //   apis
  //     .getPost()
  //     .then((res) => {
  //       const get = res.data;
  //       setPost(get);
  //     })
  //     .catch((err) => {
  //       // console.log(err);
  //     });
  // }, []);

  // const onSubmitHandler = () => {
  //   console.log(title, content, category);
  //   const formdata = new FormData();
  //   formdata.append("file", imagefile);
  //   formdata.append("title", title.title);
  //   formdata.append("content", content.content);
  //   formdata.append("category", category.category);
  //   console.log(formdata);
  //   console.log(typeof formdata);

  //   dispatch(__addPost(formdata));

  //   for (const pair of formdata) {
  //     console.log(pair[0] + ", " + pair[1]);
  //   }
  // };
  return (
    <StContainer>
      <div>
        <div>
          <StTopBar>
            <StBackButton
              onClick={() => {
                navigate("/main");
              }}
            />
            <StH>새 게시물 만들기</StH>
            <StShareButton>공유하기</StShareButton>
          </StTopBar>
        </div>
        <StLeftBox>이미지</StLeftBox>
        <StRightBox>
          <StUserBox>Username</StUserBox>
          <StPostBox placeholder="문구 입력.."></StPostBox>
          <StImogeBox></StImogeBox>
        </StRightBox>
      </div>
    </StContainer>
  );
};

export default PostPostPage;

const StContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  background-color: #dbdbdb;
  align-items: center;
  justify-content: center;
  background-size: cover;
`;
const StLeftBox = styled.div`
  align-items: center;
  background: #c0e9fc;
  box-sizing: border-box;
  float: left;
  height: 855px;
  width: 855px;
  display: flex;
  border-bottom-left-radius: 15px;
  /* align-items: center;
  width: 500px;
  height: 490px;
  border: none;
  background: transparent;
  border: 1px solid burlywood;
  border-radius: 5px; */
`;

const StTopBar = styled.div`
  width: 1195px;
  height: 50px;
  background-color: white;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  justify-content: space-between;
  align-items: center;
  display: flex;
  border-bottom: 1px solid #dbdbdb;
`;

const StRightBox = styled.div`
  background-color: white;
  width: 339px;
  height: 855px;
  align-items: center;

  border-radius: 1px;
  /* box-sizing: border-box; */
  display: flex;
  float: right;
  flex-direction: column;
  flex-shrink: 0;
  font-size: 100%;
  border-bottom-right-radius: 15px;
  /* padding: 30px 0px; */
  /* position: relative; */
  vertical-align: baseline;
`;

const StBackButton = styled.button`
  width: 30px;
  height: 30px;
  border: 0px;
  background-image: url("https://velog.velcdn.com/images/dnr0000/post/74060826-4b7c-4908-8e0e-59e8f39eee45/image.png");
  background-size: cover;
  margin-left: 15px;

  cursor: pointer;
`;

const StShareButton = styled.button`
  width: 80px;
  height: 40px;
  border: 0px;
  background-color: white;
  color: #0095f6;
  font-weight: bold;
  font-size: 15px;
  margin-right: 15px;

  cursor: pointer;
`;

const StH = styled.h3`
  color: black;
  text-align: center;
  font-weight: bold;
  width: 150px;
  height: 40px;
  margin-bottom: 1px;
  font-size: 17px;
`;

const StUserBox = styled.div`
  width: 330px;
  height: 60px;
  display: flex;
  align-items: center;
`;

const StImogeBox = styled.div`
  width: 339px;
  height: 40px;
  border-bottom: 1px solid #dbdbdb;
`;

const StPostBox = styled.textarea`
  width: 290px;
  height: 174px;
  border: 0;
  background-color: white;
  font-size: 15px;
  font-family: Arial;
  padding-left: 16px;
  padding-right: 16px;
  &::-webkit-scrollbar {
    display: none;
  }
  &:focus {
    outline: none;
  }
`;
