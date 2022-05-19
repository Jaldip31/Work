const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        const con = await mongoose.connect("mongodb://localhost:27017/HotalDB", {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }).then(console.log("connected...")).catch(e => console.log(e))
    }
    catch (e) {
        console.log(e);
    }
}

module.exports = connectDB