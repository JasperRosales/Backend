import {getStudents} from '../model/student.model.js';  

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