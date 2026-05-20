
function Registration() {
    return (
        <div className="home2 border border-2">


            <div className="home2__top col-12">
                <div className="b"><b>Phone number</b></div>

            </div>
            <div className="row r2">
                <small><b>Please confirm your country code and enter your phone number</b></small>
            </div>

            <div className="q">
                <select class="form-select" aria-label="Default select example">
                    <option selected>Open this select menu</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
            </div>
            <div className="q">
                <div class="input-group mb-3">
                    
                    
                    <input className="form-control " id="" />
                </div>
            </div>

            <div className="home__bottom2">
                <button className="home__button2">
                    <a className="a1" href="/mainChat">Agree & Continue</a>
                </button>

                <p className="home__meta2">
                    from Meta
                </p>
            </div>

        </div>
    )
}

export default Registration