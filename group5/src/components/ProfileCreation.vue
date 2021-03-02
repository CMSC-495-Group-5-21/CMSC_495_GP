<template>
  <div>
    <div>
      <h1>Rosebudd Hotel Profile Creation</h1>
      <!-- Create Profile for New Users -->
      <form class="justify-content-center">
        <div class="form-group row">
          <label for="newUserEmail" class="col-sm-1 col-form-label"
            >Email</label
          >
          <div class="col-sm-10">
            <input
              type="text"
              class="form-control"
              id="newUserEmail"
              placeholder="Email"
            />
          </div>
        </div>
        <br />
        <div class="form-group row">
          <label for="inputPassword" class="col-sm-1 col-form-label"
            >Password</label
          >
          <div class="col-sm-10">
            <input
              type="password"
              class="form-control"
              id="inputPassword"
              placeholder="Password"
            />
          </div>
        </div>
        <br />
        <div class="form-group row">
          <label for="confirmPassword" class="col-sm-1 col-form-label"
            >Confirm Password</label
          >
          <div class="col-sm-10">
            <input
              type="password"
              class="form-control"
              id="Password"
              placeholder="Re-enter Password"
            />
          </div>
        </div>
        <br />
        <div class="form-group row">
          <div class="col-sm-2">
            <button class="btn btn btn-warning">
              <router-link to="reservation"> Submit </router-link>
            </button>
            <button class="btn btn btn-warning">
              <router-link to="/"> Home </router-link>
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>


<script>
export default {}
</script>



<style>
input {
  margin: auto;
}
</style>
