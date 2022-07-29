import React, { useEffect, useRef, useState } from "react";

const DiaryEditor = React.memo(({ onCreate }) => {
  useEffect(() => {
    console.log("DiaryEditor 렌더");
  });
  const authorInput = useRef();
  const contentInput = useRef();

  const [state, setState] = useState({
    author: "",
    content: "",
    emotion: 1
  });

  const handleChangeState = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value
    });
  };


  const handleSubmit = () => {
    if (state.author.length < 1) {
      alert("작성자를 입력해주세요");
      authorInput.current.focus();
      return;
    }

    if (state.content.length < 5) {
      alert("5글자 이상 입력해주세요");
      contentInput.current.focus();
      return;
    }

    onCreate(state.author, state.content, state.emotion);
    alert("저장 성공");
    setState({
      author: "",
      content: "",
      emotion: 1
    });
  };

  return (
    <div className="DiaryEditor">
      <h2>Today's Diary 😊</h2>
      <div>
        <input
          ref={authorInput}
          value={state.author}
          onChange={handleChangeState}
          name="author"
          placeholder="작성자"
          type="text"
        />
      </div>
      <div>
        <textarea
          ref={contentInput}
          value={state.content}
          onChange={handleChangeState}
          name="content"
          placeholder="일기"
          type="text"
        />
      </div>
      <div>
        <span>오늘의 감정점수 : </span>
        <select
          name="emotion"
          value={state.emotion}
          onChange={handleChangeState}
        >
          <option value={1}>😡</option>
          <option value={2}>😒</option>
          <option value={3}>😐</option>
          <option value={4}>🙂</option>
          <option value={5}>🤩</option>
        </select>
      </div>
      <div>
        <button onClick={handleSubmit}>일기 저장하기</button>
      </div>
    </div>
  );
});

export default DiaryEditor;