require('dotenv').config();

const expres = require('express');
const workoutRoutes = require('./routes/workout');

// express app
const app = expres();

app.use((req, res, next) => {
    console.log(req.method, req.path);
    next();
}).use(expres.static('public'));

// routes
app.use('/api/workouts', workoutRoutes);

// listen on port
app.listen(process.env.PORT, () => {
    console.log('Server is running on port', process.env.PORT);
});
