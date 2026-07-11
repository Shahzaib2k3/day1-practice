function Profilecard({name,role,image}){
    return (
        <div>
            <img src={image} />
            <p>{name} </p>
            <p>{role} </p>
        </div>

    )
}

export default Profilecard