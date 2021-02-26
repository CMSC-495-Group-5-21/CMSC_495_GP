<template>
  <div>
    <div>
      <form>
        <h1>Admin Login</h1>
        <!-- Login as admin -->
        <label for="defaultFormLoginEmailEx" class="grey-text">Username</label>
        <input type="email" id="defaultFormLoginEmailEx" class="form-control" />
        <br />
        <label for="defaultFormLoginPasswordEx" class="grey-text">Password</label>
        <input type="password" id="defaultFormLoginPasswordEx" class="form-control" />
        <div class="container-fluid">
          <button class="btn btn btn-warning">
            <router-link to="adminhome">
              Login
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
