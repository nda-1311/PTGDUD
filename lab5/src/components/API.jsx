import React, { useState, useEffect } from 'react';
import axios from 'axios';
const FetchDataComponent = () => {
  // State để lưu trữ dữ liệu API
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // useEffect để gọi API khi component được mount
  useEffect(() => {
    // Gọi API
    axios.get('https://jsonplaceholder.typicode.com/users')  // Thay bằng API endpoint của bạn
      .then((response) => {
        setData(response.data);  // Lưu dữ liệu nhận được từ response
        setLoading(false);  // Đổi loading thành false khi đã có dữ liệu
      })
      .catch((error) => {
        setError(error);  // Xử lý lỗi nếu có
        setLoading(false);  // Đổi loading thành false khi có lỗi
      });
  }, []);  // Mảng rỗng đảm bảo chỉ gọi API khi component mount lần đầu tiên

  // Render theo trạng thái: loading, error, hoặc dữ liệu
  if (loading) {
    return <div>Đang tải...</div>;
  }

  if (error) {
    return <div>Lỗi: {error.message}</div>;
  }

  return (
    <div>
      <h2>Dữ liệu đã lấy được:</h2>
      <pre>{JSON.stringify(data, null, 2)}</pre>  {/* Hiển thị dữ liệu lấy được */}
    </div>
  );
};

export default FetchDataComponent;

 