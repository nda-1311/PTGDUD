// [IMPORTS GIỮ NGUYÊN]
import '../components/Layout.css';
import logo from '../img/logo.png';
import bell from '../img/Bell 1.png';
import question from '../img/Question 1.png';
import avatar from '../img/Avatar 313.png';
import iconOverview from '../img/Squares four 1.png';
import iconCart from '../img/Button 1509.png';
import iconMoney from '../img/Button 1529.png';
import iconAccount from '../img/Button 1530.png';
import iconFile from '../img/File text 1.png';
import iconFolder from '../img/Folder.png';
import iconGroup from '../img/Groups.png';
import iconPie from '../img/Pie chart.png';
import iconChat from '../img/Chat.png';
import iconCode from '../img/Code.png';
import { useEffect, useState } from 'react';
import DataTable from '../components/DataTable';
import iconActive from '../img/active.png';
import imgBanner from '../img/Group.png';


const Layout = () => {
    // yc2 api overview
    const [overviewData, setOverviewData] = useState([]);
    const [apiData, setApiData] = useState([]);

    useEffect(() => {
        const mockData = [
            { title: "Turnover", amount: "$5,000", sub: "↑ 5% since last week" },
            { title: "Profit", amount: "$8,200", sub: "↑ 2% this month" },
            { title: "New customer", amount: "1,200", sub: "↓ 1% today" }
        ];
        setOverviewData(mockData);
    }, []);

    // yc3 table
    const tableColumns = [
        { label: 'CUSTOMER NAME', key: 'name' },
        { label: 'COMPANY', key: 'company' },
        { label: 'ORDER VALUE', key: 'value' },
        { label: 'ORDER DATE', key: 'date' },
        { label: 'STATUS', key: 'status' },
    ];

    // yc4 api table
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => {
                const mapped = data.map(user => ({
                    name: user.name,
                    company: user.company?.name || '',
                    value: `$${Math.floor(Math.random() * 1000)}`,
                    date: '10/04/2024',
                    status: 'New'
                }));
                setApiData(mapped);
            })
            .catch(err => console.error("Error fetching API:", err));
    }, []);

    // yc5 isActive 
    const [activeMenu, setActiveMenu] = useState("Dashboard");

    return (
        <div className="menu flex min-h-screen bg-gray-100">
            {/* Sidebar */}
            <aside className="w-1/5 bg-white shadow-xl p-5 flex flex-col justify-between border-r border-gray-300">
                <div>
                    <img className="mb-10 w-32" src={logo} alt="Logo" />
                    {/* Sidebar items */}
                    {[
                        { label: "Dashboard", icon: iconOverview },
                        { label: "Projects", icon: iconFolder },
                        { label: "Teams", icon: iconGroup },
                        { label: "Analytics", icon: iconPie },
                        { label: "Messages", icon: iconChat },
                        { label: "Integrations", icon: iconCode },
                    ].map((item) => (
                        <div
                            key={item.label}
                            onClick={() => setActiveMenu(item.label)}
                            className={`flex items-center gap-2 mb-5 cursor-pointer px-3 py-2 rounded-md transition-all duration-200 ${activeMenu === item.label
                                    ? "bg-[#f14f7e] text-white"
                                    : "text-gray-700 hover:bg-pink-200"
                                }`}
                        >
                            <img
                                src={activeMenu === item.label ? iconActive : item.icon}
                                alt=""
                            />
                            <span>{item.label}</span>
                        </div>
                    ))}
                </div>

                <div className='bg-[#eff6ff] w-56 h-64 mb-30 ml-10'>
                    <img src={imgBanner} alt="" />

                    <button style={{cursor: "pointer"}} className="flex items-center gap-2 px-4 py-2 border border-[#4d94ff] rounded text-[#4d94ff] hover:bg-[#4d94ff] hover:text-white  w-56 mt-10 justify-center">
                      
                        Try now
                    </button>
                </div>
            </aside>

            {/* Main content */}
            <main className="content flex-1 p-8 bg-white">
                {/* Header */}
                <div className="header flex justify-between items-center mb-8  ">
                    <h2 className="text-3xl font-bold text-[#f14f7e]">{activeMenu}</h2>
                    <div className="flex items-center gap-4">
                        <input
                            type="text"
                            placeholder="Search"
                            className="border px-3 py-1 w-64 rounded-md"
                        />
                        <img src={bell} alt="bell" />
                        <img src={question} alt="question" />
                        <img src={avatar} alt="avatar" className="w-8 h-8 rounded-full" />
                    </div>
                </div>

                {/* Nội dung hiển thị theo từng tab */}
                {activeMenu === "Dashboard" ? (
                    <>
                        {/* Overview Section */}
                        <div className="mb-10">
                            <div className="flex items-center gap-2 mb-4">
                                <img src={iconOverview} alt="" />
                                <h1 className="text-2xl font-bold">Overview</h1>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                {overviewData.map((item, index) => (
                                    <div
                                        key={index}
                                        className={`p-5 rounded-xl shadow-md ${index === 0
                                                ? "bg-[#fef2f4]"
                                                : index === 1
                                                    ? "bg-[#eff6ff]"
                                                    : "bg-[#f0f8fb]"
                                            }`}
                                    >
                                        <div className="flex justify-between items-center mb-2">
                                            <p className="font-bold text-xl">{item.title}</p>
                                            <img
                                                src={
                                                    index === 0
                                                        ? iconCart
                                                        : index === 1
                                                            ? iconMoney
                                                            : iconAccount
                                                }
                                                alt=""
                                                className="w-12 h-12"
                                            />
                                        </div>
                                        <p className="text-5xl font-bold mb-8">{item.amount}</p>
                                        <p className="text-md text-gray-500">{item.sub}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Table Section */}
                        <div className="mb-6">
                            <div className="flex justify-between items-center mb-4">
                                <div className="flex items-center gap-2">
                                    <img src={iconFile} alt="" />
                                    <h1 className="text-2xl font-bold">Detailed Report</h1>
                                </div>
                                <div className="flex gap-4">
                                    <button style={{cursor: "pointer"}} className="flex items-center gap-2 px-4 py-2 border border-[#f14f7e] hover:bg-[#f14f7e] hover:text-white  rounded text-[#f14f7e]">
                                        <img src={iconFile} alt="" className="w-4 h-4" />
                                        Import
                                    </button>
                                    <button style={{cursor: "pointer"}} className="flex items-center gap-2 px-4 py-2 border border-[#f14f7e] hover:bg-[#f14f7e] hover:text-white rounded text-[#f14f7e]">
                                        <img src={iconFile} alt="" className="w-4 h-4" />
                                        Export
                                    </button>
                                </div>
                            </div>
                            <DataTable columns={tableColumns} data={apiData} />
                        </div>

                        {/* Footer */}
                        <div className="footer flex justify-between text-gray-600 mt-10 text-sm">
                            <p>Số Result: {apiData.length}</p>
                            <p>Đánh số trang: 1, 2, 3</p>
                        </div>
                    </>
                ) : (
                    <div className="text-gray-600 text-lg font-medium">
                        {activeMenu} page content...
                    </div>
                )}
            </main>
        </div>
    );
};

export default Layout;
