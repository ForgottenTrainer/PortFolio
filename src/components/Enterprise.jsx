import Html from './../assets/html.png';
import Css from './../assets/css.png';
import Js from './../assets/js.png';
import react from './../assets/react.png';
import Node from './../assets/node.png';
import Mysql from './../assets/mysql.png';
import php from './../assets/php.png';
import laravel from './../assets/laravel.png';
import tailwind from './../assets/tailwind.png';
import non from './../assets/html.png';

const Enterprise = () => {
  return (
    <div className='pl-5 pt-5 pb-5'>
        <div className="grid lg:grid-cols-9 grid-cols-4 gap-4 pt-5 pb-5">
            <div>
              <img src={Html} alt="" className='w-10 grayscale hover:grayscale-0 transition duration-300' />
            </div>

            <div>
              <img src={Css} alt="" className='w-10 grayscale hover:grayscale-0 transition duration-300' />
            </div>

            <div>
              <img src={Js} alt="" className='w-10 grayscale hover:grayscale-0 transition duration-300' />
            </div>
            <div> 
              <img src={react} alt="" className='w-10 grayscale hover:grayscale-0 transition duration-300' />
            </div>
            <div>
              <img src={Node} alt="" className='w-20 grayscale hover:grayscale-0 transition duration-300' />
            </div>
            <div>
              <img src={Mysql} alt="" className='w-10 grayscale hover:grayscale-0 transition duration-300' />
            </div>
            <div>
              <img src={php} alt="" className='w-10 grayscale hover:grayscale-0 transition duration-300' />
            </div>
            <div>
              <img src={laravel} alt="" className='w-10 grayscale hover:grayscale-0 transition duration-300' />
            </div>
            <div>
              <img src={tailwind} alt="" className='w-10 grayscale hover:grayscale-0 transition duration-300' />
            </div>
        </div>
    </div>
  )
}

export default Enterprise