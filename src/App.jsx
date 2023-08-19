import { useState, useEffect } from 'react'
import { fetchData } from './utils/api';
import { useDispatch, useSelector } from 'react-redux';
import { getApiConfiguration, getGenres } from './store/homeSlice';

function App() {

  const dispatch = useDispatch();
  const {url} = useSelector((state)=> state.home)
  // console.log(url)
  
  useEffect(()=>{
    apiTesting()
  }, [])

  const apiTesting = () =>{
    fetchData('/movie/popular')
    .then((res)=>{
      console.log(res)
      dispatch(getApiConfiguration(res))
    })
  }
  return (
    <>
     {url?.total_pages}
    </>
  )
}

export default App
