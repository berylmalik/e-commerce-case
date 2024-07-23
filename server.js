require("dotenv").config();
const app = require("./main");
const { sequelize } = require("./models");
const PORT = process.env.PORT;

async function startServer() {
    try {
        await sequelize.authenticate();
        console.log("Database connected");
        app.listen(PORT, () => console.log("Server is running on port:", PORT));
    } catch (error) {
        console.log("Unable to connect to the database:", error);
    }
}

startServer();
