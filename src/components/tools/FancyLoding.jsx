import { Route } from 'react-router-dom'
import nprogress from 'nprogress'
import 'nprogress/nprogress.css'
import { useEffect,useMemo } from 'react';

const Fancyloding = () => {
    useMemo(() => {
        nprogress.start();
      }, []);
     
    useEffect(() => {
        nprogress.done()
        
      },[]);
    return ( 
        <>
        </>
     );
}
 
export default Fancyloding;