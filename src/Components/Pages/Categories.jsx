import { useEffect, useState } from "react"
import '../Css/Category.css'
import { NavLink} from "react-router-dom"

function Categories() {

    const catergoryModel = { categoryId: null, categoryName: "" }
    const [categories, setCategories] = useState([catergoryModel])

    useEffect(() => {
        fetch('https://localhost:44349/api/Category/getall')
            .then(res => res.json())
            .then(res => setCategories(res.data));
    }, [])


    return (
        <>
            <ul className="list-group category-list">
                <NavLink  to="/" className="list-group-item rounded-0">
                    All Products
                </NavLink>
                {

                    categories.map((category) => (
                        <NavLink to={`category/${category.categoryId}`} key={category.categoryId} className="list-group-item d-flex justify-content-between align-items-center  rounded-0">
                           {category.categoryName}
                        </NavLink>
                    ))
                }
            </ul>
        </>
    )
}

export default Categories 