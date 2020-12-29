import herald1 from '../images/herald1.jpg'
import herald2 from '../images/herald2.jpg'
import herald3 from '../images/herald3.jpg'
import title from '../images/title-separator.png'

const Herald = () => {
  return (
    <div className='container-fluid bg-fluid'>
      <div
        className='container py-5'
        id='herald'
        data-aos='fade-left'
        data-aos-duration='2000'
      >
        <div className='text-center pt-5'>
          <h2 className='display-5 text-danger'>THE COFFEE HERALD</h2>
          <img src={title} alt='title separator' />
          <p className='pt-3'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore
          </p>
        </div>

        <div className='row gy-3'>
          <div className='col-md-4'>
            <div className='card bg-transparent border-0'>
              <img
                src={herald2}
                className='card-img-top img-fluid'
                alt='prep techniques'
              />
              <div className='card-body text-center fw-light'>
                <h5 className='card-title text-danger'>PREP TECHNIQUES</h5>
                <p className='card-text'>
                  Quisque rutrum, aenean imperdiet. Etiam ultricies nisi vel
                  augue. Curabitur ullamcorper ultricies nisi, nam eget dui.
                  Etiam rhoncus maecenas tempus,
                </p>
              </div>
              <p className='text-end px-3'>
                <a href='#' className='blockquote-footer text-decoration-none'>
                  Read More...
                </a>
              </p>
            </div>
          </div>

          <div className='col-md-4'>
            <div className='card bg-transparent border-0'>
              <img
                src={herald1}
                className='card-img-top img-fluid'
                alt='french press'
              />
              <div className='card-body text-center fw-light'>
                <h5 className='card-title text-danger'>FRENCH PRESS</h5>
                <p className='card-text'>
                  Quisque rutrum, aenean imperdiet. Etiam ultricies nisi vel
                  augue. Curabitur ullamcorper ultricies nisi, nam eget dui.
                  Etiam rhoncus maecenas tempus,
                </p>
              </div>
              <p className='text-end px-3'>
                <a href='#' className='blockquote-footer text-decoration-none'>
                  Read More...
                </a>
              </p>
            </div>
          </div>

          <div className='col-md-4'>
            <div className='card bg-transparent border-0'>
              <img
                src={herald3}
                className='card-img-top img-fluid'
                alt='turkish ibrik'
              />
              <div className='card-body text-center fw-light'>
                <h5 className='card-title text-danger'>TURKISH IBRIK</h5>
                <p className='card-text'>
                  Quisque rutrum, aenean imperdiet. Etiam ultricies nisi vel
                  augue. Curabitur ullamcorper ultricies nisi, nam eget dui.
                  Etiam rhoncus maecenas tempus,
                </p>
              </div>
              <p className='text-end px-3'>
                <a href='#' className='blockquote-footer text-decoration-none'>
                  Read More...
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Herald
