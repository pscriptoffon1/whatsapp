
function Home1() {
    return (
        <div className="home  border border-2">

    
            <div className="home__top">
                <button className="home__skip">Skip</button>
            </div>

            <div className="home__center">
                <div className="home__logo">💬</div>

                <h1 className="home__title">
                    Welcome to WhatsApp
                </h1>

                <p className="home__text">
                    Read our Privacy Policy. Tap "Agree & Continue" to accept the Terms of Service.
                </p>
            </div>

            <div className="home__bottom">
                <button className="home__button">
                     <a className="a1" href="/registration">Agree & Continue</a>
                </button>

                <p className="home__meta">
                    from Meta
                </p>
            </div>

        </div>
    )
}

export default Home1