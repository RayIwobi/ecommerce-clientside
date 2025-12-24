import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import '../../home/home.css';
import './search.css'

import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import errordisplay from './404-error.png'
import handpointing from '../../cartPage/handpointing.png'

const useQuery = () => new URLSearchParams(useLocation().search);

const SearchResults = () => {
  const query = useQuery().get("q");
  const [results, setResults] = useState([]);

  const [loading, setLoading] = useState(false);


  useEffect(() => {
    if (query) {
      setLoading(true);

      axios
       .get(`https://nediecom-n82p.onrender.com/search?q=${encodeURIComponent(query)}`)
        // .get(`http://localhost:10000/search?q=${encodeURIComponent(query)}`)
        .then(res => {
          setResults(res.data)
          setLoading(false);
        })
        .catch(err => {
          console.log(err)
          setLoading(false);
        });
    }
  }, [query]);

  return (
    <div className='flex-parent'>
    <div className="search-results">
      <div className="top-link" style={{marginLeft:'20px'}}>
      <h2>Results for "{query}"</h2>
      <Link to='/'><h4><img src={handpointing} alt='' id='handpointing'/>back to shopping</h4></Link>

      <div className="hand-text">
      
      </div>
      </div>
      <div className="grid" style={{display:'flex'}}>
        {loading ? (
  <div className="grid" >
    {Array(6).fill(0).map((_, i) => (
      <div key={i} className="skeleton-card">
        <Skeleton height={150} />
        <Skeleton height={20} style={{ marginTop: 10 }} />
        <Skeleton height={20} width={80} />
      </div>
    ))}
    </div>
      ) : results.length > 0 ? (
        <div className="grid"  id='product-searchresults' style={{display:'flex', flexWrap:'wrap', marginLeft:'30px'}}>
          {results.map((p) => (
            <Link to={`/product/${p._id}`}>
                <div className='border-class' id="searchresultsborder">
                <div className='flex-child1' >
                  <div className='food-image'>
                    {/* <img src={img.image} alt="product-image" /> */}
                    <img src={`https://res.cloudinary.com/dvjnwualn/image/upload/${p.image}`} alt="" />
                    </div>
                    <h2 className='food-titlee'>{p.productname}</h2>
                    <h4 className='quantity'>Weight:{p.productweight}kg</h4>
                    <div className='price-tag-both'>
                  <div className='pricetag'>
                  <h5>£{p.productprice.toFixed(2)}</h5>
                  </div>
                  <div className='former-price'>
                  <h2 style={{fontWeight:'480'}}>£{p.productoldprice}</h2>
                  </div>
                  </div>
                  <div>
                  <button className='add-to-cart-btnz'>Add to Cart</button><br/>
                  </div>
                </div>
                </div>
            </Link>
          ))}
        </div>
      ) : (
        <div className="no-results-page">
        <img src={errordisplay} alt=""/>
        <p>No results found.</p>
        </div>
      )}

      </div>
    </div>
    </div>
  );
};

export default SearchResults;
