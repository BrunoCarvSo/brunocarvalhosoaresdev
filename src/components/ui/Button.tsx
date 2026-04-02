import React from 'react';

function Button({ children }: { children: React.ReactNode }) {
    return(
            <button className=" hover:text-purple-500 text-white font-bold py-2 px-8 rounded-full transition-all mx-3">
                {children}
            </button>   
    )
}
export default Button;