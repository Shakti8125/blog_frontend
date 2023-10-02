import { useEffect, useState } from 'react';
import './sidebar.css'
import { Link } from 'react-router-dom';
import { axiosInstance } from '../../help';
export default function Sidebar() {
  const [cats, setCats]= useState([]);

  useEffect(()=>{
    const getCats= async ()=>{
      const res= await axiosInstance.get("/categories")
      setCats(res.data)
    }
    getCats()
  }, [])
  return (
    <div className='sidebar'>
        <div className="sidebarItem">
          <img className="sidebarImg"src= "https://images.unsplash.com/photo-1519337265831-281ec6cc8514?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
           alt="" 
          />
          <p>
          Hello and a warm welcome to Channel! Whether you're an avid coder, a music connoisseur, a life enthusiast, a car aficionado, or someone keen on mastering the art of finance, our blog website has something extraordinary to offer to every inquisitive mind.
          </p>
        </div>
        <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          {cats.map((c) => (
            <Link to={`/?cat=${c.name}`} className="link">
            <li className="sidebarListItem">{c.name}</li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  )
}
