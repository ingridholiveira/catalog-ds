//import Navbar from 'components/Navbar';
import Pagination from 'components/Pagination';
import ProductCard from 'components/ProductCard';
import { Link } from 'react-router-dom';
import { Product } from 'types/product';
import './style.css';

const Catalog = () => {
  const product: Product = {
    id: 2,
    name: 'Smart TV',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    price: 2190.0,
    imgUrl:
      'https://raw.githubusercontent.com/devsuperior/dscatalog-resources/master/backend/img/2-big.jpg',
    date: '2020-07-14T10:00:00Z',
    categories: [
      {
        id: 1,
        name: 'Livros',
      },
      {
        id: 3,
        name: 'Computadores',
      },
    ],
  };

  return (
    <div className="container my-4 catalog-container">
      <div className="row catalog-title-container">
        <h1>Catálogo de produtos</h1>
      </div>
      <div className="row">
        <div className="col-sm-6 col-lg-4 col-xl-3">
          <Link to="/products/1">
            <ProductCard product={product} />
          </Link>
        </div>
        <div className="col-sm-6 col-lg-4 col-xl-3">
          <Link to="/products/1">
            <ProductCard product={product} />
          </Link>
        </div>
        <div className="col-sm-6 col-lg-4 col-xl-3">
          <Link to="/products/1">
            <ProductCard product={product} />
          </Link>
        </div>
        <div className="col-sm-6 col-lg-4 col-xl-3">
          <Link to="/products/1">
            <ProductCard product={product} />
          </Link>
        </div>
        <div className="col-sm-6 col-lg-4 col-xl-3">
          <Link to="/products/1">
            <ProductCard product={product} />
          </Link>
        </div>
        <div className="col-sm-6 col-lg-4 col-xl-3">
          <Link to="/products/1">
            <ProductCard product={product} />
          </Link>
        </div>
        <div className="col-sm-6 col-lg-4 col-xl-3">
          <Link to="/products/1">
            <ProductCard product={product} />
          </Link>
        </div>
        <div className="col-sm-6 col-lg-4 col-xl-3">
          <Link to="/products/1">
            <ProductCard product={product} />
          </Link>
        </div>
      </div>
      <div className="row">
        <Pagination />
      </div>
    </div>
  );
};

export default Catalog;
