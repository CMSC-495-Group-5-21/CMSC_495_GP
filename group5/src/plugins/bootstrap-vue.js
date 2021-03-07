/*
            *** Change Log ***

            commit 8d82309e25d5a530e6b6e85e2224003ec309d605
Author: Naomi Bonnin <naomi172839@gmail.com>
Date:   Sun Mar 7 09:57:09 2021 -0500

    Added comments to all of the files that were missing them

    Signed-off-by: Naomi Bonnin <naomi172839@gmail.com>

 group5/src/plugins/bootstrap-vue.js | 1 +
 1 file changed, 1 insertion(+)

commit ebd7dbc8bc7051ae4d1348e6a37352432c61ac4f
Author: Naomi Bonnin <naomi172839@gmail.com>
Date:   Mon Feb 22 14:26:15 2021 -0500

    Completed conversion to VueJS3, Vite, TypeScript.

    Functionally identical to the previous WebPack and VueJS2 built but is much faster, smarter and can actually be used with modern libraries.

    Signed-off-by: Naomi Bonnin <naomi172839@gmail.com>

 group5/src/plugins/bootstrap-vue.js | 7 +++++++
 1 file changed, 7 insertions(+)

 */

// Able to be used to allow bootstrap css styling
import vue from "vue";

import BootstrapVue from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.use(BootstrapVue);
