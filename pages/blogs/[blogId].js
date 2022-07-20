import Image from "next/image"
import design from "../../styles/pageStyles/blogDetails.module.css"
import { BlogDetailsHeader } from "../../components"
const BlogDetails = ( ) =>{
    return(
        <div className="px-lg">
            <BlogDetailsHeader />
            <div className={ design.imageCover }>
                <Image src = "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2l0eXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"   objectFit="contain" layout="fill"  />
            </div>
            <span className="fs-large font-B lh-large text-spaced color-dark">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur iure inventore quae recusandae praesentium nisi, corporis eligendi deleniti corrupti. Sequi, velit vitae. Fuga asperiores exercitationem possimus facere laboriosam dolor neque, quam ab id earum dignissimos ex quis eius illum, animi ipsa incidunt obcaecati recusandae maiores voluptatem et eum iusto totam officia? Perspiciatis quas nemo temporibus, adipisci recusandae nihil esse hic. Similique, ipsum doloribus animi suscipit aliquid nulla iste, tenetur vitae quisquam repellendus, nihil laboriosam voluptatem! Nesciunt, esse rerum atque fugit soluta nobis eveniet doloremque vero veritatis autem aliquam voluptate quibusdam, molestiae pariatur amet. Minima quaerat, ipsam, error facere exercitationem iure voluptatem nam iusto facilis doloremque doloribus atque! Accusamus quis quos, ad mollitia minima voluptate repellendus dolores nulla nobis, aliquam distinctio libero neque, fuga aut tenetur iure quaerat possimus exercitationem ipsum necessitatibus obcaecati illum. Ratione, nesciunt eius voluptatem ipsum neque laborum est enim nulla doloribus, eveniet, quam dolorem id consequuntur molestias.</span>
           
            <span className="fs-large font-B lh-large text-spaced color-dark">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur iure inventore quae recusandae praesentium nisi, corporis eligendi deleniti corrupti. Sequi, velit vitae. Fuga asperiores exercitationem possimus facere laboriosam dolor neque, quam ab id earum dignissimos ex quis eius illum, animi ipsa incidunt obcaecati recusandae maiores voluptatem et eum iusto totam officia? Perspiciatis quas nemo temporibus, adipisci recusandae nihil esse hic. Similique, ipsum doloribus animi suscipit aliquid nulla iste, tenetur vitae quisquam repellendus, nihil laboriosam voluptatem! Nesciunt, esse rerum atque fugit soluta nobis eveniet doloremque vero veritatis autem aliquam voluptate quibusdam, molestiae pariatur amet. Minima quaerat, ipsam, error facere exercitationem iure voluptatem nam iusto facilis doloremque doloribus atque! Accusamus quis quos, ad mollitia minima voluptate repellendus dolores nulla nobis, aliquam distinctio libero neque, fuga aut tenetur iure quaerat possimus exercitationem ipsum necessitatibus obcaecati illum. Ratione, nesciunt eius voluptatem ipsum neque laborum est enim nulla doloribus, eveniet, quam dolorem id consequuntur molestias.  </span>
           
            <span className="fs-large font-B lh-large text-spaced color-dark">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur iure inventore quae recusandae praesentium nisi, corporis eligendi deleniti corrupti. Sequi, velit vitae. Fuga asperiores exercitationem possimus facere laboriosam dolor neque, quam ab id earum dignissimos ex quis eius illum, animi ipsa incidunt obcaecati recusandae maiores voluptatem et eum iusto totam officia? Perspiciatis quas nemo temporibus, adipisci recusandae nihil esse hic. Similique, ipsum doloribus animi suscipit aliquid nulla iste, tenetur vitae quisquam repellendus, nihil laboriosam voluptatem! Nesciunt, esse rerum atque fugit soluta nobis eveniet doloremque vero veritatis autem aliquam voluptate quibusdam, molestiae pariatur amet. Minima quaerat, ipsam, error facere exercitationem iure voluptatem nam iusto facilis doloremque doloribus atque! Accusamus quis quos, ad mollitia minima voluptate repellendus dolores nulla nobis, aliquam distinctio libero neque, fuga aut tenetur iure quaerat possimus exercitationem ipsum necessitatibus obcaecati illum. Ratione, nesciunt eius voluptatem ipsum neque laborum est enim nulla doloribus, eveniet, quam dolorem id consequuntur molestias.</span>

            

        </div>
    )
}

export default BlogDetails