import React from 'react';

function App() {
  const [totlal, setTotal] = useState(0);

  return <h1 o
          nClick={() => {
            setTotal(total + 1)
            }}
          >
          {total}
          </h1>
}

export default App;
