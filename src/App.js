import "./App.css";
import BearFriend from "./images/bear-friend.png";

function App() {
  return (
    <main>
      <h1>모코다!!</h1>
      <h3>
        함께 성장하는  <br />
        개발자들의 모임이다!
      </h3>
      <a className="insta-link" href="#">
        @mocoda_official
      </a>
      <div className="link-list">
        <a className="site-link" href="#">
          SNS 계정
        </a>
        <a className="site-link" href="#">
          모코다 모임 구경
        </a>
        <a className="site-link" href="#">
          이벤트 확인하기
        </a>
      </div>
      <div className="dancing-bears">
        <img className="bear-friend" src={BearFriend} alt="bear friend" />
        <img className="bear-friend" src={BearFriend} alt="bear friend" />
      </div>
    </main>
  );
}

export default App;
