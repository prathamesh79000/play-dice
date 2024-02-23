// import React from 'react'

const Body = () => {
  return (
    <main className="body container">
        <div className="body-content">
            <h1>YOUR FEET DESERVE THE BEST</h1>
            <p>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>

            <div className="body-btn">
              <button>Shop Now</button>
              <button className="secondary-btn">Category</button>
            </div>
            <div className="body-shopping">
              <p>Also available on: </p>

              <div className="icons">
              <img src="/images/amazon.png" alt="amazon-logo"></img>
              <img src="/images/flipkart.png" alt="flipkart-logo"></img>
              </div>
              
            </div>
        </div>
        <div className="body-image">
        <img src="/images/shoe_image.png" alt="shoe-image"></img>
        </div>
    </main>
  )
}

export default Body
