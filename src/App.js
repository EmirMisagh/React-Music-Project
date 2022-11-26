import React, { Suspense, lazy, useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Fancyloding from './components/tools/FancyLoding';
import Navbar from './components/Navbar';
import MusicPlayer from './components/MusicPlayer';
import Footer from './components/Footer';
import Api from './components/tools/Api';


const Index = lazy(() => import('./pages/Index'))
const Singel = lazy(() => import('./pages/mp3/Singel'));

const App = () => {
  const [Music,setMusic] = useState('');
  const [Musics,setMusics] = useState([]);
  const [Style,setStyle] = useState([]);
 
  useEffect(() =>{
    style('none')
    setMusics(Api)
  },[])
 const style = (style) =>{
    setStyle(style);
 }
 const music = (music) =>{
  setMusic(music);
}
 return(
  <Router>
    <Suspense fallback={<Fancyloding />}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Index style={style} musics={Musics} />} />
        <Route path="/singel/:id" element={<Singel style={style} musics={Musics} music={music} />} />
      </Routes>
      {Music != '' && (
      <MusicPlayer style={Style} music={Music} musics=''  handlemusic={style} />
      )}
      <Footer />
    </Suspense>
  </Router>
 )
 };

export default App;
