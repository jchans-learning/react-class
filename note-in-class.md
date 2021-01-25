# React 上課筆記

### 2020/1/25 Mon

- 昨晚沒睡，精神不好。前兩三個例子勉強跟著。
- useReducer 第三方套件，略提。老師認為不如學 REDAS （？）
- 撰寫原則建議：盡量不要讓子女元件有狀態。會有執行程序的問題。
- 生命週期（ React 定義給類別型元件的，函式型元件沒有）... 有聽沒有懂。得自己找時間看文件。
- [React lifecycle methods diagram](https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/)
- 我是誰... 我在哪裡...
- 補充，[副作用與存粹函式](https://github.com/eyesofkids/mfee11-react/issues/9)
- [componentDidMount](https://github.com/eyesofkids/mfee11-react/issues/7) 很重要，用來整合其他程式，例如 jQuery 。
- 要最佳化一些比較特別東西，還是要用類別型元件的一些進階用法。函式型元件沒辦法用。
- 下午精神稍微好一點點。
- 可被控制元件（ Controlled Components )




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


#### React Element 與 JSX語法

- JSX 語法.pdf
- key 與 ref 不屬於 props
- 看到 map 就要加 key
- 寫法似乎隨著 React 版本改變也一直在變
- JSX語法 的 style 必須是物件
- JSX與風 不能直接輸出物件，但可以直接輸出陣列
- JSX 陣列裡可以放 React元素

##### 練習： HelloWorldList.js 與 map 語法

##### 練習： MyLinks.js

- React.Children