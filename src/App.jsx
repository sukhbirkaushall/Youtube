import React, { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Home from './Pages/Home/Home'
import Video from './Pages/Video/Video'
import { Routes, Route } from 'react-router-dom'

const App = () => {

  const [sidebar, setSidebar] = useState(true)


  return (
    <div>
      <Navbar setSidebar={setSidebar} />
      <Routes>
        <Route path='/' element={<Home sidebar={sidebar} />} />
        <Route path='/video/:categoryId/:videoId' element={<Video />} />
      </Routes>
    </div>
  )
}

export default App

// Reference
// AIzaSyBSe9M-k1a6mlXfEfBfETWCNTDczbyBmUU
// https://developers.google.com/youtube/v3/getting-started
// https://console.cloud.google.com/apis/api/youtube.googleapis.com/metrics?project=youtube-clone-482201&supportedpurview=project
// https://developers.google.com/youtube/v3/docs