<template>
  <div>
      <div>
          <h1>Rosebudd Hotel Profile Creation</h1>
          <!-- Create Profile for New Users -->
          <form class="justify-content-center" action="/newUser" method="POST">
              <label for="newUserEmail" class="grey-text">Email </label>
              <input type="email"
                     id="newUserEmail"
                     class="form-control"
                     placeholder="Email" />
              <br />
              <br />
              <label for="inputPassword" class="grey-text">Password </label>
              <input type="password" id="inputPassword" class="form-control" placeholder="Password" />
              <br />
              <br />
              <label for="confirmPassword" class="grey-text">Confirm Password </label>
              <input type="password" id="confirmPassword" class="form-control" placeholder="Re-enter Password" />
              <br />
              <br />
              <div class="form-group row">
                  <div class="col-sm-2">
                      <button class="btn btn btn-warning">
                          <router-link to="login"> Submit </router-link>
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
