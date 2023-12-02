import React from 'react'
import blog1 from '../assets/images/blog/blog1.png'
import blog2 from '../assets/images/blog/blog2.png'
import blog3 from '../assets/images/blog/blog3.png'
import blog4 from '../assets/images/blog/blog4.png'

const blogs = () => {
  return<>
  <div className="col-3">
    <div className="card">
      <img src={blog1} alt=""className='card-img-top img-fluid mb-3 p-5' />
      <div className="card-body">
        <p className='mb-3'>Some quick example text to build on the card title and make up the bulk of the card content</p>
        <button className="button-blog">
          Learn More
        </button>
      </div>
    </div>
  </div>
  <div className="col-3">
    <div className="card">
      <img src={blog2} alt=""className='card-img-top img-fluid mb-3 p-5' />
      <div className="card-body">
        <p className='mb-3'>Some quick example text to build on the card title and make up the bulk of the card content</p>
        <button className="button-blog">
          Learn More
        </button>
      </div>
    </div>
  </div>
  <div className="col-3">
    <div className="card">
      <img src={blog3} alt=""className='card-img-top img-fluid mb-3 p-5' />
      <div className="card-body">
        <p className='mb-3'>Some quick example text to build on the card title and make up the bulk of the card content</p>
        <button className="button-blog">
          Learn More
        </button>
      </div>
    </div>
  </div>
  <div className="col-3">
    <div className="card">
      <img src={blog4} alt=""className='card-img-top img-fluid mb-3 p-5' />
      <div className="card-body">
        <p className='mb-3'>Some quick example text to build on the card title and make up the bulk of the card content</p>
        <button className="button-blog">
          Learn More
        </button>
      </div>
    </div>
  </div>
  </>
}

export default blogs