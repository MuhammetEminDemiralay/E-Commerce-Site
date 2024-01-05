import '../Css/Home.css'
import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { useParams } from 'react-router-dom';

function Home() {

    const productModel = {
        id: null, 
        categoryId: null,
        productName: "",
        unitPrice: null,
        unitsInStock: null,
        categoryName: "",
        productImagePath: [],
        description: ""
    }


    const [products, setProducts] = useState([productModel]);
    const params = useParams();

    useEffect(() => {
        const paramsName = Object.keys(params);
        const paramsValue = Object.values(params);
        if (paramsName[0] === "categoryId") {
            fetch(`https://localhost:44349/api/Products/getproductdetailsbycategoryid?categoryId=${paramsValue}`)
            .then(res => res.json())
            .then(res => setProducts(res.data))      
        }else{
            fetch('https://localhost:44349/api/Products/getproductdetails')
                .then(res => res.json())
                .then(res => setProducts(res.data))
        }
    }, [params])

    return (
        <>
            <ul className="wrapper">
                <div className='inter-wrapper'>
                    {
                        products.map((product) => (
                            <ProductCard product={product} key={product.id} />
                        ))
                    }
                </div>
            </ul>
        </>
    )
}

export default Home