function Current() {
    return (
        <div className="whatsapp">

            <div className="wa-header">
                <h2>WhatsApp</h2>

                <div className="wa-icons">
                    <i className="fa-solid fa-camera"></i>
                    <i className="fa-solid fa-magnifying-glass"></i>
                    <i className="fa-solid fa-ellipsis-vertical"></i>
                </div>
            </div>

            <div className="h3">
                <b>Актуальное</b>
            </div>
            <b>Статус</b><br />
            <div className="chat">
                <img
                    src="https://i.pravatar.cc/50?img=1"
                    alt=""
                />

                <div className="chat-info">
                    <div className="chat-top">
                        <h4>Добавить статус</h4>
                        <span>12:30</span>
                    </div>


                </div>
            </div>
              <div className="wa-bottom1">

                <div className="nav-item active">
                    <a href="mainChat"><i className="fa-solid fa-comment"></i></a>
                    <span>Чаты</span>
                </div>

                <div className="nav-item">
                    <a className="h1" href="/current"><i className="fa-solid fa-bullhorn"></i></a>
                    <span>Актуальное</span>
                </div>

                <div className="nav-item">
                    <a href="/camera"><i className="fa-solid fa-camera"></i></a>
                    <span>Камера</span>
                </div>

                <div className="nav-item">
                    <a  className="h1" href="/call"><i className="fa-solid fa-phone"></i></a>
                    <span>Звонки</span>
                </div>

                <div className="nav-item">
                     <a  className="h1" href="/profile"> <i className="fa-solid fa-user"></i></a>
                    <span>Вы</span>
                </div>

            </div>
        </div>
    )
}

export default Current
