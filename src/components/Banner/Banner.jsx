import'./Banner.scss'; 

function Banner({ img, text }){
    return (
        <div className="banner-container">
            <img src={img} alt="Bannière" className="banner-img" />
            {text !== null ? <h1 className="banner-text">{text}</h1> : null}
        </div>
    )
}  


export default Banner