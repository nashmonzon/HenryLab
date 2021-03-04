import React from 'react';
import './Pagination.css'
const Pagination =({prodsPorPage, totalProd, paginate, active}) =>{
    
    
    let pageNumbers = [] 
    for (let i = 1; i <= Math.ceil(totalProd ? totalProd / prodsPorPage :[]); i++) {
        pageNumbers.push(i);
    }

    console.log(active) 
    return (
        <div className="pagination" >
         
      
            {pageNumbers.map((numero, i) => (
                <li key={i}  className='nav' >
                     <a onClick={()=>paginate(numero)} className="page-link" className={`${active == numero ?  'active' : null}`} >{numero}</a>
                </li>
                ))}
       
    </div>
    )
}
export default Pagination;
