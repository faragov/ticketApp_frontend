import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function Login(){

    return(
        <div className="form">
            <form>
                {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                <label htmlFor="email" >Email</label>
                <FontAwesomeIcon icon={faEnvelope} />
                <input
                    id="email"
                    name="email"
                    type="text"
                />
                {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                <label htmlFor="password">Password</label>
                <FontAwesomeIcon icon={faLock} />
                    <input
                        id="password"
                        name="password"
                        type="text"
                    />
                <button type="submit">Sign Up</button>
            </form>
            <p>
                <Link to="./Landing">If you don &apos t have an account, click here to register.</Link>
            </p>
        </div>
    );
}