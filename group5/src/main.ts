/*
 *          *** Change Log ***
 commit 8d82309e25d5a530e6b6e85e2224003ec309d605
Author: Naomi Bonnin <naomi172839@gmail.com>
Date:   Sun Mar 7 09:57:09 2021 -0500

    Added comments to all of the files that were missing them

    Signed-off-by: Naomi Bonnin <naomi172839@gmail.com>

 group5/src/main.ts | 3 ++-
 1 file changed, 2 insertions(+), 1 deletion(-)

commit 6c4684aa4438d15458acd77f788d5d06591f2c22
Author: Naomi Bonnin <naomi172839@gmail.com>
Date:   Tue Feb 23 13:19:13 2021 -0500

    TypeORM Integration

    Signed-off-by: Naomi Bonnin <naomi172839@gmail.com>

 group5/src/main.ts | 1 +
 1 file changed, 1 insertion(+)

commit ebd7dbc8bc7051ae4d1348e6a37352432c61ac4f
Author: Naomi Bonnin <naomi172839@gmail.com>
Date:   Mon Feb 22 14:26:15 2021 -0500

    Completed conversion to VueJS3, Vite, TypeScript.

    Functionally identical to the previous WebPack and VueJS2 built but is much faster, smarter and can actually be used with modern libraries.

    Signed-off-by: Naomi Bonnin <naomi172839@gmail.com>

 group5/src/main.ts | 4 +++-
 1 file changed, 3 insertions(+), 1 deletion(-)

commit d1873c99f9e90bfb26866b5c0b10cae59d9981e3
Author: Naomi Bonnin <naomi172839@gmail.com>
Date:   Mon Feb 22 12:17:03 2021 -0500

    Conversion to Vite project

 group5/src/main.ts | 4 ++++
 1 file changed, 4 insertions(+)

 */

// Imports used to actually create the app
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import "reflect-metadata"

/* eslint-disable no-new */
createApp(App).use(router).mount("#app");   // Create the vue program
