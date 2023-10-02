import { useParams } from 'react-router-dom'
import { useContext,useState,useEffect } from 'react';
import ProductCard from '../../components/product-card/product-card.component'
import {CategoriesContext} from '../../context/categories.context'
import './category.styles.scss'

const Category = () => {

    const  {category} = useParams();
    const categoryPath = category.charAt(0).toUpperCase() + category.slice(1);
    const {categoriesMap} = useContext(CategoriesContext)
    const [products,setProducts] = useState(categoriesMap[categoryPath])

    useEffect(() => {
        setProducts(categoriesMap[categoryPath])
    },[categoryPath,categoriesMap])
    
    return (
        <>
        <h2 className='category-title'>{category.toUpperCase()}</h2>
        <div className='category-container'>
            {
                products && products.map((product) => <ProductCard key={product.id} product={product}/>)
            }
        </div>
        </>
    )
    

}

export default Category