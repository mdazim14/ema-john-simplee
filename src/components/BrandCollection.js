import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import SearchBar from "./SearchBar/SearchBar";

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
                            return <Link to={name === '- all items'?'/':`/${name}`} className='categoryName' >{name}</Link>
                        })
                    }
                    
                </div>
            <h2>Brand Collection-{brandName}</h2>
            {
                filteredProducts.length > 0 && filteredProducts.map((item, index) => {
                    return (
                        <div className='border p-2 mb-2' key={index}>
                            <h6>{item.name}</h6>
                        </div>
                    )
                })
            }
        </div>
    )

}
export default BrandCollection;