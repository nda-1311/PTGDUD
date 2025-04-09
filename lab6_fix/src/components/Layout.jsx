import '../components/Layout.css'
import logo from '../img/logo.png'
import bell from '../img/Bell 1.png'
import question from '../img/Question 1.png'
import avatar from '../img/Avatar 313.png'
import iconOverview from '../img/Squares four 1.png'
import iconCart from '../img/Button 1509.png'
import iconMoney from '../img/Button 1529.png'
import iconAccount from '../img/Button 1530.png'
import iconFile from '../img/File text 1.png'
import iconFolder from '../img/Folder.png'
import iconGroup from '../img/Groups.png'
import iconPie from '../img/Pie chart.png'
import iconChat from '../img/Chat.png'
import iconCode from '../img/Code.png'
import { useEffect, useState } from 'react';

const Layout = () => {

    // dùng API Overview
    const [overviewData, setOverviewData] = useState([]);

    useEffect(() => {
      
        const mockData = [
            { title: "Total Sales", amount: "$5,000", sub: "↑ 5% since last week" },
            { title: "Revenue", amount: "$8,200", sub: "↑ 2% this month" },
            { title: "Users", amount: "1,200", sub: "↓ 1% today" }
        ];
        setOverviewData(mockData);
    }, []);

    return (
        <div>

            <div className="container flex justify-center">
                <div className="header flex justify-between">

                    <h2 className='flex mr-96'>Dashboard</h2>

                    <div className='flex gap-2.5'>
                        <input className='' style={{ border: "1px solid black", width: "250px" }} type="text" name="" id="" placeholder='Search' />
                        <img src={bell} alt="" />
                        <img src={question} alt="" />
                        <img src={avatar} alt="" />
                    </div>

                </div>
                <div className="menu ">
                    <div className='p-3 '>
                        <img className='mb-5' src={logo} alt="" />

                        <div className='Dashboard flex mb-5'>
                            <img src={iconOverview} alt="" />
                            <a href="#">Dashboard</a><br />
                        </div>


                        <div className='Projects flex mb-5'>
                            <img src={iconFolder} alt="" />
                            <a href="#">Projects</a><br />
                        </div>
                        <div className='Teams flex mb-5'>
                            <img src={iconGroup} alt="" />
                            <a href="#">Teams</a><br />
                        </div>
                        <div className='Analytics flex mb-5'>
                            <img src={iconPie} alt="" />
                            <a href="#">Analytics</a><br />
                        </div>
                        <div className='Messages flex mb-5'>
                            <img src={iconChat} alt="" />
                            <a href="#">Messages</a><br />
                        </div>
                        <div className='Integrations flex mb-5'>
                            <img src={iconCode} alt="" />
                            <a href="#">Integrations</a><br />
                        </div>
                    </div>

                    <div className=''>

                    </div>

                </div>
                <div className="content">

                    <div className='flex'>
                        <img src={iconOverview} alt="" />
                        <h1>Overview</h1>
                    </div>

                    <div className='box flex p-5 justify-between gap-5'>
                        {overviewData.map((item, index) => (
                            <div key={index} className={`box${index + 1} p-5 bg-white rounded-xl shadow-md w-1/3`}>
                                <div className="head flex justify-between items-center mb-3">
                                    <p className="text-lg font-semibold">{item.title}</p>
                                    <img
                                        src={index === 0 ? iconCart : index === 1 ? iconMoney : iconAccount}
                                        alt=""
                                        className="w-6 h-6"
                                    />
                                </div>
                                <p className="text-2xl font-bold mb-1">{item.amount}</p>
                                <p className="text-sm text-gray-500">{item.sub}</p>
                            </div>
                        ))}
                    </div>
                    <div className='flex  justify-between'>
                        <div className='flex'>
                            <img src={iconFile} alt="" />
                            <h1>Detailed report</h1>
                        </div>

                        <div className='iconCha flex gap-5 mr-5'>
                            <div className='icon flex'>
                                <img src={iconFile} alt="" />
                                <button>Import</button>
                            </div>

                            <div className='icon flex'>
                                <img src={iconFile} alt="" />
                                <button>Import</button>
                            </div>

                        </div>



                    </div>

                    <div className="table-container   ">
                        <table className="my-table ">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Age</th>
                                    <th>Country</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>John Doe</td>
                                    <td>28</td>
                                    <td>USA</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>Jane Smith</td>
                                    <td>22</td>
                                    <td>Canada</td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>Sam Brown</td>
                                    <td>33</td>
                                    <td>UK</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="footer flex justify-between">
                    <h4>Số Result</h4>
                    <h4>Đánh số trang 1,2,3</h4>

                </div>
            </div>
        </div>
    )
}

export default Layout