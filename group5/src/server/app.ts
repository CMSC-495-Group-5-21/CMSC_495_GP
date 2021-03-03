// Express imports
import express from "express";
import { Request, Response } from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import multer from "multer";
import session from "express-session";
import cors from 'cors';

// Bcrypt for password hashing
import bcrypt from "bcrypt";

// TypeORM imports
import { createConnection, getManager, Brackets } from "typeorm";
import { User } from "./entity/User";
import { Reservation } from "./entity/Reservation";
import { Room } from "./entity/Room";
import { RoomType } from "./entity/RoomType";


// Create and setup express application
const app = express();
const upload = multer();
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(session({ secret: "CMSC_495_GP Group5 2021" }));
app.use(cors());


// Create database createConnection
createConnection().then(connection => {

    const manager = getManager();

    // Register routes below

    // Create a new user
    app.post("/newUser", upload.none(), async function(req: Request, res: Response) {
        try {
            const password = req.body.password;
            const hashed = await bcrypt.hashSync(password, 10);
            const newUser = await connection
                .createQueryBuilder()
                .insert()
                .into(User)
                .values([
                    {
                        username: req.body.username,
                        passwordHash: hashed,
                        firstName: req.body.firstName,
                        middleName: req.body.middleName,
                        lastName: req.body.lastName,
                        prefix: req.body.prefix,
                        suffix: req.body.suffix,
                    }
                ])
                .execute();
            res.json(newUser);
        } catch(e) {
            res.send("Unable to create new user");
        }
    });

    // Create a new reservation
    app.post("/newReservation", upload.none(), async function(req: Request, res: Response) {
        console.log("New Reservation Request Recieved");
        try {
            const newRes = await connection
                .createQueryBuilder()
                .insert()
                .into(Reservation)
                .values([
                    {
                        startDate: new Date(req.body.startDate),
                        endDate: new Date(req.body.endDate),
                        assignedRoom: req.body.assignedRoom,
                        createdBy: req.body.createdBy,
                        adminCreate: req.body.adminCreate,
                        specialRequests: req.body.specialRequests
                    }
                ])
                .execute();
            res.json(newRes);
        } catch (e) {
            res.send("Failed to create reservation")
        }
    });

    // Create a new room type
    app.post("/newRoomType", upload.none(), async function(req: Request, res: Response) {
        try {
            const newType = await connection
                .createQueryBuilder()
                .insert()
                .into(RoomType)
                .values([
                    {
                        typeName: req.body.typeName,
                        typeCost: req.body.typeCost
                    }
                ])
                .execute();
            res.json(newType);

        } catch (e) {
            res.send("Failed to create new room type");
        }
    });

    // Create a new room
    app.post("/newRoom",upload.none(), async function(req: Request, res: Response) {
        try {
            const newRoom = await connection
                .createQueryBuilder()
                .insert()
                .into(Room)
                .values([
                    {
                        roomType: req.body.roomType,

                    }
                ])
                .execute();
            res.json(newRoom);
        } catch (e) {
            res.send("Failed to create new room");
        }
    });

    // Get all reservations for a user
    app.post("/userReservations",upload.none(), async function(req: Request, res: Response) {
        try {
            const reservations = await connection
                .createQueryBuilder()
                .select("reservations")
                .from(Reservation, "reservations")
                .where("reservations.createdBy = :createdBy", { createdBy: req.body.createdBy })
                .getMany();
            res.json(reservations);
        } catch (e) {
            res.send("Failed");
        }
    });

    // Get all rooms
    app.get("/getAllRooms", async function(req: Request, res: Response) {
        try {
            const rooms = await connection
                .createQueryBuilder()
                .select("rooms")
                .from(Room, "rooms")
                .getMany();
            res.json(rooms);
        } catch (e) {
            res.send("Unable to retrieve rooms");
        }
    });

    // Get all room types
    app.get("/getAllRoomTypes", async function(req: Request, res: Response) {
        try {
            const types = await connection
                .createQueryBuilder()
                .select("types")
                .from(RoomType, "types")
                .getMany();
            res.json(types);
        } catch (e) {
            res.send("Unable to retrieve room types");
        }
    });

    // Get all reservations
    app.get("/getAllReservations", async function(req: Request, res: Response) {
        try {
            const reservations = await connection
                .createQueryBuilder()
                .select("reservations")
                .from(Reservation, "reservations")
                .getMany();
            res.json(reservations);
        } catch (e) {
            res.send("Unable to retrieve reservations");
        }
    });

    // Get all users
    app.get("/getAllUsers", async function(req: Request, res: Response) {
        try {
            const users = await connection
                .createQueryBuilder()
                .select("users")
                .from(User, "users")
                .getMany();
            res.json(users);
        } catch (e) {
            res.send("Unable to retrieve users");
        }
    });

    // Get all open rooms
    app.post("/getOpenRooms",upload.none(), async function(req: Request, res: Response) {
        try {
            const openRooms = await connection
                .createQueryBuilder()
                .select("rooms")
                .from(Reservation, "rooms")
                .where(new Brackets(sd => {
                    sd.where("rooms.startDate < :startDate", { startDate: new Date(req.body.startDate) })
                        .andWhere("rooms.endDate < :endDate", { endDate: new Date(req.body.endDate) })
                })).orWhere(new Brackets(ed => {
                    ed.where("rooms.startDate > :startDate", { startDate: new Date(req.body.endDate) })
                        .andWhere("rooms.endDate > :endDate", { endDate: new Date(req.body.endDate) })
                }))
                .getMany();
            res.json(openRooms);
        } catch (e) {
            res.send("Unable to retrieve open rooms");
        }
    });

    // Login the user
    app.post("/login",upload.none(), async function(req: Request, res: Response) {
        try {
            const checkUser = await connection
                .createQueryBuilder()
                .select("user")
                .from(User, "user")
                .where("user.username = :username", { username: req.body.username })
                .getOneOrFail();
            const match = bcrypt.compareSync(req.body.password, checkUser.passwordHash);
            if (match) {
                res.cookie('uuid', checkUser.uuid, {
                    maxAge: 60 * 60 * 1000
                });
                res.send("Success");
            } else {
                res.send("Incorrect Password");
            }
        } catch (e) {
            res.send("User not found");
        }
    });

    // Make a user the admin
    app.post("/makeAdmin",upload.none(), async function(req: Request, res: Response) {
        try {
            const newAdmin = await connection
                .createQueryBuilder()
                .update(User)
                .set({ admin: true })
                .where("uuid = :uuid", { uuid: req.body.uuid })
                .execute()
            res.json(newAdmin);
        } catch (e) {
            res.send("Failed to update admin status");
        }
    });

    // Update the selected user
    app.post("/updateUser", upload.none(), async function(req: Request, res: Response) {
        try {
            const password = req.body.password;
            const hashed = await bcrypt.hashSync(password, 10);
            const updateUser = await connection
                .createQueryBuilder()
                .update(User)
                .set(
                    {
                        username: req.body.username,
                        passwordHash: hashed,
                        firstName: req.body.firstName,
                        middleName: req.body.middleName,
                        lastName: req.body.lastName,
                        prefix: req.body.prefix,
                        suffix: req.body.suffix,
                    }
                ).where("uuid = :uuid", {uuid: req.body.uuid})
                .execute();
            res.json(updateUser);
        } catch(e) {
            res.send("Unable to Update the selected user");
        }
    });

    // Start the express server
    app.listen(4000, () => {
        console.log(`Listening at http://localhost:${4000}`);
        console.log("HMR via nodemon");
    });
});
