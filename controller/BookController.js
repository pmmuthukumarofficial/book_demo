
const Book = require('../model/Book')


exports.getAllBooks = async (req, res)=>{
    try{
        const books = await Book.find();
        res.json(books)
    }
    catch(err){
        res.status(500).json({msg: err.message}) 
    }
}

exports.getSingleBook = async (req, res)=>{
    try{
        const book = await Book.findOne({bookId: req.params.id})
        if(book)
            res.json(book);
        else    
            res.json({msg : 'Book doesnt exists'})
    }
    catch(err){
        res.status(500).json({msg: err.messge})
    }
}

exports.addNewBook = async (req, res)=>{
    try{
        const book = await Book.findOne({bookId: req.body.bookId})
        if(!book)
        {
            const addedBook = await Book.create(req.body)
            res.send(addedBook)
        }
        else
            res.send({msg: 'data already exists'})
    }
    catch(err){
        res.status(500).json({msg: err.message})
    }
}