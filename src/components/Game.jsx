function Game({name,desc,image}){
    return(
        <div>

        <h2>{name}</h2>
        <p>{desc}</p>
        <img src={image} alt="image" />
        </div>

    )
}
export default Game