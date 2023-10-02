import "./category-preview.styles.scss";
import { Link } from "react-router-dom";
import ProductCard from "../product-card/product-card.component";
const CategoryPreview = ({ title, product }) => {
  return (
    <div className="category-preview-container">
      <Link to={title} className="title">
        <span className="title">{title.toUpperCase()}</span>
      </Link>
      <div className="preview">
        {product
          .filter((_, index) => index < 4)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </div>
  );
};

export default CategoryPreview;
