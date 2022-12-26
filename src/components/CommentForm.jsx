import { CommentFormStyle } from '../styles/CommentFormStyle';

import smile from '.././assets/outline-icons/smile.svg';

export default function CommentForm({
  postId, inputField, onChangeInputField, onClickPostComment
}) {
  return (
    <CommentFormStyle>
      <div>
        <img src={smile} />
        <input
          type="text"
          id="content"
          value={inputField ? inputField.content : ''}
          placeholder="댓글 달기..."
          onChange={(e) => onChangeInputField(e, postId)}
        />
      </div>
      <button
        type="button"
        onClick={() => onClickPostComment(postId)}
      >
        게시
      </button>
    </CommentFormStyle>
  );
}
