import pool from '../database/db.js';


export const getStudents = async () => {
    try {
        const [row] = await pool.query('SELECT * FROM tblstudent');
        return row;
    } catch (err){
        console.log(err);
    }
}

export const addSomeStudent = async (studentDetails) => {
    try{
        const {name, srcode, course} = studentDetails;
        const ADD_QUERY = 'INSERT INTO tblstudent (name, srcode, course) values (?,?,?)';
        const vals = [name, srcode, course];    

        const [res] = await pool.query(ADD_QUERY, vals);
        return res.insertId;

    }  catch (err) {
        console.error(err);
        throw err;
    }
}

export const updateSomeStudent = async (name, srcode, course, studentId) => {
    try {
      const [result] = await pool.query(
          "UPDATE tblstudent SET name=?, srcode=?, course=? WHERE id=?",
          [name, srcode, course, studentId]
      );
      return result.affectedRows;
    } catch (err) {
      console.error(err, "gagi ka boi update model");
      throw err; 
    }
};


export const deleteSomeStudent = async (studentId) => {
    const [res] = await pool.query(
        'DELETE FROM tblstudent WHERE id= ?', [studentId]
    );
    return res.affectedRows;
   
}