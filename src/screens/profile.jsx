function Profile() {
    return (
        <div className="whatsapp">

            <div className="wa-header">
                <h2>WhatsApp</h2>

                <div className="wa-icons">
                   <a className="fa-solid1 " href="/camera"><i className="fa-solid fa-camera"></i></a>
                    <i className="fa-solid fa-magnifying-glass"></i>
                    <i className="fa-solid fa-ellipsis-vertical"></i>
                </div>
            </div>

            <div className="profile">

                <img
                    className="profile-img"
                    src="https://i.pravatar.cc/120?img=15"
                    alt=""
                />

                <h2 className="profile-name">
                    Islam
                </h2>

                <p className="profile-status">
                    Hey there! I am using WhatsApp.
                </p>

            </div>

            <div className="profile-menu">

                <div className="profile-item">
                    <i className="fa-solid fa-user"></i>
                     <span><a className="aa1" href="/privacy">Аккаунт</a></span>
                </div>

                <div className="profile-item">
                    <i className="fa-solid fa-lock"></i>
                    <span><a className="aa1" href="/confidentiality">Конфиденциальность</a></span>
                </div>

                <div className="profile-item">
                    <i className="fa-solid fa-bell"></i>
                    <span>Уведомления</span>
                </div>

                <div className="profile-item">
                    <i className="fa-solid fa-database"></i>
                    <span>Хранилище</span>
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
                    <span>Камера      </span>
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

export default Profile