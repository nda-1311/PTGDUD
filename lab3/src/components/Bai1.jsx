import './Bai1.css';
import filterImage from "../assets/Filter.jpg"
import logo from "../assets/Logo.jpg"
import searchBar from "../assets/searchBar.jpg"
import Food1 from "../assets/Food1.jpg"
import iconButton from "../assets/iconButton.jpg"



export default function Bai1() {
    var array = [<li>What to cook</li>, <li>Recipes</li>, <li>Ingredients</li>, <li>Occasions</li>, <li>About Us</li>]
    return (
        <>
            <div class="container">
                <div class="header">
                    <div class="flex-container">
                        <div><img src={logo} alt="" /></div>
                        <div>
                        <div><img src={searchBar} alt="" /></div>
                            
                        </div>
                        <div className='menu'>
                            {array}
                        </div>
                        <div className='recipe'>Your Recipe Box</div>
                        <div className='avatar'>avatar</div>
                    </div>
                </div>
                <div class="section">
                    <div class="left">
                        <img src={filterImage} alt="" />
                    </div>
                    <div class="right">
                        <div className="item">
                            <div className='up'>
                            <img src={Food1} alt="" />

                            </div>
                            <div className="down">
                            <div className="dong">
                            <h3>Ten mon an</h3>
                            <button>Icon</button>
                            </div>
                            <span>14 minutes</span>
                            </div>
                        </div>
                    </div>

                </div>
                <div class="footer">
                    <div class="row"></div>
                    <div class="row"></div>

                </div>

            </div>
        </>
    )
}