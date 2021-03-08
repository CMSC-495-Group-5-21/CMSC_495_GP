<!--
A template that contains a form to create a new user

            *** Change Log ***

            commit 8d82309e25d5a530e6b6e85e2224003ec309d605
Author: Naomi Bonnin <naomi172839@gmail.com>
Date:   Sun Mar 7 09:57:09 2021 -0500

    Added comments to all of the files that were missing them

    Signed-off-by: Naomi Bonnin <naomi172839@gmail.com>

 group5/src/components/ProfileCreation.vue | 16
 1 file changed, 12 insertions(+), 4 deletions(-)

commit e988e4e17acd23580639982e3ae9f8e10f4b1779
Author: Naomi Bonnin <naomi172839@gmail.com>
Date:   Sun Mar 7 08:09:11 2021 -0500

    Updated formatting on all of the pages to make them fit the standard style guides

    Signed-off-by: Naomi Bonnin <naomi172839@gmail.com>

 group5/src/components/ProfileCreation.vue | 256
 1 file changed, 98 insertions(+), 158 deletions(-)

commit 984468982686b950668c45460d24efb88491a86e
Author: vanderpunk <69319211+vanderpunk@users.noreply.github.com>
Date:   Thu Mar 4 22:06:44 2021 -0500

    Modified ContactUs, HelloWorld, ProfileCreation, and Reservation

 group5/src/components/ProfileCreation.vue | 253
 1 file changed, 166 insertions(+), 87 deletions(-)

commit 41b8da4e7c6658324af21c70318ab22650c27212
Author: Naomi Bonnin <naomi172839@gmail.com>
Date:   Thu Mar 4 05:11:15 2021 -0500

    Added login functionality as well as basic cookie support

    Signed-off-by: Naomi Bonnin <naomi172839@gmail.com>

 group5/src/components/ProfileCreation.vue | 2
 1 file changed, 1 insertion(+), 1 deletion(-)

commit b56c5ae6537f4f52a1805685c6ad806db9dbdc8a
Author: Naomi Bonnin <naomi172839@gmail.com>
Date:   Thu Mar 4 04:08:36 2021 -0500

    Revert "Merge branch 'refs/heads/justin' into naomi"

    This reverts commit 938b8e3161484ae70b9341df8fe8c4c6fa473a9f, reversing
    changes made to ff46f2adbcadad69be8e3e235ca046ef60e9be98.

 group5/src/components/ProfileCreation.vue | 149
 1 file changed, 91 insertions(+), 58 deletions(-)

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

commit 0e3e0e186566c04717a1355d7e99a0d69c57e058
Author: Naomi Bonnin <naomi172839@gmail.com>
Date:   Wed Mar 3 11:47:21 2021 -0500

    Created a working registration form

    Signed-off-by: Naomi Bonnin <naomi172839@gmail.com>

 group5/src/components/ProfileCreation.vue | 129
 1 file changed, 93 insertions(+), 36 deletions(-)

commit 8ce476b3d9df55a9f6b5901a191cc432031a4597
Author: Justin <justpallett@gmail.com>
Date:   Tue Mar 2 21:44:23 2021 -0500

    added form action

 group5/src/components/ProfileCreation.vue | 4
 1 file changed, 1 insertion(+), 3 deletions(-)

commit fa77c2265c9c46f2450e4a40f5f798b7dc46015e
Author: Justin <justpallett@gmail.com>
Date:   Tue Mar 2 21:37:51 2021 -0500

    add API methods to forms

 group5/src/components/ProfileCreation.vue | 66 -
 1 file changed, 33 insertions(+), 33 deletions(-)

commit 1a035460b32845d840637e8b8b70067a02947736
Author: vanderpunk <69319211+vanderpunk@users.noreply.github.com>
Date:   Mon Mar 1 21:28:23 2021 -0500

    Reservation pretty up

 group5/src/components/ProfileCreation.vue | 53
 1 file changed, 14 insertions(+), 39 deletions(-)

