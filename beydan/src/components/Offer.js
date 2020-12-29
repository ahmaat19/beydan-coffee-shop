import offer1 from '../images/offer1.png'
import offer2 from '../images/offer2.png'
import offer3 from '../images/offer3.png'
import offer4 from '../images/offer4.png'
import title from '../images/title-separator.png'

const Offer = () => {
  return (
    <div
      className='container pt-5'
      id='offer'
      data-aos='fade-right'
      data-aos-duration='2000'
    >
      <div className='text-center pt-5'>
        <h2 className='display-5 text-danger'>OUR DELICIOUS OFFER</h2>
        <img src={title} alt='title separator' />
        <p className='pt-3'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore
        </p>
      </div>

      <div className='row gy-3 py-5'>
        <div className='col-md-6 col-sm-6 col-12 col-lg-3'>
          <div className='card bg-transparent border-0 text-center fw-light'>
            <img
              src={offer1}
              className='card-img-top img-fluid mx-auto'
              alt='types of coffee'
            />
            <div className='card-body'>
              <h6 className='card-title text-danger'>TYPES OF COFFEE</h6>
              <p className='card-text'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Aspernatur tenetur esse dolor nam velit odit, iure neque
                minima..
              </p>
            </div>
          </div>
        </div>

        <div className='col-md-6 col-sm-6 col-12 col-lg-3'>
          <div className='card bg-transparent border-0 text-center fw-light'>
            <img
              src={offer2}
              className='card-img-top img-fluid mx-auto'
              alt='bean varieties'
            />
            <div className='card-body'>
              <h6 className='card-title text-danger'>BEAN VARIETIES</h6>
              <p className='card-text'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Aspernatur tenetur esse dolor nam velit odit, iure neque
                minima..
              </p>
            </div>
          </div>
        </div>

        <div className='col-md-6 col-sm-6 col-12 col-lg-3'>
          <div className='card bg-transparent border-0 text-center fw-light'>
            <img
              src={offer3}
              className='card-img-top img-fluid mx-auto'
              alt='coffee & pastry'
            />
            <div className='card-body'>
              <h6 className='card-title text-danger'>COFFEE & PASTRY</h6>
              <p className='card-text'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Aspernatur tenetur esse dolor nam velit odit, iure neque
                minima..
              </p>
            </div>
          </div>
        </div>

        <div className='col-md-6 col-sm-6 col-12 col-lg-3'>
          <div className='card bg-transparent border-0 text-center fw-light'>
            <img
              src={offer4}
              className='card-img-top img-fluid mx-auto'
              alt='coffee to go'
            />
            <div className='card-body'>
              <h6 className='card-title text-danger'>COFFEE TO GO</h6>
              <p className='card-text'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Aspernatur tenetur esse dolor nam velit odit, iure neque
                minima..
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Offer
