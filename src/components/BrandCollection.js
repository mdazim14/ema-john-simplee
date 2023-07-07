import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import './BrandCollection.css';

const BrandCollection = () => {
    const { brandName } = useParams();
    const [filteredProducts, setFilteredProducts] = useState([])


    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                const newData = [...data].filter((item) => item.name.toUpperCase().includes(brandName.toUpperCase()))
                // setProducts(newData);
                setFilteredProducts(newData)
                // setSearchItems(newData);
            })
    }, [brandName])

    const productName = ['Shoe', 'Pant', 'T-Shirt', 'Bag', 'Hat', 'Bottle', 'Headphone', '- all items'];

    return (
        <div>
            <div className='m-1 border d-flex justify-content-center'>
                {
                    // eslint-disable-next-line array-callback-return
                    productName.map((name, index) => {
                        return <Link to={name === '- all items' ? '/' : `/${name}`} className='categoryName' >{name}</Link>
                    })
                }

            </div>
            <div className="products-container">
                {
                    filteredProducts.length > 0 && filteredProducts.map((item, index) => {
                        return (
                            <div className='div-design text-center border p-2 m-3' key={index}>
                                <div className="">
                                    <img width='100%' src={item?.img} alt="" />
                                </div>

                                <div className="div-style">
                                <p className='mt-2 mb-0' style={{ fontWeight: 500, fontSize: "15px" }}>{item?.name}</p>

                                    <div className=" my-3">
                                        <span>
                                            <p className='mb-0'>Price: ${item?.price}</p>
                                            <p className='mb-0'>Manufacturer: {item?.seller}</p>
                                        </span>
                                        <span>
                                            <p> Rating: {item?.ratings}</p>
                                        </span>
                                    </div>

                                    <div className=" w-100 d-flex justify-content-center align-item-center">
                                        <Button>
                                            Add to cart
                                            <FontAwesomeIcon style={{ marginLeft: "10px" }} icon={faShoppingCart}></FontAwesomeIcon>
                                        </Button>

                                        <Button variant="danger">
                                            Remove from cart
                                        </Button>
                                    </div>
                                </div>

                            </div>
                        )
                    })
                }
            </div>

        </div>
    )

}
export default BrandCollection;