commit 8a36910f3b27be82f33a0487f442d478c8f67124
Author: vanderpunk <69319211+vanderpunk@users.noreply.github.com>
Date:   Mon Mar 1 21:04:49 2021 -0500

    Changed lobby image, modified components

 group5/src/components/ProfileCreation.vue | 27
 1 file changed, 17 insertions(+), 10 deletions(-)

commit 4b395755a8880d386a9f68aff891cf66dc273749
Author: Naomi Bonnin <naomi172839@gmail.com>
Date:   Sun Feb 28 21:54:53 2021 -0500

    Merging the changes

    Signed-off-by: Naomi Bonnin <naomi172839@gmail.com>

 group5/src/components/ProfileCreation.vue | 68
 1 file changed, 68 insertions(+)

-->
<template>
<div>
    <div>
        <h1>Rosebudd Hotel Profile Creation</h1>
        <!-- Create Profile for New Users
        Calls processForm upon form submission
        -->
        <form class="justify-content-center" id="newuser" @submit.prevent="this.processForm">
            <label for="username" class="grey-text">Username </label>
            <input type="text" id="username" name="username" class="form-control" placeholder="username" v-model="username" />
            <br />
            <br />
            <label for="password" class="grey-text">Password </label>
            <input type="password" id="password" name="password" class="form-control" placeholder="password" v-model="password" />
            <br />
            <br />
            <label for="confirmPassword" class="grey-text">Confirm Password </label>
            <input type="password" id="confirmPassword" name="confirmPassword" class="form-control" placeholder="Re-enter Password" v-model="confirmPassword" />
            <br />
            <br />
            <label for="prefix" class="grey-text">Prefix </label>
            <input type="text" id="prefix" name="prefix" class="form-control" placeholder="Dr" v-model="prefix" />
            <br />
            <br />
            <label for="firstName" class="grey-text">First Name </label>
            <input type="text" id="firstName" name="firstName" class="form-control" placeholder="John" v-model="firstName" />
            <br />
            <br />
            <label for="middleName" class="grey-text">Middle Name </label>
            <input type="text" id="middleName" name="middleName" class="form-control" placeholder="Jacob" v-model="middleName" />
            <br />
            <br />
            <label for="lastName" class="grey-text">Last Name </label>
            <input type="text" id="lastName" name="lastName" class="form-control" placeholder="Schmidtt" v-model="lastName" />
            <br />
            <br />
            <label for="suffix" class="grey-text">Suffix </label>
            <input type="text" id="suffix" name="suffix" class="form-control" placeholder="II" v-model="suffix" />
            <br />
            <br />
            <!-- Buttons -->
            <ul>
                <li>
                    <div class="container-fluid">
                        <button class="btn btn btn-warning" type="submit">
                             Submit
                        </button>
                    </div>
                </li>
                <li>
                    <div class="container-fluid">
                        <button class="btn btn btn-warning">
                            <router-link to="/"> Home </router-link>
                        </button>
                    </div>
                </li>
            </ul>
        </form>
    </div>
</div>
</template>


<script lang="ts">
// Script to expose everything to vue and process the form

// Use axios for requests to simplify everything
import axios from "axios";
import router from "../router";
export default { // Expose literally everything to vue
    data() {
        var username = "";
        var password = "";
        var confirmPassword = "";
        var prefix = "";
        var firstName = "";
        var middleName = "";
        var lastName = "";
        var suffix = "";
        return {
            username,
            password,
            confirmPassword,
            prefix,
            firstName,
            middleName,
            lastName,
            suffix,
        };
    },
    methods: {
        processForm: function() { // Called on form submission
            let data = new FormData();
            data.append("username", this.username);
            data.append("password", this.password);
            data.append("prefix", this.prefix);
            data.append("firstName", this.firstName);
            data.append("middleName", this.middleName);
            data.append("lastName", this.lastName);
            data.append("suffix", this.suffix);
            axios
                .post("http://localhost:4000/newUser", data)
                .then((response) => (this.response = response.data))
                .then(router.push("reservation"))
                .then(router.go(1))
                .catch((error) => {
                    alert(error);
                });
        },
    },
};
</script>



<style>
input {
    margin: auto;
}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    display: inline-block;
    margin: 0 10px;
}
</style>
