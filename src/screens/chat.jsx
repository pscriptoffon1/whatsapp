function Chat() {
    return (
        <div className="whatsapp">

            <div className="wa-header">
                <h2>
                    <a className="icon-n-chat" href="/mainChat">Назад</a>
                </h2>

                <h3>Ali</h3>
            </div>

            <div className="wa-messages">

                <div className="message message-left">
                    Привет 👋
                </div>

                <div className="message message-right">
                    Салам брат
                </div>

                <div className="message message-left">
                    Как дела?
                </div>

            </div>

            <div className="wa-footer">

                <div className="wa-input-box">

                    <input
                        type="text"
                        placeholder="Сообщение"
                        className="wa-input"
                    />

                    <button className="wa-send-btn">
                        ➤
                    </button>

                </div>

            </div>

        </div>
    )
}

export default Chat