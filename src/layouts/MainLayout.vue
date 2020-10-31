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
            <q-toolbar-title class="absolute-center">
               Diabetes Detection
            </q-toolbar-title>
         </q-toolbar>
      </q-header>
      <!-- Navbar end -->

      <q-drawer v-model="showDrawer" side="left" behavior="mobile">
         <!-- drawer content -->
         <q-scroll-area class="fit">
            <q-list>
               <div v-for="(menuItem, index) in menuList" :key="index">
                  <q-item
                     clickable
                     v-ripple
                     @click.native="onClick(menuItem.link)"
                     :active="menuItem.link == getPath"
                  >
                     <q-item-section avatar>
                        <q-icon :name="menuItem.icon" />
                     </q-item-section>
                     <q-item-section> {{ menuItem.label }} </q-item-section>
                  </q-item>
                  <q-separator />
               </div>
            </q-list>
         </q-scroll-area>
      </q-drawer>

      <q-page-container>
         <router-view />
      </q-page-container>
   </q-layout>
</template>

<script>
const menuList = [
   {
      icon: "home",
      label: "Home",
      link: "/",
   },
   {
      icon: "help",
      label: "Questions",
      link: "/questions",
   },
];

export default {
   data() {
      return {
         showDrawer: false,
         menuList,
      };
   },
   methods: {
      onClick(link) {
         this.$router.replace({ path: link });
      },
   },
   computed:{
      getPath(){
         return this.$route.fullPath
      }
   }
};
</script>