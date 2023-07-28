import React from 'react';

function Logo() {
    return (
        <span>PnJoying</span>
    );
}

function HighlightLogo() {
    return (
        <>
            <span style={{color:"cornflowerblue", fontWeight:"bold"}}>P</span>
            n
            <span style={{color:"cornflowerblue", fontWeight:"bold"}}>J</span>
            oying
        </>
    );
}

export {HighlightLogo, Logo};