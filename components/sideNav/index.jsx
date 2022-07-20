



import  design from "./index.module.css"

import authorLogo from "../../assets/img/logo.png"
import Link from "next/link"
import Image from "next/image"

const SideNav = () =>{
    const NavOption = ({ text }) =>{
        return(
            <Link href={`/${text.toLowerCase().split(" ").join("-")}`} passHref >
               <a  className=" bg-hover-blue py-x-lg px-x-lg  fs-large   uppercase  color-dark  loose-text  " > { text }</a>
            </Link>
        )
    }
    
    return(
        <aside className={`border-bottom  ${design.sideNavMaster}  border-left`}>
            <div className={`${design.sideDataWrapper} flex flex-col gap-lg`}>
                <Image  src={ authorLogo } className="master-logo" />
                <span className="font-A   loose-text master-text  uppercase text-spaced color-dark fw-bold  text-center px-lg ">
                    rakesh <br /> Gupta
                </span>
                <div className="w-100 font-B flex flex-nowrap fw-bold   flex-col py-x-lg  ">
                    < NavOption  text="Categories"  />
                    < NavOption  text="About Me"  />
                    < NavOption  text="Sources"  />
                </div>
            </div>
        </aside>
    )
}

export default SideNav 