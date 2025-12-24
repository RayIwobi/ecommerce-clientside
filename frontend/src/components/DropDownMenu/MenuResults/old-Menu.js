import React, {useState} from 'react'
import './menu.css' 
import {Link} from 'react-router-dom'
import egusi from '../home/assets/foodImg/egusi.jpg' 
import ofadarice from '../home/assets/foodImg/ofadarice.jpg'
import garri from '../home/assets/foodImg/garri.jpg'
import yamflour from '../home/assets/foodImg/yamflour.jpg'
import cassavaflour from '../home/assets/foodImg/cassavaflour.jpg'
import plantainflour from '../home/assets/foodImg/plantainfour.jpg'
import semolina from '../home/assets/foodImg/semolina.jpg'
import wheatflour from '../home/assets/foodImg/wheatflour.jpg'
import maizeflour from '../home/assets/foodImg/maizeflour.jpg'
import beans from '../home/assets/foodImg/beans.jpg'
import freshyam from '../home/assets/foodImg/freshyam.jpg'
import potatoes from '../home/assets/foodImg/potatoes.jpg'
import cocoyam from '../home/assets/foodImg/cocoyam.jpg'
import freshcassava from '../home/assets/foodImg/freshcassava.jpg'
import suyaspice from '../home/assets/foodImg/suyaspice.jpg'
import jollofriceseasoning from '../home/assets/foodImg/jollofriceseasoning.jpg'
import bangaspice from '../home/assets/foodImg/bangaspice.jpg'
import ogbono from '../home/assets/foodImg/ogbono.JPG'
import iru from '../home/assets/foodImg/iru.jpg'
import crayfish from '../home/assets/foodImg/crayfish.jpg'
import stockfish from '../home/assets/foodImg/stockfish.jpg'
import maggicubes from '../home/assets/foodImg/maggicube.jpg'
import currypowder from '../home/assets/foodImg/currypowder.jpg'
import uguleaves from '../home/assets/foodImg/uguleaves.jpg'
import bitterleave from '../home/assets/foodImg/bitterleave.jpg'
import ewedu from '../home/assets/foodImg/ewedu2.jpg'
import okra from '../home/assets/foodImg/okra.jpg'
import scentleaf from '../home/assets/foodImg/scentleaf.jpg'
import Waterleaf from '../home/assets/foodImg/waterleaf.jpg'
import Shoko from '../home/assets/foodImg/shoko.jpg'
import scotchbonnetpepper from '../home/assets/foodImg/scotchBonnetPepper.jpg'
import bellpepper from '../home/assets/foodImg/bellpepper.png'
import tomatoes from '../home/assets/foodImg/tomatoes.jpg'
import palmoil from '../home/assets/foodImg/palmoil.jpg'
import groundnutoil from '../home/assets/foodImg/groundnutoil.jpg'
import coconutoil from '../home/assets/foodImg/coconutoil.jpg'
import sheabutter from '../home/assets/foodImg/sheabutter.jpg'
import frozengoatmeat from '../home/assets/foodImg/frozengoatmeat.jpg'
import frozenchicken from '../home/assets/foodImg/frozenchicken.png'
import kpomo from '../home/assets/foodImg/kpomo.jpg'
import shaki from '../home/assets/foodImg/shaki.jpg'
import smokedfish from '../home/assets/foodImg/smokedfish.jpg'
import driedfish from '../home/assets/foodImg/driedfish.jpg'
import snail from '../home/assets/foodImg/snail.jpg'
import peakmilk from '../home/assets/foodImg/peakmilk.jpg'
import threecrowns from '../home/assets/foodImg/threecrowns.jpg'
import milo from '../home/assets/foodImg/milo.jpg'
import ovaltine from '../home/assets/foodImg/ovaltine.jpg'
import chinchin from '../home/assets/foodImg/chinchin.jpg'
import plantainchips from '../home/assets/foodImg/plantainchips.jpg'
import kilishi from '../home/assets/foodImg/kilishi.jpg'
import kulikuli from '../home/assets/foodImg/kulikuli.jpg'
import akara from '../home/assets/foodImg/akara.jpg'
import frozenuguleaves from '../home/assets/foodImg/frozenuguleaves.jpg'
import frozenbitterleaf from '../home/assets/foodImg/frozenbitterleaf.jpeg'
import frozenspinach from '../home/assets/foodImg/frozenspinach.jpg'
import cannedpalmnut from '../home/assets/foodImg/cannedpalmnut.jpg'
import cannedsardinemarkarel from '../home/assets/foodImg/cannedsardinemarkerel.jpg'
import dropdown from '../navigation/assets/dropdown.png'

