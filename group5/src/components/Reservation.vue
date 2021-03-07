<!--
Template for reserving a new room
Must first be logged in

            *** Change Log ***

            commit 8d82309e25d5a530e6b6e85e2224003ec309d605
Author: Naomi Bonnin <naomi172839@gmail.com>
Date:   Sun Mar 7 09:57:09 2021 -0500

    Added comments to all of the files that were missing them

    Signed-off-by: Naomi Bonnin <naomi172839@gmail.com>

 group5/src/components/Reservation.vue | 47 
 1 file changed, 37 insertions(+), 10 deletions(-)

commit e988e4e17acd23580639982e3ae9f8e10f4b1779
Author: Naomi Bonnin <naomi172839@gmail.com>
Date:   Sun Mar 7 08:09:11 2021 -0500

    Updated formatting on all of the pages to make them fit the standard style guides

    Signed-off-by: Naomi Bonnin <naomi172839@gmail.com>

 group5/src/components/Reservation.vue | 372
 1 file changed, 168 insertions(+), 204 deletions(-)

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

 group5/src/components/Reservation.vue | 2
 1 file changed, 1 insertion(+), 1 deletion(-)

commit 984468982686b950668c45460d24efb88491a86e
Author: vanderpunk <69319211+vanderpunk@users.noreply.github.com>
Date:   Thu Mar 4 22:06:44 2021 -0500

    Modified ContactUs, HelloWorld, ProfileCreation, and Reservation

 group5/src/components/Reservation.vue | 361
 1 file changed, 207 insertions(+), 154 deletions(-)

commit f149fb209f18464fe278f6271542c2e771cb9fd8
Author: Naomi Bonnin <naomi172839@gmail.com>
Date:   Thu Mar 4 18:28:55 2021 -0500

    Made the reservation page functional

    Signed-off-by: Naomi Bonnin <naomi172839@gmail.com>

 group5/src/components/Reservation.vue | 161
 1 file changed, 134 insertions(+), 27 deletions(-)

commit 8ce476b3d9df55a9f6b5901a191cc432031a4597
Author: Justin <justpallett@gmail.com>
Date:   Tue Mar 2 21:44:23 2021 -0500

    added form action

 group5/src/components/Reservation.vue | 4
 1 file changed, 1 insertion(+), 3 deletions(-)

commit fa77c2265c9c46f2450e4a40f5f798b7dc46015e
Author: Justin <justpallett@gmail.com>
Date:   Tue Mar 2 21:37:51 2021 -0500

    add API methods to forms

 group5/src/components/Reservation.vue | 87
 1 file changed, 45 insertions(+), 42 deletions(-)

commit 8a36910f3b27be82f33a0487f442d478c8f67124
Author: vanderpunk <69319211+vanderpunk@users.noreply.github.com>
Date:   Mon Mar 1 21:04:49 2021 -0500

    Changed lobby image, modified components

 group5/src/components/Reservation.vue | 76
 1 file changed, 41 insertions(+), 35 deletions(-)

commit 4b395755a8880d386a9f68aff891cf66dc273749
Author: Naomi Bonnin <naomi172839@gmail.com>
Date:   Sun Feb 28 21:54:53 2021 -0500

    Merging the changes

    Signed-off-by: Naomi Bonnin <naomi172839@gmail.com>

 group5/src/components/Reservation.vue | 5
 1 file changed, 3 insertions(+), 2 deletions(-)

commit ebd7dbc8bc7051ae4d1348e6a37352432c61ac4f
Author: Naomi Bonnin <naomi172839@gmail.com>
Date:   Mon Feb 22 14:26:15 2021 -0500

    Completed conversion to VueJS3, Vite, TypeScript.

    Functionally identical to the previous WebPack and VueJS2 built but is much faster, smarter and can actually be used with modern libraries.

    Signed-off-by: Naomi Bonnin <naomi172839@gmail.com>

 group5/src/components/Reservation.vue | 66
 1 file changed, 66 insertions(+)

