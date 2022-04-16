import ClipLoader from "react-spinners/ClipLoader";
import ScaleLoader from "react-spinners/ClipLoader";

import React from "react";

const LoadingInd = ({loading}) => {
    return (
        <div>
            <ScaleLoader color={"#fff"} loading={loading} size={150} />
        </div>
    );
};

export default LoadingInd;
