import HelloWorld from './components/HelloWorld'
import HelloWorldClass from './components/HelloWorldClass'

function App() {
  return (
    <>
      <HelloWorld name={1} text={true} clickMethod={() => alert('test')} />
      <HelloWorldClass />
    </>
  )
}

export default App