-->
<template>
<div>
    <h1>Reserve a Room at Rosebudd Hotel</h1>
    <!--
    For to be completed by the user to request a new room
    -->
    <form id="newReservation" class="justify-content-center" @submit.prevent="this.processForm">
        <!-- If the user is logged in display their name
        Else display a login button
        -->
        <div class="name">
            <label for="user" class="grey-text">Reservation For: </label>
            <br />
            <label v-if="!!this.uuid" id="user" name="user">{{
          this.firstName + " " + this.lastName
        }}</label>
            <button v-else id="login2" name="login2">
                <router-link to="login"> Login </router-link>
            </button>

        </div>
        <!-- date text -->
        <div class="date">
            <br />
            <label for="startDate" class="grey-text"> Start Date: </label>
            <input type="date" id="startDate" name="startDate" class="form-control" v-model="startDate" />
            <br />
            <br />
            <label for="endDate" class="grey-text"> End Date: </label>
            <input type="date" id="endDate" name="endDate" class="form-control" v-model="endDate" />
        </div>
        <!--
        If no open rooms are within the date range, show the no rooms message
        else display list of rooms
        -->
        <div v-show="this.show">
            <label v-if="!this.openRooms.length" id="notfound" name="notfound">
                No Open Rooms Found
            </label>
            <!--
            Creates a dynamic table of rooms aviliable during the specified
            date range
            -->
            <table v-else id="openRooms" name="openRooms" class="table mt-5">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">ID</th>
                        <th scope="col">Room Type</th>
                        <th scope="col">Room Cost</th>
                        <th scope="col">Select</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(room, i) in this.openRooms" :key="i">
                        <th scope="row">{{ ++i }}</th>
                        <td>{{ room.room_uuid }}</td>
                        <td>{{ this.roomTypes.get(room.room_roomTypeUuid) }}</td>
                        <td>{{ this.roomCosts.get(room.room_roomTypeUuid) }}</td>
                        <td>
                            <input type="radio" name="assignedRoom" id="assignedRoom" v-model="assignedRoom" :value="room.room_uuid" />
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <br />
        <!--
        Button to get the aviliable rooms
        Calls getRooms when pressed
        -->
        <button class="btn btn btn-danger" id="getrooms" @click.prevent="this.getRooms">
            Get Open Rooms
        </button>
        <!-- Special Requests -->
        <br />
        <br />
        <label for="specialRequests" class="requests"> Special Requests: </label>
        <textarea id="specialRequest" name="specialRequest" class="form-control" placeholder="Please enter requests (Optional)" v-model="specialRequests" rows="6" columns="50" />
        <br />
        <br />
        <!-- Buttons -->
        <ul>
            <li>
                <div class="container-fluid">
                    <button class="btn btn btn-standard" type="submit">
                        Submit
                    </button>
                </div>
            </li>
            <li>
                <div class="container-fluid">
                    <button class="btn btn btn-standard">
                        <router-link to="/"> Home </router-link>
                    </button>
                </div>
            </li>
        </ul>
    </form>
</div>
</template>

<script lang="ts">
// Script to expose everything to vue and proceess forms

// Use axios for requests, for simplicity
import axios from "axios";
axios.defaults.withCredentials = true;
import router from "../router";
export default { // Expose everything to vue
    data() {
        let uuid = "";
        let firstName = "";
        let lastName = "";
        let startDate = "";
        let endDate = "";
        let assignedRoom = "";
        let specialRequests = "";
        let openRooms = [];
        let show = false;
        let roomTypes = new Map(); // Key-Value pairs for types
        let roomCosts = new Map();
        return {
            uuid,
            firstName,
            lastName,
            startDate,
            endDate,
            assignedRoom,
            specialRequests,
            openRooms,
            show,
            roomTypes,
            roomCosts,
        };
    },
    methods: {
        processForm: function() { // Called when submit is pressed
            let data = new FormData();
            data.append("startDate", this.startDate);
            data.append("endDate", this.endDate);
            data.append("assignedRoom", this.assignedRoom);
            data.append("specialRequests", this.specialRequests);
            data.append("createdBy", this.uuid);
            data.append("adminCreate", false);
            axios
                .post("http://localhost:4000/newReservation", data)
                .then((response) => (this.response = response.data))
                .then(router.push("thankyou"))
                .then(router.go(1))
                .catch((error) => {
                    alert(error);
                });
        },
        getRooms: function() { // Called when get rooms is pressed
            this.show = true;
            let data = new FormData();
            data.append("startDate", this.startDate);
            data.append("endDate", this.endDate);
            axios
                .post("http://localhost:4000/getOpenRooms", data)
                .then((response) => response.data)
                .then((data) => (this.openRooms = data))
                .catch((error) => {
                    alert(error);
                });
            console.log(this.openRooms);
        },
        getTypes: function() {
            axios
                .get("http://localhost:4000/getAllRoomTypes")
                .then((response) => {
                    let roomTypes = new Map();
                    let roomCosts = new Map();
                    response.data.forEach((room) => {
                        this.roomTypes.set(room.uuid, room.typeName);
                        this.roomCosts.set(room.uuid, room.typeCost);
                    });
                })
                .catch((error) => {
                    alert(error);
                });
        },
        getCookie: function(name) { // Helper to pull and parse cookie data
            let matches = document.cookie.match(
                new RegExp(
                    "(?:^|; )" +
                    name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1") +
                    "=([^;]*)"
                )
            );
            return matches ? decodeURIComponent(matches[1]) : undefined;
        },
    },
    update() {}, // Excluded due to overloading page with requests
    mounted() { // Called on page load
        let uuid = this.getCookie("uuid");
        this.uuid = uuid;
        let firstName = this.getCookie("firstName");
        this.firstName = firstName;
        let lastName = this.getCookie("lastName");
        this.lastName = lastName;
        this.getTypes();
    },
};
</script>

<style>
.name {}

.date {}

.container-fluid {
    color: black;
}

li {
    display: inline-block;
    margin: 0 10px;
}
</style>
