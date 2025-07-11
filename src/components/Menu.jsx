import axios from 'axios'
// import Product from './Product'
import React, { useEffect, useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'

const Menu = ({ cart, setCart }) => {


    // menu mapping function
    const [originalData, setOriginalData] = useState([]);
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get("http://localhost:8080/get");
            setOriginalData(response.data);
            setData(response.data);
        };
        fetchData();
    }, []);

    // button filter
    const filterResult = (catitem) => {
        const result = originalData.filter((curData) => curData.category === catitem);
        setData(result);
    };
    const showAll = () => {
        setData(originalData);
    };

    // Add to cart function
    const addToCart = (product) => {
        const exists = cart.find((item) => item.foodId === product.foodId);
        if (exists) {
            alert("Product already in cart.  Increasing quantity.");
            return;
        }
        setCart([...cart, { ...product, quantity: 1 }]);
    };


    // this is used to product details trasfer in detail page
    const navigate = useNavigate();
    const handleClick = (item) => {
        navigate(`/item/${item.foodName}`, { state: item });
    }


    // search div
    const [searchTerm, setSearchTerm] = useState("");

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
        const filtered = originalData.filter((item) =>
            item.foodName.toLowerCase().includes(e.target.value.toLowerCase())
        );
        setData(filtered);
    };


    return (
        <>
            {/* main section */}
            <section className='menu-section '>
                <div className="container">
                    <div className="row menu-row-one mt-2">
                        <div className="col-lg-4 col-md-12  col-sm-12 ">
                            <div className='cyber'>
                                <div className='search-div'>
                                    <div className='search-icon'>
                                        <input type="text" placeholder='search' value={searchTerm} onChange={handleSearch} />
                                        <label className='icon'>
                                            <i class="fa-solid fa-magnifying-glass"></i>
                                        </label>
                                    </div>
                                </div>
                                <div className='category-div'>
                                    <div className='category-title-div'>
                                        <p>Product Category</p>
                                    </div>
                                    <div className='content-div'>
                                        <button className='mt-4' onClick={showAll}><span><i class="fa-solid fa-chevron-right "></i></span>See All</button>
                                        <button onClick={() => filterResult('asian-food')}><span><i class="fa-solid fa-chevron-right "></i></span>Asian Food</button>
                                        <button onClick={() => filterResult('sea-food')}><span><i class="fa-solid fa-chevron-right"></i></span>Sea Food</button>
                                        <button onClick={() => filterResult('fast-food')}><span><i class="fa-solid fa-chevron-right"></i></span>Fast Food</button>
                                        <button onClick={() => filterResult('thai-food')}><span><i class="fa-solid fa-chevron-right"></i></span>Thai Food</button>
                                        <button onClick={() => filterResult('veg-food')}><span><i class="fa-solid fa-chevron-right"></i></span>Veg Food</button>
                                        <button onClick={() => filterResult('nonveg-food')}><span><i class="fa-solid fa-chevron-right"></i></span>Non-Veg Food</button>
                                        <button onClick={() => filterResult('chicken-food')}><span><i class="fa-solid fa-chevron-right"></i></span>Chicken Food</button>
                                        <button onClick={() => filterResult('indian-food')}><span><i class="fa-solid fa-chevron-right"></i></span>Indian Food</button>
                                        <button onClick={() => filterResult('desert')}><span><i class="fa-solid fa-chevron-right"></i></span>Desert</button>
                                        <button onClick={() => filterResult('mocktail')}><span><i class="fa-solid fa-chevron-right"></i></span>Moktail</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8 col-md-12 col-sm-12  column-two">
                            <div className="row">
                                {data.map((values) => {
                                    const { foodName, price, imageUrl, foodId, rating } = values;
                                    return (
                                        <>
                                            <div key={foodId} className="col-lg-6 col-md-6 col-sm-12 menu-food-item-column" >
                                                <div className='menu-food-item-div'>
                                                    <div className='image-div' style={{ cursor: 'pointer' }}>
                                                        <img key={foodId} onClick={() => handleClick(values)} src={imageUrl} alt="" />
                                                    </div>
                                                    <div className='name-div'>
                                                        <p className='p-one'>{foodName.length > 20 ? foodName.slice(0, 20) + '...' : foodName}</p>
                                                        <div className='div-one'>
                                                            <div className='div-one-child'>
                                                                <p className='name'><span><i class="fa-solid fa-star me-2"></i></span>4</p>
                                                                <p><span>$</span>{price}</p>
                                                            </div>
                                                            <button onClick={() => addToCart(values)}><span><i class="fa-solid fa-plus"></i></span>Add</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </>
                                    )
                                })}

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Menu
