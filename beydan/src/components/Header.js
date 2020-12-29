import logo from '../images/logo.png'
import slide1 from '../images/slide1.jpg'
import slide2 from '../images/slide2.jpg'
import slide3 from '../images/slide3.jpg'

const Header = () => {
  return (
    <header id='header'>
      <nav className='navbar navbar-expand-lg navbar-light bg-transparents'>
        <div className='container'>
          <a className='navbar-brand' href='#'>
            <img src={logo} alt='logo' />
          </a>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarNav'
            aria-controls='navbarNav'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='navbarNav'>
            <ul className='navbar-nav ms-auto'>
              <li className='nav-item'>
                <a
                  className='nav-link active'
                  aria-current='page'
                  href='#header'
                >
                  Home
                </a>
              </li>
              <li className='nav-item'>
                <a
                  className='nav-link active'
                  aria-current='page'
                  href='#offer'
                >
                  Our Offer
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link active' aria-current='page' href='#menu'>
                  Menu
                </a>
              </li>
              <li className='nav-item'>
                <a
                  className='nav-link active'
                  aria-current='page'
                  href='#herald'
                >
                  Herald
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link active' aria-current='page' href='#shop'>
                  Shop
                </a>
              </li>
              <li className='nav-item'>
                <a
                  className='nav-link active'
                  aria-current='page'
                  href='#gallery'
                >
                  Gallery
                </a>
              </li>
              <li className='nav-item'>
                <a
                  className='nav-link active'
                  aria-current='page'
                  href='#contact'
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div
        id='carouselExampleCaptions'
        className='carousel slide'
        data-bs-ride='carousel'
      >
        <ol className='carousel-indicators'>
          <li
            data-bs-target='#carouselExampleCaptions'
            data-bs-slide-to='0'
            className='active'
          ></li>
          <li
            data-bs-target='#carouselExampleCaptions'
            data-bs-slide-to='1'
          ></li>
          <li
            data-bs-target='#carouselExampleCaptions'
            data-bs-slide-to='2'
          ></li>
        </ol>
        <div className='carousel-inner'>
          <div className='carousel-item active'>
            <img src={slide1} className='d-block w-100' alt='coffee heaven' />
            <div
              className='carousel-caption d-none d-md-block'
              data-aos='fade-up'
              data-aos-duration='2000'
            >
              <h5 className='display-1'>COFFEE HEAVEN</h5>
              <a
                href='tel:+252615301507'
                className='btn btn-outline-danger btn-lg'
              >
                <i className='fa fa-phone'></i> Order Now
              </a>
            </div>
          </div>
          <div className='carousel-item'>
            <img src={slide2} className='d-block w-100' alt='coffee masters' />
            <div
              className='carousel-caption d-none d-md-block'
              data-aos='fade-up'
              data-aos-duration='2000'
            >
              <h5 className='display-1'>COFFEE MASTERS</h5>
              <a
                href='tel:+252615301507'
                className='btn btn-outline-danger btn-lg'
              >
                <i className='fa fa-phone'></i> Order Now
              </a>
            </div>
          </div>
          <div className='carousel-item'>
            <img src={slide3} className='d-block w-100' alt='coffee factory' />
            <div
              className='carousel-caption d-none d-md-block'
              data-aos='fade-up'
              data-aos-duration='2000'
            >
              <h5 className='display-1'>COFFEE FACTORY</h5>
              <a
                href='tel:+252615301507'
                className='btn btn-outline-danger btn-lg'
              >
                <i className='fa fa-phone'></i> Order Now
              </a>
            </div>
          </div>
        </div>
        <a
          className='carousel-control-prev'
          href='#carouselExampleCaptions'
          role='button'
          data-bs-slide='prev'
        >
          <span
            className='carousel-control-prev-icon'
            aria-hidden='true'
          ></span>
          <span className='visually-hidden'>Previous</span>
        </a>
        <a
          className='carousel-control-next'
          href='#carouselExampleCaptions'
          role='button'
          data-bs-slide='next'
        >
          <span
            className='carousel-control-next-icon'
            aria-hidden='true'
          ></span>
          <span className='visually-hidden'>Next</span>
        </a>
      </div>
    </header>
  )
}

export default Header
