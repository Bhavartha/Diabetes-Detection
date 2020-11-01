<template>
   <q-page class="text-center">
      <q-btn @click="getLocation" class="q-my-md">Get current Location</q-btn>
      <br />
      <q-btn v-if="lat != null && lon != null" @click="getInfo"
         >Get Kendra</q-btn
      >
      <div class="row">
         <template v-if="state != null && district != null && jsonData != null">
            <div v-for="(k, index) in filteredKendra" :key="index">
               <q-card
               @click="openLink(k)"
                  bordered
                  class="my-card q-ma-lg"
                  style="max-width: 400px"
               >
                  <q-card-section>
                     <div class="text-h6">{{ k["Kendra Code"] }}</div>
                     <div class="text-subtitle2">{{ k.District }}</div>
                  </q-card-section>

                  <q-separator />

                  <q-card-section>
                     {{ k.Address }}
                  </q-card-section>
               </q-card>
            </div>
         </template>
      </div>
   </q-page>
</template>

<script>
function sleep(ms) {
   return new Promise((resolve) => setTimeout(resolve, ms));
}

export default {
   data() {
      return {
         lat: null,
         lon: null,
         apikey: "pk.59fd893e90c3c9d17036b09e3c6b4e82",
         jsonData: null,
         district: null,
         state: null,
      };
   },
   computed: {
      filteredKendra() {
         let kendra = [];
         let n = this.jsonData.length;
         for (let i = 1450; i < 1500; i++) {
            if (this.jsonData[i].Address.includes("Maharashtra"))
               //  if(this.jsonData[i].State.includes("Kerala"))
               kendra.push(this.jsonData[i]);
         }
         return kendra;
      },
   },

   methods: {
       openLink(k){
           let url = "https://www.google.co.in/maps/search/?q="+k.Address
           window.open(url,"_blank")
       },
      async getLocation() {
         this.$q.loading.show();
         if (this.$q.platform.is.electron) {
            const res = await this.$axios.get("https://freegeoip.app/json/");
            this.lat = res.data.latitude;
            this.lon = res.data.longitude;
         } else {
            navigator.geolocation.getCurrentPosition((position) => {
               this.lat = position.coords.latitude;
               this.lon = position.coords.longitude;
            });
         }
         this.$q.loading.hide();
      },
      async getInfo() {
         const jakRes = await this.$axios.get(
            "https://raw.githubusercontent.com/mrpandey1/vit_app/master/JAK-center-list.json"
         );
         this.jsonData = jakRes.data;
         //  console.log(this.jsonData);
         const apiRes = await this.$axios.get(
            `https://us1.locationiq.com/v1/reverse.php?key=${this.apikey}&lat=${this.lat}&lon=${this.lon}&format=json`
         );

         this.district = apiRes.data.address.state_district;
         this.state = apiRes.data.address.state;
      },
   },
};
</script>
<style lang="scss" scoped>
</style>