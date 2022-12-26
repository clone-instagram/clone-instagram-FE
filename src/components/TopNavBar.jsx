import { useSelector } from 'react-redux';

import { Link } from 'react-router-dom';

import { TopNavBarStyle } from '.././styles/TopNavBarStyle';

import { removeItem } from '../services/storage';

import logo from '../assets/logo.png';
import home from '../assets/solid-icons/home.svg';
import share from '../assets/outline-icons/share.svg';
import add from '../assets/outline-icons/add.svg';
import like from '../assets/outline-icons/like.svg';
import more from '../assets/outline-icons/more.svg';

export default function TopNavBar() {
  // const dispatch = useDispatch();
  const { status } = useSelector((state) => state.postReducer);

  // const handleClickBack = () => {
  //   dispatch(clearAll());
  //   window.history.back();
  // };

  const handleClickLogout = () => {
    removeItem(status);
    window.location.reload();
  };

  return (
    <TopNavBarStyle color="#BEBEBE">
      <div>
        {/*toAsk 아래와 같이 img태그에 onClick핸들러 넣어서 해도 되는지?*/}
        <div className="logo">
          <img src={logo} onClick={() => location.assign('/')} />
        </div>
        <div className="search">
          <input type="text" placeholder="🔍 검색">
          </input>
        </div>
        <div className="icons">
          <Link onClick={() => location.assign('/')}><img src={home} /></Link>
          <Link to="#"><img src={share} /></Link>
          <Link to="#"><img src={add} /></Link>
          <Link to="#"><img src={like} /></Link>
          <Link onClick={() => handleClickLogout()}><img src={more} /></Link>
        </div>
      </div>
    </TopNavBarStyle >
  );
}
