import React, { createContext, useEffect, useState } from 'react';
import getRealm from '../services/realm';

export const BookContext = createContext({});


export default function BookProvider({ children }) {
    const [books, setBooks] = useState([
        { id: 1,
          title: 'A Roda do Tempo',
          serie: 'A Ascenção da Sombra',
          author: 'Robert Jordan',
          vol: 1,
          price: 59.99,
          description: 'Em A ascensão da sombra, Jordan imprime ainda mais suspense à série trazendo uma ameaça até então desconhecida à cidade de Tar Valon, lar das poderosas Aes Sedai. Mergulhados no perigo constante representado pelos Mantos-brancos, os Amigos das Trevas e os Trollocs, entre outros inimigos mortais, ninguém está seguro de qual rumo seguir. Movimentos profundos e inesperados que fazem de A Roda do Tempo uma das mais extraordinárias séries já escritas.',
        },
        { id: 2,
          title: 'Conjurador',
          serie: 'O Aprendiz',
          author: 'Taran Matharu',
          vol: 1,
          price: 29.99,
          description: 'Em A ascensão da sombra, Jordan imprime ainda mais suspense à série trazendo uma ameaça até então desconhecida à cidade de Tar Valon, lar das poderosas Aes Sedai. Mergulhados no perigo constante representado pelos Mantos-brancos, os Amigos das Trevas e os Trollocs, entre outros inimigos mortais, ninguém está seguro de qual rumo seguir. Movimentos profundos e inesperados que fazem de A Roda do Tempo uma das mais extraordinárias séries já escritas.',
        },
    ])
    useEffect(() => {
        async function loadBooks() {
            
        }
        loadBooks();
    },[])

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
    }
    
    return (
        <BookContext.Provider value={{
            saveBook,
            books
        }}>
            {children}
        </BookContext.Provider>
    )
}