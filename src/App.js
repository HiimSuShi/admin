import React, { useState, useEffect } from 'react';
import Routers from './routers';
import apiRequest from './api/accountApi';
import infoApi from './api/infoApi';
import newApi from './api/newApi';
import { useHistory } from 'react-router-dom';
import Account from './pages/views/Admin/Account';

function App() {

  const [allData, setAllData] = useState([]);
  const [data, setData] = useState([]);
  const [Ndata, setNData] = useState([]);
  const [addSuccess, setAddSuccess] = useState(false)
  let history = useHistory();
  // const [categories, setCategories] = useState([]);
  console.log();


  // Danh sách sản phẩm
  useEffect(() => {
    const getAllData = async () => {
      try {
        const { data } = await apiRequest.getAll();

        setAllData(data);
      } catch (error) {
        console.log('failed to request API: ', error)
      }
    }
    getAllData();
  }, []);
  // Danh sách info
  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await infoApi.getAll();

        setData(data);
      } catch (error) {
        console.log('failed to request API: ', error)
      }
    }
    getData();
  }, []);





  // Xóa sản phẩm
  const onHandleRemove = async (id) => {
    try {
      const { data } = await apiRequest.remove(id);
      console.log("done");
      const newAllData = allData.filter(allData => allData.id !== data.id);
      setAllData(newAllData);
      window.location.href = '/admin/account';
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
  const onHandleAdd = async (allData) => {
    try {
      const { data } = await apiRequest.create(allData);
      setAllData({
        ...allData,
        data
      })
      console.log('them than cong')
      window.location.href = '/admin/account';
      // setAddSuccess(true)
    } catch (error) {
      console.log('failed to request API: ', error)
    }

  }



  // Cập nhật 
  const onHandleUpdate = (updateAccount) => {
    const newAccounts = allData.map(acc => (
      acc.id === updateAccount.id ? updateAccount : acc  // Nếu product.id bằng với id của sản phẩm vừa chỉnh sửa thì trả về mảng có object mới
    ));
    console.log(newAccounts)
    // localStorage.setItem('account', JSON.stringify(newAccounts))
    // setAllData(newAccounts);
    // window.location.href = '/admin/account';
  }


  return (
    <div className="App">
      <Routers data={data} allData={allData} onAdd={onHandleAdd} onRemove={onHandleRemove} onUpdate={onHandleUpdate} />

    </div>
  )

}
export default App;