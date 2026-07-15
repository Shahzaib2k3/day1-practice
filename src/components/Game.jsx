function Game({name,desc,image,id}){
    return(
        <div className={`p-4 border rounded-lg mb-4 mx-2 flex flex-col items-center hover:shadow-lg transition ${id===1?"border-yellow-400":"border"}`}>

        <h2 className="text-lg font-semibold">{name}</h2>
        <p className="text-sm text-gray-600">{desc}</p >
        <img src={image} alt="image"  className="w-24 h-24 rounded-full"/>
        </div>

    )
}
export default Game