function Call() {
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

            <div className="calls-title">
                <h3>Звонки</h3>
            </div>

            <div className="calls-list">

                <div className="call-item">
                    <img
                        src="https://i.pravatar.cc/50?img=11"
                        alt=""
                    />

                    <div className="call-info">
                        <h4>Ali</h4>

                        <p>
                            <i className="fa-solid fa-arrow-down call-in"></i>
                            Вчера, 21:30
                        </p>
                    </div>

                    <i className="fa-solid fa-phone call-icon"></i>
                </div>

                <div className="call-item">
                    <img
                        src="https://i.pravatar.cc/50?img=12"
                        alt=""
                    />

                    <div className="call-info">
                        <h4>Islam</h4>

                        <p>
                            <i className="fa-solid fa-arrow-up call-out"></i>
                            Сегодня, 10:15
                        </p>
                    </div>

                    <i className="fa-solid fa-video call-icon"></i>
                </div>

                <div className="call-item">
                    <img
                        src="https://i.pravatar.cc/50?img=13"
                        alt=""
                    />

                    <div className="call-info">
                        <h4>Bek</h4>

                        <p>
                            <i className="fa-solid fa-arrow-down call-in"></i>
                            Пропущенный звонок
                        </p>
                    </div>

                    <i className="fa-solid fa-phone call-icon"></i>
                </div>

            </div>

            <div className="wa-bottom3">

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
                    <a className="h1" href="/call"><i className="fa-solid fa-phone"></i></a>
                    <span>Звонки</span>
                </div>

                <div className="nav-item">
                    <a className="h1" href="/profile"> <i className="fa-solid fa-user"></i></a>
                    <span>Вы</span>
                </div>

            </div>
        </div>
    )
}

export default Call