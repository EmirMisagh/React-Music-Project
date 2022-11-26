import '../styles/footer.css'

const Footer = () => {
    const top = () =>{
        window.scrollTo({top: 0 , behavior: 'smooth'})
    }
    return ( 
    <>
        <div className="row container-fluid footer" id='footer'>
                <div className='col-5 order-2 order-md-1 col-md-3 p-0 mt-2 mt-md-0'>
                    <div className='responc'>
                    <svg>
                        <rect id="screen" rx="3%" ></rect>
                        <rect id='keybord'></rect>
                        <text id="text" x="76" y="56" fill="#ffffff">KURDSONG </text>
                                    Sorry, your browser does not support inline SVG.
                    </svg>  
                    </div>
                </div>
                <div className="col-12 order-1 order-md-2 copy col-md-6">
                    <p>
                    © 2022 by Kurdsong. All Rights Reserved.<br/>
                    The largest source of Persian entertainment providing the best Persian and Iranian music 24/7
                    </p>
                    <div className="bama">
                        <button className='btn text-light'>About</button>
                        <button className='btn text-light'>API</button>
                        <button className='btn text-light'>Call me</button>
                        <button className='btn text-light'>Locations</button>
                        <button className='btn text-light'>Help</button>
                        <button className='btn text-light'>Email</button>
                    </div>
                </div>
                <div className="col-5 order-3 order-md-3 p-0 col-md-2">
                    <div className="animeplay p-0">
                        <div className='anime'>
                            <div id='anim1'></div>
                            <div id='anim4'></div>
                            <div id='anim2'></div>
                            <div id='anim3'></div>
                            <div id='anim2'></div>
                            <div id='anim4'></div>
                            <div id='anim1'></div>
                        </div>
                        
                        <h5>Music Trand</h5>
                    </div>
                </div>
                <div className="col-2 order-4 col-md-1 btntop">
                    <button onClick={top} className=''>top</button>
                </div>
            </div>
    </>
     );
}
 
export default Footer;