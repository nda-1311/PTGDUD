const DataTable = ({ columns, data }) => {
    return (
        <table className="table-auto w-full mt-5 border border-gray-300">
            <thead className="bg-gray-100">
                <tr>
                    {columns.map((col, index) => (
                        <th key={index} className="border px-4 py-2 text-left">{col.label}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {data.map((row, rowIndex) => (
                    <tr key={rowIndex} className="hover:bg-gray-50">
                        {columns.map((col, colIndex) => (
                            <td key={colIndex} className="border px-4 py-2">
                                {row[col.key]}
                            </td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );
};
export default DataTable;