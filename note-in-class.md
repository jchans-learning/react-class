# React 上課筆記

### 2020/01/22 Fri

- 上課遲到。 09:20 進教室的時候老師講第一個例子講到一半。
- 09:50 左右有跟上一點。
- 函式型元件與類別型元件

#### props

- React 官網參考資料 [Components 與 Props （中文）](https://zh-hant.reactjs.org/docs/components-and-props.html) ， [Components 與 Props （英文）](https://reactjs.org/docs/components-and-props.html)
- Function Component 與 Class Component 寫法
- 一般寫法與解構賦值寫法
- 目前看起來好像 Function Component 可以寫比較少程式碼？待確認。

##### 屬性的預設值 defaultProps

- 屬性的預設值寫在 function 的變數裡，可運作但不建議這樣寫（風格上）
- 參考老師的教材 [ES6 類別Class](https://github.com/eyesofkids/mfee11-react/blob/main/%E6%95%99%E6%9D%90/0121/ES6%E7%AF%87-%E9%A1%9E%E5%88%A5class.pdf) 講義。
- 老師建議目前不要用 ES7 的語法裡的 static ，因為那只有類別可以用。 ES6 的語法目前則是函式元件與類別元件可以通用。

##### 檢查屬性值

- JSX 語法裡的屬性值，不像 HTML ，並不限於字串。
- 屬性值可以用 [prop-types](https://www.npmjs.com/package/prop-types) 套件來限制類型。雖然我連結貼 npm 套件頁面，但是我這次用 yarn 裝看看（ yarn 的這個套件的說明頁面直接用 npm 那邊的... ）。
  - [補充資料](https://github.com/eyesofkids/mfee11-react/issues/5) ）
  - [React 官網關於 prop-types 的文件](https://zh-hant.reactjs.org/docs/typechecking-with-proptypes.html)
  - 不是一個很好的檢查工具，連續有兩三個錯誤的話，只會檢查到第一個錯誤。


##### 其他

- TypeScript 官網： https://www.typescriptlang.org/
- 可能之後得自己學看看


#### React Element

- JSX 語法.pdf
- key 與 ref 不屬於 props
- 看到 map 就要加 key
- 寫法似乎隨著 React 版本改變也一直在變

##### 練習：HelloWorldList.js 與 map 語法

