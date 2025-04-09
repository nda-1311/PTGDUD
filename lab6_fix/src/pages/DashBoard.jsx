import '../pages/DashBoard.css';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import DataTable from '../components/DataTable';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Sidebar from '../components/SideBar';

// Icons
import iconOverview from '../img/Squares four 1.png';
import iconCart from '../img/Button 1509.png';
import iconMoney from '../img/Button 1529.png';
import iconAccount from '../img/Button 1530.png';
import iconFile from '../img/File text 1.png';

const DashBoard = () => {
    const [overviewData, setOverviewData] = useState([]);
    const [apiData, setApiData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;

    const location = useLocation();

    useEffect(() => {
        setOverviewData([
            { title: "Turnover", amount: "$5,000", sub: "↑ 5% since last week" },
            { title: "Profit", amount: "$8,200", sub: "↑ 2% this month" },
            { title: "New customer", amount: "1,200", sub: "↓ 1% today" }
        ]);
    }, []);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => {
                const extended = Array(7).fill(data).flat(); // nhân bản cho nhiều dữ liệu
                const mapped = extended.map((user, index) => ({
                    name: user.name,
                    company: user.company?.name || '',
                    value: `$${Math.floor(Math.random() * 1000)}`,
                    date: '10/04/2024',
                    status: 'New'
                }));
                setApiData(mapped);
            });
    }, []);

    const tableColumns = [
        { label: 'CUSTOMER NAME', key: 'name' },
        { label: 'COMPANY', key: 'company' },
        { label: 'ORDER VALUE', key: 'value' },
        { label: 'ORDER DATE', key: 'date' },
        { label: 'STATUS', key: 'status' },
    ];

    const totalPages = Math.ceil(apiData.length / itemsPerPage);
    const paginatedData = apiData.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

    const handlePageChange = (page) => {
        if (typeof page === 'number' && page !== currentPage) {
            setCurrentPage(page);
        }
    };
    const getPageNumbers = () => {
        return ["<", 1, 2, 3, '...', 10, 11, ">"];
    };
    







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
                        {/* OVERVIEW SECTION */}
                        <div className="mb-10">
                            <div className="flex items-center gap-2 mb-4">
                                <img src={iconOverview} alt="Overview Icon" />
                                <h1 className="text-2xl font-bold">Overview</h1>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                {overviewData.map((item, index) => {
                                    const bgColor = [
                                        "bg-[#fef2f4]",
                                        "bg-[#eff6ff]",
                                        "bg-[#f0f8fb]"
                                    ][index];

                                    const icon = [iconCart, iconMoney, iconAccount][index];

                                    return (
                                        <div key={index} className={`p-5 rounded-xl shadow-md ${bgColor}`}>
                                            <div className="flex justify-between items-center mb-2">
                                                <p className="font-bold text-xl">{item.title}</p>
                                                <img src={icon} alt={`${item.title} icon`} className="w-12 h-12" />
                                            </div>
                                            <p className="text-5xl font-bold mb-8">{item.amount}</p>
                                            <p className="text-md text-green-600">{item.sub}</p>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        {/* DETAILED REPORT SECTION */}
                        <div className="mb-6">
                            <div className="flex justify-between items-center mb-4">
                                <div className="flex items-center gap-2">
                                    <img src={iconFile} alt="Report Icon" />
                                    <h1 className="text-2xl font-bold">Detailed Report</h1>
                                </div>
                                <div className="flex gap-4">
                                    {["Import", "Export"].map((text, i) => (
                                        <button style={{cursor: "pointer"}}
                                            key={i}
                                            className="flex items-center gap-2 px-4 py-2 border border-[#f14f7e] hover:bg-[#f14f7e] hover:text-white rounded text-[#f14f7e]"
                                        >
                                            <img src={iconFile} alt={`${text} Icon`} className="w-4 h-4" />
                                            {text}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <DataTable columns={tableColumns} data={paginatedData} />

                            {/* PAGINATION */}
                            <div className="flex justify-end mt-4">
                                {getPageNumbers().map((page, index) =>
                                    page === '...' ? (
                                        <span key={index} className="mx-1 px-4 py-2 text-gray-400 select-none">...</span>
                                    ) : (
                                        <button
                                            key={page}
                                            onClick={() => handlePageChange(page)}
                                            className={`mx-1 px-4 py-2 rounded-full transition-all duration-200 ${currentPage === page
                                                ? 'bg-[#f14f7e] text-white border border-[#f14f7e]'
                                                : 'bg-white text-gray-500 hover:bg-[#f14f7e] hover:text-white'
                                                }`}
                                        >
                                            {page}
                                        </button>
                                    )
                                )}
                            </div>
                        </div>

                        {/* FOOTER */}
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