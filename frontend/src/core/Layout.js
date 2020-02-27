import React from "react";
import Menu from "./Menu";
import "../styles.css";

//layout outline
const Layout = ({
    title = "Title",
    className,
    children
}) => (
    <div>
        <Menu />
        <div className="jumbotron">
            <h2>{title}</h2>
        </div>
        <div className={className}>{children}</div>
    </div>
);

export default Layout;
