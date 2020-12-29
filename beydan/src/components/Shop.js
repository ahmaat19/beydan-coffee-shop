import ethiopia from '../images/ethiopia.png'
import kenya from '../images/kenya.png'
import columbia from '../images/columbia.png'
import guatemala from '../images/guatemala.png'

import title from '../images/title-separator.png'

const Shop = () => {
  return (
    <div
      className='container py-5'
      id='shop'
      data-aos='fade-right'
      data-aos-duration='2000'
    >
      <div className='text-center pt-5'>
        <h2 className='display-5 text-danger'>ONLINE COFFEE SHOP</h2>
        <img src={title} alt='title separator' className='img-fluid' />
        <p className='pt-3'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore
        </p>
      </div>
      <div className='row gy-3'>
        <div
          id='carouselExampleCaptions-shop'
          className='carousel slide'
          data-bs-ride='carousel'
        >
          <div className='carousel-inner'>
            <div className='carousel-item active'>
              <div className='row gy-3'>
                <div className='col-md-3 col-sm-6 col-12'>
                  <div className='card text-center bg-transparent border-0'>
                    <img
                      src={ethiopia}
                      className='card-img-top img-fluid mx-auto'
                      alt='ethiopia'
                    />
                    <div className='card-body fw-lighter'>
                      <h6 className='card-title text-danger'>
                        ETHIOPIA COFFEE
                      </h6>
                      <p className='card-text'>$15.00</p>
                    </div>
                  </div>
                </div>

                <div className='col-md-3 col-sm-6 col-12'>
                  <div className='card text-center bg-transparent border-0'>
                    <img
                      src={kenya}
                      className='card-img-top img-fluid mx-auto'
                      alt='kenya coffee'
                    />
                    <div className='card-body fw-lighter'>
                      <h6 className='card-title text-danger'>KENYA COFFEE</h6>
                      <p className='card-text'>$18.00</p>
                    </div>
                  </div>
                </div>

                <div className='col-md-3 col-sm-6 col-12'>
                  <div className='card text-center bg-transparent border-0'>
                    <img
                      src={columbia}
                      className='card-img-top img-fluid mx-auto'
                      alt='columbia coffee'
                    />
                    <div className='card-body fw-lighter'>
                      <h6 className='card-title text-danger'>
                        COLUMBIA COFFEE
                      </h6>
                      <p className='card-text'>$21.00</p>
                    </div>
                  </div>
                </div>

                <div className='col-md-3 col-sm-6 col-12'>
                  <div className='card text-center bg-transparent border-0'>
                    <img
                      src={guatemala}
                      className='card-img-top img-fluid mx-auto'
                      alt='guatemala coffee'
                    />
                    <div className='card-body fw-lighter'>
                      <h6 className='card-title text-danger'>
                        GUATEMALA COFFEE
                      </h6>
                      <p className='card-text'>$25.00</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className='carousel-item'>
              <div className='row gy-3'>
                <div className='col-md-3 col-sm-6 col-12'>
                  <div className='card text-center bg-transparent border-0'>
                    <img
                      src={ethiopia}
                      className='card-img-top img-fluid mx-auto'
                      alt='ethiopia coffee'
                    />
                    <div className='card-body fw-lighter'>
                      <h6 className='card-title text-danger'>
                        ETHIOPIA COFFEE
                      </h6>
                      <p className='card-text'>$15.00</p>
                    </div>
                  </div>
                </div>

                <div className='col-md-3 col-sm-6 col-12'>
                  <div className='card text-center bg-transparent border-0'>
                    <img
                      src={kenya}
                      className='card-img-top img-fluid mx-auto'
                      alt='kenya coffee'
                    />
                    <div className='card-body fw-lighter'>
                      <h6 className='card-title text-danger'>KENYA COFFEE</h6>
                      <p className='card-text'>$18.00</p>
                    </div>
                  </div>
                </div>

                <div className='col-md-3 col-sm-6 col-12'>
                  <div className='card text-center bg-transparent border-0'>
                    <img
                      src={columbia}
                      className='card-img-top img-fluid mx-auto'
                      alt='columbia coffee'
                    />
                    <div className='card-body fw-lighter'>
                      <h6 className='card-title text-danger'>
                        COLUMBIA COFFEE
                      </h6>
                      <p className='card-text'>$21.00</p>
                    </div>
                  </div>
                </div>

                <div className='col-md-3 col-sm-6 col-12'>
                  <div className='card text-center bg-transparent border-0'>
                    <img
                      src={guatemala}
                      className='card-img-top img-fluid mx-auto'
                      alt='guatemala coffee'
                    />
                    <div className='card-body fw-lighter'>
                      <h6 className='card-title text-danger'>
                        GUATEMALA COFFEE
                      </h6>
                      <p className='card-text'>$25.00</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Shop
