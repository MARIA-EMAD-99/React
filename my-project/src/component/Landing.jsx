
import { Link } from "react-router-dom";
function Landing() {
  return (
    <section className="bg-[#1c2230]">
        <div className="container">
           <div className=" element-center flex-col pt-[200px]">
            <div className="w-[650px] max-w-full">
                
                <img src="/src/assets/images/illustration-intro.png" className="w-full h-fit"/> 
             </div>


             <div className="text-white text-center">
        <h1 className="text-[30px] md:text-[40px] font-semibold mb-[15px]">All your files in one secure location ,
            <br></br>
             accessible anywhere.</h1>

             <p className="font-normal text-lg px[15px] md:w-[600px] max-w-full md:mx-auto mb-[30px]"> Fylo store all your most important files in one secure location . Access them whereever you need , share and collabrate with friends family , and co-workers </p>
         </div>

        <Link href="/" className="btn w-[200px] h-[60px] rounded-[30px] element-center text-white font-medium"> Get Start </Link>

        </div>
        
         </div>
       <div className="w-full h-[200px]">
        <img src="/src/assets/images/bg-curvy-desktop.svg" className="w-full h-full"></img>
       </div>
     
    </section>
  )
}

export default Landing