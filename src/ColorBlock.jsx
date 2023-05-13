import React from "react";

export default function ColorBlock({color}) {
    return <div className="colorBlock"
                style={
                    {backgroundColor: color}
                }
            >
        <p>{color}</p>
    </div>
}