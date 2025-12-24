import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {Link, useParams, useNavigate} from 'react-router-dom'
import './imageupload.css'

//message notification
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function UpdateProduct() {
      const [selectedoption, setSelectedoption] = useState('') //for category selection
      const [selectweight, setSelectweight] = useState('')

    const [file, setFile] = useState('')
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

    const {_id} = useParams()
    const navigate = useNavigate()
   

    useEffect(() => {
    axios.get('https://nediecom-n82p.onrender.com/product/'+_id , { withCredentials: true })
     //   axios.get('http://localhost:10000/product/'+_id , { withCredentials: true })
      .then((res) => setItems(res.data))
      .catch((err) => console.log(err))
    },[_id])  


    const handleChange = (e) => {
        const {name, value} = e.target;
        setItems({...items, [name]: value}) 
    }

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


    const Itemsupdate = () => {
        const formdata = new FormData()
        formdata.append('file', file)
        formdata.append('productname', items.productname)
        formdata.append('productweight', items.productweight)
        formdata.append('weight', items.weight);
        formdata.append('productquantity', items.productquantity)
        formdata.append('productprice', items.productprice)
        formdata.append('productoldprice', items.productoldprice)
        formdata.append('category', items.category)
        formdata.append('description', items.description)

     axios.put(`https://nediecom-n82p.onrender.com/updateitems/${_id}`, formdata)
        //console.log(formdata)
       //    axios.put(`http://localhost:10000/updateitems/${_id}`, formdata)
        .then(res => {
          toast.success('Item updated successfully');
          console.log(res)
        })
        .catch(error => {
          toast.error('Something went wrong');
          console.log(error)
        })
        navigate('/uploads')
    }

    
  return (
     <div className='update-container'>
          <ToastContainer position="top-right" autoClose={3000} />
      
      <h3>Make your changes here</h3><br/>
          <input 
            type='file'
            onChange={e => setFile(e.target.files[0])}
          />
          <label>Product</label>
          <input 
            type='text'
            name='productname'
            value={items.productname}
            onChange={handleChange}
            placeholder='type product name'
          />
            <label>weight</label>
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
          <label>quantity</label>
          <input 
            type='number'
            name='productquantity'
            value={items.productquantity}
            onChange={handleChange}
            placeholder='type product quantity'
          />
          <label>Price</label>
          <input 
            type='number'
            name='productprice'
            value={items.productprice}
            onChange={handleChange}
            placeholder='type product price'
          />
          <label>Old price</label>
          <input 
            type='number'
            name='productoldprice'
            value={items.productoldprice}
            onChange={handleChange}
            placeholder='type old price'
          />
      <select value={selectedoption} onChange={handleSelectChange} style={{width:'300px',height:'30px'}}>
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
      <h4 style={{color:'red'}}>Reselect the category if it isn't showing</h4>
      
     <br/>
          <textarea 
            type='text'
            name='description'
            value={items.description}
            onChange={handleChange}
            placeholder='type product description'
          />
          <div className='button-controls'>
          <button onClick={Itemsupdate}>Upload</button>
          <Link to='/uploads' className='canni'><button>Go back</button></Link>
          </div>
        </div>
  )
}

export default UpdateProduct
