import React from 'react'
import "./footer.css";
import SubFooter from '../../subcomponents/subFooter';
import {images} from "../../contants/images";

const Footer = () => {
  return (
    <footer className='container footer'>
        <SubFooter title="08 fragrances" text="The pain itself is love, the main storage system." icon={images.perfume} />
        <SubFooter title="2k Units" text="The pain itself is love, the main storage system." icon={images.box} />
        <SubFooter title="02 remaining months" text="The pain itself is love, the main storage system." icon={images.clock} />
    </footer>
  )
}

export default Footer