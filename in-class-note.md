# React 上課筆記

### 2020/01/21 Wed

- 開始上 React 。

#### 第一節課：複習 ES6

- **箭頭函式**
  - 參數只有一個的時候可以省略小括號。
  - return 只有一行的時候可以省略大括號。
  - 還有一些其他特性與一般的函式不太一樣。
- 解構賦值
- 展開運算符
- 其餘運算符（比較少用）
- 陣列與物件的淺拷貝
- 類別（ Class ）， ES6 之後才有的語法
- 模組語法
  - import
  - export
  - 最新的瀏覽器內建支援情況都尚未完整，要先用如 babel 工具進行編譯/打包才能使用。
  - 可在 [caniuse.com](https://caniuse.com/) 確認支援情況

#### 第二節課： React 簡介

- https://reactjs.org/
- https://github.com/facebook/react
- MIT License
- 螞蟻金服的 https://ant.design/
- Vue 框架： https://github.com/vuejs/vue
  - https://book.vue.tw/
  - 自己找時間玩玩看？
- React Native
- React 的重要特性
  - 虛擬 DOM
  - JSX
    - 需要 Babel 編譯後才能執行。 https://babeljs.io/
  - 元件化
  - 單向資料流
  - 宣告式程式設計
    - 接近人類的語言（英文）
- React Fiber （略提）
  - Virtual Stack Frame
  - 工作與優先權劃分
  - 實驗階段（？）

#### 第三節課：環境設定（Mac）

- 安裝 [yarn](https://yarnpkg.com/)

```
sudo npm i -g yarn
```

- [用 CRA(Create React App) 建立新專案](https://create-react-app.dev/docs/getting-started)

```
npx create-react-app my-app
```

（記得把 node_modules 放到 .gitignore ）

- 一些 yarn 指令

```
yarn start
  Starts the development server.

yarn build
  Bundles the app into static files for production.

yarn test
  Starts the test runner.

yarn eject
  Removes this tool and copies build dependencies, configuration files and scripts into the app directory. If you do this, you can’t go back!
```

- 可以[在 .env 檔設定環境](https://create-react-app.dev/docs/adding-custom-environment-variables/) ，例如設定 PORT 。

#### 補充說明

- React 這種函式庫通常稱為 SPA （ Single Program App ）的函式庫。
- public/index.html 與 js/index.js 我們不太會去動。
- 稱為「使用狀態」的 鉤子。
- 「狀態」與「屬性」
- 元件，狀態屬性
