import React from "react";
import TopBar from './topdash.js'
import Paintents from "./lists";

import "./DocDash.css";
export default function DocDash() {
    return (
        <div className="entire">
            <TopBar />
            <div className="container2">
                <Paintents />
            </div></div>);
}
