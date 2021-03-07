<!--
Homepage for the administrative users
Contains links to all of the admin functionality

        *** Change Log ***

        commit 8d82309e25d5a530e6b6e85e2224003ec309d605
Author: Naomi Bonnin <naomi172839@gmail.com>
Date:   Sun Mar 7 09:57:09 2021 -0500

    Added comments to all of the files that were missing them

    Signed-off-by: Naomi Bonnin <naomi172839@gmail.com>

 group5/src/components/AdminHome.vue | 5 
 1 file changed, 5 insertions(+)

commit e988e4e17acd23580639982e3ae9f8e10f4b1779
Author: Naomi Bonnin <naomi172839@gmail.com>
Date:   Sun Mar 7 08:09:11 2021 -0500

    Updated formatting on all of the pages to make them fit the standard style guides

    Signed-off-by: Naomi Bonnin <naomi172839@gmail.com>

 group5/src/components/AdminHome.vue | 63
 1 file changed, 31 insertions(+), 32 deletions(-)

commit 47b1cb2f596de0a2172ceaaf6756f7cf834d5ce3
Author: Naomi Bonnin <naomi172839@gmail.com>
Date:   Thu Mar 4 21:59:17 2021 -0500

    Added all sub admin pages
    Implemented basic functionality
    Everything seems to work ok
    Need to add the delete user/reservation still
    Need to add a user management portion still

    Signed-off-by: Naomi Bonnin <naomi172839@gmail.com>

 group5/src/components/AdminHome.vue | 26
 1 file changed, 23 insertions(+), 3 deletions(-)

commit ebd7dbc8bc7051ae4d1348e6a37352432c61ac4f
Author: Naomi Bonnin <naomi172839@gmail.com>
Date:   Mon Feb 22 14:26:15 2021 -0500

    Completed conversion to VueJS3, Vite, TypeScript.

    Functionally identical to the previous WebPack and VueJS2 built but is much faster, smarter and can actually be used with modern libraries.

    Signed-off-by: Naomi Bonnin <naomi172839@gmail.com>

 group5/src/components/AdminHome.vue | 31
 1 file changed, 31 insertions(+)

-->
<template>
<div>
    <h2>Welcome Admin</h2>
    <!-- View Rooms reserved -->
    <div class="container-fluid">
        <button class="btn btn btn-standard">
            <router-link to="addroom">
                Add Room
            </router-link>
        </button>
        <button class="btn btn btn-standard">
            <router-link to="addroomtype">
                Add Room Type
            </router-link>
        </button>
        <button class="btn btn btn-standard">
            <router-link to="manageusers">
                Manage Users
            </router-link>
        </button>
        <button class="btn btn btn-standard">
            <router-link to="managereservations">
                Manage Reservations
            </router-link>
        </button>
        <button class="btn btn btn-standard">
            <router-link to="/">
                Home
            </router-link>
        </button>
    </div>
</div>
</template>


<script>
// Used to simply expose this page to vue and the vueRouter
export default {

}
</script>



<style>
input {
    margin: auto;


}
</style>
