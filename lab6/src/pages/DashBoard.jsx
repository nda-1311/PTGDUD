import '../pages/DashBoard.css';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import DataTable from '../components/DataTable';
import iconOverview from '../img/Squares four 1.png';
import iconCart from '../img/Button 1509.png';
import iconMoney from '../img/Button 1529.png';
import iconAccount from '../img/Button 1530.png';
import iconFile from '../img/File text 1.png';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Sidebar from '../components/SideBar';

const DashBoard = () => {
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

    const tableColumns = [
        { label: 'CUSTOMER NAME', key: 'name' },
        { label: 'COMPANY', key: 'company' },
        { label: 'ORDER VALUE', key: 'value' },
        { label: 'ORDER DATE', key: 'date' },
        { label: 'STATUS', key: 'status' },
    ];

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

    const location = useLocation();
    const getPageTitle = (pathname) => {
        const map = {
            '/dashboard': 'Dashboard',
            '/projects': 'Projects',
            '/teams': 'Teams',
            '/analytics': 'Analytics',
            '/messages': 'Messages',
            '/integrations': 'Integrations'
        };
        return map[pathname.toLowerCase()] || 'Page';
    };

    const activeMenu = getPageTitle(location.pathname);

    return (
        <div className="menu flex min-h-screen bg-gray-100">
            <Sidebar />

            <main className="content flex-1 p-8 bg-white">
                <Header title={activeMenu} />

                {activeMenu === "Dashboard" ? (
                    <>
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
                                    <button style={{cursor: "pointer"}}  className="flex items-center gap-2 px-4 py-2 border border-[#f14f7e] hover:bg-[#f14f7e] hover:text-white rounded text-[#f14f7e]">
                                        <img src={iconFile} alt="" className="w-4 h-4" />
                                        Export
                                    </button>
                                </div>
                            </div>
                            <DataTable columns={tableColumns} data={apiData} />
                        </div>

                        <Footer totalResults={apiData.length} />
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

export default DashBoard;
