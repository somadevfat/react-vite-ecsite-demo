// ReactのuseStateフックをインポート
import { useState } from "react";
// Reactロゴ画像をインポート
import reactLogo from "./assets/react.svg";
// Viteロゴ画像をインポート
import viteLogo from "/vite.svg";
// Appコンポーネント用のCSSをインポート
import "./App.css";

// メインのAppコンポーネント定義
function App() {
  // countという状態変数と、それを更新するsetCount関数を定義
  // 初期値は0
  const [count, setCount] = useState(0);

  // ボタンクリック時の処理
  const onClickButton = () => {
    // 前回の値(prev)に1を加算して状態を更新
    setCount((prev) => prev + 1);
  };

  // コンポーネントのレンダリング内容
  return (
    // メインコンテナ
    <div className="App">
      {/* ヘッダー領域 */}
      <header className="App-header">
        {/* Reactロゴ表示 */}
        <img src={reactLogo} className="App-logo" alt="logo" />

        {/* 説明テキスト */}
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>

        {/* React学習用リンク */}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        {/* 現在のカウント表示 */}
        <div>現在のカウント数: {count}</div>

        {/* カウントアップボタン */}
        <button onClick={onClickButton}>カウントアップ</button>
      </header>
    </div>
  );
}

export default App;
