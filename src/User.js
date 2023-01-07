import React, { useEffect, useState } from "react";
import Userdata from "./Userdata";
import "./index.css"
import { Pagination } from "antd";

const User = () => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")
    const [currentPage, setCurrentPage] = useState(1)
    const [postPerPage] = useState(10)

    async function getData() {

        const response = await fetch("https://randomuser.me/api/?page=10&results=100&seed=abc")
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
                setLoading(true)
                setError(<h3 className="errorMessage" >No internet connection </h3>)
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
            <Pagination current={currentPage} onChange={(value) =>setCurrentPage(value) } total={data.length} itemRender={itemRender} pageSize={postPerPage} />
            </div>
          
        
          <div className="space"> </div>
          <hr />
        </div>
    )
}

export default User