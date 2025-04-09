import { useState } from "react";

const DataTable = ({ columns, data, onEdit }) => {
    const [selectedRows, setSelectedRows] = useState([]);

    // Chọn tất cả
    const handleSelectAll = (e) => {
        if (e.target.checked) {
            setSelectedRows(data.map((_, index) => index));
        } else {
            setSelectedRows([]);
        }
    };

    // Chọn 1 dòng
    const handleSelectRow = (index) => {
        if (selectedRows.includes(index)) {
            setSelectedRows(selectedRows.filter((i) => i !== index));
        } else {
            setSelectedRows([...selectedRows, index]);
        }
    };

    return (
        <div className="overflow-x-auto mt-6">
            <table className="w-full border border-gray-200 rounded-lg shadow-sm overflow-hidden text-sm bg-white">
                <thead className="bg-gray-50 text-gray-600 font-semibold uppercase text-xs">
                    <tr>
                        <th className="border-b border-gray-200 px-4 py-3 text-center">
                            <input
                                type="checkbox"
                                onChange={handleSelectAll}
                                checked={selectedRows.length === data.length && data.length > 0}
                            />
                        </th>
                        {columns.map((col, index) => (
                            <th key={index} className="border-b border-gray-200 px-4 py-3 text-left">
                                {col.label}
                            </th>
                        ))}
                        <th className="border-b border-gray-200 px-4 py-3 text-center">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((row, rowIndex) => (
                        <tr key={rowIndex} className="hover:bg-gray-100 transition-colors">
                            <td className="border-b border-gray-200 px-4 py-3 text-center">
                                <input
                                    type="checkbox"
                                    checked={selectedRows.includes(rowIndex)}
                                    onChange={() => handleSelectRow(rowIndex)}
                                />
                            </td>
                            {columns.map((col, colIndex) => (
                                <td key={colIndex} className="border-b border-gray-200 px-4 py-3">
                                    {col.key === 'name' ? (
                                        <div className="flex items-center gap-3">
                                            <img
                                                src={row.avatar}
                                                alt="avatar"
                                                className="w-10 h-10 rounded-full object-cover"
                                            />
                                            <span className="font-medium text-gray-800">{row[col.key]}</span>
                                        </div>
                                    ) : col.key === 'status' ? (
                                        <span
                                            className={`px-3 py-1 rounded-full text-xs font-semibold ring-1 ring-inset
                                                ${
                                                    row.status === 'Completed'
                                                        ? 'bg-green-50 text-green-700 ring-green-600/20'
                                                        : row.status === 'In-progress'
                                                        ? 'bg-yellow-50 text-yellow-700 ring-yellow-600/20'
                                                        : row.status === 'New'
                                                        ? 'bg-blue-50 text-blue-700 ring-blue-600/20'
                                                        : ''
                                                }`}
                                        >
                                            {row.status}
                                        </span>
                                    ) : (
                                        <span className="text-gray-700">{row[col.key]}</span>
                                    )}
                                </td>
                            ))}
                            <td className="border-b border-gray-200 text-center px-4 py-3">
                                <button
                                    className="text-blue-600 hover:text-blue-800 transition"
                                    onClick={() => onEdit(row)}
                                >
                                    ✏️
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default DataTable;
