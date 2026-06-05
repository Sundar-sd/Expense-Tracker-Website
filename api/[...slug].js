import serverless from 'serverless-http';
import app from '../backend/app.js';

console.log("API FUNCTION LOADED");

export default serverless(app);


