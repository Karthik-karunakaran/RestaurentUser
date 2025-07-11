import React, { useEffect, useRef, useState } from 'react'

const Cart = ({ cart, setCart }) => {
   // const [total, setTotal] = useState(null)
   const [showDiv, setShowDiv] = useState(false)
   const [subtotal, setSubtotal] = useState(0);
   const [discount, setDiscount] = useState(0);
   const [total, setTotal] = useState(0);
   const deliveryFee = 40;

   // remove cart
   const removeCart = (productId) => {
      setCart(cart.filter((c) => c.foodId !== productId));
   };

   // increase quantity
   const increaseQty = (productId) => {
      const updatedCart = cart.map((item) =>
         item.foodId === productId ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCart(updatedCart);
   };

   // decrease quantity
   const decreaseQty = (productId) => {
      const updatedCart = cart.map((item) =>
         item.foodId === productId && item.quantity > 1
            ? { ...item, quantity: item.quantity - 1 }
            : item
      );
      setCart(updatedCart);
   };


   // sub total 
   useEffect(() => {
      const subTotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
      setSubtotal(subTotal);

      const discountAmount = (subTotal * 20) / 100;
      setDiscount(discountAmount);

      const grandTotal = subTotal - discountAmount + deliveryFee;
      setTotal(grandTotal);
   }, [cart]);

   // address form
   useEffect(() => {
      document.body.style.overflow = showDiv ? 'hidden' : 'auto';
      return () => {
         document.body.style.overflow = 'auto';
      };
   }, [showDiv]);

   return (
      <>


         <section className='cart-section'>
            <div className='container'>
               <div className="row">
                  <div className="col-lg-8 col-md-12 col-sm-12 mt-5">
                     <div className=' '>
                        <div className="accordion" id="accordionPanelsStayOpenExample">
                           {/* Cart section accordian */}
                           <div className="accordion-item">
                              <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                                 <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                                    <div className='accordian-title-div'>
                                       <span>1</span>
                                    </div>
                                    <p>Cart</p>
                                 </button>
                              </h2>
                              <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                                 <div class="accordion-body">
                                    {
                                       cart.length === 0 ? (
                                          <p>Your cart is empty</p>
                                       ) : (
                                          cart.map((product, index) => (
                                             <React.Fragment key={index}>
                                                <div className="row cart-item">

                                                   <div className="col-4 img-div">
                                                      <img src={product.imageUrl} alt="" />
                                                      <div className=" quantity-div p-1 px-2 d-none">
                                                         <div>
                                                            <button className='minus '>-</button>
                                                            <button className=' num text-dark'>1</button>
                                                            <button className='plus '>+</button>
                                                         </div>
                                                      </div>
                                                   </div>

                                                   <div className="col-8 content-div d-flex flex-column gap-4 justify-content-center ">
                                                      <div className="name-div d-flex justify-content-between">
                                                         <span className='name'>{product.foodName}</span>
                                                         <span> <i className="fa-solid fa-trash ms-auto"  style={{ cursor: 'pointer' }} onClick={() => removeCart(product.foodId)}></i></span>
                                                      </div>
                                                      <div className="rating-div ">
                                                         <span><i className="fa-solid fa-star" /></span>
                                                         <span className='ms-2'>{product.rating}</span>
                                                      </div>
                                                      <div className="row quantity-div-overall d-flex">
                                                         <div className="col-4 price-div d-flex align-items-center">
                                                            <span className='rupees-symbol'><b>₹</b></span>
                                                            <span className='ms-2'>{product.price}/-</span>
                                                         </div>
                                                         <div className="col-4 quantity-div p-1 d-block">
                                                            <div>
                                                               <button className='minus' onClick={() => decreaseQty(product.foodId)}>-</button>
                                                               <button className=' num text-dark'>{product.quantity}</button>
                                                               <button className='plus' onClick={() => increaseQty(product.foodId)}>+</button>
                                                            </div>
                                                         </div>
                                                         <div className="col-4  d-flex align-items-center justify-content-end">
                                                            <span>total:</span>
                                                            <span className='ms-2 me-1'>₹</span>
                                                            <span>{product.price * product.quantity}/-</span>
                                                         </div>
                                                      </div>
                                                   </div>
                                                </div>
                                                <hr />
                                             </React.Fragment>

                                          ))
                                       )
                                    }


                                    <button className='btn  ms-auto mt-5  total-button' type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo ,#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseTwo">
                                       <div>
                                          <span >Sub total : {subtotal.toFixed(2)}/-</span>  <br /> <span className='span2'>procied to checkout</span>
                                       </div>
                                       <div className='icon-div'>
                                          <i class="fa-solid fa-chevron-right"></i>
                                       </div>
                                    </button>
                                 </div>
                              </div>
                           </div>
                           {/* Address section accordian */}
                           <div class="accordion-item mt-2">
                              <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
                                 <button class="accordion-button collapsed " type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                                    <div>
                                    </div>
                                    <div className='accordian-title-div'>
                                       <span>2</span>
                                    </div>
                                    <p>Order Address</p>
                                 </button>
                              </h2>
                              <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
                                 <div class="accordion-body">
                                    <div className="row">
                                       <div className="col-12">
                                          <p className='text-end text-danger Add-Address' onClick={() => { setShowDiv(true) }}><span className='me-2'><i class="fa-solid fa-plus "></i></span>Add Address</p>
                                       </div>
                                       <div className="col-12 col-md-6 col-lg-6 mt-2">
                                          <div className='  address-div'>
                                             <div className='d-flex justify-content-between'>
                                                <div>
                                                   <p className='heading'><b>Home</b></p>
                                                </div>
                                                <div>
                                                   <i class="fa-solid fa-trash"></i>
                                                </div>
                                             </div>
                                             <p>K. Jhon</p>
                                             <p className='address'>No 10, big Streat, tkm, <br /> Chengalpattu district <br />
                                                603109 </p>
                                             <p className='text-end text-primary edit'>Edit</p>
                                             <div>
                                                <button className='belivery-btn'>Dlelivery Here</button>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                    <hr />
                                    <button className='btn button2 w-25 ' type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree ,#panelsStayOpen-collapseTwo" aria-expanded="true" aria-controls="panelsStayOpen-collapseTwo">Contiune</button>
                                 </div>
                              </div>
                           </div>
                           {/* payment section */}
                           <div class="accordion-item mt-2">
                              <h2 class="accordion-header" id="panelsStayOpen-headingThree">
                                 <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                                    <div className='accordian-title-div'>
                                       <span>3</span>
                                    </div>
                                    <p>Payment </p>
                                 </button>
                              </h2>
                              <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
                                 <div className="accordion-body">
                                    <div className="container p-0">
                                       <div className="card px-4">
                                          <p className="h8 py-3">Payment Details</p>
                                          <div className="row gx-3">
                                             <div className="col-12">
                                                <div className="d-flex flex-column">
                                                   <p className="text mb-1">Person Name</p>
                                                   <input className="form-control mb-3" type="text" placeholder="Name" value="Barry Allen" />
                                                </div>
                                             </div>
                                             <div className="col-12">
                                                <div className="d-flex flex-column">
                                                   <p className="text mb-1">Card Number</p>
                                                   <input className="form-control mb-3" type="text" placeholder="1234 5678 435678" />
                                                </div>
                                             </div>
                                             <div className="col-6">
                                                <div className="d-flex flex-column">
                                                   <p className="text mb-1">Expiry</p>
                                                   <input className="form-control mb-3" type="text" placeholder="MM/YYYY" />
                                                </div>
                                             </div>
                                             <div className="col-6">
                                                <div className="d-flex flex-column">
                                                   <p className="text mb-1">CVV/CVC</p>
                                                   <input className="form-control mb-3 pt-2 " type="password" placeholder="***" />
                                                </div>
                                             </div>
                                             <div className="col-12">
                                                <div className="btn btn-primary mb-3 w-50 ms-auto me-auto">
                                                   <span className="ps-3">Pay $243</span>
                                                   <span className="fas fa-arrow-right"></span>
                                                </div>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="col-12 col-lg-4 col-md-12">
                     <div className='checkout-div-overall ms-auto me-auto'>
                        <div className='checkout-div rounded mb-2 p-3'>
                           <h4 className='text-center'>KK RESTAURENT</h4>
                           <hr />
                           <p className=''><b> Bill Detail</b></p>
                           <div className='d-flex justify-content-between mt-3'>
                              <span>Item Total</span>
                              <span>₹{subtotal.toFixed(2)}</span>
                           </div>
                           <div className='d-flex justify-content-between'>
                              <span>Discount (20%)</span>
                              <span>- ₹{discount.toFixed(2)}</span>
                           </div>
                           <div className='d-flex justify-content-between'>
                              <span>Delivery Fee</span>
                              <span>₹{deliveryFee}</span>
                           </div>
                           <hr />
                           <div className='d-flex justify-content-between'>
                              <p><b>TO PAY</b></p>
                              <p className='text-danger'>₹{total.toFixed(2)}</p>
                           </div>

                        </div>
                        <span className='ms-5 text-danger '>Your Total Savings on this order : {discount.toFixed(2)}</span>
                     </div>
                  </div>
               </div>
            </div>


            {/* Address form */}

            {
               showDiv && (
                  <div className='address-form-overlay'>
                     <div className="form-div p-3">
                        <p className="address-form-title">Address </p>
                        <div className="row d-flex justify-content-center align-items-center">
                           <div className="col-6 ">
                              <input type="text" placeholder="First Name" />
                           </div>
                           <div className="col-6 ">
                              <input className="input-number" type="text" placeholder="Last Name" />
                           </div>
                           <div className="col-12">
                              <input type="text" placeholder="Address" />
                           </div>
                           <div className="col-12">
                              <input type="email" placeholder="Email" />
                           </div>
                           <div className="col-12">
                              <input type="number" placeholder="Phone" />
                           </div>
                           <div className="col-6">
                              <button onClick={() => setShowDiv(false)}>Close</button>
                           </div>
                           <div className="col-6">
                              <button>Submit</button>
                           </div>
                        </div>
                     </div>
                  </div>
               )
            }

         </section>

      </>
   )
}

export default Cart





