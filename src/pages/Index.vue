<template>
   <q-page class="flex justify-center">
      <div id="jumbo" class="q-pa-lg text-center">
         <h2>Are you Diabetic ?</h2>
         <h5>Find out how likely are you to have diabetes using our test</h5>
         <q-btn
            :ripple="{ center: true }"
            color="primary"
            style="width: 150px"
            label="Take Test"
            @click="$router.replace({ path: '/questions' })"
            no-caps
         />
      </div>
   </q-page>
</template>

<script>
export default {
   data() {
      return {
      };
   },
};
</script>
