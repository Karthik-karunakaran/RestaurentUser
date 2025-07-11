import React, { useState } from 'react'
import { useLocation, useParams } from 'react-router-dom';
import Product from './Product';
const Detail = () => {

    const location = useLocation();
    const item = location.state;

    if (!item) return <p>Item not found!</p>;
    // const [detail, setDetail]=useState(Product)

    // const {id} = useParams();

    // const item = detail.find((p)=>p.id===parseInt(id));

    return (
        <>
        
            {/* main */}
            <section>
                <div className='container detail'>
                    <div className="row">
                        <div className="col-lg-6 col-md-12 col-sm-12 detail-col1">
                            <div>
                                <img src={item.imageUrl} alt={item.foodName}  />
                            </div>
                        </div>
                        <div className='col-lg-6 col-md-12 col-sm-12 d-flex flex-column justify-content-center'>
                                <p className='heading'>{item.foodName}</p>
                                <p className='rating'><span><i class="fa-solid fa-star me-2"></i></span>4</p>
                                <p className='description'>{item.description}</p>
                                 <p className='price'><span className='price-symbol'>₹</span>{item.price}/-</p>
                        </div>
                    </div>
                    <hr />
                    <div className="row row-two">
                        <div className="col-12">
                            <p className='heading'>Additional Information</p>
                            <div className='content'>
                                <p>Food type <span>Non-Veg, Chicken, Rosted</span></p>
                                <p>Ingredients <span>Chicken, Black Pepper, Cheese, Garlic Clove, Salt</span></p>
                                <p>Product ID <span>#157892CH</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Detail;
