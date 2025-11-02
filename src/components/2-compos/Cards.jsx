function Cards({className,avatar, name, role, text}){
    return (
        <div className={`flex flex-col w-[350px] h-[200px] rounded-lg bg-blue-950 p-6 text-white ${className}`}>
            <div className="flex flex-row mb-2.5">
                <img className ="rounded-full w-10 h-10 m-2"src={avatar}/>
                <div className="flex flex-col justify-center ml-2">
                    <p><b>{name}</b></p>
                    <p className="text-[hsl(303,10%,53%)]"><b>{role}</b></p>
                </div>
            </div>
            <div>
                <p>{text}</p>
            </div>
        </div>
    )
}

export default Cards;