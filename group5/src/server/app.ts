// Express imports
import express from "express";
import { Request, Response } from "express";

// TypeORM imports
import { createConnection, getManager } from "typeorm";
import { User } from "./entity/User";
import { Reservation } from "./entity/Reservation";
import { Room } from "./entity/Room";
import { RoomType } from "./entity/RoomType";


// Create and setup express application
const app = express();
const port = 4000;
app.use(express.json());


// Create database createConnection
createConnection().then(connection => {

    const manager = getManager();


    // Register routes below
    app.get("/", async function(req: Request, res: Response) {
        const users = await manager.createQueryBuilder(User, user)
            .where("user.username = :username", { username: nbonnin })
            .getOne();
        res.json(users);
    });

    // Start the express server
    app.listen(port, () => {
        console.log(`Listening at http://localhost:${port}`);
        console.log("HMR via nodemon");
    });
});
