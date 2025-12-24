import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import './imageupload.css';

//message notification
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function Vegetables() {
    const [selectedoption, setSelectedoption] = useState('')
    const [file, setFile] = useState('')

    
    const [image, setImage] = useState([])
    // const {_id} = useParams()

    const [items, setItems] = useState({
      productname:'',
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


    const handleUpload = () => {
        const formdata = new FormData()
        formdata.append('file', file);
        formdata.append('productname', items.productname);
        formdata.append('productquantity', items.productquantity);
        formdata.append('productprice', items.productprice);
        formdata.append('productoldprice', items.productoldprice);
        formdata.append('category', items.category);
        formdata.append('description', items.description);

         axios.post('https://nediecom-n82p.onrender.com/sendinfo', formdata , { withCredentials: true })
      // axios.post('http://localhost:10000/sendinfo', formdata , { withCredentials: true })
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
        axios.get('https://nediecom-n82p.onrender.com/getitems' , { withCredentials: true })
       // axios.get('http://localhost/getitems' , { withCredentials: true })
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

   axios.delete(`https://nediecom-n82p.onrender.com/deleteitems/${delID}` , { withCredentials: true })
      //   axios.delete(`http://localhost:10000/deleteitems/${delID}` , { withCredentials: true })
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
    <div className='main-containeru'>
      <ToastContainer position="top-right" autoClose={3000} />

      <div className='uploadarea-product-link'>
      <Link to='/uploads' style={{color:'black'}}><h2>Fresh Harvest Section {'(Mixed products section)'}</h2></Link>
      <Link to='/vegetables' style={{color:'blue', textDecoration:'underline'}}><h2>Vegetables Section</h2></Link>
      <Link to='/spices-seasoning' style={{color:'black'}}><h2>Spices and Seasoning Section</h2></Link>
      </div>
      <input 
        type='file'
        onChange={e => setFile(e.target.files[0])}
      /><br/>
      <input 
        type='text'
        name='productname'
        value={items.productname}
        onChange={handleChange}
        placeholder='type product name'
      /><br/>
      <input 
        type='text'
        name='productquantity'
        value={items.productquantity}
        onChange={handleChange}
        placeholder='type product quantity'
      /><br/>
      <input 
        type='text'
        name='productprice'
        value={items.productprice}
        onChange={handleChange}
        placeholder='type product price'
      /><br/>
      <input 
        type='text'
        name='productoldprice'
        value={items.productoldprice}
        onChange={handleChange}
        placeholder='type old price'
      /><br/>

      <select value={selectedoption} onChange={handleSelectChange}>
        <option value=''>Select product category</option>
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
      </div>

    <div className='display-section'>
    <table className='table-section'>
  <thead>
    <tr>
      <th>Product Image</th>
      
      <th>Product Name</th>
      <th>Product Quantity</th>
      <th>Product Price</th>
      <th>Product Old Price</th>
      <th>Category</th>
      <th>Description</th>
      <th>Update Product</th>
      <th>Delete Product</th>
    </tr>
  </thead>


  <tbody>
    {image.map((img) => (
      
      <tr key={img._id}>
        <td>
          <img
            src={`https://res.cloudinary.com/dvjnwualn/image/upload/${img.image}`}
            alt="product"
            style={{ width: '80px', height: '80px', objectFit: 'cover' }}
          />
        </td>
        <td>{img.productname}</td>
        <td>{img.productquantity}</td>
        <td>£{img.productprice}</td>
        <td>£{img.productoldprice}</td>
        <td>{img.category}</td>
        <td className='description'>{img.description}</td>
        <td>

          <Link to={`/updateitems/${img._id}`}>
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

export default Vegetables
