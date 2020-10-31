<template>
   <q-card>
      <q-card-section>
         <div v-if="data.error" class="text-h5">Error</div>
         <div v-else class="text-h5">Result</div>
      </q-card-section>

      <q-card-section class="q-pt-none">
         <p v-if="data.error">{{ data.msg }}</p>
         <div v-else class="custom-alert">
            <span style="font-size: 18px">
               {{advanced?"Probability of having severe diabetes":"Probability of having diabetes"}}
            </span>
            <q-circular-progress
               show-value
               font-size="16px"
               :value="data.msg"
               size="70px"
               :thickness="0.35"
               :color="getColor"
               track-color="grey-3"
               class="q-ma-md"
            >
               {{ data.msg }}%
            </q-circular-progress>
         </div>
      </q-card-section>

      <q-card-actions align="around">
         <q-btn
            v-if="!advanced"
            flat
            label="Take Advanced Test"
            color="primary"
            @click="$router.replace({ path: '/advancedTest' })"
         />
         <q-btn flat label="OK" color="primary" v-close-popup @click="close" />
      </q-card-actions>
   </q-card>
</template>

<script>
export default {
   props: ["data","advanced"],
   methods: {
      close() {
         this.$emit("close");
      },
   },
   computed: {
      getColor() {
         if (this.data.msg < 30) return "green";
         if (this.data.msg < 70) return "yellow";
         return "red";
      },
   },
};
</script>

<style lang="scss" scoped>
</style>