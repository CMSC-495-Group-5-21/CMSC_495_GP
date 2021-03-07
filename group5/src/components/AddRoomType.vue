<!--
Template for adding a new type of room
This is an admin page

        *** Change Log ***
        commit 8d82309e25d5a530e6b6e85e2224003ec309d605
Author: Naomi Bonnin <naomi172839@gmail.com>
Date:   Sun Mar 7 09:57:09 2021 -0500

    Added comments to all of the files that were missing them

    Signed-off-by: Naomi Bonnin <naomi172839@gmail.com>

 group5/src/components/AddRoomType.vue | 15 
 1 file changed, 12 insertions(+), 3 deletions(-)

commit e988e4e17acd23580639982e3ae9f8e10f4b1779
Author: Naomi Bonnin <naomi172839@gmail.com>
Date:   Sun Mar 7 08:09:11 2021 -0500

    Updated formatting on all of the pages to make them fit the standard style guides

    Signed-off-by: Naomi Bonnin <naomi172839@gmail.com>

 group5/src/components/AddRoomType.vue | 2 +-
 1 file changed, 1 insertion(+), 1 deletion(-)

commit 47b1cb2f596de0a2172ceaaf6756f7cf834d5ce3
Author: Naomi Bonnin <naomi172839@gmail.com>
Date:   Thu Mar 4 21:59:17 2021 -0500

    Added all sub admin pages
    Implemented basic functionality
    Everything seems to work ok
    Need to add the delete user/reservation still
    Need to add a user management portion still

    Signed-off-by: Naomi Bonnin <naomi172839@gmail.com>

 group5/src/components/AddRoomType.vue | 68
 1 file changed, 68 insertions(+)

-->
<template>
<div>
    <div>
        <h1>Rosebudd Hotel Profile Creation</h1>
        <!-- Form for the creation of new room types
        Will call processForm when submit is pressed
        -->
        <form class="justify-content-center" id="newroomtype" @submit.prevent="this.processForm">
            <label for="typeName" class="grey-text">Room Type Name </label>
            <input type="text" id="typeName" name="typeName" class="form-control" placeholder="typeName" v-model="typeName" />
            <br />
            <br />
            <label for="typeCost" class="grey-text">Room Cost </label>
            <input type="text" id="typeCost" name="typeCost" class="form-control" placeholder="typeCost" v-model="typeCost" />
            <br>
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
// Script for use by vue to make the page responsive

// Use axios for all of the requests
import axios from 'axios';
import router from '../router'
export default { // Export all of the things for vue to use
    data() {
        var typeName = '';
        var typeCost = '';
        return {
            typeName,
            typeCost
        };
    },
    methods: {
        processForm: function() { // Called when submit is pressed
            let data = new FormData();
            data.append('typeName', this.typeName);
            data.append('typeCost', this.typeCost);
            axios.post('http://localhost:4000/newRoomType', data)
                .then(response => this.response = response.data)
                .then(router.push('adminhome'))
                .catch(error => {
                    alert(error);
                });
        }
    }
}
</script>



<style>
input {
    margin: auto;
}
</style>
