import ClipLoader from "react-spinners/ClipLoader";
import ScaleLoader from "react-spinners/ClipLoader";
import "./LoadingInd.css";
import React from "react";

const LoadingInd = ({loading}) => {
    return (
        <div className="align-center">
            <ScaleLoader color={"#fff"} loading={loading} size={150} />
        </div>
    );
};

export default LoadingInd;
