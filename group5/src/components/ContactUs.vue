<template>
    <div>
        <h1> Please enter your information</h1>
        <form id="contactus" method="POST">
            <!-- name text -->
            <div class="name">
                <p>Name</p>
                <input type="text" v-model="msg">
            </div>
            <!-- Message text -->
            <div class="textbox">
                <p>Message</p>
                <input type="text" v-model="email">
            </div>
            <div class="container-fluid">
                <button class="btn btn btn-danger">
                    <router-link to="thankyou">
                        Submit
                    </router-link>
                </button>
            </div>
        </form>
    </div>
</template>

<script lang='ts'>
  export default{
    setup() {
      const msg = 'name'
    }
  }
</script>

<style>
.textbox{

  }

.name{

  }

</style>
