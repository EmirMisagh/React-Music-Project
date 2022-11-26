import { useEffect, useState } from "react";
import '../styles/musicplayer.css';
import { CiPlay1,CiCircleChevRight,CiCircleChevLeft } from "react-icons/ci";
import { BsVolumeMute,BsVolumeUp } from "react-icons/bs";
import { AiOutlinePause,AiOutlineRedo } from "react-icons/ai";

const MusicPlayer = (props) => {
    const [Play,setPlay] = useState(1)
    const [Music,setMusic] = useState(props.music.music)
    const [Playicon,setPlayicon] = useState(<AiOutlinePause />)
    const [Soundicon,setSoundicon] = useState(<BsVolumeUp />)
    useEffect(() =>{
       let audio = document.querySelector('#myAudio');
       audio.addEventListener('play',() =>{
            setPlayicon(<AiOutlinePause />)
            setPlay(1)
       })
        
    })
    const pley = () =>{
        let audio = document.querySelector('#myAudio');
       
      if(Play == 1){
        audio.pause();
        setPlay(0)
        setPlayicon(<CiPlay1 />)
      }else{
        audio.play();
        setPlay(1)
        setPlayicon(<AiOutlinePause />)
      }
    }
    const updatetime = () =>{
        let audio = document.querySelector('#myAudio');
        let fill = document.querySelector('#fill');
        let time = document.querySelector('#timee');
        fill.style.width = (audio.currentTime * 100 / audio.duration) + "%";
        time.innerHTML = change_time(audio.currentTime);
        if(audio.currentTime == audio.duration){
            this.props.play();
            this.props.next()
        }
    }
    const change_time = (time) =>{
        var min = parseInt(time / 60);
        var second = parseInt(time - (min * 60));
        
        if(second > 9) return min.toString() + ":" + second.toString();
        else return min.toString() + ":0" + second.toString();
    }
    const fill = (e) =>{
        let leftx = 14;
        let darsd = 12.41;
        if(props.style == 'playeindex'){
            leftx = 952;
            darsd = 3;
        }
       
        let audio = document.querySelector('#myAudio');
        var a = audio.duration / 100;
        var x = e.clientX;
        var y = e.clientY;
        // alert(x);
        x = (x - leftx) / darsd;
        y = x * a;
        audio.currentTime = y;
       
    }
    const soundoff = () =>{
        let audio = document.querySelector('#myAudio');
        let fill_sondbtn = document.querySelector('#fill_sondbtn');
        if(audio.volume != 0.0){
        audio.volume = 0.0;
        fill_sondbtn.style.width = '0%';
        setSoundicon(<BsVolumeMute />)
        }
        else{
        audio.volume = 0.6;
        fill_sondbtn.style.width = '60%';
        setSoundicon(<BsVolumeUp />)
        }
    }
    const soundfill = (e) =>{
        let x = 310;
        if(props.style == 'playeindex')
        x = 1069
        let audio = document.querySelector('#myAudio');
        let fill_sondbtn = document.querySelector('#fill_sondbtn');
        // alert(e.clientX)
        let c = e.clientX - x;
        fill_sondbtn.style.width = parseInt(c) + '%';
        c /= 100;
        audio.volume = c;
        setSoundicon(<BsVolumeUp />)
       
    }
    const close = () =>{
        let audio = document.querySelector('#myAudio');
        let player = document.querySelector('#player');
        audio.pause()
        player.classList.add('none')
        setPlay(0)
        setPlayicon(<CiPlay1 />)
    }
    return ( 
        <>
            <div className={`container-fluid p-0`}>
                <div id="player" className={`${props.style}`}>
                    <audio id="myAudio" src={props.music.music} autoPlay onTimeUpdate={updatetime}>
                        <source id="sr" src={props.music.music} type="audio/mpeg/mp3"/>
                        <source src={props.music.music} type="audio/ogg"/>
                        Your browser does not support the audio element.
                    </audio>
                    <div className="row p-0">
                        <div className="col-12 col-xl-4 left order-1 order-xl-1 ">
                            <img src={props.music.img} alt="" />
                            <div className="btnplay">
                                <i> <CiCircleChevLeft /></i>
                                <i onClick={pley} >{Playicon}</i>
                                <i className=''><CiCircleChevRight sx={{ fontSize: 34 }} /></i>
                            </div>
                            <div  className='sound' onClick={soundfill}>
                                <i onClick={soundoff} id='sound' className='mt-2 ms-4 '>{Soundicon} </i>
                                <div className="soundbtn">
                                    <div id='fill_sondbtn'></div>
                                </div>
                            </div>
                            <button onClick={close} className=" btn btn-outline-danger" id="close">close</button>
                        </div>
                        <div className="p-0 col-12 col-xl-5 order-5 order-xl-2">
                            <p id='name'></p>   
                        </div> 
                        <div className="col-5 col-xl-3 order-4  order-xl-3 row">
                            <div className="col-9 col-md-7 p-0">
                                
                            </div>
                            <div className="col-3 col-xl-4 p-0">
                            
                                <p id='time'>
                                    <i id="icon"><AiOutlineRedo sx={{ fontSize: 34 }} /></i>
                                    <i id="timee">00:00</i>
                                </p>
                            </div>
                        </div>
                        <div className="col-1 mt-2 col-xl-0 order-3 order-xl-6">

                        </div>
                        <div className="col-12 mt-2 mt-xl-0 col-lx-12 order-2 fill-div order-xl-4">
                            <div id='2' onClick={fill} className='fill-btn'>
                                <div id='fill'></div>   
                            </div>
                        </div>
                    </div>
                </div>
            </div>
       
        </>
     );
}
 
export default MusicPlayer;