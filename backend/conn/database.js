const mongoose=require('mongoose');


async function getconnection(){
    mongoose.set('strictQuery', true);
    await (await (await mongoose.connect('mongodb+srv://haripriya:Hari@7864@cluster0.9vidhrm.mongodb.net/?retryWrites=true&w=majority')));
}

module.exports = getconnection;


