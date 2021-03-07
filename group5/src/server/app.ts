/*
 *          *** Change Log ***

 commit e988e4e17acd23580639982e3ae9f8e10f4b1779
Author: Naomi Bonnin <naomi172839@gmail.com>
Date:   Sun Mar 7 08:09:11 2021 -0500

    Updated formatting on all of the pages to make them fit the standard style guides

    Signed-off-by: Naomi Bonnin <naomi172839@gmail.com>

 group5/src/server/app.ts | 60 ++++++++++++++++++++++++------------------------
 1 file changed, 30 insertions(+), 30 deletions(-)

commit a8d971a5fe9c41ff50516fb19709e57eef8c62b6
Author: Naomi Bonnin <naomi172839@gmail.com>
Date:   Sun Mar 7 07:56:38 2021 -0500

    Added the final functionality

    Added About Us

    Added Update Profile

    Added New Links

    Added Radio Buttons to Cancel Reservations

    Added Radio Buttons to Make Users Admins

    Signed-off-by: Naomi Bonnin <naomi172839@gmail.com>

 group5/src/server/app.ts | 19 +++++++++++++++++++
 1 file changed, 19 insertions(+)

commit 47b1cb2f596de0a2172ceaaf6756f7cf834d5ce3
Author: Naomi Bonnin <naomi172839@gmail.com>
Date:   Thu Mar 4 21:59:17 2021 -0500

    Added all sub admin pages
    Implemented basic functionality
    Everything seems to work ok
    Need to add the delete user/reservation still
    Need to add a user management portion still

    Signed-off-by: Naomi Bonnin <naomi172839@gmail.com>

 group5/src/server/app.ts | 3 +++
 1 file changed, 3 insertions(+)

commit f149fb209f18464fe278f6271542c2e771cb9fd8
Author: Naomi Bonnin <naomi172839@gmail.com>
Date:   Thu Mar 4 18:28:55 2021 -0500

    Made the reservation page functional

    Signed-off-by: Naomi Bonnin <naomi172839@gmail.com>

 group5/src/server/app.ts | 33 +++++++++++++++++++++++++++++++--
 1 file changed, 31 insertions(+), 2 deletions(-)

commit 93c0cd445a3c4715f12925948bc5abdb315f7e4c
Author: Naomi Bonnin <naomi172839@gmail.com>
Date:   Thu Mar 4 13:26:15 2021 -0500

    Added reservations to the profile page

    Signed-off-by: Naomi Bonnin <naomi172839@gmail.com>

 group5/src/server/app.ts | 25 ++++++++++++++++++++++++-
 1 file changed, 24 insertions(+), 1 deletion(-)

commit 41b8da4e7c6658324af21c70318ab22650c27212
Author: Naomi Bonnin <naomi172839@gmail.com>
Date:   Thu Mar 4 05:11:15 2021 -0500

    Added login functionality as well as basic cookie support

    Signed-off-by: Naomi Bonnin <naomi172839@gmail.com>

 group5/src/server/app.ts | 9 +++++++++
 1 file changed, 9 insertions(+)

commit 0e3e0e186566c04717a1355d7e99a0d69c57e058
Author: Naomi Bonnin <naomi172839@gmail.com>
Date:   Wed Mar 3 11:47:21 2021 -0500

    Created a working registration form

    Signed-off-by: Naomi Bonnin <naomi172839@gmail.com>

 group5/src/server/app.ts | 23 ++++++++++++++---------
 1 file changed, 14 insertions(+), 9 deletions(-)

commit f2a03e59cf7b4fab44cbbc3c0e9ec449ebe88f72
Author: Naomi Bonnin <naomi172839@gmail.com>
Date:   Sun Feb 28 17:07:20 2021 -0500

    Fixed a typo

    Signed-off-by: Naomi Bonnin <naomi172839@gmail.com>

 group5/src/server/app.ts | 10 +++++-----
 1 file changed, 5 insertions(+), 5 deletions(-)

commit 1cb04b247beffb17f35f907640bb7c9eba4a995d
Author: Naomi Bonnin <naomi172839@gmail.com>
Date:   Sun Feb 28 17:02:57 2021 -0500

    Added REST routes and things to be consumed by the front end.

    Still need to make them secure and work on persisting the session.

    Signed-off-by: Naomi Bonnin <naomi172839@gmail.com>

 group5/src/server/app.ts | 269 +++++++++++++++++++++++++++++++++++++++++++++--
 1 file changed, 259 insertions(+), 10 deletions(-)

commit 06aa099203a84415c47488341666434a0a891e00
Author: Naomi Bonnin <naomi172839@gmail.com>
Date:   Fri Feb 26 13:44:48 2021 -0500

    Added initial backend server,
    Updated models to reflect new requirements
    Updated launch scripts to reflect new server

    Signed-off-by: Naomi Bonnin <naomi172839@gmail.com>

 group5/src/server/app.ts | 38 ++++++++++++++++++++++++++++++++++++++
 1 file changed, 38 insertions(+)

 */

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
        res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
        res.setHeader('Access-Control-Allow-Credentials', "true");
        res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
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
        } catch (e) {
            res.send("Unable to create new user");
        }
    });

    // Create a new reservation
    app.post("/newReservation", upload.none(), async function(req: Request, res: Response) {
        res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
        res.setHeader('Access-Control-Allow-Credentials', "true");
        res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
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
        res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
        res.setHeader('Access-Control-Allow-Credentials', "true");
        res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
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
    app.post("/newRoom", upload.none(), async function(req: Request, res: Response) {
        res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
        res.setHeader('Access-Control-Allow-Credentials', "true");
        res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
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
    app.post("/userReservations", upload.none(), async function(req: Request, res: Response) {
        res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
        res.setHeader('Access-Control-Allow-Credentials', "true");
        res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
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
        res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
        res.setHeader('Access-Control-Allow-Credentials', "true");
        res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
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
        res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
        res.setHeader('Access-Control-Allow-Credentials', "true");
        res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
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
        res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
        res.setHeader('Access-Control-Allow-Credentials', "true");
        res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
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
        res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
        res.setHeader('Access-Control-Allow-Credentials', "true");
        res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
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
    app.post("/getOpenRooms", upload.none(), async function(req: Request, res: Response) {
        res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
        res.setHeader('Access-Control-Allow-Credentials', "true");
        res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
        try {
            const bookedRes = await connection
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
            const openRooms = await connection
                .createQueryBuilder()
                .select("room")
                .from(Room, "room")
                .leftJoinAndSelect("room.reservations", "reservation")
                .where(new Brackets(sd => {
                    sd.where("reservation.startDate < :startDate", { startDate: new Date(req.body.startDate) })
                        .andWhere("reservation.endDate < :endDate", { endDate: new Date(req.body.endDate) })
                })).orWhere(new Brackets(ed => {
                    ed.where("reservation.startDate > :startDate", { startDate: new Date(req.body.endDate) })
                        .andWhere("reservation.endDate > :endDate", { endDate: new Date(req.body.endDate) })
                }))
                .orWhere("reservation.assignedRoom IS NULL")
                .getRawMany();

            res.json(openRooms);
        } catch (e) {
            res.send("Unable to retrieve open rooms" + e);
        }
    });

    // Login the user
    app.post("/login", upload.none(), async function(req: Request, res: Response) {
        res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
        res.setHeader('Access-Control-Allow-Credentials', "true");
        res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
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
                res.cookie('firstName', checkUser.firstName, {
                    maxAge: 60 * 60 * 1000
                });
                res.cookie('lastName', checkUser.lastName, {
                    maxAge: 60 * 60 * 1000
                });
                res.cookie('admin', checkUser.admin, {
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
    app.post("/makeAdmin", upload.none(), async function(req: Request, res: Response) {
        res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
        res.setHeader('Access-Control-Allow-Credentials', "true");
        res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
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

    // Cancel a reservations
    app.post("/cancelReservation", upload.none(), async function(req: Request, res: Response) {
        res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
        res.setHeader('Access-Control-Allow-Credentials', "true");
        res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
        try {
            const deleted = await connection
                .createQueryBuilder()
                .softDelete()
                .from(Reservation)
                .where("uuid = :uuid", { uuid: req.body.uuid })
                .execute();
            res.json(deleted);

        } catch (e) {
            res.send("Unable to delete reservation");
        }
    });

    // Update the selected user
    app.post("/updateUser", upload.none(), async function(req: Request, res: Response) {
        res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
        res.setHeader('Access-Control-Allow-Credentials', "true");
        res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
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
                ).where("uuid = :uuid", { uuid: req.body.uuid })
                .execute();
            res.json(updateUser);
        } catch (e) {
            res.send("Unable to Update the selected user");
        }
    });

    // Start the express server
    app.listen(4000, () => {
        console.log(`Listening at http://localhost:${4000}`);
        console.log("HMR via nodemon");
    });
}).catch(e => {
    console.log(e);
});
