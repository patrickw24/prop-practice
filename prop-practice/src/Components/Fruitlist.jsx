export const Fruitlist = ({fruits})=>{

  


    return(
        <>
        <h1 className="text-center mt-4"> Fruit List </h1>
        <div className="d-flex justify-content-center align-item-center">
        <ul className="list-group mt-3">
            {fruits.map(item=>(
                <li className="list-group-item" key= {item.name}>{item.name}</li>
            ))}
        </ul>
        </div>
        </>
    )
}