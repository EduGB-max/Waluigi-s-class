const mongoose = require('mongoose')
const conn = async()=>{

    //mongoAtlas
    const atlas = await mongoose.connect('mongodb+srv://userNovo:gffc1608@gabonito.th4xf.mongodb.net/todo_list')
}

module.exports = conn