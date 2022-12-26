import EmojiPicker from 'emoji-picker-react';

import { CommentFormStyle } from '../../styles/CommentFormStyle';

import smile from '../.././assets/outline-icons/smile.svg';

export default function CommentForm({ postId, inputField, onChangeInputField, onClickPostComment }) {
  const handleClickEmoji = () => {
    // ToDo 상태변화 함수 작성하기: onEmojiClick활용, 상태저장 + 클릭시 이모지 선택창 띄우게
    return (
      <div>
        <EmojiPicker />
      </div>
    );
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
          onChange={(e) => onChangeInputField(e, postId)}
        />
      </div>
      <button type="button" onClick={() => onClickPostComment(postId)}>
        게시
      </button>
    </CommentFormStyle>
  );
}
