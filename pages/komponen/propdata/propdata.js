

export default function propdata (props)
{
   
    return(
      
    <div className="card" style= {{width: "200px", height:"500px"}} >
      <b>
      <img src={props.foto} style= {{height:"200px"}}   className="card-img-top" alt="hujan"/>
      </b>
      
      <div className="card-body">
        <div>
      <center> <b className="card-title">{props.nama_laptop}</b></center><hr></hr>
      </div>
        <i className="card-text">{props.spek_laptop}</i><hr></hr>
        <p className="card-text1">{props.harga}</p>
      </div>
    </div>
  
  
 

    )
}
