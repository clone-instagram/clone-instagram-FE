import EmojiPicker from 'emoji-picker-react';

import { useDispatch } from 'react-redux';

import useChangeInputField from '../../hooks/useChangeInputField';
import { fetchAddComment } from '../../redux/middleware/thunk';

import { CommentFormStyle } from '../../styles/CommentFormStyle';

import smile from '../.././assets/outline-icons/smile.svg';

export default function CommentForm({ postId }) {
  const dispatch = useDispatch();
  const handleClickEmoji = () => {
    // ToDo 상태변화 함수 작성하기: onEmojiClick활용, 상태저장 + 클릭시 이모지 선택창 띄우게
    return (
      <div>
        <EmojiPicker />
      </div>
    );
  };
  const { inputField, handleChangeInputField, handleClearInputField } = useChangeInputField();

  const handleClickPostComment = (postId, content) => {
    content ? dispatch(fetchAddComment({ id: postId, content })) : alert('댓글을 입력해주세요!');
    handleClearInputField(postId);
  };

  return (
    <CommentFormStyle>
      <div>
        <button type="button" onClick={() => handleClickEmoji()}>
          <img src={smile} />
        </button>
        <input
          type="text"
          id="content"
          value={inputField ? inputField.content : ''}
          placeholder="댓글 달기..."
          onChange={(e) => handleChangeInputField(e, postId)}
        />
      </div>
      <button type="button" onClick={() => handleClickPostComment(postId, inputField.content)}>
        게시
      </button>
    </CommentFormStyle>
  );
}
