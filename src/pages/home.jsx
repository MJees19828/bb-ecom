import React from 'react'
import { Link } from 'react-router-dom';
import Hero from '../components/hero';
import FeaturedProducts from '../components/featuredProducts';
import NewArrival from '../Components/newArrival';
import img1 from '../assets/images/banner/b17.png'
import img2 from '../assets/images/banner/b10.png'
import Blogs from '../components/blogs';

const home = () => {
  return <>
   <section className='banner mb-3'>
    <div className="container-xxl">
      <div className="row">
        <div className="banner-details p-5 d-flex flex-column align-items-start justify-content-center">
         <span className='shadow-lg p-3 mt-3 text-white'>Trade in offer!!</span>
         <h1>Super Value Deals</h1>
         <h2>On all products</h2>
         <p className='p-2 n-0'>Save more today with Ecom</p>
         <Link className='button-link mb-3'>Shop Now</Link>
        </div>
      </div>
    </div>
   </section>

   <Hero/>

   <section className='featured-products p-5'>
    <div className="container-xxl">
      <div className="row">
        <div className="text-center">
          <h1>Our Featured Products</h1>
          <p>All Weather New Modern Designs</p>
        </div>
          <FeaturedProducts/>
      </div>
    </div>
   </section>

   <section className="repair p-2">
    <div className="container-xxl">
      <div className="row">
        <div className="repair-details text-center d-flex flex-column align-items-center p-2">
          <span className='text-white mt-1'>Repair Services</span>
          <h2 className='text-white mt-1'>On <span className='text-success'><b>70%</b> </span>Off on All Products And Accessories</h2>
          <div className="mt-3">
            <button className='button-repair'>Explore Now</button>
          </div>
        </div>
      </div>
    </div>
   </section>

   <section className='new-products p-5'>
    <div className="container-xxl">
      <div className="row">
        <div className="text-center">
          <h1>New Arrivals</h1>
          <p>Your Best Designer Outfit</p>
        </div>
          <NewArrival/>
      </div>
    </div>
   </section>

  <section className="deals p-5">
    <div className="container-xxl">
      <div className="row">
        <div className="col-6 p-4">
        <div className="card row">
          <div className="d-flex">
          <div className="col-md-4">
            <img src={img1} alt="" className='img-fluid rounded-start p-2 h-100' />
          </div>
          <div className="col-md-8">
            <div className="card-body">
            <span>Hot Deals</span>
            <h3 className="card-title">
              Buy One get One free
            </h3>
            <p>The latest best collection in our closet<br/>Feel Cute with our outfit</p>
            <button className="button-deals mt-3">
              Learn More
            </button>
            </div>
          </div>
          </div>
        </div>
        
        </div>
        <div className="col-6 p-4">
        <div className="card row">
          <div className="d-flex">
          <div className="col-md-4">
            <img src={img2} alt="" className='img-fluid rounded-start p-2 h-100' />
          </div>
          <div className="col-md-8">
          <div className="card-body">
            <span>Seaso-in</span>
            <h3 className="card-title">
              All Weather Attire
            </h3>
            <p>It never matter which season it is<br/>We get your convered</p>
            <button className="button-deals">
              Learn More
            </button>
            </div>
          </div>
          </div>
        </div>
        
        </div>
      </div>
    </div>
  </section>

  <section className="blogs p-3 mb-2">
    <div className="container-xxl">
      <div className="row">
      <div className="text-center mb-4">
          <h1>What Our Customers Say...</h1>
          <p>Our customers never miss a bit on providing feedback</p>
        </div>
        <Blogs/>
      </div>
    </div>
  </section>
  </>;
}

export default home