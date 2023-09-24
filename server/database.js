const  mongoose = require ('mongoose');

const connectDatabase = async (url) => {
    try {
        await mongoose.connect(url, { useNewUrlParser: true,useUnifiedTopology: true })
    } catch (error) {
        console.log('Error while connecting to the database ', error);
    }
};

module.exports = {connectDatabase};


