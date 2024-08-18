import React, { useState, useEffect } from 'react'
import ServicesHeader from './ServicesHeader'
import axios from 'axios'
import ShopCard from './ShopCard';
import Pagination from './Pagination';

interface ShopProps {
    img: string;
    name: string;
    product: string;
    price: number;
    sale: number;
}

const Shop: React.FC = () => {
    const [shopCard, setShopCard] = useState<ShopProps[]>([])
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = 10;

    useEffect(() => {
        axios.get('src/ShopList.json')
            .then(answer => setShopCard(answer.data))
            .catch(error => console.error(error))
    })
    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };
    return (
        <div>
            <ServicesHeader h1='Shop' page='News' />
            <div className="shop-page container">
                <div className="showing-sorting">
                    <p className='showing-p'>Showing 1–9 of 10 results</p>

                    <select className='select-shop-list' name="shop" id="shop">
                        <option value="default">Default sorting</option>
                        <option value="popularity">Sort by popularity</option>
                        <option value="rating">sort by average rating</option>
                        <option value="latest">Sort by latest</option>
                        <option value="price-l-h">Sort by price:low to high</option>
                        <option value="price h-l">Sort by price: high to low</option>
                    </select>
                </div>
                <div className="products">
                    {
                        shopCard.map((card, index) => (
                            <ShopCard key={index} shopimg={card.img} shopname={card.name} shopproduct={card.product} shopprice={card.price} shopsale={card.sale} />
                        ))
                    }
                </div>
                <div className="pagination-page">
                <Pagination totalPages={totalPages} currentPage={currentPage} onPageChange={handlePageChange} />
                </div>
                
            </div>


        </div>
    )
}

export default Shop