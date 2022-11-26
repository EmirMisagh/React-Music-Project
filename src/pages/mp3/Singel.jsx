import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import '../../styles/music.css';
import { BsChevronCompactRight,BsGeoAltFill } from "react-icons/bs";

const Singel = (props) => {
    const musics = props.musics;
    const [Music,setMusic] = useState([])
    useEffect(() =>{
        let href = window.location.href;
        href = href.split('/');
        let id = href[href.length - 1];
        setMusic(musics.find((song) =>{
            if(song._id == id){
            props.music(song)
            return song;
            }
        }))
        props.style('player')
        console.log(Music)
    },[])
    const select = (song) =>{
        setMusic(song)
        props.music(song)
    }
    return ( 
        <>
            <div className="container main p-0 ">
                <div className="row mt-1  ">
                    <div className="col-12 tozih">
                    Introduce yourself to the world on the Kurdsong site
                    </div>
                </div>
                <div className="row mt-2 p-0 ">
                    <div className="col-12 col-md-5 p-0 ">
                        <div className="img" >
                            <img src={Music.img} height='900px' alt=""  />
                            <div>
                                <a style={{color:'white'}}  download ><button className='imgbutton'></button><label className='imgbutton' htmlFor="">Images</label></a><br />
                                <NavLink style={{color:'white'}} to={`/singer?singer=`}><button className='imgbutton'></button><label className='imgbutton' htmlFor="">Singer</label></NavLink><br />
                                <button  id='playimg' className='imgbutton'></button><label className='imgbutton' htmlFor="">Play</label><br />
                                <button  className='imgbutton'></button><label className='imgbutton' htmlFor="">Playlist</label><br />
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-7 mt-3 mt-md-0 p-0">
                        <div className="track wit" >
                        <h6>
                                            <i><BsGeoAltFill /> </i>
                                            <NavLink style={{color:'white'}} to='/'>HOME</NavLink>
                                            <i><BsChevronCompactRight /></i>
                                            <NavLink style={{color:'white'}} to='#'>MP3</NavLink>
                                            <i><BsChevronCompactRight /></i>
                                            <NavLink style={{color:'white'}} to={`#`}> {Music.singer} </NavLink>
                                            <i><BsChevronCompactRight /> </i>
                                            <NavLink style={{color:'white'}} to='#'>{Music.name}</NavLink>
                                        </h6>
                                        <h1>{Music.name}</h1>
                                        <NavLink style={{color:'white'}} to={`#`}><h2>{Music.singer}</h2></NavLink>
                                        <h4>song {Music.name} of {Music.singer}</h4>
                                        <h5>Download song <strong>{Music.name}</strong> of <strong> {Music.singer}</strong><strong style={{visibility: 'hidden'}}>fdgfdgfhgfgf</strong></h5>
                                        <small> play : 2M</small>
                                       
                                        
                        </div>
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col-12 col-md-5 p-0">
                        <div className="moretrack wit">
                            <p>More Track</p>
                            <div id='more' className='bord'></div>
                            <div className='tomore'>
                               
                                    
                                   
                                        <div>
                                            <img src={Music.img} alt="" />
                                            <h5>{Music.name}</h5>
                                            <p>{Music.singer}</p>
                                            <small>
                                                <i> Plays {Music.view}</i>
                                            </small>
                                        </div>
                                  
                                  
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-7 p-0">
                        <div className="bax-dn wit">
                            <p>Download</p>
                            <div id='bord' className='bord'></div>
                                <a href='{this.state.song.music}' target='_blank' download={'ami.mp3'}>
                                    <h5>Download MP3 128 
                                        <button  className='btn btn-primary outline-primary'>Download</button> 
                                    </h5>
                                </a>
                                    <h5>Download MP3 320 
                                        <button  className='btn btn-primary outline-primary'>Download</button>
                                    </h5>              
                        </div>
                        <div className="bax-tabligh mt-2 wit">
                            {musics.map((song,i) =>{
                                if(i < 4)
                                    return(
                                        <div className="">
                                            <a href={song.href}>
                                                <img src={song.img} alt="" />
                                            </a>
                                        </div>
                                    )
                                })}
                                
                        </div>
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default Singel;
