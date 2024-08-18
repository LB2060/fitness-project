import React from 'react'
import { Link } from 'react-router-dom';

interface ShopCardProps{
    shopimg:string;
    shopname:string;
    shopproduct:string;
    shopprice:number;
    shopsale:number;
}



const ShopCard: React.FC <ShopCardProps> = ({shopimg,shopname,shopprice,shopproduct,shopsale}) => {
    return (
        <div>
            
                <div className="Shop-things">
                    <div className="shop-card">
                    <Link to="/shop-details" className='image-container'>
                        <img src={shopimg} className="card-img-top"/>
                        <button className="hover-button">Add Card</button>
                        </Link>
                            <div className="shop-card-body">
                                <h5 className="shop-card-title">{shopname}</h5>
                                <p className="card-text">{shopproduct}</p>
                                <div className="thing-price">
                                    <p className='simple-p'>{shopprice}</p>
                                    <p className='line-through'>{shopsale}</p>
                                </div>
                            </div>
                    </div>
                </div>
           

        </div>
    )
}

export default ShopCard