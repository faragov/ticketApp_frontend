

export default function Login(){

    return(
        <div className="form">
            <form>
                {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                <label htmlFor="name" >Name</label>
                <input
                    id="name"
                    name="name"
                    type="text"
                />
                {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                <label htmlFor="password" />
                    <input
                        id="password"
                        name="password"
                        type="text"
                    />
                <button type="submit">Sign Up</button>
            </form>
        </div>
    );
}