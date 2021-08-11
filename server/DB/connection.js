const mongoose = require("mongoose")

mongoose.connect(`mongodb://localhost:27017/mesima4_orensayag`,{
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

mongoose.connection.once(`open`, ()=>{
    console.log('The goose is loose')
}).on("error", (error)=>{
    console.log(error)
})

