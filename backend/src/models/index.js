const mongoose=require('mongoose')

async function connectDatabase(){
    const dbUri='mongodb+srv://raushan:raushan@assignment.fmh0vt1.mongodb.net/?retryWrites=true&w=majority'

    try {
        await mongoose.connect(dbUri);
        console.log('connect to database');
    } catch (error) {
        console.log("Error connecting to database");
        throw error        
    }
}

module.exports=connectDatabase