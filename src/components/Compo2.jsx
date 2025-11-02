import { useEffect } from "react";
import Rates from "./2-compos/Rates.jsx";
import Cards from "./2-compos/Cards.jsx";
import anne from "../assets/image-anne.jpg";
import colton from "../assets/image-colton.jpg";
import irene from "../assets/image-irene.jpg";

function Compo2(){
    useEffect(() => {
        const root = document.getElementById('root');
        if (!root) return;
        const previous = root.style.backgroundColor;
        root.style.backgroundColor = '#FFFFFF';
        return () => {
            root.style.backgroundColor = previous;
        };
    }, []);

    return (
        <div className="w-full font-league">
            <div className="h-[300px] grid grid-cols-2">
                <div className="h-[250px] w-[400px] justify-self-start ml-15 self-center">
                    <p className="text-[40px] w-[300px] leading-none mb-5"><b>10,000+ of our users love our products</b></p>
                    <p>We only provide great products combined with excellent customer service. See what our satisfied customers are saying about our services.</p>
                </div>
                <div className="flex flex-col h-[200px] w-[450px] justify-self-start self-center gap-2.5">
                    <Rates className="self-start" cantidad={5} text={"Rated 5 Stars in Reviews"}/>
                    <Rates className="self-center" cantidad={5} text={"Rated 5 Stars in Report Guru"}/>
                    <Rates className="self-end" cantidad={5} text={"Rated 5 Stars in BestTech"}/>
                </div>
            </div>

            <div className="h-[250px] grid grid-cols-1">
                <div className="w-full flex justify-center gap-6">
                    <Cards 
                        className="self-start"
                        avatar={colton}
                        name={"Colton Smith"}
                        role={"Verified Buyer"}
                        text={"lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat "}
                    />
                    <Cards 
                        className="self-center"
                        avatar={irene}
                        name={"Irene Roberts"}
                        role={"Verified Buyer"}
                        text={"lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat "} 
                    />
                    <Cards
                        className="self-end" 
                        avatar={anne}
                        name={"Anne Wallace"}
                        role={"Verified Buyer"}
                        text={"lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat "}
                    />
                </div>
            </div>
        </div>
    )
}

export default Compo2;