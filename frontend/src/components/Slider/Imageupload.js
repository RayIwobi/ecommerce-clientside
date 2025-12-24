import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import './imageupload.css';

//message notification
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function Imageupload() {
    const [selectedoption, setSelectedoption] = useState('')
    const [selectweight, setSelectweight] = useState('')
    const [file, setFile] = useState('')
    
   // const [price, setPrice] = useState('')
    //const [error, setError] = useState('')
    
    const [image, setImage] = useState([])
    // const {_id} = useParams()

    const [items, setItems] = useState({
      productname:'',
      productweight:'',
      weight:'',
      productquantity:'',
      productprice:'',
      productoldprice:'',
      category:'',
      description:''
    })

    //Category dropdown code
    const handleSelectChange = (event) => {
      const value = event.target.value
      setSelectedoption(value)
      setItems(prev => ({
        ...prev,
        category: value
      }))
    }

    const handleweightchange = (event) => {
      const value = event.target.value
      setSelectweight(value)
      setItems(prev => ({
        ...prev,
        weight: value
      }))
    }


    const handleUpload = () => {
      // const val = e.target.value;
      // if(val === '' || Number(val >=0)){
      //   setPrice(val);
      //   setError('')
      // }else{
      //   setError('stop adding minus or blank entry')
      // }
        const formdata = new FormData()
        formdata.append('file', file);
        formdata.append('productname', items.productname);
        formdata.append('productweight', items.productweight);
        formdata.append('weight', items.weight);
        formdata.append('productquantity', items.productquantity);
        formdata.append('productprice', items.productprice);
        formdata.append('productoldprice', items.productoldprice);
        formdata.append('category', items.category);
        formdata.append('description', items.description);


         axios.post('https://nediecom-n82p.onrender.com/sendinfo', formdata)
       //axios.post('http://localhost:10000/sendinfo', formdata)
        .then(res => {
          toast.success('product uploaded successfully')
          console.log(res);
        })
        .catch(err => {
          toast.error('something went wrong')
          console.log(err);
        })
    }

    useEffect(() => {
           axios.get('https://nediecom-n82p.onrender.com/getitems')
   //  axios.get('http://localhost:10000/getitems')
        .then(res => setImage(res.data))
        .catch(err => console.log(err))
    }, [])

    const handleChange = (e) => {
      const {name, value} = e.target;
      setItems({...items, [name]:value})
    }


    const handleDelete = (delID) => {
      const delitem = image.filter((img) => {
        return img._id !== delID
      })
      setImage(delitem)

    axios.delete(`https://nediecom-n82p.onrender.com/deleteitems/${delID}`)
    //    axios.delete(`http://localhost:10000/deleteitems/${delID}` )
      .then(res =>{
        toast.success('product deleted successfully');
        console.log(res);
      })
      .catch(err => {
        toast.error('something went wrong')
        console.log(err);
      })
    }

    const handleRefresh = () => {
      window.location.reload()
    }

  return (
    <div className='main-containeru' id='uploads-container'>
      <ToastContainer position="top-right" autoClose={3000} />

      <div className='uploadarea-product-link'>
      <Link to='/uploads' style={{color:'blue', textDecoration:'underline'}}><h2>Fresh Harvest Section {'(Mixed products section)'}</h2></Link>
      {/* <Link to='/vegetables' style={{color:'black'}}><h2>Vegetables Section</h2></Link>
      <Link to='/spices-seasoning' style={{color:'black'}}><h2>Spices and Seasoning Section</h2></Link> */}
      </div>
      <input 
        type='file'
        onChange={e => setFile(e.target.files[0])}
      /><br/>
      <label>Product name:</label>
      <input 
        type='text'
        name='productname'
        value={items.productname}
        onChange={handleChange}
        placeholder='type product name'
      /><br/>
      <label>Product weight:</label>
      <div style={{display:'flex'}}>
      <input 
        type='float'
        name='productweight'
        value={items.productweight}
        onChange={handleChange}
        placeholder='type product weight'
      />
      <select value={selectweight} onChange={handleweightchange}>
        <option value=''>Select unit</option>
        <option value='kg'>kg</option>
        <option value='g'>g</option>
        <option value='litre'>litre</option>
        <option value='kilo'>kilo</option>
        <option value='pound'>pound(s)</option>
        <option value='unit'>unit</option>
      </select> 
      </div>
      <br/>
      <label>Product quantity:</label>
      <input 
        type='Number'
        name='productquantity'
        value={items.productquantity}
        onChange={handleChange}
        placeholder='type product quantity'
      /><br/>
      <label>Product price:</label>
      <input 
        type='Number'
        name='productprice'
        value={items.productprice}
        onChange={handleChange}
        placeholder='type product price - NO MINUS ALLOWED'
      /><h4 style={{color:'red'}}>Try not to add minus in the price or it will be an issue, crosscheck your prices</h4>
      <br/>
      <label>Product Old-price:</label>
      <input 
        type='Number'
        name='productoldprice'
        value={items.productoldprice}
        onChange={handleChange}
        placeholder='type old price'
      /><br/>
      <label>Product category:</label>
      <select value={selectedoption} onChange={handleSelectChange}>
        <option value='' required>Select product category</option>
        <option value='staples-and-grains'>Staples and Grains</option>
        <option value='tubers-and-root-crops'>Tubers and Root Crops</option>
        <option value='spices-and-seasonings'>Spices and Seasonings</option>
        <option value='vegetables-and-greens'>Vegetables and Greens</option>
        <option value='oils-and-condiments'>Oils and Condiments</option>
        <option value='meat,-fish-and-sea-food'>Meat, Fish and Sea Food</option>
        <option value='dairy-and-beverages'>Dairy and Beverages</option>
        <option value='snacks-and-sweets'>Snacks and Sweets</option>
        <option value='frozen-and-canned-foods'>Frozen and Canned Foods</option>
      </select>
      
     <br/>
     <br/>
      <label>Product description:</label>
      <textarea 
        type='text'
        name='description'
        value={items.description}
        onChange={handleChange}
        placeholder='type product description'
      /><br/>
      <div className='upload-section'>
      <button onClick={handleUpload}>upload</button><br/><br/>
      <button onClick={handleRefresh}>Next upload</button><br/><br/>
      <h3 style={{color:'red'}}>ALL FIELDS ARE REQUIRED</h3>
      </div>
      

    <div className='display-section' id='uploadsproduct-display'>
    <table className='table-section'>
  <thead>
    <tr>
      <th>Product Image</th>
      
      <th>Product Name</th>
      <th>Product Weight</th>
      <th>Product Quantity</th>
      <th>Product Price</th>
      <th>Product Old Price</th>
      <th>Category</th>
      <th>Description</th>
      <th>Update Product</th>
      <th>Delete Product</th>
    </tr>
  </thead>


  <tbody className='tbody'>
    {image.map((img) => (
      
      <tr key={img._id}>
        <td>
          <img
            src={`https://res.cloudinary.com/dvjnwualn/image/upload/${img.image}`}
            alt="product"
            style={{ width: '80px', height: '80px', objectFit: 'cover' }}
          />
        </td>
        <td className='prodnme'>{img.productname}</td>
        <td>{img.productweight}{img.weight}</td>
        <td>{img.productquantity}</td>
        <td>£{img.productprice.toFixed(2)}</td>
        <td>£{img.productoldprice}</td>
        <td>{img.category}</td>
        <td className='description'>{img.description}</td>
        <td>

          <Link to={`/getitems/${img._id}`}>
          <button style={{ color: 'black' }}>
            Update
          </button>
          </Link>
        </td>
        <td>
          <button onClick={() => handleDelete(img._id)}>
            Delete
          </button>
        </td>
      </tr>
     
    ))}
    
  </tbody>
</table>


  
      </div>
    </div>
  )
}

export default Imageupload
