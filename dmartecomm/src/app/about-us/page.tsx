import React from 'react';
import Image  from 'next/image';
import office from '../../../public/office.jpg';

export default function AboutUs() {
  return (
    <div className='container'>
    <div className='row'>
      <div className='col-md-6'>
      <h2>About Us</h2>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
         Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
          when an unknown printer took a galley of type and scrambled it to make a type 
          specimen book. It has survived not only five centuries, but also the leap into electronic 
          typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release 
          of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing 
          software like Aldus PageMaker including versions of Lorem Ipsum.</p>
      </div>
      <div className='col-md-6'>
        <Image src={office} className='about_img' alt='office' width={700} height={250}  />
       
      </div>
    </div>

    </div>
  )
}
