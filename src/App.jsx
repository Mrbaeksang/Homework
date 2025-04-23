import './App.css';
import ProfileCard from './components/ProfileCard';
import profileImg from './assets/images/zi-a.png';

function App() {
  return (
    <div className="main-container">
      <h1 className="title">백상현의 숙제장 ✨</h1>

      <ProfileCard
        image={profileImg}
        name="백상현"
        description="진주 부트캠프 10기 수강생입니다."
      />

      <div className="link-area">
        <a
          className="link-button"
          href="https://chapter3-react1.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          📘 CHAPTER 1 - 숙제
        </a>
        <a
          className="link-button"
          href="https://chapter3-react2.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          📙 CHAPTER 2 공부 노트
        </a>
        <a
          className="link-button"
          href="https://chapter3-react3.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          📗 CHAPTER 3 프로젝트
        </a>
      </div>
    </div>
  );
}

export default App;
