import React from 'react'

const Footer = () => {
  return (
    <div className='container my-4' id='footer'>
      <div className='row'>
        <div className='col-md-4 blockquote-footer'>
          Design & Built by Ahmed Ibrahim
        </div>
        <div className='col-md-4 blockquote-footer'>
          @copy Copyright Beydan Coffee Shop
        </div>
        <div className='col-md-4 blockquote-footer social-links'>
          <i className='fab fa-facebook'></i>
          <i className='fab fa-instagram px-4'></i>
          <i className='fab fa-twitter'></i>
        </div>
      </div>
    </div>
  )
}

export default Footer
