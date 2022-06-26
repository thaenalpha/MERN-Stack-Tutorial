require('dotenv').config();

const expres = require('express');
const mongoose = require('mongoose');
const workoutRoutes = require('./routes/workout');

// express app
const app = expres();

app.use((req, res, next) => {
    console.log(req.method, req.path);
    next();
}).use(expres.json());

// routes
app.use('/api/workouts', workoutRoutes);

// connect to db
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true })
        .then(() => {
            // listen on port
            app.listen(process.env.PORT, () => {
                console.log('Server is running on port', process.env.PORT);
            });
        })
        .catch(err => console.error(err));
