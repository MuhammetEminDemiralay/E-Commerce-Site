import { useEffect, useState } from 'react'
import '../Css/Product.css'
import { useParams } from 'react-router-dom'

function Product() {

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

    const [product, setProduct] = useState(productModel);
    const params = useParams();
    const imageUrl = "https://localhost:44349/"
    const noImage = "Images/02f132ad442a43a389c80859b5ce13db.jpg"

    useEffect(() => {
        const productId = Object.values(params);
        fetch(`https://localhost:44349/api/Products/getproductdetailbyproductid?productId=${productId}`)
            .then(res => res.json())
            .then(res => setProduct(res.data))
    }, [params])



    return (
        <>
            <div className='inter'>
                <div id="carouselExample" className="carousel slide-wrapper">
                    <div className="carousel-inner slider">
                        <div className="carousel-item active slide-item">
                            <img src={product.productImagePath.length > 0 ? imageUrl + product.productImagePath[0] : imageUrl + noImage} />
                        </div>
                        <div className="carousel-item slide-item">
                            <img src={product.productImagePath.length > 1 ? imageUrl + product.productImagePath[1] : imageUrl + noImage} />
                        </div>
                        <div className="carousel-item slide-item">
                            <img src={product.productImagePath.length > 2 ? imageUrl + product.productImagePath[2] : imageUrl + noImage} />
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
                <div className='product-content'>
                    <h1>{product.productName}</h1>
                    <li>{product.description}</li>
                    <li className='text'><span>Price : $</span>{product.unitPrice}</li>
                    <li className='text'><span>Stock : </span>{product.unitsInStock}</li>
                    <li className='text'><span>Category : </span>{product.categoryName}</li>
                    <div className='market-box'>
                        <button className='box plus'>+</button>
                        <button className='box minus'>-</button>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Product