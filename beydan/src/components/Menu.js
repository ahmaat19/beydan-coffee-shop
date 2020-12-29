import title from '../images/title-separator.png'
import menu1 from '../images/menu1.png'
import menu2 from '../images/menu2.png'
import menu3 from '../images/menu3.png'
import menu4 from '../images/menu4.png'

const Menu = () => {
  return (
    <div className='container-fluid bg-fluid'>
      <div
        className='container py-5'
        id='menu'
        data-aos='fade-left'
        data-aos-duration='2000'
      >
        <div className='text-center pt-5'>
          <h2 className='display-5 text-danger'>OUR MENU</h2>
          <img src={title} alt='title separator' />
          <div class='row'>
            <div class='col-md-3'>
              <div class='card bg-transparent border-0'>
                <img src={menu1} class='card-img-top' alt='Strawberry Mix' />
                <div class='card-body fw-light'>
                  <h5 class='card-title text-danger'>Strawberry Mix</h5>
                  <p class='card-text'>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Quidem nesciunt.
                  </p>
                  <button class='btn btn-outline-danger btn-sm'>$ 4</button>
                </div>
              </div>
            </div>

            <div class='col-md-3'>
              <div class='card bg-transparent border-0'>
                <img src={menu2} class='card-img-top' alt='Chocolate Mix' />
                <div class='card-body fw-light'>
                  <h5 class='card-title text-danger'>Chocolate Mix</h5>
                  <p class='card-text'>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Quidem nesciunt.
                  </p>
                  <button class='btn btn-outline-danger btn-sm'>$ 6</button>
                </div>
              </div>
            </div>

            <div class='col-md-3'>
              <div class='card bg-transparent border-0'>
                <img src={menu3} class='card-img-top' alt='Apple Pie' />
                <div class='card-body fw-light'>
                  <h5 class='card-title text-danger'>Apple Pie</h5>
                  <p class='card-text'>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Quidem nesciunt.
                  </p>
                  <button class='btn btn-outline-danger btn-sm'>$ 2</button>
                </div>
              </div>
            </div>

            <div class='col-md-3'>
              <div class='card bg-transparent border-0'>
                <img src={menu4} class='card-img-top' alt='Sunday Waffle' />
                <div class='card-body fw-light'>
                  <h5 class='card-title text-danger'>Sunday Waffle</h5>
                  <p class='card-text'>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Quidem nesciunt.
                  </p>
                  <button class='btn btn-outline-danger btn-sm'>$ 8</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Menu
