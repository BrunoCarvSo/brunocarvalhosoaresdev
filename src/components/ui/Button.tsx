import React from 'react';

function Button({ children }: { children: React.ReactNode }) {
    return(
            <button className="bg-purple-500 hover:bg-purple-800 text-white font-bold py-2 px-4 rounded-full transition-all">
                {children}
            </button>   
    )
}
export default Button;