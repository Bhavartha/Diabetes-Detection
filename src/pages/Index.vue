<template>
   <q-page class="flex justify-center">
      <div id="jumbo">
         <h2>Are you diabetic ?</h2>
         <p>Find out how likely are you to have diabetes using our test</p>
         <q-btn
            :ripple="{ center: true }"
            color="primary q-mt-md"
            label="Take Test"
            @click="$router.push({ path: '/questions' })"
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
