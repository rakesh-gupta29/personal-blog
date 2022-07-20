
import design from "./index.module.css"

const BlogDetailsHeader = () =>{
    return(
        <div className={`${ design.headerWrapper } flex px-x-lg py-x-lg`}>
           <span className="fs-xx-large font-A uppercase text-spaced lh-large px-md fw-bold  ">this is a title and the idea is to create aui template for the app </span>
           <div className="fs-larger flex-center gap-md  px-x-lg my-x-lg  ">
               <p className="fs-large font-B px-md  ">23 May 2022</p>
               <div className="divider"></div>
               <p  className="fs-large font-B px-md  ">Java</p>
               <div className="divider"></div>
               <p className="fs-large font-B  px-md ">3 Min Read</p>
           </div>
        </div>
    )
}


export default BlogDetailsHeader