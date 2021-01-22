import HelloWorld from './components/HelloWorld'
import HelloWorldClass from './components/HelloWorldClass'
import HelloWorldList from './components/HelloWorldList'

function App() {
  return (
    <>
      <HelloWorldList names={['Bob', 'Amy', 'Tom']} />
    </>
  )
}

export default App
