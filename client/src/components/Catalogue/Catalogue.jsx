import React, { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux";
import { Grid, MenuItem, Menu, Button } from "@material-ui/core"
import { catalogueStyles } from "./Catalogue.css.js"
import ProductCard from "../ProductCard/ProductCard.jsx"
import { mayorPrecio, menorPrecio } from '../../Reducer/Action'
import Filter from "../Filter/Filter.jsx";
import './Catalogue.css'
import Pagination from '../Pagination/Pagination'
// const toFirstCharUppercase = (name) => 
//     name.charAt(0).toUpperCase() + name.slice(1)

const Catalogue = () => {
    const dispatch = useDispatch();
    const classes = catalogueStyles();
    const products = useSelector(store => store.products)
    const Error = useSelector(store => store.error)
    const [pageActual, setPageActual] = useState(1);
    const prodsPorPage = 30

    const indexOfLastProd = pageActual * prodsPorPage; // indice primer prod de la página
    const indexOfFirstProd = indexOfLastProd - prodsPorPage; // indice último prod de la página
    let currentProds = products.slice(indexOfFirstProd, indexOfLastProd) // productos a mostrar por página

    const paginate = (pageNumbers) => { setPageActual(pageNumbers) }



    return (
        <div>
            {Error ? <p>No Hay resultados para tu busqueda</p> : null}
            <div className='filtro'>
                {<Filter />}
            </div>
            <br></br>
            <div>
                <Grid container justify='center' spacing={2}  >

                    {currentProds?.map(p => (

                        <ProductCard key={p.id}
                            image={p.thumbnail}
                            title={p.title}
                            price={p.price}
                            currency={p.currency_id}
                            condition={p.condition}
                            stock={p.available_quantity}
                        />
                    ))
                    }
                </Grid>
            </div>
            <div className='paginationInCatalogue'>
                {<Pagination prodsPorPage={prodsPorPage} totalProd={products.length} paginate={paginate} active={pageActual} />}
            </div>
        </div>
    )
}

export default Catalogue;