import { useState } from 'react';

const initialInputField = [
  {
    id: null,
    content: '',
  },
];

export default function useChangeInputField() {
  const [inputField, setInputField] = useState(initialInputField);

  const handleChangeInputField = (event, postId) => {
    // toDoAsk 저장하면 자동 줄바꿈됨
    const {
      target: { id, value },
    } = event;
    setInputField([{ id: postId, [id]: value }]);
  };

  return {
    inputField,
    handleChangeInputField,
  };
}
