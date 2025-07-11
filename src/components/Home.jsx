import React from 'react'

const Home = () => {
    return (
        <>
            {/* banner section large screen*/}
            <section className='d-none d-lg-block d-md-block'>
                <div className='container-fluied banner-1'>
                    <div className='container h-100'>
                        <div className="row  h-100">
                            <div className="col-lg-5 col-sm-12 column-one  d-flex flex-column justify-content-center align-items-center">
                                <blockquote> <p className='p1 text-center'>" Food that tells a story "</p>
                                    <p className='p2'>Food is our common ground, a universal experience, which emphasizes the shared human experience of eating </p></blockquote>
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
                                <blockquote> <p className='p1 text-center'>" Food that tells a story "</p>
                                    <p className='p2'>Food is our common ground, a universal experience, which emphasizes the shared human experience of eating </p></blockquote>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* main section */}
            <section >
                <div className="container">

                    {/* <h1>home</h1> */}
                    {/* row-1 */}
                    <div className="row row-one ">
                        <div className="col-lg-3 col-md-6 col-sm-12 column">
                            <div className='main'>
                                <div className='img-div'>
                                    <img src="/non-veg-icon.png" alt="" />
                                </div>
                                <div className='w-100'>
                                    <p className=' w-100 ps-5'>Non Veg</p>
                                </div>
                                     
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 column">
                            <div className='main'>
                                <div className='img-div'>
                                    <img src="/fast-food-icon.png" alt="" />
                                </div>
                                <div className='w-100'>
                                    <p className=' w-100 ps-5'>Fast Food</p>
                                </div>
                                
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 column">
                            <div className='main'>
                                <div className='img-div'>
                                    <img src="/desert-icon.png" alt="" />
                                </div>
                                <div className='w-100'>
                                     <p className=' w-100 ps-5'>Desert</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 column">
                            <div className='main'>
                                <div className='img-div'>
                                    <img src="/glass-icon.png" alt="" />
                                </div>
                                <div className='w-100'>
                                     <p className=' w-100 ps-5'>Drinks</p>
                                </div>
                               
                            </div>
                        </div>
                    </div>


                    {/* row-2 */}
                    <div className='row row-two'>
                        <div className="col-lg-6 col-md-6 col-sm-12 column">
                            <img src="/shop-banner-1.png" alt="" />
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 column  d-flex flex-column justify-content-center">
                            <h3>A very Simple Process to Make Order Your Favourite Foods</h3>
                            <div className=' icon-div'>
                                <p><span><i class="fa-solid fa-book-open-reader"></i></span>Register Your Account</p>
                                <p><span><i class="fa-solid fa-circle-check"></i></span>Choose the Food you want order</p>
                                <p><span><i class="fa-solid fa-dollar-sign"></i></span>Confirm order with payment</p>
                                <p><span><i class="fa-solid fa-hourglass-half"></i></span>With in 30 minutes you will get your food</p>
                            </div>
                        </div>
                    </div>


                    {/* row-3 */}
                    <div className='row row-three '>
                        <div className='col-12'>
                            <p className='p-one'>Quick Picked Food</p>
                            <div className='border'></div>
                        </div>
                        <div className="col-lg-4 col-md-5 col-sm-12  column-one ">
                            <div className="col-12 column">
                                <div className='main'>
                                    <div className='img-div'>
                                        <img src="/image/meat-icon.png" alt="" />
                                    </div>
                                    <div className='w-100'>
                                        <p className=' w-100 '>All Chicken Dish</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 column">
                                <div className='main'>
                                    <div className='img-div'>
                                        <img src="/image/burger-icon.png" alt="" />
                                    </div>
                                    <div className='w-100'>
                                         <p className=' w-100'>Burger & Fries</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 column">
                                <div className='main'>
                                    <div className='img-div'>
                                        <img src="/image/fish-icon.png" alt="" />
                                    </div>
                                    <div className='w-100'>
                                         <p className=' w-100 '>All Seafood Dish</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 column">
                                <div className='main'>
                                    <div className='img-div'>
                                        <img src="/image/potato-icon.png" alt="" />
                                    </div>
                                    <div className='w-100'>
                                         <p className=' w-100 '>Value Combo Pack</p>
                                    </div>
                                </div>
                            </div>
                            <div className='col-12 checkbox-img '>
                                <img src="\image\checkboxes-food.png" alt="" />
                            </div>
                        </div>
                        <div className="col-lg-8 col-md-7 col-sm-12  column-two">
                            <div className="row ">
                                <div className="col-lg-6 col-md-6 col-sm-12 food-item-column">
                                    <div className='food-item-div'>
                                        <div className='image-div'>
                                            <img src="/image/chicken1.jpg" alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12  food-item-column ">
                                    <div className='food-item-div'>
                                        <div className='image-div'>
                                            <img src="/image/burger1.jpg" alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12  food-item-column ">
                                    <div className='food-item-div'>
                                        <div className='image-div'>
                                            <img src="/image/seafood1.jpg" alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12  food-item-column ">
                                    <div className='food-item-div'>
                                        <div className='image-div'>
                                            <img src="/image/combo1.jpg" alt="" />
                                        </div>
                                    </div>
                                </div>

                                <div className='col-12 read-more-link'>
                                    <button >
                                        <a href="/menu">Our Menu</a> <span class="material-symbols-outlined">keyboard_double_arrow_right</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>


                    {/* row-4 */}
                    <div className='row row-four mb-5'>
                        <div>
                            <p className='p-one text-white'>Our Srvices</p>
                            <div className='border'></div>
                        </div>
                        <div className="col-lg-4 col-md-3 col-sm-12 service-column">
                            <div className='service-main-div'>
                                <img src="/image/service_01.png" alt="" />
                                <p className='p1'>Professional Chef</p>
                                <p className='p2'>Aliquam mollis erat vitae nisi euismod ultricies. Nunc viverra enim vitae nibh consequat, et tincidunt mi vestibulum maecenas tristique elitenatis.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-3 col-sm-12 service-column">
                            <div className='service-main-div'>
                                <img src="/image/service_02.png" alt="" />
                                <p className='p1'>Catering Services</p>
                                <p className='p2'>Aliquam mollis erat vitae nisi euismod ultricies. Nunc viverra enim vitae nibh consequat, et tincidunt mi vestibulum maecenas tristique elitenatis.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-3 col-sm-12 service-column">
                            <div className='service-main-div'>
                                <img src="public/image/service_03.png" alt="" />
                                <p className='p1'>Qulity Food</p>
                                <p className='p2'>Aliquam mollis erat vitae nisi euismod ultricies. Nunc viverra enim vitae nibh consequat, et tincidunt mi vestibulum maecenas tristique elitenatis.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-3 col-sm-12 service-column">
                            <div className='service-main-div'>
                                <img src="public/image/service_04.png" alt="" />
                                <p className='p1'>Inspiring Recipes</p>
                                <p className='p2'>Aliquam mollis erat vitae nisi euismod ultricies. Nunc viverra enim vitae nibh consequat, et tincidunt mi vestibulum maecenas tristique elitenatis.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-3 col-sm-12 service-column">
                            <div className='service-main-div'>
                                <img src="public/image/service_05.png" alt="" />
                                <p className='p1'>Express Delivery</p>
                                <p className='p2'>Aliquam mollis erat vitae nisi euismod ultricies. Nunc viverra enim vitae nibh consequat, et tincidunt mi vestibulum maecenas tristique elitenatis.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-3 col-sm-12 service-column">
                            <div className='service-main-div'>
                                <img src="public/image/service_06.png" alt="" />
                                <p className='p1'>Salutary Meals</p>
                                <p className='p2'>Aliquam mollis erat vitae nisi euismod ultricies. Nunc viverra enim vitae nibh consequat, et tincidunt mi vestibulum maecenas tristique elitenatis.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home
