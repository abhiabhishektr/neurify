import express from 'express'
import mongoose from 'mongoose'
import userRouter from './routes/userRoutes'



const app = express();
app.use(express.json());


app.get('/home', (request, response) => {
  console.log(request.url)
  response.json({ message: `Welcome to the home page!` })
});

app.use('/user', userRouter);

mongoose.connect('mongodb://localhost:27017/newone')
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.log(err))

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on PORT ${PORT}`);
})
