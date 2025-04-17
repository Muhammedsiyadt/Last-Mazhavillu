import React, { useState, useEffect } from 'react';
import { Heart, ShoppingCart, Search } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './SearchBar.css';
import mazhavillu_logo from '../../assets/images/mazhavillu_logo.png';

export default function HeaderBar() {
  const [showSearch, setShowSearch] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 958);
  const [searchText, setSearchText] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 958;
      setIsMobile(mobile);
      if (!mobile) setShowSearch(false);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleSearch = () => {
    if (isMobile) setShowSearch((prev) => !prev);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchText.trim()) {
      navigate(`/productlist/search?query=${encodeURIComponent(searchText)}`);
    }
  };

  const handleCategoryChange = (e) => {
    const category = e.target.value;
    setSelectedCategory(category);
    if (category) {
      navigate(`/productlist/category/${encodeURIComponent(category)}`);
    }
  };

  const handleLocationChange = (e) => {
    const location = e.target.value;
    setSelectedLocation(location);
    if (location) {
      navigate(`/productlist/location/${encodeURIComponent(location)}`);
    }
  };

  return (
    <nav className="bg-white nav-bar-nav shadow-sm px-3 pt-3 py-2 pb-3">
      <div className="container-fluid">
        <div className="d-flex align-items-center justify-content-between flex-wrap">
          <Link className="fw-bold text-success fs-4 me-2" to="/">
            <img src={mazhavillu_logo} alt="Logo" height="40" />
          </Link>

          {!isMobile && (
            <form className="flex-grow-1 mx-3" role="search" onSubmit={handleSearchSubmit}>
              <div className="d-flex align-items-center justify-content-center w-100">
                <div className="input-group w-100 search-input">
                  <select
                    className="form-select flex-shrink-0"
                    style={{ maxWidth: '150px' }}
                    value={selectedCategory}
                    onChange={handleCategoryChange}
                  >
                    <option value="">All Categories</option>
                    <option value="Fruits">Fruits</option>
                    <option value="Vegetables">Vegetables</option>
                    <option value="Dairy">Dairy</option>
                  </select>

                  <input
                    type="search"
                    className="form-control"
                    placeholder="Search for a product or brand..."
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                    aria-label="Search"
                  />

                  <button
                    className="btn btn-success"
                    type="submit"
                    style={{ width: '40px' }}
                  >
                    <Search size={14} />
                  </button>
                </div>

                <div className="ms-2" style={{ maxWidth: '150px' }}>
                  <select
                    className="form-select"
                    value={selectedLocation}
                    onChange={handleLocationChange}
                  >
                    <option value="">All Locations</option>
                    <option value="City Center">City Center</option>
                    <option value="Suburbs">Suburbs</option>
                    <option value="Online">Online</option>
                  </select>
                </div>
              </div>
            </form>
          )}

          <div className="d-flex align-items-center gap-3">
            {isMobile && (
              <button
                className="btn btn-link p-0"
                onClick={toggleSearch}
                aria-label="Toggle Search"
              >
                <Search size={20} className="text-dark" />
              </button>
            )}
            <Link to="/wishlist" className="text-dark position-relative">
              <Heart size={20} />
            </Link>
            <Link to="/cart" className="text-dark position-relative">
              <ShoppingCart size={20} />
            </Link>
          </div>
        </div>

        {isMobile && showSearch && (
          <form className="mt-2" role="search" onSubmit={handleSearchSubmit}>
            <div className="input-group">
              <input
                type="search"
                className="form-control"
                placeholder="Search products..."
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                aria-label="Search"
              />
              <button
                className="btn btn-success"
                type="submit"
                style={{ width: '40px' }}
              >
                <Search size={14} />
              </button>
            </div>
          </form>
        )}
      </div>
    </nav>
  );
}
