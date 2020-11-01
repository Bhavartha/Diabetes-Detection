<template>
   <q-page class="flex justify-center">
      <div class="q-pa-md" style="width: 500px" id="diet">
         <q-list bordered class="rounded-borders">
            <q-expansion-item
               expand-separator
               icon="wb_sunny"
               label="Morning"
               caption="Morning Meal"
               default-opened
            >
               <q-expansion-item
                  :header-inset-level="1"
                  :content-inset-level="1"
                  expand-separator
                  icon="free_breakfast"
                  label="Breakfast"
               >
                  <q-card>
                     <q-card-section>
                        <ul>
                           <li>A cup of Tea/ Coffee/ Buttermilk/ Curd.</li>
                           <li>A bowl of oats porridge and a cucumber.</li>
                           <li>
                              A bowl of muesli with milk and a cucumber or
                              tomato.
                           </li>
                           <li>
                              Wheat flakes with milk and 1 cucumber or tomato.
                           </li>
                           <li>
                              Vegetable-moong chilla made with at least 2-3
                              veggies
                           </li>
                           <li>A bowl of vegetable daliya upma</li>
                        </ul>
                     </q-card-section>
                  </q-card>
               </q-expansion-item>

               <q-expansion-item
                  :header-inset-level="1"
                  :content-inset-level="1"
                  expand-separator
                  icon="fastfood"
                  label="Mid Morning"
               >
                  <q-card>
                     <q-card-section>
                        <ul>
                           <li>
                              A cup of green tea with a handful of roasted
                              channa.
                           </li>
                           <li>
                              One whole fruit (apple/ pear/ orange/ 2-3 moon
                              slices of papaya/ guava).
                           </li>
                        </ul>
                     </q-card-section>
                  </q-card>
               </q-expansion-item>

               <q-expansion-item
                  :header-inset-level="1"
                  :content-inset-level="1"
                  expand-separator
                  icon="local_dining"
                  label="Lunch"
               >
                  <q-card>
                     <q-card-section>
                        <ul>
                           <li>
                              1 bowl of salad + 2 chapatis with 1 big bowl of
                              sabzi + 1 bowl of dal/ sprouts/ curd/ buttermilk/
                              2-3 pieces of chicken/ fish.
                           </li>
                           <li>
                              1 big bowl of vegetable daliya khichdi with curd.
                           </li>
                           <li>
                              1 bowl of salad / 2 cucumbers/ 2 tomatoes + half a
                              bowl of brown rice + 1 big bowl of sabzi + 1 bowl
                              of dal/ sprouts / curd/ buttermilk/ 2-3 pieces of
                              chicken/ fish.
                           </li>
                        </ul>
                     </q-card-section>
                  </q-card>
               </q-expansion-item>
            </q-expansion-item>

            <!-- Evening -->
            <q-expansion-item
               :content-inset-level="0.5"
               expand-separator
               icon="brightness_6"
               label="Evening"
               caption="Evening Snacks"
               default-opened
            >
               <q-card>
                  <q-card-section>
                     <ul>
                        <li>
                           1 whole fruit (apple/ pear/ orange/ 2-3 moon slides
                           of papaya/ guava).
                        </li>
                        <li>1 fist chana (boiled or roasted).</li>
                        <li>
                           Sukha bhel (cucumber, tomato, green peas, onion,
                           coriander).
                        </li>
                        <li>Khakra</li>
                        <li>Sandwich (avoid butter, cheese and mayonnaise).</li>
                     </ul>
                  </q-card-section>
               </q-card>
            </q-expansion-item>
            <!-- Evening end -->

            <!-- Night -->
            <q-expansion-item
               :content-inset-level="0.5"
               expand-separator
               icon="nights_stay"
               label="Night"
               caption="Dinner Meal"
               default-opened
            >
               <q-card>
                  <q-card-section>
                     <ul>
                        <li>
                           1 bowl of salad/ 2 cucumbers/ 2 tomatoes + 2 chapatis
                           with 1 big bowl sabzi + 1 bowl of dal/ sprouts/ curd/
                           buttermilk/ 2-3 pieces of chicken/ fish.
                        </li>
                        <li>
                           1 big bowl of vegetable daliya khichdi with curd.
                        </li>
                        <li>
                           1 bowl of salad/ 2 cucumbers / 2 tomatoes + 1
                           multigrain chapati or rotla + 1 bowl of dal/sprouts
                           /curd /buttermilk /2-3 pieces of chicken/ fish.
                        </li>
                     </ul>
                  </q-card-section>
               </q-card>
            </q-expansion-item>
            <!-- Night end -->
         </q-list>
      </div>
   </q-page>
</template>
<style lang="scss" scoped>
#diet {
   margin-top: 30px;
}
</style>