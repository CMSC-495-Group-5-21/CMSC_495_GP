<!--
Template for the contact us page
Simply creates a useless form for the user to see

        *** Change Log ***

        commit 8d82309e25d5a530e6b6e85e2224003ec309d605
Author: Naomi Bonnin <naomi172839@gmail.com>
Date:   Sun Mar 7 09:57:09 2021 -0500

Added comments to all of the files that were missing them

Signed-off-by: Naomi Bonnin <naomi172839@gmail.com>

group5/src/components/ContactUs.vue | 5 +++++
1 file changed, 5 insertions(+)

commit e988e4e17acd23580639982e3ae9f8e10f4b1779
Author: Naomi Bonnin <naomi172839@gmail.com>
Date:   Sun Mar 7 08:09:11 2021 -0500

Updated formatting on all of the pages to make them fit the standard style guides

Signed-off-by: Naomi Bonnin <naomi172839@gmail.com>

group5/src/components/ContactUs.vue | 63 
1 file changed, 23 insertions(+), 40 deletions(-)

commit 984468982686b950668c45460d24efb88491a86e
Author: vanderpunk <69319211+vanderpunk@users.noreply.github.com>
Date:   Thu Mar 4 22:06:44 2021 -0500

Modified ContactUs, HelloWorld, ProfileCreation, and Reservation

group5/src/components/ContactUs.vue | 79
1 file changed, 45 insertions(+), 34 deletions(-)

commit 8ce476b3d9df55a9f6b5901a191cc432031a4597
Author: Justin <justpallett@gmail.com>
Date:   Tue Mar 2 21:44:23 2021 -0500

added form action

group5/src/components/ContactUs.vue | 2
1 file changed, 2 deletions(-)

commit fa77c2265c9c46f2450e4a40f5f798b7dc46015e
Author: Justin <justpallett@gmail.com>
Date:   Tue Mar 2 21:37:51 2021 -0500

add API methods to forms

group5/src/components/ContactUs.vue | 46
1 file changed, 24 insertions(+), 22 deletions(-)

commit ebd7dbc8bc7051ae4d1348e6a37352432c61ac4f
Author: Naomi Bonnin <naomi172839@gmail.com>
Date:   Mon Feb 22 14:26:15 2021 -0500

Completed conversion to VueJS3, Vite, TypeScript.

Functionally identical to the previous WebPack and VueJS2 built but is much faster, smarter and can actually be used with modern libraries.

Signed-off-by: Naomi Bonnin <naomi172839@gmail.com>

group5/src/components/ContactUs.vue | 43
1 file changed, 43 insertions(+)

-->
<template>
<div>
    <h1>Please enter your information</h1>
    <form id="contactus" method="POST">
        <!-- name text -->
        <label for="contactUsName" class="grey-text"> Name </label>
        <input type="text" id="name" name="name" class="form-control" placeholder="ex Rolan Shmidtt" v-model="name" />
        <br />
        <br />
        <!-- Message text -->
        <label for="contactUsMessage" class="contactUs"> Message : </label>
        <textarea id="contactUsMessage" name="contactUsMessage" class="form-control" placeholder="Please enter message" v-model="specialRequests" rows="1" columns="50" />
        <br />
        <br />
        <!-- Submit Button -->
        <div class="container-fluid">
            <button class="btn btn btn-danger">
                <router-link to="thankyou"> Submit </router-link>
            </button>
        </div>
    </form>
</div>
</template>

<script lang='ts'>
// Simply exposes the template to vue for routing
export default {
    setup() {
        const msg = "name";
    },
};
</script>

<style>
.textbox {}

.name {}
</style>
