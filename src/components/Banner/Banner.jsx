function Banner({ img, text }){
  return(
    <div className="banner">
        <img src={img} className="banner" alt="Banner" />
        {text !==null? <h1>{text}</h1> : null}
    </div>
  )    
}


export default Banner