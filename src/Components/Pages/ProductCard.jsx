import '../Css/ProductCard.css'
import { NavLink } from 'react-router-dom'

function ProductCard({ product }) {
    const imageUrl = "https://localhost:44349/"
    const noImage = "Images/02f132ad442a43a389c80859b5ce13db.jpg"


    return (
        <>
            <div className="product-card">
                <img className="card-img" src={product.productImagePath.length > 0 ? imageUrl + product.productImagePath[0] : imageUrl + noImage } alt="..." />
                <div className='card-title'>
                    <h4>{product.productName}</h4>
                    <p>{product.description}</p>
                </div>
                <ul className='card-content'>
                    <li className='text'><span>Price : $</span>{product.unitPrice}</li>
                    <li className='text'><span>Stock : </span>{product.unitsInStock}</li>
                    <li className='text'><span>Category : </span>{ product.categoryName}</li>
                    <button>
                        <NavLink style={{textDecoration:'none', color:'#000814', fontWeight:'500', fontSize:'20px'}} to={`product/${product.id}`}>Detail</NavLink>
                    </button>
                </ul>
            </div>
        </>
    )
}

export default ProductCard