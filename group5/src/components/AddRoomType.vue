<template>
<div>
    <div>
        <h1>Rosebudd Hotel Profile Creation</h1>
        <!-- Create Profile for New Users -->
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
import axios from 'axios';
import router from '../router'
export default {
    data() {
        var typeName = '';
        var typeCost = '';
        return {
            typeName,
            typeCost
        };
    },
    methods: {
        processForm: function() {
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
