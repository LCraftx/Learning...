import articulo from "../assets/illustration-article.svg"
import avatar from "../assets/image-avatar.webp"
function Compo1(){
    {/*Replicando una tarjeta XD*/}
    return (
        <div className ="bg-white w-[320px] h-[420px] flex flex-col items-center rounded-lg p-4 border-[0.5px] border-black shadow-[5px_5px_0px_0px_#000]">
            <img src = {articulo} alt="Illustration Article" width="300px" className = "rounded-lg mb-4"/>
            <div className="bg-[hsl(47,88%,63%)] rounded-sm self-start px-2 py-px mb-2">
                <p className="text-[12px] font-extrabold"><b>Learning</b></p>
            </div>
            <p className = "text-[10px] self-start mb-2 text-[hsl(0,0%,42%)] font-extrabold">Published 21 Dec 2023</p>
            <p className = "text-[16px] self-start mb-2 font-extrabold"><b>HTML & CSS foundations</b></p>
            <p className = "text-[14px] self-start mb-4 text-gray-500 font-medium">These languajes are the backbone of every website, defining structure, concept, and presentation.</p>
            <div className="flex flex-row items-center gap-2 w-[190px] self-start">
                <img src={avatar} width="30" height="30"/>
                <p className="text-[10px] font-extrabold"><b>Greg Hooper</b></p>
            </div>
        </div>
    )
}

export default Compo1;