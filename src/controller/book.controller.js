import {getBooks, addBook, updateSomeBook} from '../model/book.model.js';


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
    try {
        const {id} = req.params;
        const details = res.body;

        try {
            const result = await updateSomeBook(id, details);

            if (result.affectedRows === 0) {
                return res.status(404).json({ message: 'Book not found or no changes made.' });
            }
            res.status(200).json({
                message: "sakses",
                bookId: id
            })
        } catch (err){
            console.error(err);
            res.status(500).json({ error: 'May Mali sa iyo'})
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "omsim"})
    }
}