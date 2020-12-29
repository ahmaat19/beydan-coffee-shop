const Contact = () => {
  return (
    <div
      className='container-fluid py-5 bg-footer text-light'
      id='contact'
      data-aos='fade-up'
      data-aos-duration='2000'
    >
      <hr />
      <div className='row g-4 pt-3'>
        <div className='col-md-5 mx-auto text-center'>
          <p>Some days you make the coffee some days the coffee makes you.</p>
          <pre>Find your favorite coffee</pre>
          <address>
            <i className='fa fa-phone'></i>
            <a href='tel:+252615301507'> +252 61 555 5555</a> <br />
            <i className='fa fa-envelope'></i>
            <a href='mailto:beydan@gmail.com'> beydan@gmail.com</a> <br />
            <i className='fa fa-home'></i> Talex, Mogadishu - Somalia.
            <div class='social-links pt-2'>
              <i className='fab fa-facebook'></i>
              <i className='fab fa-instagram px-4'></i>
              <i className='fab fa-twitter'></i>
            </div>
          </address>
        </div>
      </div>
      <div className='mx-auto text-center blockquote-footer text-light pt-5'>
        Design & Built by Ahmed Ibrahim
      </div>
    </div>
  )
}

export default Contact
