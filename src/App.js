import "./App.css";
import BearFriend from "./images/bear-friend.png";

function App() {
  return (
    <main>
      <h1>모코다!!</h1>

      <h3>
        함께하니 즐거운 <br />
        개발자들들의 모임 커뮤니티
      </h3>
      <div className="link-list">
        <a
          className="site-link"
          href="https://www.instagram.com/mocoda.official/"
        >
          @mocoda.official
        </a>
        <a className="site-link" href="https://mocoda-crush-book.super.site/">
          📚 프론트엔드 책떼기 모임 <br />
          (2월 진행중)
        </a>
        <div
          className="site-link"
          onClick={() =>
            alert("페이지 준비중입니다! \n인스타를 확인해주세요 😉")
          }
        >
          쓸데많고 즐거운 이벤트 구경
        </div>
      </div>
      <div className="dacing-container">
        <div className="dancing-bears">
          <img className="bear-friend" src={BearFriend} alt="bear friend" />
          <img className="bear-friend" src={BearFriend} alt="bear friend" />
        </div>
      </div>
    </main>
  );
}

export default App;
