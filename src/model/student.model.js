import pool from '../database/db.js';


export const getStudents = async () => {
    try {
        const [row] = await pool.query('SELECT * FROM tblstudent');
        return row;
    } catch (err){
        console.log(err);
    }
}