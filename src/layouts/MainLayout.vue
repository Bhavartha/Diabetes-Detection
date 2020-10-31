<template>
   <q-layout view="hHh lpR fFf"> 
      <!-- Navbar start -->
      <q-header class="bg-primary text-white">
         <q-toolbar>
            <q-btn
               dense
               flat
               round
               icon="menu"
               @click="showDrawer = !showDrawer"
            />

            <q-toolbar-title class="absolute-center"> Diabetes Detection </q-toolbar-title>
         </q-toolbar>
      </q-header>
      <!-- Navbar end -->

      <q-drawer v-model="showDrawer" side="left" behavior="mobile">
         <!-- drawer content -->
         
      </q-drawer>

      <q-page-container>
         <router-view />
      </q-page-container>
   </q-layout>
</template>

<script>
export default {
   data() {
      return {
         showDrawer: false,
      };
   },
};
</script>