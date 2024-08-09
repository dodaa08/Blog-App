import React from 'react'
import {Logo, Logoutbtn, Container} from "../index"
import { Link, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

function Header() {
    const authstatus = useSelector((state)=>state.auth.status);
    const navigate = useNavigate
    const Navitems = [
        {
               name: 'Home',
            slug: "/",
            active: true
          }, 
          {
            name: "Login",
            slug: "/login",
            active: !authstatus,
        },
        {
            name: "Signup",
            slug: "/signup",
            active: !authstatus,
        },
        {
            name: "All Posts",
            slug: "/all-posts",
            active: authstatus,
        },
        {
            name: "Add Post",
            slug: "/add-post",
            active: authstatus,
        },
    ]
    return (
        <>
        <header>
            <Container>
                <div>
                <nav>
                    <Link>
                    <Logo />
                    </Link>
                </nav>
                </div>
                <ul>
                    {Navitems.map((items)=>
                    items.active?
                    <li key={items.name}>
                        <button onClick={()=>navigate(items.slug)}>{items.name}</button>
                    </li>
                    : null
                    )}
                </ul>
                {authstatus && (
                    <Logoutbtn />
                )}

            </Container>
        </header>
        
        
        </>
    )
}

export default Header
