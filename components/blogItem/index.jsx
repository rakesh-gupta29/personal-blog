
import design from  "./index.module.css"
import Link from "next/link"
import Image from "next/image"

const BlogItem = (  ) =>{
    return(
        <div className="border-bottom    px-sm flex gap-lg  flex py-lg my-x-lg  ">
            <div className={ design.imageWrapper }>
                <Image  src="https://images.unsplash.com/photo-1650374471530-8efdf239a269?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDJ8Ym84alFLVGFFMFl8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" layout="fill" objectFit="cover" />
            </div>
            <div className={`flex flex-col gap-sm  align-start ${ design.textWrapper }`}>
                <h3 className="fs-x-large  font-A color-gray  uppercase lh-large text-spaced">this is a test blog and the idea is to get started </h3>
                <div className="flex-center gap-md  font-B">
                    <p className="fs-large color-gray ">Java</p>
                    <div className="divider"></div> 
                    <p className="fs-large color-gray ">12 Feb 2022</p>
                    <div className="divider"></div>
                    <p className="fs-large color-gray ">3 Min Read </p>
                </div>
                <span className="font-B fs-large lh-large  text-spaced">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas eius facere aliquid, similique sequi deserunt corporis non necessitatibus! Dolore labore in sapiente dolores praesentium. Repudiandae animi porro voluptatum. Eius dolore eum id harum quo </span>
                <div className="w-100 flex align-center justify-end px-x-lg  ">
                <Link href="/"passHref >
                    <button className="box-lg  bg-hover circle grid-center my-md  ">
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#3d3d3d" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path></svg>
                    </button>
                </Link>

                </div>
            </div>
        </div>
    )
}
export default BlogItem