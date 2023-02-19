import "./App.css";
import BearFriend from "./images/bear-friend.png";

function App() {
  return (
    <main>
      <h1>모코다!!</h1>

      <h3>
        같이 성장하는  <br />
        개발자들의 모임이다!!
      </h3>
      <div className="link-list">
        <a
          className="site-link"
          href="https://www.instagram.com/mocoda.official/"
        >
          @mocoda.official
        </a>
        <a
          className="site-link"
          href="#"
          onClick={() =>
            alert("페이지 준비중입니다! \n인스타를 확인해주세요 😉")
          }
        >
          모코다 모임 구경
        </a>
        <a
          className="site-link"
          href="#"
          onClick={() =>
            alert("페이지 준비중입니다! \n인스타를 확인해주세요 😉")
          }
        >
          쓸데많고 즐거운 이벤트 구경
        </a>
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
