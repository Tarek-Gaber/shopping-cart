// node imports
import { useContext } from "react";

import Classes from "./ProductsFilter.module.scss";

// context imports
import productsContext from "../../context/ProductsContext";
import { categories } from "../../context/ProductsContext";

const ProductsFilter = () => {
    const { setSelectedCategory } = useContext(productsContext)

    const categoryChangeHandler = (event) => {
        const categoryId = event.target.value;
        const categoryText = event.target.options[event.target.options.selectedIndex].text;
        setSelectedCategory({text: categoryText, id: categoryId})
    }

    return (
        <div className={`${Classes['products-filter']} mb-4`}>
            <div className="form-group">
                <label htmlFor="productsCategoryFilter" className="form-label">Select Category</label>
                <select name="" id="productsCategoryFilter" className="form-control" onChange={categoryChangeHandler}>
                    <option value="all">All Categories</option>
                    {
                        categories.map(category => {
                            return <option value={category.categoryId} key={category.categoryName}>{category.categoryName}</option>
                        })
                    }
                </select>
            </div>
        </div>
    )
};

export default ProductsFilter;