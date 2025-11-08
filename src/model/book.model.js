import pool from '../database/db.js';


export const getBooks = async () => {
    try {
        const [row] = await pool.query('SELECT * FROM tblbook');
        return row;
    } catch (err){
        console.log(err);
    }
}

export const addBook = async (bookDetails) => {
    try{
        const {title, genre, Status} = bookDetails;
        const ADD_QUERY = 'INSERT INTO tblbook (title, genre, Status) values (?,?,?)';
        const vals = [title, genre, Status];    

        const [res] = await pool.query(ADD_QUERY, vals);
        return res.insertId;

    }  catch (err) {
        console.error(err);
        throw err;
    }
}

export const updateSomeBook = async (bookId, bookdetails) => {
    try{
        const UPDATE_QUERY = 'UPDATE tblbook SET Status = ? where id = ?'

        const [res] = await pool.query(UPDATE_QUERY, [bookdetails.Status, bookId])
        return res;
    } catch (err){
        console.error(err, "gagi ka boi update model")
    }
}

