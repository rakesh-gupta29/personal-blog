

import design from  "./index.module.css"
import  Link  from "next/link"

const TopNav = () =>{

    const NavOption = ({ text }) =>{
        return(
            <Link href={`/blogs/${text.toLowerCase()}`}  >
                <a className="fs-large font-B px-sm  "> { text } </a>
            </Link>
        )
    }
    return(
        <nav className={`flex flex-nowrap align-center justify-between  gap-md border-bottom px-md ${design.topNav} font-B`}>
                <Link href="/"passHref >
                    <button className="box-lg  bg-hover circle grid-center ">
                        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-label="Home"><path d="M4.5 21.25V10.87c0-.07.04-.15.1-.2l7.25-5.43a.25.25 0 0 1 .3 0l7.25 5.44c.06.04.1.12.1.2v10.37c0 .14-.11.25-.25.25h-4.5a.25.25 0 0 1-.25-.25v-5.5a.25.25 0 0 0-.25-.25h-4.5a.25.25 0 0 0-.25.25v5.5c0 .14-.11.25-.25.25h-4.5a.25.25 0 0 1-.25-.25z" fill="#3d3d3d" stroke="currentColor" strokeLinejoin="round"></path><path d="M22 9l-9.1-6.83a1.5 1.5 0 0 0-1.8 0L2 9" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                    </button>
                </Link>
                <div className="flex-center gap-x-lg">
                    {/* <NavOption text="CSS" />
                    <NavOption text="Javascript" />
                    <NavOption text="React" />
                    <NavOption text="Learning" /> */}
                </div>
                <div className="flex-center">
                   <button className="box-lg  bg-hover circle grid-center mx-sm ">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="26" viewBox="0 0 24 24" fill="none" stroke="#3d3d3d"   strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-search"><circle cx="10" cy="10" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                   </button>
                   <button className="box-lg bg-hover circle grid-center mx-sm ">
                        <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 29 29" height="30" width="30"><path fill="#3d3d3d" d="M14.5,2A12.51408,12.51408,0,0,0,2,14.5,12.52131,12.52131,0,0,0,14.5,27a12.5,12.5,0,0,0,0-25Zm7.60309,19.71283a8.48005,8.48005,0,0,0-15.19873.00824A10.36659,10.36659,0,0,1,4,14.5a10.5,10.5,0,0,1,21,0A10.36807,10.36807,0,0,1,22.10309,21.71283ZM14.5,7A4.5,4.5,0,1,0,19,11.5,4.5,4.5,0,0,0,14.5,7Z"/></svg>
                   </button>
                </div>
            </nav>
    )
}

export default TopNav 