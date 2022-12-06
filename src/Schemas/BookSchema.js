export default class BookSchema {
    static schema = {
        name: 'Book',
        primaryKey: 'id',
        properties: {
            id:{ type: 'int', indexed: true },
            title: 'string',
            serie: 'string',
            author: 'string',
            vol: 'string',
            price: 'string',
            description: 'string',
        }
    }
}