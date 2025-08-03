import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// 作成したヘッダーコンポーネントをインポートします
import UserHeader from "./components/UserHeader";

// とりあえずトップページだけインポートしておきます
import TopPage from "./pages/user/TopPage";

function App() {
  return (
    <BrowserRouter>
      {/* ↓ ここでヘッダーを呼び出します */}
      <UserHeader />

      <main>
        <Routes>
          {/* ↓ 最低限のページルートを定義しておきます */}
          <Route path="/" element={<TopPage />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
