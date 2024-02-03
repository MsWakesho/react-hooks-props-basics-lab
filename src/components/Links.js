import React from "react";

function Links (props) {
  
    return(
        <div>
            <h3>Links</h3>
            <a>{props.github}</a>
            <a> {props.linkedin}</a>
        </div>
    )
}

export default Links
