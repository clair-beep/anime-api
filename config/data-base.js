const mongoose = require('mongoose')

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.DB_STRING, {
      serverSelectionTimeoutMS: 5000,
      socketTimeoutMS: 45000
    })

    console.log(`MongoDB Connected: ${conn.connection.host}`)
  } catch (err) {
    if (err) return console.error("Error: ", err)
    console.log(
      "MongoDB Connection -- Ready state is:",
      mongoose.connection.readyState) 
    }
}

module.exports = connectDB