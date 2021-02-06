import React from 'react'
import CopyPasteThree from './components/copypaste-three'

function App() {

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex pt-10">
        <h1 className="font-bold text-6xl mx-auto text-gray-700 hover:text-yellow-500 transform transition hover:scale-125">Test Vite + React</h1>
      </div>
      <div className="pt-8 flex-grow">
        <CopyPasteThree className="min-h-screen" />
      </div>
    </div>
  )
}

export default App
