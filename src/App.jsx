import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

      <h1>My Services</h1>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. In, ullam quis maiores quos aperiam molestias suscipit, iusto voluptas quo, eius saepe totam accusantium quibusdam odio ab doloribus? Rerum eaque cum unde dolorum debitis inventore quia velit architecto quis sit fuga amet, porro exercitationem maiores natus quibusdam aperiam nihil adipisci! Dolor et enim, deserunt voluptate quos suscipit consequuntur ipsa. Rerum blanditiis eaque fugiat corporis alias, quibusdam doloremque. Nostrum autem officia laudantium porro earum perspiciatis. Placeat voluptatum consequuntur veritatis aperiam quidem ad quo nihil corrupti laborum. Nesciunt perferendis cumque autem dicta inventore quo quisquam consequuntur ad repellat, qui hic, possimus nihil omnis quam nam quia at aperiam voluptas fugit cupiditate! Ullam laudantium officia, sed animi atque excepturi ad architecto quasi beatae impedit nesciunt ipsam minima quibusdam corporis, laborum illo quis, maiores necessitatibus. Molestiae voluptatum quam, dolorem debitis libero minus! Quia officiis optio odit tenetur est fugit? Tempora iure, unde velit rem quisquam quam qui libero inventore vero laboriosam delectus eaque commodi quia, neque expedita magni consequuntur debitis repudiandae fuga ducimus dolore? Nemo iste, debitis obcaecati suscipit rerum, earum dolor eius aperiam, iure aspernatur quas modi dicta quos. Ut ratione, assumenda asperiores iusto eum totam quas voluptatum deleniti ipsa minima aspernatur, id optio.
    </>
  )
}

export default App
