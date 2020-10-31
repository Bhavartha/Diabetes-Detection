<template>
   <q-page class="flex justify-center">
      <div class="q-px-lg q-pb-md" id="diet">
         <q-timeline color="primary">
            <!-- Breakfast -->
            <q-timeline-entry heading body="Breakfast" tag="h4" />

            <template v-for="i in breakfast">
               <q-timeline-entry :title="i" :key="i" />
            </template>

            <!-- Mid Morning -->
            <q-timeline-entry heading body="Mid-Morning" tag="h4" />

            <template v-for="i in midMorning">
               <q-timeline-entry :title="i" :key="i" />
            </template>
            <!-- Lunch -->
            <q-timeline-entry heading body="Lunch" tag="h4" />

            <template v-for="i in lunch">
               <q-timeline-entry :title="i" :key="i" />
            </template>
            <!-- Evening Snacks -->
            <q-timeline-entry heading body="Evening Snacks" tag="h4" />

            <template v-for="i in evening">
               <q-timeline-entry :title="i" :key="i" />
            </template>
            <!-- Dinner -->
            <q-timeline-entry heading body="Dinner" tag="h4" />

            <template v-for="i in dinner">
               <q-timeline-entry :title="i" :key="i" />
            </template>
         </q-timeline>
      </div>
   </q-page>
</template>

<script>
export default {
   data() {
      return {
         breakfast: [
            "A cup of Tea/ Coffee/ Buttermilk/ Curd.",
            "A bowl of oats porridge and a cucumber.",
            "A bowl of muesli with milk and a cucumber or tomato",
            "Wheat flakes with milk and 1 cucumber or tomato",
            "Vegetable-moong chilla made with at least 2-3 veggies",
            "A bowl of vegetable daliya upma",
            "2 slices of whole wheat bread + egg white omelette with lots of veggies",
         ],
         midMorning: [
            "A cup of green tea with a handful of roasted channa.",
            "One whole fruit (apple/ pear/ orange/ 2-3 moon slices of papaya/ guava).",
         ],
         lunch: [
            "1 bowl of salad + 2 chapatis with 1 big bowl of sabzi + 1 bowl of dal/ sprouts/ curd/ buttermilk/ 2-3 pieces of chicken/ fish.",
            "1 big bowl of vegetable daliya khichdi with curd.",
            "1 bowl of salad / 2 cucumbers/ 2 tomatoes + half a bowl of brown rice + 1 big bowl of sabzi + 1 bowl of dal/ sprouts / curd/ buttermilk/ 2-3 pieces of chicken/ fish.",
         ],
         evening: [
            "1 whole fruit (apple/ pear/ orange/ 2-3 moon slides of papaya/ guava).",
            "1 fist chana (boiled or roasted).",
            "Sukha bhel (cucumber, tomato, green peas, onion, coriander).",
            "Khakra.",
            "Buttermilk (without salt or sugar).",
            "Sandwich (avoid butter, cheese and mayonnaise).",
         ],
         dinner: [
            "1 bowl of salad/ 2 cucumbers/ 2 tomatoes + 2 chapatis with 1 big bowl sabzi + 1 bowl of dal/ sprouts/ curd/ buttermilk/ 2-3 pieces of chicken/ fish.",
            "1 big bowl of vegetable daliya khichdi with curd.",
            "1 bowl of salad/ 2 cucumbers / 2 tomatoes + 1 multigrain chapati or rotla + 1 bowl of dal/sprouts /curd /buttermilk /2-3 pieces of chicken/ fish.",
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