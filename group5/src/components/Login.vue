<template>
  <div>
    <div>
      <form>
        <h1>Login</h1>
        
        <label for="defaultFormLoginEmailEx" class="grey-text">Username</label>
        <input type="email" id="defaultFormLoginEmailEx" class="form-control" />
        <br />
        <label for="defaultFormLoginPasswordEx" class="grey-text">Password</label>
        <input type="password" id="defaultFormLoginPasswordEx" class="form-control" />
        <br />
        <div class="container-fluid">
          <button class="btn btn btn-warning">
            <router-link to="userprofile">
              Login
            </router-link>
          </button>

          <button class="btn btn btn-success">
            <router-link to="profilecreation">
              Register
            </router-link>
          </button>

        </div>
      </form>
    </div>
  </div>
</template>


<script>
  export default {

  }
</script>



<style>
  input{
    margin: auto;
    

  }

</style>
