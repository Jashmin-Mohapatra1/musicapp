import Player from "./components/Player";
import React, {useEffect, useState} from "react";

function App() {

  const [songs]=useState([
    {
    title:"23",
    artist:"BTS",
    img_src:"./images/BTS2.jpg",
    src:"./songs/23.mp3"
    },
    {
    title:"agust",
    artist:"BTS",
    img_src:"./images/BTS2.jpg",
    src:"./songs/agust.mp3"
    },
   {
    title:"airplane",
    artist:"BTS",
    img_src:"./images/BTS2.jpg",
    src:"./songs/airplane.mp3"
    },
   
      {
      title:"anpanman",
      artist:"BTS",
      img_src:"./images/BTS2.jpg",
      src:"./songs/anpanman.mp3"
       },
      {
      title:"attack_on_bangtan",
      artist:"BTS",
      img_src:"./images/BTS2.jpg",
      src:"./songs/attack_on_bangtan.mp3"
      },
      {
      title:"autumn",
      artist:"BTS",
      img_src:"./images/BTS2.jpg",
       src:"./songs/autumn.mp3"
       },
      {
      title:"awake",
      artist:"BTS",
      img_src:"./images/BTS2.jpg",
      src:"./songs/awake.mp3"
     },
     {
      title:"beautiful",
     artist:"BTS",
       img_src:"./images/BTS2.jpg",
       src:"./songs/beautiful.mp3"
     },
     {
      title:"best_of_me",
      artist:"BTS",
      img_src:"./images/BTS2.jpg",
      src:"./songs/best_of_me.mp3"
     },  
     {
      title:"black_swan",
      artist:"BTS",
      img_src:"./images/BTS2.jpg",
      src:"./songs/black_swan.mp3"
     }, 
     {
      title:"blood",
      artist:"BTS",
      img_src:"./images/BTS2.jpg",
      src:"./songs/blood.mp3"
     },
     {
      title:"boy_meets_evil",
      artist:"BTS",
      img_src:"./images/BTS2.jpg",
      src:"./songs/boy_meets_evil.mp3"
     },  
     {
      title:"boy_with_love",
      artist:"BTS",
      img_src:"./images/BTS2.jpg",
      src:"./songs/boy_with_love.mp3"
     },
     {
      title:"boyz_with_fun",
      artist:"BTS",
      img_src:"./images/BTS2.jpg",
      src:"./songs/boyz_with_fun.mp3"
     },
     {
      title:"bulletproof",
      artist:"BTS",
      img_src:"./images/BTS2.jpg",
      src:"./songs/bulletproof.mp3"
     }, 
     {
      title:"butterfly",
      artist:"BTS",
      img_src:"./images/BTS2.jpg",
      src:"./songs/butterfly.mp3"
     },  
     {
      title:"century",
      artist:"BTS",
      img_src:"./images/BTS2.jpg",
      src:"./songs/century.mp3"
     }, 
     {
      title:"chyper_two",
      artist:"BTS",
      img_src:"./images/BTS2.jpg",
      src:"./songs/chyper_two.mp3"
     },
     {
      title:"come_back_home",
      artist:"BTS",
      img_src:"./images/BTS2.jpg",
      src:"./songs/come_back_home.mp3"
     }, 
     {
      title:"crystal_snow",
      artist:"BTS",
      img_src:"./images/BTS2.jpg",
      src:"./songs/crystal_snow.mp3"
     },
     {
      title:"Daechwita",
      artist:"Agust D",
      img_src:"./images/BTS2.jpg",
      src:"./songs/daechwita.mp3"
     },
     {
      title:"Danger",
      artist:"BTS",
      img_src:"./images/BTS2.jpg",
      src:"./songs/danger.mp3"
     }, 
     {
      title:"Dead leaves",
      artist:"BTS",
      img_src:"./images/BTS2.jpg",
      src:"./songs/dead_leaves.mp3"
     }, 
     {
      title:"Dionysus",
      artist:"BTS",
      img_src:"./images/BTS2.jpg",
      src:"./songs/dionysus.mp3"
     },
     {
      title:"DNA",
      artist:"BTS",
      img_src:"./images/BTS2.jpg",
      src:"./songs/dna.mp3"
     },
     {
      title:"Don't leave me",
      artist:"BTS",
      img_src:"./images/BTS2.jpg",
      src:"./songs/dont_leave_me.mp3"
     },
     {
      title:"Dope",
      artist:"BTS",
      img_src:"./images/BTS2.jpg",
      src:"./songs/dope.mp3"
     },
     {
      title:"Dynamite",
      artist:"BTS",
      img_src:"./images/BTS2.jpg",
      src:"./songs/dynamite.mp3"
     }, 
     {
      title:"Epiphany",
      artist:"BTS",
      img_src:"./images/BTS2.jpg",
      src:"./songs/epiphany.mp3"
     },
     {
      title:"Euphoria",
      artist:"BTS",
      img_src:"./images/BTS2.jpg",
      src:"./songs/euphoria.mp3"
     },
     {
      title:"Fake Love",
      artist:"BTS",
      img_src:"./images/BTS2.jpg",
      src:"./songs/fake_love.mp3"
     }, 
          

    
      
    

  ])

  const[currentSongIndex, setCurrentSongIndex]= useState(0);
  const[nextSongIndex, setNextSongIndex]= useState(0);

  useEffect(() =>{
    setNextSongIndex(()=>{
      if(currentSongIndex + 1 > songs.length-1){
      return 0;
    }
      else{
        return currentSongIndex + 1;
      }
    });
  }, [currentSongIndex, songs.length])
  
  
  return (
   <div className="App">
    
    <Player
    currentSongIndex = {currentSongIndex}
    setCurrentSongIndex ={setCurrentSongIndex}
    nextSongIndex = {nextSongIndex}
    songs ={songs}
    />
    </div>
  );
}

export default App;
