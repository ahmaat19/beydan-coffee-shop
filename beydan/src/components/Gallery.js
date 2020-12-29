import gallery1 from '../images/gallery1.jpg'
import gallery2 from '../images/gallery2.jpg'
import gallery3 from '../images/gallery3.jpg'
import gallery4 from '../images/gallery4.jpg'
import gallery5 from '../images/gallery5.jpg'
import gallery6 from '../images/gallery6.jpg'
import title from '../images/title-separator.png'

const Gallery = () => {
  return (
    <div
      className='container py-5'
      id='gallery'
      data-aos='fade-left'
      data-aos-duration='2000'
    >
      <div className='text-center pt-5'>
        <h2 className='display-5 text-danger'>OUR SWEET GALLERY</h2>
        <img src={title} alt='title separator' />
        <p className='pt-3'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore
        </p>
      </div>
      <div className='row gy-4'>
        <div className='col-md-4'>
          <img src={gallery1} className='img-fluid' alt='gallery1' />
        </div>
        <div className='col-md-4'>
          <img src={gallery2} className='img-fluid' alt='gallery2' />
        </div>
        <div className='col-md-4'>
          <img src={gallery3} className='img-fluid' alt='gallery3' />
        </div>

        <div className='col-md-4'>
          <img src={gallery4} className='img-fluid' alt='gallery4' />
        </div>
        <div className='col-md-4'>
          <img src={gallery5} className='img-fluid' alt='gallery5' />
        </div>
        <div className='col-md-4'>
          <img src={gallery6} className='img-fluid' alt='gallery6' />
        </div>
      </div>
    </div>
  )
}

export default Gallery
