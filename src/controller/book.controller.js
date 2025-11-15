import {getBooks, addBook, updateSomeBook, deleteSomeBook} from '../model/book.model.js';


export const getAllbooks = async (req, res) => {
    try {
        const books = await getBooks();
        res.status(200).json(books);
    } catch (err){
        console.error(err);

        res.status(500).json({
            "message":"May mali pu",
            error: error.message
        })
    }
}

export const addSomeBook = async (req, res) => {
    try{ 
        const reqBody = req.body;
        const book = await addBook(reqBody);
        res.status(201).json({
            "message":"added sakses",
            "bookdID": book.insertId
        })
    } catch (err){
        console.error(err);
    }
}

export const updateBook = async (req, res) => {
    const {bookId} = req.params;
    const {title, genre, status} = req.body;
    try {
        const result = await updateSomeBook(title, genre, status, bookId);
        res.status(200).json({
            message: "sakses",
            affectedrows: result
        })
    } catch (err){
            console.error(err);
            res.status(500).json({ error: 'May Mali sa iyo'})
    } 
}

export const deleteBook = async (req, res) => {
    const {bookId} = req.params;
    try{
        const result = await deleteSomeBook(bookId);
        res.status(200).json({
            message:"nadelete mo sya",
            affectedRows: result
        })    
    }catch (err){
        console.error(err);
        res.status(500).json({ error: 'Delete mo sya madelete sa buhay mo'})
    }
}

