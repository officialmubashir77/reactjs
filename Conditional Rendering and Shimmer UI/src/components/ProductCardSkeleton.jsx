import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const ProductCardSkeleton = () => {
  return (
    <div className="product-card-skeleton-wrapper">
    <div className="product">
      <Skeleton height={150} />
      <Skeleton count={2} />
      <Skeleton width={80} />
    </div>
    </div>
  );
};
export default ProductCardSkeleton;