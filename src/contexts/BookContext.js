import React, { createContext, useEffect, useState } from 'react';
import getRealm from '../services/realm';

export const BookContext = createContext({});


export default function BookProvider({ children }) {
    const [books, setBooks] = useState([]);
    const [reloadBooks, setReloadBooks] = useState(true);
   
    useEffect(() => {
        async function loadBooks() {
            const realm = await getRealm();
            const data = await realm.objects('Book').sorted('id', false);
            setBooks(data);
        }
        loadBooks();
    },[reloadBooks])

    async function saveBook(data) {
        const realm = await getRealm();

        const id = realm.objects('Book').sorted('id', true).length > 0
        ? realm.objects('Book').sorted('id', true)[0].id + 1 : 1;

        const dataBook = {
            id: id,
            title: data.title,
            serie: data.serie,
            author: data.author,
            vol: data.vol,
            price: data.price,
            description: data.description,
        };

        realm.write(() => {
            realm.create('Book', dataBook)
        });
        setReloadBooks(!reloadBooks);
    }

    async function editBook(response) {
        const realm = await getRealm();

        realm.write(() => {
            realm.create('Book', response, 'modified')
        });
        const alterateData = await realm.objects('Book').sorted('id', false);
        setBooks(alterateData);
    }
    
    return (
        <BookContext.Provider value={{
            saveBook,
            books,
            editBook
        }}>
            {children}
        </BookContext.Provider>
    )
}