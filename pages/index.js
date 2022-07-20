
import { BlogItem } from "../components"

const Home = (  ) => {
 return (
   <div  className="px-md ">
    < BlogItem/>
    < BlogItem/>
    < BlogItem/>
    < BlogItem/>
    < BlogItem/>
    
   </div>
 )
};

export default Home;


export async function getStaticProps (){
  const res =await  fetch("https://api.github.com/users")
  const data = await res.json();
  return {
    props:{
      list:data
    }
  }
}