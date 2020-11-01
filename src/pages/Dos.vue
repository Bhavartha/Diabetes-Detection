<template>
   <q-page class="flex justify-center">
      <div class="q-px-lg q-pb-md" id="diet">
         <q-timeline color="primary">
            <!-- Breakfast -->
            <q-timeline-entry heading body="Do's" tag="h4" />

            <template v-for="i in dos">
               <q-timeline-entry :title="i" :key="i" />
            </template>

            <!-- Mid Morning -->
            <q-timeline-entry heading body="Don'ts" tag="h4" />

            <template v-for="i in donts">
               <q-timeline-entry :title="i" :key="i" />
            </template>
            
         </q-timeline>
      </div>
   </q-page>
</template>

<s<script>
export default {
   data() {
      return {
         dos: [
            "Exercise Regularly :-Regular exercise can help you lose weight and increase insulin sensitivity.",
            "Diet plan should be balanced and individualized.",
            "Include mainly high fibre foods (whole grains, pulses, and all green vegetables).",
            "Chew your food well and drink sufficient amount of water.",
            "Always read labels and select foods that are low in fat, salt, sugars.",
            "Maintain a small food diary. Keep track of all the food you eat in a day.",
            "Avoid Table salt and restrict use of processed foods.",
            "Butter, ghee, coconut oil and palm oil are rich in saturated fats and should be restricted.",
         ],
         donts: [
            "Do not eat white bread, chips, and pastries, which quickly increase blood sugar.",
            "Avoid processed foods and meats as they will be rich in salt and oil.",
            "Restrict fried and fatty foods,",
            "Do not use artificial sweeteners beyond the recommended quantity.",
            "Do not exercise on empty or full stomach.",
            "Do not watch TV while eating food.",
            "Do not smoke.",
            "Do not miss your medication.",
         ],
         
      };
   },
};
</script>

<style lang="scss" scoped>
#diet {
   max-width: 800px;
   margin-top: 50px;
}
</style>