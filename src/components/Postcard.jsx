import React from 'react'

//  A which will be used while posting it.

import DatabaseService from "../appwrite/conf"
import { Link } from 'react-router-dom'
function Postcard({$id, title, featuredimage, }) {
    return (
        <>
        <div>
            <Link to={`/post/${$id}`}>
             <div>
                <div> 
                    <img src={DatabaseService.getfilepreview(featuredimage)} alt={title} />
                </div>
                <h1>{title}</h1>
             </div>
            </Link>
        </div>
        </>
    )
}

export default Postcard
