<!--
The homepage, which is very inappropriately named HelloWorld
Given enough time, this should be refactored but this is too much effort for
right now

            *** Change Log ***

            commit 8d82309e25d5a530e6b6e85e2224003ec309d605
Author: Naomi Bonnin <naomi172839@gmail.com>
Date:   Sun Mar 7 09:57:09 2021 -0500

    Added comments to all of the files that were missing them

    Signed-off-by: Naomi Bonnin <naomi172839@gmail.com>

 group5/src/components/HelloWorld.vue | 13 
 1 file changed, 9 insertions(+), 4 deletions(-)

commit e988e4e17acd23580639982e3ae9f8e10f4b1779
Author: Naomi Bonnin <naomi172839@gmail.com>
Date:   Sun Mar 7 08:09:11 2021 -0500

    Updated formatting on all of the pages to make them fit the standard style guides

    Signed-off-by: Naomi Bonnin <naomi172839@gmail.com>

 group5/src/components/HelloWorld.vue | 104
 1 file changed, 52 insertions(+), 52 deletions(-)

commit a8d971a5fe9c41ff50516fb19709e57eef8c62b6
Author: Naomi Bonnin <naomi172839@gmail.com>
Date:   Sun Mar 7 07:56:38 2021 -0500

    Added the final functionality

    Added About Us

    Added Update Profile

    Added New Links

    Added Radio Buttons to Cancel Reservations

    Added Radio Buttons to Make Users Admins

    Signed-off-by: Naomi Bonnin <naomi172839@gmail.com>

 group5/src/components/HelloWorld.vue | 7
 1 file changed, 7 insertions(+)

commit 984468982686b950668c45460d24efb88491a86e
Author: vanderpunk <69319211+vanderpunk@users.noreply.github.com>
Date:   Thu Mar 4 22:06:44 2021 -0500

    Modified ContactUs, HelloWorld, ProfileCreation, and Reservation

 group5/src/components/HelloWorld.vue | 9
 1 file changed, 2 insertions(+), 7 deletions(-)

commit fa77c2265c9c46f2450e4a40f5f798b7dc46015e
Author: Justin <justpallett@gmail.com>
Date:   Tue Mar 2 21:37:51 2021 -0500

    add API methods to forms

 group5/src/components/HelloWorld.vue | 79
 1 file changed, 39 insertions(+), 40 deletions(-)

commit 8a36910f3b27be82f33a0487f442d478c8f67124
Author: vanderpunk <69319211+vanderpunk@users.noreply.github.com>
Date:   Mon Mar 1 21:04:49 2021 -0500

    Changed lobby image, modified components

 group5/src/components/HelloWorld.vue | 57
 1 file changed, 27 insertions(+), 30 deletions(-)

commit 4b395755a8880d386a9f68aff891cf66dc273749
Author: Naomi Bonnin <naomi172839@gmail.com>
Date:   Sun Feb 28 21:54:53 2021 -0500

    Merging the changes

    Signed-off-by: Naomi Bonnin <naomi172839@gmail.com>

 group5/src/components/HelloWorld.vue | 28
 1 file changed, 20 insertions(+), 8 deletions(-)

commit ebd7dbc8bc7051ae4d1348e6a37352432c61ac4f
Author: Naomi Bonnin <naomi172839@gmail.com>
Date:   Mon Feb 22 14:26:15 2021 -0500

    Completed conversion to VueJS3, Vite, TypeScript.

    Functionally identical to the previous WebPack and VueJS2 built but is much faster, smarter and can actually be used with modern libraries.

    Signed-off-by: Naomi Bonnin <naomi172839@gmail.com>

 group5/src/components/HelloWorld.vue | 109
 1 file changed, 56 insertions(+), 53 deletions(-)

commit d1873c99f9e90bfb26866b5c0b10cae59d9981e3
Author: Naomi Bonnin <naomi172839@gmail.com>
Date:   Mon Feb 22 12:17:03 2021 -0500

    Conversion to Vite project

 group5/src/components/HelloWorld.vue | 65
 1 file changed, 65 insertions(+)

-->
<template>
<div class="hello">
    <!-- If a message is passed to the user -->
    <h1>{{ msg }}</h1>
    <!-- Some basic information -->
    <div class="textbox">
        <p>We have rooms with doors.</p>
        <p>One towel per room, regardless of number of occupants.</p>
        <p>Should a roof leak, move the bed to a dry area.</p>
    </div>
    <br>
    <!-- Navigation buttons -->
    <ul>
        <li>
            <div class="container-fluid">
                <button class="btn btn btn-danger">
                    <router-link to="login"> Login </router-link>
                </button>
            </div>
        </li>
        <li>
            <div class="container-fluid">
                <button class="btn btn btn-success">
                    <router-link to="profilecreation"> Register </router-link>
                </button>
            </div>
        </li>
        <li>
            <div class="container-fluid">
                <button class="btn btn btn-warning">
                    <router-link to="contactus"> Contact Us </router-link>
                </button>
            </div>
        </li>
        <li>
            <div class="container-fluid">
                <button class="btn btn btn-warning">
                    <router-link to="about"> About Us </router-link>
                </button>
            </div>
        </li>
    </ul>
</div>
</template>

<script>
// Script that exposes the component to VueJS for routing and reactivity
export default {
    name: 'Welcome',
    data() {
        return {
            msg: 'Welcome to Rosebudd Hotel'
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
    font-weight: bold;
}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    display: inline-block;
    margin: 0 10px;
}

a {
    color: black;
}
</style>
