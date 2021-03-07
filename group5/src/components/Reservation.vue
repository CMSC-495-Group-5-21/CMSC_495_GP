<template>
<div>
    <h1>Reserve a Room at Rosebudd Hotel</h1>
    <form id="newReservation" class="justify-content-center" @submit.prevent="this.processForm">
        <!-- login -->
        <div class="name">
            <label for="user" class="grey-text">Reservation For: </label>
            <br />
            <label v-if="!!this.uuid" id="user" name="user">{{
          this.firstName + " " + this.lastName
        }}</label>
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
        <!-- Room select -->
        <div v-show="this.show">
            <label v-if="!this.openRooms.length" id="notfound" name="notfound">
                No Open Rooms Found
            </label>
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
        <!-- Submit and Home Buttons -->
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
import axios from "axios";
axios.defaults.withCredentials = true;
import router from "../router";
export default {
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
        let roomTypes = new Map();
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
        processForm: function() {
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
        getRooms: function() {
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
        getCookie: function(name) {
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
    update() {},
    mounted() {
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
