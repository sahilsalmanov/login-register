const { default: mongoose } = require("mongoose");

const db = {
    connect: async () => {
        try {
            await mongoose.connect("mongodb+srv://Orkhan96:Orkhan1996@cluster0.butk1ko.mongodb.net/ForgetPasswordRADFE202DB");
            console.log('CONNECTED!');

        } catch (err) {
            console.log('Mongodb connection error!!');
            console.log(err);
        }
    }
}

module.exports = {
    db
}