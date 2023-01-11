// node imports
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import classes from "./Success.module.scss";

const Success = () => {
    const [pageRendered, setPageRendered] = useState(false)

    useEffect(() => {
        setPageRendered(true)
    }, [])
    return (
        <section className={`${classes['success-screen']} ${classes.show}`}>
            <div className={`${classes['success-animation']} ${pageRendered && classes.animate}`}>
                <svg className={classes['checkmark']} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52"><circle className={classes['checkmark__circle']} cx="26" cy="26" r="25" fill="none" /><path className={classes['checkmark__check']} fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" /></svg>
            </div>
            <p className={classes.title}>
                Order Complete Successfully
            </p>
            <Link to="/" className="btn btn-primary">Back</Link>
        </section>
    )
};

export default Success;