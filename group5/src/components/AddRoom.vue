<template>
<div>
    <div>
        <h1>Rosebudd Hotel Profile Creation</h1>
        <!-- Create Profile for New Users -->
        <form class="justify-content-center" id="newroom" @submit.prevent="this.processForm">
            <div>
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
                            <td><input type="radio" name="roomType" id="roomType" v-model="roomType" :value="room"/></td>
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
import axios from 'axios';
axios.defaults.withCredentials = true;
import router from '../router';
export default {
    data() {
        let roomType = '';
        let rooms = [];
        let roomTypes = new Map();
        let roomCosts = new Map();
    return {
        rooms,
        roomType,
        roomTypes,
        roomCosts
    };
  },
  methods: {
      processForm: function() {
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
      getTypes: function() {
          axios.get('http://localhost:4000/getAllRoomTypes')
          .then((response) => {
              let roomTypes = new Map();
              let roomCosts = new Map();
              let rooms = [];
              response.data.forEach( (room) => {
                  this.rooms.push(room.uuid);
                  this.roomTypes.set(room.uuid, room.typeName);
                  this.roomCosts.set(room.uuid, room.typeCost);
              });
          }).catch(error => {
              alert(error);
          });
      },
      getCookie: function(name) {
          let matches = document.cookie.match(new RegExp(
              "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
          ));
          return matches ? decodeURIComponent(matches[1]) : undefined;
      }
  },
  update() {
  },
  mounted() {
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
