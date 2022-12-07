import React, { createContext } from 'react';

export const BookContext = createContext({});


export default function BookProvider({ children }) {

    async function saveBook(data) {
        console.log(data);
    }
    
    return (
        <BookContext.Provider value={{
            saveBook
        }}>
            {children}
        </BookContext.Provider>
    )
}