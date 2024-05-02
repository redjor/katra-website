import React from "react";

interface RowProps {
    fullscreen?: boolean,
    containerWidth?: string,
    children?: React.ReactNode,
}

export default function Row({fullscreen, containerWidth, children}: RowProps) {
    return (
        <div className={`row relative mx-auto ${containerWidth} ${fullscreen ? '-mx-5 md:-mx-16' : ''}`}>
            {children}
        </div>
    )
}