<!--
Template used as a simple thank you page
Not really used by much though it could be included elsewhere if desired

    *** Change Log  ***

    commit 8d82309e25d5a530e6b6e85e2224003ec309d605
Author: Naomi Bonnin <naomi172839@gmail.com>
Date:   Sun Mar 7 09:57:09 2021 -0500

    Added comments to all of the files that were missing them

    Signed-off-by: Naomi Bonnin <naomi172839@gmail.com>

 group5/src/components/ThankYou.vue | 5 +++++
 1 file changed, 5 insertions(+)

commit e988e4e17acd23580639982e3ae9f8e10f4b1779
Author: Naomi Bonnin <naomi172839@gmail.com>
Date:   Sun Mar 7 08:09:11 2021 -0500

    Updated formatting on all of the pages to make them fit the standard style guides

    Signed-off-by: Naomi Bonnin <naomi172839@gmail.com>

 group5/src/components/ThankYou.vue | 23 
 1 file changed, 11 insertions(+), 12 deletions(-)

commit 4b395755a8880d386a9f68aff891cf66dc273749
Author: Naomi Bonnin <naomi172839@gmail.com>
Date:   Sun Feb 28 21:54:53 2021 -0500

    Merging the changes

    Signed-off-by: Naomi Bonnin <naomi172839@gmail.com>

 group5/src/components/ThankYou.vue | 2 +-
 1 file changed, 1 insertion(+), 1 deletion(-)

commit ab4a0387ac1379438b9eaa6ee91deac29929addd
Author: Naomi Bonnin <naomi172839@gmail.com>
Date:   Tue Feb 23 15:19:10 2021 -0500

    Changed name again, hopefully

    Signed-off-by: Naomi Bonnin <naomi172839@gmail.com>

 group5/src/components/ThankYou.vue | 31
 1 file changed, 31 insertions(+)

-->
<template>
<div>
    <h2>Thank You for your Submission!</h2>
    <!-- Go to Home Page -->
    <div class="container-fluid">
        <button class="btn btn btn-standard">
            <router-link to="/">
                Home
            </router-link>
        </button>
    </div>
</div>
</template>


<script>
// Simply expose the component to vue
export default {

}
</script>



<style>
input {
    margin: auto;


}
</style>
