import React, { useEffect, useState } from "react";
import Userdata from "./Userdata";
import "./index.css"
import { Pagination } from "antd";
const User = () => {
    const [data, setData] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [postPerPage] = useState(10)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")
   

    async function getData() {

        const response = await fetch("https://randomuser.me/api/?results=200")
        const result = await response.json()
        return result
    }
    useEffect(() => {
        getData()
            .then(result => {
                setLoading(true)
                setData(result.results)
            })
            .catch((error) => {
                setLoading(false)
                setError("No internet connection")
            }
            )
    }, [])



    const lastPost = currentPage * postPerPage
    const firstPost = lastPost - postPerPage
    const currentPost = data.slice(firstPost,lastPost)

    const itemRender = (current, type, originalElement) => {
        if (type === 'prev') {
          return <a href="#">Previous</a>;
        }
        if (type === 'next') {
          return <a href="#">Next</a>;
        }
        return originalElement;
      };
    
     
    
    return (
        <div>
           
            <Userdata data={currentPost} loading={loading} error ={error} />
            <div className="pagination">
            <Pagination current={currentPage} onChange={(value) =>setCurrentPage(value) } total={data.length} itemRender={itemRender}  />
            </div>
          <div className="space"> </div>
        </div>
    )
}

export default User