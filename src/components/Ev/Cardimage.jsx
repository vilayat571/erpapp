import React from 'react';

function Cardimage({ src, size, alt }) {
    return (
        <img src={src} className={size} alt={alt} />
    )
}

export default Cardimage;