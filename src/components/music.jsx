import '../styles/music.css';

const Musiccomponent = (props) => {
    return ( 
        <>
            <div id={props.song.id} className="music ">
                <img src={props.song.img} alt={`${props.song.name}-${props.song.singer}`} />
                <p>{props.song.name}</p>
                <h6>{props.song.singer}</h6>
             
              
            </div>
        </>
     );
}
 
export default Musiccomponent;