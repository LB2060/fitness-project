import React, { useState } from 'react';
import ServicesHeader from './ServicesHeader';
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaGoogle } from "react-icons/fa";
const ShopDetails: React.FC = () => {

    const [selectedImage, setSelectedImage] = useState<string>('thumb1');
    const chooseImageClick = (imageId: string) => {
        setSelectedImage(imageId);
    };


    const [selectDiv, setSelectDiv] = useState<string>('div1')
    const chooseDivClick = (divId: string) => {
        setSelectDiv(divId);
    };

    return (
        <div>
            <ServicesHeader h1='Shop Details' page='News' />
            <div className="shop-details container">
                <div className="row">
                    <div className='main-img-div col-12 col-md-5'>
                        <div className="product-img">
                            {selectedImage === 'thumb1' && (
                                <div className="product-select-img">
                                    <img className='main-img' src="public/pages/Shop-Details/large1.jpg" alt="Thumb 1" />
                                </div>
                            )}
                            {selectedImage === 'thumb2' && (
                                <div className="product-select-img">
                                    <img className='main-img' src="public/pages/Shop-Details/large2.jpg" alt="Thumb 2" />
                                </div>
                            )}
                            {selectedImage === 'thumb3' && (
                                <div className="product-select-img">
                                    <img className='main-img' src="public/pages/Shop-Details/large3.jpg" alt="Thumb 3" />
                                </div>
                            )}
                        </div>
                    </div>

                    <div className=' select-img-div col-12 col-md-2'>
                        <a href="#home" onClick={() => chooseImageClick('thumb1')}><img className='select-img' src="public/pages/Shop-Details/thumb1.jpg" alt="" /></a>
                        <a href="#profile" onClick={() => chooseImageClick('thumb2')}><img className='select-img' src="public/pages/Shop-Details/thumb2.jpg" alt="" /></a>
                        <a href="#profile1" onClick={() => chooseImageClick('thumb3')}><img className='select-img' src="public/pages/Shop-Details/thumb3.jpg" alt="" /></a>
                    </div>
                    <div className="col-12 col-md-4">
                        <h6 className='shop-d-h6'>Workstead</h6>
                        <h1 className='shop-d-h1'>Helios Piranho Lamp</h1>
                        <div className="shop-d-price-div">
                            <p className='shop-d-price'>$700.00</p>
                            <p className='shop-d-sale'>$820.00</p>
                        </div>
                        <p className='product-info'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
                        <p className='category'>Category: <span className='category-span'>furniture, decor</span></p>
                        <input className='number' type="text" placeholder='1' />
                        <button className='shop-d-btn'><a href="/">Add To Card</a></button>
                        <div className="shop-link-icon">
                            <a target='blank' href="https://www.facebook.com/"><FaFacebookF className='foot-icon' /></a>
                            <a className='mx-2' target='blank' href="https://x.com/home"><FaTwitter className='foot-icon' /></a>
                            <a target='blank' href="https://www.instagram.com/"><RiInstagramFill className='foot-icon' /></a>
                            <a className='mx-2' target='blank' href="https://www.google.com/"><FaGoogle className='foot-icon' /></a>
                        </div>
                    </div>
                    <div className="shop-details-choosing">
                        <div className="select-div-colon" id='div-select-id'>
                            <a href="#div-select-id" onClick={() => chooseDivClick('div1')}>Description</a>
                            <a href="#div-select-id" onClick={() => chooseDivClick('div2')}>Additional information</a>
                            <a href="#div-select-id" onClick={() => chooseDivClick('div3')}>Reviews(10)</a>
                        </div>

                        <div className="shop-details-header">
                            {
                                selectDiv === 'div1' && (
                                    <div className="description">
                                        <p className='description-p'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
                                        <p className='description-p'>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora.</p>
                                    </div>
                                )
                            }
                            {
                                selectDiv === 'div2' && (
                                    <div className="add-inf">
                                        <h3 className='add-inf-h3'>Additional information</h3>
                                        <p className='add-inf-p'>Weight <span className='add-inf-span'>1.4 oz</span></p>
                                        <p className='add-inf-p'>Dimensions <span className='add-inf-span'>62 × 56 × 12 in</span></p>
                                        <p className='add-inf-p'>Size <span className='add-inf-span'>XL, XXL, LG, SM, MD</span></p>
                                    </div>
                                )
                            }
                            {
                                selectDiv === 'div3' && (
                                    <div className="reviews">
                                        <p className='description-p'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
                                        <p className='description-p'>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora.</p>
                                    </div>
                                )
                            }
                        </div>
                    </div>



                </div>
            </div>
        </div>
    );
};

export default ShopDetails;
