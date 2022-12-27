import { useSelector } from 'react-redux';

import { Link } from 'react-router-dom';

import { TopNavBarStyle } from '../.././styles/TopNavBarStyle';

import { removeItem } from '../../services/storage';

import logo from '../../assets/logo.png';
import home from '../../assets/solid-icons/home.svg';
import share from '../../assets/outline-icons/share.svg';
import add from '../../assets/outline-icons/add.svg';
import like from '../../assets/outline-icons/like.svg';
import signout from '../../assets/outline-icons/signout.svg';

export default function TopNavBar() {
  // const dispatch = useDispatch();
  const { status } = useSelector((state) => state.commentReducer);

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
        <button type="button" className="logo">
          <img src={logo} onClick={() => location.assign('/home')} />
        </button>
        <div className="search">
          <input type="text" placeholder="🔍 검색"></input>
        </div>
        <div className="icons">
          <Link onClick={() => location.assign('/home')}>
            <img src={home} />
          </Link>
          <Link to="#">
            <img src={share} />
          </Link>
          <Link to="/posts">
            <img src={add} />
          </Link>
          <Link to="#">
            <img src={like} />
          </Link>
          <Link onClick={() => handleClickLogout()}>
            <img src={signout} />
          </Link>
        </div>
      </div>
    </TopNavBarStyle>
  );
}
