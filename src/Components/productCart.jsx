export default function ProductCart(props){
    console.log(props);
    return(
        <>
            <h2>{props.name}</h2>
            <img src={props.image} />
            <p>{props.price}</p>
            <button>Enjoy coding</button>
        </>
    )
}