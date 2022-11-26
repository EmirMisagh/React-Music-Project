import { NavLink } from 'react-router-dom';
import { BsChevronCompactDown,BsChevronCompactRight } from "react-icons/bs";
import { Autoplay,Navigation, Pagination, Scrollbar, A11y, EffectFade } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { useEffect, useState } from 'react';
import Musiccomponent from '../components/music';

const Index = (props) => {
    const musics = [...props.musics]
    const [Slidwipers,setSlidwipers] = useState(6);
    useEffect(() =>{
        props.style('playeindex')
        window.addEventListener('resize',()=>{
            if(window.innerWidth < 700){
                setSlidwipers(3)
            }else
                setSlidwipers(6)
        })
    })
    const scrol = (top) =>{
        window.scrollTo({top: top, behavior: 'smooth'});
    }
    return ( 
        <>
            <body className='container-fluid '>
{/* ---------------------------------------------------------- */}
{/* ---------------------- Search Box ------------------------- */}
                <div className="row search">
                    <div className="col-12">
                        <form action="#">
                            <a className=" " href="#1" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <input id='searchinput' href="#1" type="text" placeholder="what?" />
                            </a> 
                            <button  type='button'>search</button>
                            <ul id='#1' className="dropdown-menu serach-menu">
                                <i>Track</i>
                                <hr/>
                                <i>Singer</i>
                            </ul>
                        </form>
                    </div>
                </div>
{/* ---------------------------------------------------------- */}
{/* ---------------------- ScrollBar ------------------------- */}
                <div className="row mt-0">
                    <div className="col-12">
                        <strong id="scrol_down" onclick="">
                            <p onClick={() =>scrol(530)}>scroll down<br/>
                                <BsChevronCompactDown  />
                            </p>
                        </strong>
                    </div>
                </div>
{/* ---------------------------------------------------------- */}
{/* ---------------------- Remmend music ------------------------- */}
                <div className='row mt-1'>
                    <div className="col-12">
                        <h4 className='titr'>Recommended</h4>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-md-6 grid">
                        {musics.map((song,i) =>{
                            if(i < 6)
                            return(
                                <NavLink to={`/singel/${song._id}`}>
                                    <Musiccomponent song={song} />
                                </NavLink>
                            )
                        })}
                    </div>
                    <div className="col-12 col-md-6 mt-2">
                        <Swiper
                        className='swip'
                        modules={[Navigation, Scrollbar, A11y,Autoplay]} 
                        spaceBetween={0}
                        slidesPerView={1}
                        navigation={{clickable: true}}
                        pagination={{ clickable: true }}
                        loop={true}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false
                        }}>
                           {musics.map((song,i) =>{
                                return(
                                    <SwiperSlide>
                                        <NavLink to={`/singel/${song._id}`}>
                                        <img src={song.img} width='100%' height='420px' alt="" />
                                    </NavLink>
                                    </SwiperSlide>
                                )
                           })}
                        </Swiper>
                    </div>
                </div>
{/* ---------------------------------------------------------- */}
{/* ---------------------- Top music ------------------------- */}
                <div className='row mt-5'>
                    <div className="col-12">
                        <h4 className='titr'>Top music</h4>
                    </div>
                </div>
                <div className="row p-2 mt-0">
                    <Swiper
                    className=''
                    modules={[Navigation, Scrollbar, A11y,Autoplay]} 
                    spaceBetween={7}
                    slidesPerView={Slidwipers}
                    navigation={{clickable: true}}
                    pagination={{ clickable: true }}
                    loop={true}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false
                    }}>
                        {musics.map((song,i) =>{
                            return(
                                <SwiperSlide className='mb-5'>
                                    <NavLink to={`/singel/${song._id}`}>
                                        <Musiccomponent song={song} />
                                    </NavLink>
                                </SwiperSlide>
                            )
                        })}
                    </Swiper>
                </div>
{/* ---------------------------------------------------------- */}
{/* ---------------------- Top music ------------------------- */}
                <div className='row mt-1'>
                    <div className="col-12">
                        <h4 className='titr'>Your work</h4>
                    </div>
                </div>
                <div className="row mb-5">
                    <div className="col-12 col-md-6 grid">
                        {musics.map((song,i) =>{
                            if(i < 6)
                            return(
                                <NavLink to={`/singel/${song._id}`}>
                                    <Musiccomponent song={song} />
                                </NavLink>
                            )
                        })}
                    </div>
                    <div className="col-12 col-md-6 grid">
                        {musics.map((song,i) =>{
                            if(i < 6)
                            return(
                                <NavLink to={`/singel/${song._id}`}>
                                    <Musiccomponent song={song} />
                                </NavLink>
                            )
                        })}
                    </div>
                </div>
            </body>
        </>
     );
}
 
export default Index;