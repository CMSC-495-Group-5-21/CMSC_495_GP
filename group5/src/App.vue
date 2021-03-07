<!--
Main template serving as a base for the remainder of the program
Used as an entry point

            *** Change Log ***

            commit 8d82309e25d5a530e6b6e85e2224003ec309d605
Author: Naomi Bonnin <naomi172839@gmail.com>
Date:   Sun Mar 7 09:57:09 2021 -0500

    Added comments to all of the files that were missing them

    Signed-off-by: Naomi Bonnin <naomi172839@gmail.com>

 group5/src/App.vue | 5 +++++
 1 file changed, 5 insertions(+)

commit e988e4e17acd23580639982e3ae9f8e10f4b1779
Author: Naomi Bonnin <naomi172839@gmail.com>
Date:   Sun Mar 7 08:09:11 2021 -0500

    Updated formatting on all of the pages to make them fit the standard style guides

    Signed-off-by: Naomi Bonnin <naomi172839@gmail.com>

 group5/src/App.vue | 23
 1 file changed, 11 insertions(+), 12 deletions(-)

commit 4b395755a8880d386a9f68aff891cf66dc273749
Author: Naomi Bonnin <naomi172839@gmail.com>
Date:   Sun Feb 28 21:54:53 2021 -0500

    Merging the changes

    Signed-off-by: Naomi Bonnin <naomi172839@gmail.com>

 group5/src/App.vue | 6
 1 file changed, 1 insertion(+), 5 deletions(-)

commit ebd7dbc8bc7051ae4d1348e6a37352432c61ac4f
Author: Naomi Bonnin <naomi172839@gmail.com>
Date:   Mon Feb 22 14:26:15 2021 -0500

    Completed conversion to VueJS3, Vite, TypeScript.

    Functionally identical to the previous WebPack and VueJS2 built but is much faster, smarter and can actually be used with modern libraries.

    Signed-off-by: Naomi Bonnin <naomi172839@gmail.com>

 group5/src/App.vue | 24
 1 file changed, 13 insertions(+), 11 deletions(-)

commit d1873c99f9e90bfb26866b5c0b10cae59d9981e3
Author: Naomi Bonnin <naomi172839@gmail.com>
Date:   Mon Feb 22 12:17:03 2021 -0500

    Conversion to Vite project

 group5/src/App.vue | 27 
 1 file changed, 27 insertions(+)

-->
<template>
<div id="app">
    <img src="./assets/lobby.jpg" alt="Trulli" width="1000" height="333">
    <router-view />
</div>
</template>

<script>
// Export this for use by Vue
export default {
    name: 'App'
}
</script>


<style>
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
