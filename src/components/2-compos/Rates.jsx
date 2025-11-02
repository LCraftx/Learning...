import estrella from "../../assets/icon-star.svg";
function Rates({className,cantidad,text}){
    const estrellas = [];
  
    for (let i = 0; i < cantidad; i++) {
        estrellas.push(
        <img key={i} src={estrella}/>
    );
    }
    return (
        <div className={`h-12 flex items-center bg-[hsl(300,24%,96%)] pl-6 pb-1 pt-1 pr-6 rounded-lg ${className}`}>
            <div className="flex gap-1 w-28 justify-start overflow-hidden">
                {estrellas}
            </div>
            <p className="ml-4 text-sm text-blue-900"><b>{text}</b></p>
        </div>
    )
}

export default Rates;