//this function is for changing the text when sending it to the database i.e spices seasoning to spices-seasoning
// function toKebabCase(str) {
//     return str.toLowerCase().replace(/\s+/g, '-');
// }

function Menu() {

  

    //CODE FOR MOBILE CATEGORIES
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(prev => !prev);
    };

  return (
    <div>
    <div className='main-container'> 
        <div className='menu.wrapper'>
        <ul className='desktop-categories'>
        <li><Link to='/staples-and-grains'>Staples & Grains</Link> 
            <ul>
            {/* <li><Link to=''>All Staples & Grains</Link></li> */}
            <Link to='/product/6813b55c36cdfdba6328b152'><li className='ami'><img src={ofadarice} alt='ofadarice'/>Rice (Ofada, Perboiled, Basmati)</li></Link>
            <Link to='/product/682636818095158e6b612e99'><li className='ami'><img src={garri} alt='garri'/>Garri (Yellow and White)</li></Link>
            <Link to='/product/682639cd8095158e6b612eb2'><li className='ami'><img src={yamflour} alt='yamflour'/>Yam Flour (Amala)</li></Link>
            <Link to='/product/68263b208095158e6b612eb8'><li className='ami'><img src={cassavaflour} alt='cassava'/>Cassava Flour (Fufu, Lafun)</li></Link>
            <Link to='/product/68263ba68095158e6b612ebb'><li className='ami'><img src={plantainflour} alt='cassava'/>Plantain Flour</li></Link>
            <Link to='/product/68263c318095158e6b612ebe'><li className='ami'><img src={semolina} alt='cassava'/>Semolina</li></Link>
            <Link to='/product/6813b9aa36cdfdba6328b18b'><li className='ami'><img src={wheatflour} alt='cassava'/>Wheat Flour</li></Link>
            <Link to='/product/68263d168095158e6b612ec3'><li className='ami'><img src={maizeflour} alt='cassava'/>Maize (Corn) Flour</li></Link>
            <Link to='/product/6813bee62e172973641fac05'><li className='ami'><img src={beans} alt='cassava'/>Beans (Honey Beans, Black-eyed Peas, Brown Beans)</li></Link>
            </ul>
        </li>
        <div className='link-border'> | </div>
        <li><Link to='/tubers-and-root-crops'>Tubers & Root Crops</Link>
            <ul>
            {/* <li><Link to=''>All Tubers & Root Crops</Link></li> */}
            <Link to='/product/6813b60f36cdfdba6328b159'><li className='ami'><img src={freshyam} alt='freshyam'/>Fresh Yam (Puna)</li></Link>
            <Link to='/product/6813b17c36cdfdba6328b132'><li className='ami'><img src={potatoes} alt='potatoes'/>Fresh Sweet Potatoes</li></Link>
            <Link to='/product/682639cd8095158e6b612eb2'><li className='ami'><img src={yamflour} alt='yamflour'/>Yam Flour (Amala)</li></Link>
            <Link to='/product/6813b4ae36cdfdba6328b14b'><li className='ami'><img src={cocoyam} alt='cocoyam'/>Cocoyam (Oha and Bitter Leaf Soup)</li></Link>
            <Link to='/product/68269b97e4751d707ca9cb5e'><li className='ami'><img src={freshcassava} alt='cassava'/>Fresh Cassava</li></Link>
            </ul>
        </li> 

        <div className='link-border'> | </div>
        <li><Link to='/spices-and-seasoning'>Spices & Seasonings</Link>
            <ul>
            {/* <li><Link to=''>All Spices & Seasonings</Link></li> */}
            <Link to='/product/68269e0ae4751d707ca9cb62'><li className='ami'><img src={suyaspice} alt='ofadarice'/>Suya Spice</li></Link>
            <Link to='/product/68269eb5e4751d707ca9cb66'><li className='ami'><img src={jollofriceseasoning} alt='ofadarice'/>Jollof Rice Seasoning</li></Link>
            <Link to='/product/6813be92294fea3e51d62d41'><li className='ami'><img src={bangaspice} alt='ofadarice'/>Banga Spice Mix</li></Link>
            <Link to='/product/6813b20336cdfdba6328b136'><li className='ami'><img src={egusi} alt='ofadarice'/>Egusi (Ground Melon Seeds)</li></Link>
            <Link to='/product/6813b84c36cdfdba6328b178'><li className='ami'><img src={ogbono} alt='ofadarice'/>Ogbono (Wild Mango Seeds)</li></Link>
            <Link to='/product/6813b45f36cdfdba6328b148'><li className='ami'><img src={iru} alt='ofadarice'/>Iru (Locust Beans)</li></Link>
            <Link to='/product/6826a0a1e4751d707ca9cb6f'><li className='ami'><img src={crayfish} alt='ofadarice'/>Crayfish (Dried, Ground, or Whole)</li></Link>
            <Link to='/product/6826a142e4751d707ca9cb73'><li className='ami'><img src={stockfish} alt='ofadarice'/>Stockfish (Panla, Okporoko)</li></Link>
            <Link to='/product/6826a1b9e4751d707ca9cb77'><li className='ami'><img src={maggicubes} alt='ofadarice'/>Bouillon Cubes (Maggi, Knorr)</li></Link>
            <Link to='/product/681f4ac1239829ec11946039'><li className='ami'><img src={currypowder} alt='ofadarice'/>Curry Powder & Thyme</li></Link>
            </ul>
        </li>

        <div className='link-border'> | </div>
        <li><Link to='/vegetables-and-greens'>Vegetables & Greens</Link>
            <ul>
            {/* <li><Link to=''>All Vegetables & Greens</Link></li> */}
            <Link to='/product/6826a270e4751d707ca9cb7d'><li className='ami'><img src={uguleaves} alt='ofadarice'/>Ugu Leaves (Fluted Pumpkin)</li></Link>
            <Link to='/product/68262fe78095158e6b612e6c'><li className='ami'><img src={bitterleave} alt='ofadarice'/>Bitter Leaf</li></Link>
            <Link to='/product/6826317b8095158e6b612e7a'><li className='ami'><img src={ewedu} alt='ofadarice'/>Ewedu (Jute Leaves)</li></Link>
            <Link to='/product/6813b89336cdfdba6328b17b'><li className='ami'><img src={okra} alt='ofadarice'/>Okra</li></Link>
            <Link to='/product/682633058095158e6b612e82'><li className='ami'><img src={scentleaf} alt='ofadarice'/>Scent Leaf (Efirin)</li></Link>
            <Link to='/product/6813b71236cdfdba6328b165'><li className='ami'><img src={Waterleaf} alt='ofadarice'/>Waterleaf</li></Link>
            <Link to='/product/682633c88095158e6b612e88'><li className='ami'><img src={Shoko} alt='ofadarice'/>Shoko/Yoruba Spinach</li></Link>
            <Link to='/product/6813b0d11b25aec477c30349'><li className='ami'><img src={scotchbonnetpepper} alt='ofadarice'/>Scotch Bonnet Peppers (Ata Rodo)</li></Link>
            <Link to='/product/6813b2d836cdfdba6328b13c'><li className='ami'><img src={bellpepper} alt='ofadarice'/>Bell Peppers</li></Link>
            <Link to='/product/682634378095158e6b612e8c'><li className='ami'><img src={tomatoes} alt='ofadarice'/>Tomatoes</li></Link>
            </ul>
        </li>

        <div className='link-border'> | </div>
        <li><Link to='/oils-and-condiments'>Oils & Condiments</Link>
            <ul>
            {/* <li><Link to=''>All Oils & Condiments</Link></li> */}
            <Link to='/product/6813bc6f66d592cef0bf8a02'><li className='ami'><img src={palmoil} alt='ofadarice'/>Palm Oil (Zomi, Red Oil)</li></Link>
            <Link to='/product/6813b7ed36cdfdba6328b170'><li className='ami'><img src={groundnutoil} alt='ofadarice'/>Groundnut Oil</li></Link>
            <Link to='/product/6813b3d136cdfdba6328b142'><li className='ami'><img src={coconutoil} alt='ofadarice'/>Coconut Oil</li></Link>
            <Link to='/product/6826a5f0e4751d707ca9cb84'><li className='ami'><img src={sheabutter} alt='sheabutter'/>Shea Butter (cooking & skincare)</li></Link>
            </ul>
        </li>

        <div className='link-border'> | </div>
        <li><Link to='/meat-fish-and-seafood'>Meat, Fish & Sea Food</Link>
            <ul>
            {/* <li><Link to=''>All Meat, Fish & Sea Food</Link></li> */}
            <Link to='/product/6826a848e4751d707ca9cb8c'><li className='ami'><img src={frozengoatmeat} alt='ofadarice'/>Frozen Goat Meat</li></Link>
            <Link to='/product/6813b41036cdfdba6328b145'><li className='ami'><img src={frozenchicken} alt='ofadarice'/>Frozen Chicken</li></Link>
            <Link to='/product/6813adb4f78ef24692e36038'><li className='ami'><img src={kpomo} alt='ofadarice'/>Kpomo (Cow Skin)</li></Link>
            <Link to='/product/6813b94736cdfdba6328b187'><li className='ami'><img src={shaki} alt='ofadarice'/>Shaki (Tripe)</li></Link>
            <Link to='/product/6826a97be4751d707ca9cb94'><li className='ami'><img src={smokedfish} alt='ofadarice'/>Smoked Fish (Panla, Titus, Catfish)</li></Link>
            <Link to='/product/6819faa724cf7d3f22e16766'><li className='ami'><img src={driedfish} alt='ofadarice'/>Dried Fish</li></Link>
            <Link to='product/6826a142e4751d707ca9cb73'><li className='ami'><img src={stockfish} alt='ofadarice'/>Stockfish (Codfish, Okporoko)</li></Link>
            <Link to='/product/6813b8f036cdfdba6328b17f'><li className='ami'><img src={snail} alt='ofadarice'/>Snails</li></Link>
            </ul>
        </li>

        <div className='link-border'> | </div>
        <li><Link to='/dairy-and-beverages'>Dairy & Beverages</Link>
            <ul>
            {/* <li><Link to=''>All Dairy & Beverages</Link></li> */}
            <Link to='/product/6826abafe4751d707ca9cb9c'><li className='ami'><img src={peakmilk} alt='ofadarice'/>Peak Milk (Evaporated Milk)</li></Link>
            <Link to='/product/6826abf1e4751d707ca9cba0'><li className='ami'><img src={threecrowns} alt='ofadarice'/>Three Crowns Milk</li></Link>
            <Link to='/product/6813bc6f66d592cef0bf8a02'><li className='ami'><img src={milo} alt='ofadarice'/>Milo (Chocolate Drink)</li></Link>
            <Link to='/product/6826ac85e4751d707ca9cba5'><li className='ami'><img src={ovaltine} alt='ofadarice'/>Ovaltine</li></Link>
            </ul>
        </li>

        <div className='link-border'> | </div>
        <li><Link to='/snacks-and-sweets'>Snacks & Sweets</Link>
            <ul>
            {/* <li><Link to=''>All Snacks & Sweets</Link></li> */}
            <Link to='/product/6826adfbe4751d707ca9cba9'><li className='ami'><img src={chinchin} alt='ofadarice'/>Chin Chin</li></Link>
            <Link to='/product/6826ae65e4751d707ca9cbac'><li className='ami'><img src={plantainchips} alt='ofadarice'/>Plantain Chips</li></Link>
            <Link to='/product/6813b6c536cdfdba6328b162'><li className='ami'><img src={kilishi} alt='ofadarice'/>Kilishi (Nigerian Beef Jerky)</li></Link>
            <Link to='/product/6813b50436cdfdba6328b14f'><li className='ami'><img src={kulikuli} alt='ofadarice'/>Kuli-Kuli (Groundnut Snack)</li></Link>
            <Link to='/product/6821bf8bea70981ae4e538d5'><li className='ami'><img src={akara} alt='ofadarice'/>Bofrot/Akara (Bean Cake)</li></Link>
            </ul>
        </li>

        <div className='link-border'> | </div>
        <li><Link to='/frozen-and-canned-food'>Frozen & Canned Foods</Link>
            <ul>
            {/* <li><Link to=''>All Frozen & Canned Foods</Link></li> */}
            <Link to='/product/6826b058e4751d707ca9cbb3'><li className='ami'><img src={frozenuguleaves} alt='ofadarice'/>Frozen Ugu Leaves</li></Link>
            <Link to='/product/6813b64c36cdfdba6328b15c'><li className='ami'><img src={frozenbitterleaf} alt='ofadarice'/>Frozen Bitter Leaf</li></Link>
            <Link to='/product/6813b36236cdfdba6328b13e'><li className='ami'><img src={frozenspinach} alt='ofadarice'/>Frozen Spinach</li></Link>
            <Link to='/product/6819ff7124cf7d3f22e16768'><li className='ami'><img src={cannedpalmnut} alt='ofadarice'/>Canned Palm Nut Extract</li></Link>
            <Link to='/product/6821d1c5d9e0dc6df9d2760f'><li className='ami'><img src={cannedsardinemarkarel} alt='ofadarice'/>Canned Sardines & Mackerel</li></Link>
            </ul>
        </li>
        </ul>

        
        </div>
    </div>
        <div className="dropdown">  
            <button 
                className="dropdown-toggle" 
                
                onClick={() => {
                    console.log("toggle clicked, open:", !isOpen) 
                    toggleMenu()} }
                aria-expanded={isOpen}
            >
                ☰ Categories<img src={dropdown} alt='' style={{width:'15px', height:'10px', marginLeft:'3px'}} />
            </button>

                <div className={`dropdown-menu ${isOpen ? 'open' : ''}`} >                
                <Link to='/staples-and-grains' onClick={() => setIsOpen(false)}>Staples & Grains</Link>
                <hr/>
                <Link to='/tubers-and-root-crops' onClick={() => setIsOpen(false)}>Tubers & Root Crop</Link>
                <hr/>
                <Link to='/spices-and-seasoning' onClick={() => setIsOpen(false)}>Spices & Seasonings</Link>
                <hr/>
                <Link to='/vegetables-and-greens' onClick={() => setIsOpen(false)}>Vegetables & Greens</Link>
                <hr/>
                <Link to='/oils-and-condiments' onClick={() => setIsOpen(false)}>Oils & Condiments</Link>
                <hr/>
                <Link to='/meat-fish-and-seafood' onClick={() => setIsOpen(false)}>Meat, Fish & Sea Food</Link>
                <hr/>
                <Link to='/dairy-and-beverages' onClick={() => setIsOpen(false)}>Dairy & Beverages</Link>
                <hr/>
                <Link to='/snacks-and-sweets' onClick={() => setIsOpen(false)}>Snacks & Sweets</Link>
                <hr/>
                <Link to='/frozen-and-canned-food' onClick={() => setIsOpen(false)}>Frozen & Canned Foods</Link>
                </div>
            
        </div>
    </div>
  )
}

export default Menu




