function Confidentiality() {
    return (
        <div className="whatsapp">

            <div className="privacy-header">

                <a href="/profile" className="back-btn">
                    Назад
                </a>

                <h2>Конфиденциальность</h2>

            </div>

            <div className="privacy-list">

                <div className="privacy-item">
                    <div>
                        <h4>Последний визит</h4>
                        <p>Все</p>
                    </div>
                </div>

                <div className="privacy-item">
                    <div>
                        <h4>Фото профиля</h4>
                        <p>Мои контакты</p>
                    </div>
                </div>

                <div className="privacy-item">
                    <div>
                        <h4>Статус</h4>
                        <p>Все</p>
                    </div>
                </div>

                <div className="privacy-item">
                    <div>
                        <h4>Геоданные</h4>
                        <p>Выкл</p>
                    </div>
                </div>

                <div className="privacy-item">
                    <div>
                        <h4>Заблокированные</h4>
                        <p>0 контактов</p>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Confidentiality