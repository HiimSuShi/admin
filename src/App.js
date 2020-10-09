import React, { useState, useEffect } from 'react';
import Routers from './routers';
import apiRequest from './api/accountApi';
function App() {

  const [accounts, setAccounts] = useState([]);

  // Danh sách sản phẩm
  useEffect(() => {
    const getAccounts = async () => {
      try {
        const { data } = await apiRequest.getAll();
        setAccounts(data);
      } catch (error) {
        console.log('failed to request API: ', error)
      }
    }
    getAccounts();
  }, []);


  // Xóa sản phẩm
  const onHandleRemove = async (id) => {
    try {
      const { data } = await apiRequest.remove(id);
      const newAccounts = accounts.filter(account => account.id !== data.id);
      setAccounts(newAccounts);
    } catch (error) {
      console.log('failed to request API: ', error)
    }

  }

  // //Phân trang
  // const [pagination, setPagination] = useState({
  //   _page: 1,
  //   _limit: 5,
  //   _totalRows: 1,
  // });
  // function handlePageChange(newPage) {
  //   console.log('New page', newPage)
  // }

  // Thêm sản phẩm
  const onHandleAdd = async (account) => {
    try {
      const { data } = await apiRequest.create(account);
      setAccounts([
        ...accounts,
        data
      ])
    } catch (error) {
      console.log('failed to request API: ', error)
    }
  }


  // // Cập nhật product 
  // const onHandleUpdate = (updateProduct) => {
  //   const newProducts = products.map(product => (
  //     product.id === updateProduct.id ? updateProduct : product  // Nếu product.id bằng với id của sản phẩm vừa chỉnh sửa thì trả về mảng có object mới
  //   ));
  //   localStorage.setItem('products', JSON.stringify(newProducts))
  //   setProducts(newProducts);
  // }


  return (
    <div className="App">
      <Routers accounts={accounts} onRemove={onHandleRemove} onAdd={onHandleAdd} />
    </div>
  )
  // onRemove={onHandleRemove} onAdd={onHandleAdd} onUpdate={onHandleUpdate}
}
export default App;