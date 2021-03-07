<!--
The template for the about page.
Will be inserted beneath the index.html page

        *** Change Log  ***

        commit 8d82309e25d5a530e6b6e85e2224003ec309d605
Author: Naomi Bonnin <naomi172839@gmail.com>
Date:   Sun Mar 7 09:57:09 2021 -0500

    Added comments to all of the files that were missing them

    Signed-off-by: Naomi Bonnin <naomi172839@gmail.com>

 group5/src/components/About.vue | 7 
 1 file changed, 7 insertions(+)

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

 group5/src/components/About.vue | 30
 1 file changed, 30 insertions(+)

-->
<template>
<div>
    <h1>About Us</h1>
    <p>
        The Rosebud Motel, formerly called the Schitt's Creek Motel, is a motel located in Schitt's Creek.
    </p>
    <p>
        The motel offers a wide range of accommodations, from rooms with two beds, to rooms with one, to rooms with one or two beds and the option of a cot. Beds have box spring-supported mattresses, and each room has a round-screened television. A
        continental breakfast of pastries and coffee is available in the morning.
    </p>
    <p>

        At the Regional Hospitality Awards ("The Hospies"), the motel won the award for Best Customer's Service in a Motel Under 20 Units.
    </p>
</div>
</template>

<!--
The script that simply makes this template avilable to the project as a whole
-->
<script lang='ts'>
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
