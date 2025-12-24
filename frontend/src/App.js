import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navigation from './components/navigation/Navigation';
import ScrollToTop from './components/AboutusPolicy/ScrollToTop';
import Footer from './components/footer/Footer';
import Home from './components/home/Home';
import Product from './components/productpage/Product';
import Aboutus from './components/AboutusPolicy/Aboutus';
import Returnpolicy from './components/AboutusPolicy/Returnpolicy';
import Contact from './components/AboutusPolicy/Contact';
import Support from './components/AboutusPolicy/Support';
import Deliverypolicy from './components/AboutusPolicy/Deliverypolicy';
import Imageupload from './components/Slider/Imageupload';
import UpdateProduct from './components/Slider/UpdateProduct';
import CartPage from './components/cartPage/CartPage';
import NediApparels from './components/AboutusPolicy/NediApparels';
import NediHouseholdItems from './components/AboutusPolicy/NediHouseholdItems';
import CategoryPage from './components/categories/CategoryPage';
import Vegetables from './components/Slider/Vegetables';
import SearchResults from './components/navigation/SearchFunction/SearchResults';
import VegetablesandGreens from './components/DropDownMenu/MenuResults/VegetablesandGreens';
import StaplesandGrains from './components/DropDownMenu/MenuResults/StaplesandGrains';
import TubersandRoots from './components/DropDownMenu/MenuResults/TubersandRoots';
import OilsandCondiments from './components/DropDownMenu/MenuResults/OilsandCondiments';
import MeatFishandSeafood from './components/DropDownMenu/MenuResults/MeatFishandSeafood';
import DairyandBeverages from './components/DropDownMenu/MenuResults/DairyandBeverages';
import SnacksandSweets from './components/DropDownMenu/MenuResults/SnacksandSweets';
import FrozenandCannedFood from './components/DropDownMenu/MenuResults/FrozenandCannedFood';
import SpicesandSeasonings from './components/DropDownMenu/MenuResults/SpicesandSeasonings';
import SuccessPage from './components/productpage/SuccessPage';
import CancelPage from './components/productpage/CancelPage';


import Signup from './components/Authentication/Signup';
import Login from './components/Authentication/Login';
import MainPage from './components/Authentication/MainPage';
import ForgotPassword from './components/Authentication/ForgotPassword';
import ResetPassword from './components/Authentication/ResetPassword';
import Dashboard from './components/Authentication/Dashboard';
import UpdateDetails from './components/Authentication/UpdateDetails';


function App() {
  return (
    <div className="App">
      <Router>
        <Navigation/>
        <ScrollToTop/> {/* Automatically scroll pages to the top */}
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/uploads' element={<Imageupload/>}/>
          <Route path='/getitems/:_id' element={<UpdateProduct/>}/>
          <Route path='/aboutus' element={<Aboutus/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/support' element={<Support/>}/>
          <Route path='/returnpolicy' element={<Returnpolicy/>}/>
          <Route path='/deliverypolicy' element={<Deliverypolicy/>}/>
          <Route path='/product/:_id' element={<Product/>}/>
          
          <Route path='/cart' element={<CartPage />}/>
          <Route path='/nediapparels' element={<NediApparels />}/>
          <Route path='nedihousehold' element={<NediHouseholdItems/>}/>
          <Route path='/category/:CategoryName' element={<CategoryPage/>}/>
          <Route path='/vegetables' element={<Vegetables/>}/>
          <Route path='/search' element={<SearchResults/>} />
          <Route path='/vegetables-and-greens' element={<VegetablesandGreens/>}/>
          <Route path='/staples-and-grains' element={<StaplesandGrains/>}/>
          <Route path='/tubers-and-root-crops' element={<TubersandRoots/>}/>
          <Route path='/oils-and-condiments' element={<OilsandCondiments/>}/>
          <Route path='/meat-fish-and-seafood' element={<MeatFishandSeafood/>}/>
          <Route path='/dairy-and-beverages' element={<DairyandBeverages/>}/>
          <Route path='/snacks-and-sweets' element={<SnacksandSweets/>}/>
          <Route path='/frozen-and-canned-food' element={<FrozenandCannedFood/>}/>
          <Route path='/spices-and-seasoning' element={<SpicesandSeasonings/>}/>
          <Route path='/success' element={<SuccessPage/>}/>
          <Route path='/cancel' element={<CancelPage/>}/>


          <Route path='/signup' element={<Signup/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/mainpage' element={<MainPage/>}/>
          <Route path='/forgotpassword' element={<ForgotPassword/>}/>
          <Route path='/reset-password/:token' element={<ResetPassword/>}/>
          <Route path='/dashboard' element={<Dashboard/>}/>
          <Route path='/update-details' element={<UpdateDetails/>}/>  

        </Routes>
        <Footer/>
      </Router>

    </div>
  );
}

export default App;
