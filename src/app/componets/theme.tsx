import React from 'react'

interface themeProps{
    main: React.ReactNode;
    color: string;
}

function theme({main,color}:themeProps) {
    return (
        <div>
            <div className={`relative w-full  ${color} `}>
                <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-3xl"></div>
                <div className="relative z-10">
                    {main}
                </div>
            </div>
        </div>
    )
}

export default theme
