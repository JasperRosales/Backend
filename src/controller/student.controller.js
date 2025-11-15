import {addSomeStudent, deleteSomeStudent, getStudents, updateSomeStudent} from '../model/student.model.js';  

export const getAllStudents = async (req, res) => {
    try {
        const books = await getStudents();
        res.status(200).json(books);
    } catch (err){
        console.error(err);

        res.status(500).json({
            "message":"May mali pu",
            error: error.message
        })
    }
}

export const addStudent = async (req, res) => {
    try{ 
        const reqBody = req.body;
        const student = await addSomeStudent(reqBody);
        res.status(201).json({
            "message":"added sakses",
            "studentId": student.insertId
        })
    } catch (err){
        console.error(err);
    }
}

export const updateStudent = async (req, res) => {
    const {studentId} = req.params;
    const {name, srcode, course} = req.body;
    try {
        const result = await updateSomeStudent(name, srcode, course, studentId);
        res.status(200).json({
            message: "sakses",
            affectedrows: result
        })
    } catch (err){
            console.error(err);
            res.status(500).json({ error: 'May Mali sa iyo'})
    } 
}

export const deleteStudent = async (req, res) => {
    const {studentId} = req.params;
    try{
        const result = await deleteSomeStudent(studentId);
        res.status(200).json({
            message:"nadelete mo sya",
            affectedRows: result
        })    
    }catch (err){
        console.error(err);
        res.status(500).json({ error: 'Delete mo sya madelete sa buhay mo'})
    }
}