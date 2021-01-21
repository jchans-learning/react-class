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


#### 第四節課：環境設定（Mac），續

- 設定 ESLint 與 Prettier [參考老師的講義](https://github.com/eyesofkids/mfee11-react/tree/main/%E6%95%99%E6%9D%90/0121/reactjs%E9%96%8B%E7%99%BC%E7%92%B0%E5%A2%83%E8%A8%AD%E5%AE%9A/CRA-eslint-prettier)。

用 yarn 安裝

```
yarn add eslint-plugin-prettier prettier eslint-config-react-app eslint-plugin-import eslint-plugin-react eslint-plugin-jsx-a11y eslint-plugin-react-hooks
```

或用 npm 安裝

```
npm install --save-dev eslint-plugin-prettier prettier eslint-config-react-app eslint-plugin-import eslint-plugin-react eslint-plugin-jsx-a11y eslint-plugin-react-hooks
```

- 課堂間會介紹的 [勾子（ hook ）](https://zh-hant.reactjs.org/docs/hooks-intro.html) ： useState, useEffect
- [元件撰寫原則](https://github.com/eyesofkids/mfee11-react/issues/2)：
  1. 元件檔案名稱、元件文件名稱大寫英文字母開頭。（元件就是指函式）
  2. 每個元件的檔案名稱、元件名稱(函式/類別)、輸出(export default)名稱要一致。(老師再三強調，建議一個檔案只放一個元件)
  3. 元件命名用"巴斯卡(PascalCase)"/[大駝峰(CamelCase )命名法](https://zh.wikipedia.org/wiki/%E5%91%BD%E5%90%8D%E8%A7%84%E5%88%99_(%E7%A8%8B%E5%BA%8F%E8%AE%BE%E8%AE%A1))
  4. 回傳的JSX語句只能有一個根元素。(必要時要用<>.....</>包住)


#### 第五節課：開始寫點東西

- Chrome 輔助工具： [React Developer Tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi/related)
- [Hooks 勾子](https://github.com/eyesofkids/mfee11-react/blob/main/%E6%95%99%E6%9D%90/0121/React%E5%8B%BE%E5%AD%90(hooks)/intro.md)
- 練習函式型元件（ Function Component ）與類別型元件（ Class Component ）的寫法


#### 第六節課

- 類別 Class
