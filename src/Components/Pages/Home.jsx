import { useEffect, useState } from "react";

function Home() {

    const productModel = { productId: null, categoryId: null, productName: "", unitPrice: null, unitsInStock: null }
    const [products, setProducts] = useState([productModel]);
    useEffect(() => {
        fetch('https://localhost:44349/api/Products/getall')
            .then(res => res.json())
            .then(res => setProducts(res.data))
      
    }, [])

    return (
        <>
            <h1>PRODUCTS</h1>
            <ul>
                {
                    products.map((item) => (
                        <li key={item.productId}>{item.productName}</li>
                    ))
                }
            </ul>
        </>
    )
}

export default Home