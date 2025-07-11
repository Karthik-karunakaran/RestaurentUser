import React from 'react'

const Service = () => {
  return (
    <>
       {/* banner section large screen*/}
       <section className='d-none d-lg-block d-md-block'>
        <div className='container-fluied banner-1'>
          <div className='container h-100'>
            <div className="row  h-100">
              <div className="col-lg-5 col-sm-12 d-flex flex-column justify-content-center align-items-center">
                <p className='p1'>Service</p>
              </div>
              <div className="col-lg-7 col-sm-12  d-flex justify-content-center align-items-center column-two ">
                <img src="/home-banner-1.png" className='' alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* banner section small screen */}
      <section className='d-lg-none d-sm-block d-md-none'>
        <div className='container-fluied banner-1'>
          <div className='container h-100'>
            <div className="row  h-100">
              <div className="col-lg-7 col-sm-12  d-flex justify-content-center align-items-center column-two ">
                <img src="/home-banner-1.png" className=' ms-5' alt="" />
              </div>
              <div className="col-lg-5 col-sm-12 d-flex flex-column justify-content-center align-items-center">
                <p className='p1'>Service</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Service;
