import './style.css';
import logo from "../assets/data/Lab_01/Group 9.png";
import avatar from "../assets/data/Lab_02/avatar.png";
import list1 from "../assets/data/Lab_03/List 1.png";
import Arrow from "../assets/data/Lab_03/Chevron up large 1.png";
import checkbox from "../assets/data/Lab_03/Checkbox 6.png";
import checkedbox from "../assets/data/Lab_03/Checkbox 8.png";
import Slider from "../assets/data/Lab_03/Slider 1.png";







export default function Index() {
    var array = [
        <div className='flex text-gray-400 font-bold'>
            <li className='pr-4'> <a href="#">What to cook</a> </li>
            <li className='pr-4'> <a href="#">Recipes</a> </li>
            <li className='pr-4'> <a href="#">Ingredients</a> </li>
            <li className='pr-4'> <a href="#">Occasions</a> </li>
            <li className='pr-4'> <a href="#">About Us</a></li>
        </div>
    ];

    return (
        <>
            <div className="flex-container flex flex-col">
                <div className="header flex justify-between items-center w-full p-4 border">
                    <div>
                        <img src={logo} alt="Logo" />
                    </div>

                    <div>
                        <input type="search" placeholder='    Search' className="bg-gray-200 rounded-sm w-70 h-8" />
                    </div>

                    <div className="flex items-center">
                        <div className="menu flex text-gray-400 font-bold list-none">
                            {array}
                        </div>

                        <div className="flex items-center space-x-8">
                            <div className='bg-pink-200 p-2'>Your Recipe Box</div>
                            <div><img src={avatar} alt="" /></div>
                        </div>
                    </div>
                </div>

                <div className="section border h-800 mt-0.4 w-full flex">

                    <div className="left w-1/3 border h-700 p-5 ">
                       
                    <div className="box_3dong ">
                        <div className='dong_1 flex'>
                            <div className="icon"> <img src={list1} alt="" /></div>
                            <div className="filter font-bold">FILTERS</div>
                        </div>

                        <br />
                        <br />

                        <div className="dong_2 flex" >
                            <div className="type ">Type</div>
                            <div className="iconArrow ml-70"><img src={Arrow} alt="" /></div>
                        </div>

                        <div className="dong_3 flex ">
                        <div className="box1 mt-5 mr-20">
                            <div className='flex mt-5'>
                                <img src={checkbox} alt="" />
                                <p>Pan-fried</p>
                            </div>
                            <div className='flex mt-5'>
                                <img src={checkedbox} alt="" />
                                <p>Pan-fried</p>
                            </div>
                            <div className='flex mt-5'>
                                <img src={checkbox} alt="" />
                                <p>Pan-fried</p>
                            </div>
                            <div className='flex mt-5'>
                                <img src={checkbox} alt="" />
                                <p>Pan-fried</p>
                            </div>

                        </div>

                        <div className="box2 mt-5 ">
                            <div className='flex mt-5'>
                                <img src={checkbox} alt="" />
                                <p>Pan-fried</p>
                            </div>
                            <div className='flex mt-5'>
                                <img src={checkedbox} alt="" />
                                <p>Pan-fried</p>
                            </div>
                            <div className='flex mt-5'>
                                <img src={checkbox} alt="" />
                                <p>Pan-fried</p>
                            </div>
                            <div className='flex mt-5'>
                                <img src={checkbox} alt="" />
                                <p>Pan-fried</p>
                            </div>

                        </div>
                        </div>

                        </div>

                        <br />
                       <hr />

                       <div className="dong_4 flex mt-5" >
                            <div className="type ">Time</div>
                            <div className="iconArrow ml-70"><img src={Arrow} alt="" /></div>
                        </div>


                    </div>

                    <div className="right w-2/3 border h-700"></div>



                </div>
                <div className="footer">
                    <div className="row"></div>
                    <div className="row"></div>
                </div>
            </div>
        </>
    );
}
