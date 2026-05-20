function Camera() {
    return (
        <div className="whatsapp">

       
  <div className="camera-page">
    
      <div className="camera-top">
        <a className="icon-next" href="/mainChat"><i className="fa-solid fa-xmark icon"></i></a>

        <div className="camera-modes">
          <span>VIDEO</span>
          <span className="active">PHOTO</span>
          <span>PORTRAIT</span>
        </div>

        <i className="fa-solid fa-bolt icon"></i>
      </div>

      <div className="camera-preview">
        <div className="grid"></div>
      </div>

      <div className="camera-bottom">
        <div className="gallery-btn">
          <i className="fa-regular fa-image"></i>
        </div>

        <button className="capture-btn">
          <div className="inner-circle"></div>
        </button>

        <div className="rotate-btn">
          <i className="fa-solid fa-rotate"></i>
        </div>
      </div>
    </div>
       
             
        </div>
    )
}

export default Camera
