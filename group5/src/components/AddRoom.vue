<!--
Template for the admin page to add a room

        *** Change Log ***

        commit 8d82309e25d5a530e6b6e85e2224003ec309d605
Author: Naomi Bonnin <naomi172839@gmail.com>
Date:   Sun Mar 7 09:57:09 2021 -0500

    Added comments to all of the files that were missing them

    Signed-off-by: Naomi Bonnin <naomi172839@gmail.com>

 group5/src/components/AddRoom.vue | 29 
 1 file changed, 22 insertions(+), 7 deletions(-)

commit e988e4e17acd23580639982e3ae9f8e10f4b1779
Author: Naomi Bonnin <naomi172839@gmail.com>
Date:   Sun Mar 7 08:09:11 2021 -0500

    Updated formatting on all of the pages to make them fit the standard style guides

    Signed-off-by: Naomi Bonnin <naomi172839@gmail.com>

 group5/src/components/AddRoom.vue | 105
 1 file changed, 52 insertions(+), 53 deletions(-)

commit 47b1cb2f596de0a2172ceaaf6756f7cf834d5ce3
Author: Naomi Bonnin <naomi172839@gmail.com>
Date:   Thu Mar 4 21:59:17 2021 -0500

    Added all sub admin pages
    Implemented basic functionality
    Everything seems to work ok
    Need to add the delete user/reservation still
    Need to add a user management portion still

    Signed-off-by: Naomi Bonnin <naomi172839@gmail.com>

 group5/src/components/AddRoom.vue | 124
 1 file changed, 124 insertions(+)

-->
<template>
<div>
    <div>
        <h1>Rosebudd Hotel Profile Creation</h1>
        <!-- Create Profile for New Users -->
        <!--
        Creates the form fr a new room.
        Will call the processForm method when submit is pressed
        -->
        <form class="justify-content-center" id="newroom" @submit.prevent="this.processForm">
            <div>
                <!--
                The table containing all of the room types
                Will iterate through all of the room types avilable on page load
                -->
                <table id="type" name="type" class="table mt-5">
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
                        <tr v-for="(room, i) in this.rooms" :key="i">
                            <th scope="row">{{++i}}</th>
                            <td>{{room}}</td>
                            <td>{{this.roomTypes.get(room)}}</td>
                            <td>{{this.roomCosts.get(room)}}</td>
                            <td><input type="radio" name="roomType" id="roomType" v-model="roomType" :value="room" /></td>
                        </tr>

                    </tbody>
                </table>
            </div>
            <br>

            <div class="form-group row">
                <div class="col-sm-2">
                    <button class="btn btn btn-warning" type="submit">
                        Submit
                    </button>
                    <button class="btn btn btn-warning">
                        <router-link to="/"> Home </router-link>
                    </button>
                    <button class="btn btn btn-warning">
                        <router-link to="/adminhome"> Admin Home </router-link>
                    </button>
                </div>
            </div>
        </form>
    </div>
</div>
</template>


<script lang="ts">
// The typescript file that is used by vue to make the page responsive

// Use axios to simplify making the requests
import axios from 'axios';
axios.defaults.withCredentials = true;
import router from '../router';
// Export all of the things for use by vue
export default {
    data() {
        let roomType = '';
        let rooms = [];
        let roomTypes = new Map(); // Key-Value storage of types
        let roomCosts = new Map(); // Key-value storage of costs
        return {
            rooms,
            roomType,
            roomTypes,
            roomCosts
        };
    },
    methods: {
        processForm: function() { // Called when submit is pressed
            let data = new FormData();
            data.append('roomType', this.roomType);
            axios.post('http://localhost:4000/newRoom', data)
                .then(response => this.response = response.data)
                .then(router.push('adminhome'))
                .then(router.go(1))
                .catch(error => {
                    alert(error);
                });

        },
        getTypes: function() { // Call on page load
            axios.get('http://localhost:4000/getAllRoomTypes')
                .then((response) => {
                    let roomTypes = new Map();
                    let roomCosts = new Map();
                    let rooms = [];
                    response.data.forEach((room) => {
                        this.rooms.push(room.uuid);
                        this.roomTypes.set(room.uuid, room.typeName);
                        this.roomCosts.set(room.uuid, room.typeCost);
                    });
                }).catch(error => {
                    alert(error);
                });
        },
        getCookie: function(name) { // Helper to get cookie data
            let matches = document.cookie.match(new RegExp(
                "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
            ));
            return matches ? decodeURIComponent(matches[1]) : undefined;
        }
    },
    update() {}, // Empty as it was too much for the browser
    mounted() { // Called on page load
        let uuid = this.getCookie("uuid");
        this.uuid = uuid;
        let firstName = this.getCookie("firstName");
        this.firstName = firstName;
        let lastName = this.getCookie("lastName");
        this.lastName = lastName;
        this.getTypes();

    }
};
</script>



<style>
input {
    margin: auto;
}
</style>
