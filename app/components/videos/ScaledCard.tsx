import {useState} from "react";

export default function ScaledCard({thumb, hover}: any) {

    const [isScale, setIsScale] = useState(false);


    const handleMouseEnter = () => {
        setIsScale(true);
    }

    const handleMouseLeave = () => {
        setIsScale(false);
    }

    return (
        <div
            className={`hover-card relative cursor-pointer transition-all duration-300 ${isScale ? 'animate-card-hover' : 'animate-card-unhover'}`}
            onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            {thumb}
            {isScale && (<div
                className={`absolute top-0 flex size-full flex-col justify-end space-y-3 bg-black p-4 transition-all duration-300 ${isScale ? 'visible bg-opacity-80 opacity-100' : 'invisible bg-opacity-0 opacity-0'}`}
            >
                {hover}
            </div>)}
        </div>
    )
}