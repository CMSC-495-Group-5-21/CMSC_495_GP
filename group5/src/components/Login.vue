<!--
Login page for users and admins to login

            *** Change Log ***

            commit 8d82309e25d5a530e6b6e85e2224003ec309d605
Author: Naomi Bonnin <naomi172839@gmail.com>
Date:   Sun Mar 7 09:57:09 2021 -0500

    Added comments to all of the files that were missing them

    Signed-off-by: Naomi Bonnin <naomi172839@gmail.com>

 group5/src/components/Login.vue | 14 
 1 file changed, 12 insertions(+), 2 deletions(-)

commit 41b8da4e7c6658324af21c70318ab22650c27212
Author: Naomi Bonnin <naomi172839@gmail.com>
Date:   Thu Mar 4 05:11:15 2021 -0500

    Added login functionality as well as basic cookie support

    Signed-off-by: Naomi Bonnin <naomi172839@gmail.com>

 group5/src/components/Login.vue | 98
 1 file changed, 62 insertions(+), 36 deletions(-)

commit b56c5ae6537f4f52a1805685c6ad806db9dbdc8a
Author: Naomi Bonnin <naomi172839@gmail.com>
Date:   Thu Mar 4 04:08:36 2021 -0500

    Revert "Merge branch 'refs/heads/justin' into naomi"

    This reverts commit 938b8e3161484ae70b9341df8fe8c4c6fa473a9f, reversing
    changes made to ff46f2adbcadad69be8e3e235ca046ef60e9be98.

 group5/src/components/Login.vue | 65
 1 file changed, 33 insertions(+), 32 deletions(-)

commit 938b8e3161484ae70b9341df8fe8c4c6fa473a9f
Merge: ff46f2a aef7ec2
Author: Naomi Bonnin <naomi172839@gmail.com>
Date:   Thu Mar 4 04:06:24 2021 -0500

    Merge branch 'refs/heads/justin' into naomi

    # Conflicts:
    #       group5/.vs/slnx.sqlite
    #       group5/.vs/vue-js/v16/Browse.VC.db
    #       group5/src/components/Login.vue
    #       group5/src/components/ProfileCreation.vue
    #       group5/src/components/UserProfile.vue
    #       vue-js/.vs/ProjectSettings.json
    #       vue-js/.vs/VSWorkspaceState.json
    #       vue-js/package-lock.json
    #       vue-js/src/components/HelloWorld.vue
    #       vue-js/src/components/Reservation.vue
    #       vue-js/src/router/index.js

commit 8ce476b3d9df55a9f6b5901a191cc432031a4597
Author: Justin <justpallett@gmail.com>
Date:   Tue Mar 2 21:44:23 2021 -0500

    added form action

 group5/src/components/Login.vue | 4
 1 file changed, 1 insertion(+), 3 deletions(-)

commit fa77c2265c9c46f2450e4a40f5f798b7dc46015e
Author: Justin <justpallett@gmail.com>
Date:   Tue Mar 2 21:37:51 2021 -0500

    add API methods to forms

 group5/src/components/Login.vue | 65
 1 file changed, 32 insertions(+), 33 deletions(-)

commit 8a36910f3b27be82f33a0487f442d478c8f67124
Author: vanderpunk <69319211+vanderpunk@users.noreply.github.com>
Date:   Mon Mar 1 21:04:49 2021 -0500

    Changed lobby image, modified components

 group5/src/components/Login.vue | 38
 1 file changed, 21 insertions(+), 17 deletions(-)

commit 4b395755a8880d386a9f68aff891cf66dc273749
Author: Naomi Bonnin <naomi172839@gmail.com>
Date:   Sun Feb 28 21:54:53 2021 -0500

    Merging the changes

    Signed-off-by: Naomi Bonnin <naomi172839@gmail.com>

 group5/src/components/Login.vue | 48
 1 file changed, 48 insertions(+)

-->
<template>
<div>
    <div>
        <!--
        Login form.
        Calls processForm when the submit button is pressed
        -->
        <form class="justify-content-center" id="login" @submit.prevent="this.processForm">
            <h1>Rosebudd Hotel Login</h1>
            <label for="username" class="grey-text">Username </label>
            <input type="text" id="username" name="username" class="form-control" placeholder="username" v-model="username" />
            <br />
            <br />
            <label for="password" class="grey-text">
                Password
            </label>
            <input type="password" id="password" name="password" class="form-control" placeholder="password" v-model="password" />
            <br />
            <br />
            <div class="container-fluid">
                <button type="submit" class="btn btn btn-warning"> Sign In
                </button>
                <button class="btn btn btn-success">
                    <router-link to="profilecreation"> Register </router-link>
                </button>
                <button class="btn btn btn-standard">
                    <router-link to="/"> Home </router-link>
                </button>
            </div>
        </form>
    </div>
</div>
</template>


<script lang="ts">
// TS script for the submission and exposing to Vue

// Use axios for all of the requests, for simplicity
import axios from 'axios';
axios.defaults.withCredentials = true;
import router from '../router'
export default { // Expose the components to vue
    data() {
        var username = '';
        var password = '';
        return {
            username,
            password
        };
    },
    methods: {
        processForm: function() { // Called on form submission
            let data = new FormData();
            data.append('username', this.username);
            data.append('password', this.password);
            axios.post('http://localhost:4000/login', data)
                .then(response => this.response = response.data)
                .then(() => {
                    if (this.response === "Success") {
                        router.push('UserProfile');
                        router.go(1);
                    } else {
                        alert(this.response);
                    }

                })
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
