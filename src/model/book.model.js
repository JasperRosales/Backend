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
        const {title, genre, status} = bookDetails;
        const ADD_QUERY = 'INSERT INTO tblbook (title, genre, status) values (?,?,?)';
        const vals = [title, genre, status];    

        const [res] = await pool.query(ADD_QUERY, vals);
        return res.insertId;

    }  catch (err) {
        console.error(err);
        throw err;
    }
}

export const updateSomeBook = async (title, genre, status, bookId) => {
    try {
      const [result] = await pool.query(
          "UPDATE tblbook SET title=?, genre=?, status=? WHERE id=?",
          [title, genre, status, bookId]
      );
      return result.affectedRows;
    } catch (err) {
      console.error(err, "gagi ka boi update model");
      throw err; 
    }
}

export const deleteSomeBook = async (bookId) => {
    const [res] = await pool.query(
        'DELETE FROM tblbook WHERE id= ?', [bookId]
    );
    return res.affectedRows;
   
}

