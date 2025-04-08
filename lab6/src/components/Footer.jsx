import React from 'react';

const Footer = ({ totalResults }) => {
    return (
        <div className="footer flex justify-between text-gray-600 mt-10 text-sm">
            <p>Số Result: {totalResults}</p>
            <p>Đánh số trang: 1, 2, 3</p>
        </div>
    );
};

export default Footer;
