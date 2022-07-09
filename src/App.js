import "./App.css";
import DiaryEditor from "./DiaryEditor";
import DiaryList from "./DiaryList";

const dummyList = [
  {
    id: 1,
    author: "김재준",
    content: "오늘은 치킨을 먹었다.",
    emotion: '🙂',
    created_date: new Date().getTime()
  },
  {
    id: 2,
    author: "조아영",
    content: "오늘은 일을 했다.",
    emotion: '😐',
    created_date: new Date().getTime()
  },
  {
    id: 3,
    author: "최예원",
    content: "오늘도 이쁘다",
    emotion: '🤩',
    created_date: new Date().getTime()
  }
];

const App = () => {
  return (
    <div className="App">
      <DiaryEditor />
      <DiaryList diaryList={dummyList} />
    </div>
  );
};

export default App;
