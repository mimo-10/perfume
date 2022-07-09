import React from 'react'
import "./main.css";
import {images} from "../../contants/images"

const Main = () => {
  return (
    <article className='main container'>
        <aside className='main__info'>
          <div className='main__info-greeting'>
            👋🏽 Welcome to the future
          </div>
          <h1 className='main__info-h1'>
            The pain itself is love, the main storage system.
          </h1>
          <p className='main__info-p'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, iusto. Sed ab et cupiditate rem consequatur distinctio incidunt soluta nesciunt ea, nisi quas. Adipisci iusto recusandae quaerat dolores, eius quibusdam dolorem id tempore ea dignissimos!
          </p>
          <button className='main__info-btn'>
            Purchase
          </button>
          <div className='main__info-users'>
            <img className="f_img" src={images.pro1} alt="" />
            <img className="img2" src={images.pro2} alt="" />
            <img className="img3" src={images.pro3} alt="" />
            <img className="img4" src={images.pro4} alt="" />
            <img className="img5" src={images.pro5} alt="" />
          </div>
        </aside>
        <aside className='main__imgs'>
          <img className="main__imgs-img1" src={images.pic1} alt=""/>
          <img className="main__imgs-img2" src={images.pic2} alt="" />
          <div className="main__imgs-container">
            <img src={images.arrow1} alt='' />
            <div className='container-text'>
              <h4>
                Exclusive
              </h4> 
              <h6>
                Limited edition
              </h6>
            </div>
            <img src={images.arrow2} alt='' />
          </div>
        </aside>
    </article>
  )
}

export default Main;