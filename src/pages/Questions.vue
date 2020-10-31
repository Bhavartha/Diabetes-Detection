<template>
   <q-page>
      <div id="questions" class="q-ma-md q-mx-auto">
         <h5>Please answer the following questions</h5>
         <q-stepper v-model="step" vertical color="primary" animated>
            <!-- Question 1 -->
            <q-step
               :name="1"
               title="What is your age?"
               icon="help_outline"
               :done="step > 1"
               :error="payload.Age == null && step > 1"
            >
               <p>Please specify your age (eg:25)</p>
               <q-input
                  outlined
                  label="Age"
                  mask="###"
                  class="q-pt-sm"
                  v-model="payload.Age"
               />
               <q-stepper-navigation>
                  <q-btn @click="step = 2" color="primary" label="Continue" />
               </q-stepper-navigation>
            </q-step>

            <!-- Question 2 -->
            <q-step
               :name="2"
               title="What is your Gender?"
               icon="help_outline"
               :done="step > 2"
               :error="step > 2 && payload.Gender == null"
            >
               <q-btn-toggle
                  v-model="payload.Gender"
                  no-caps
                  toggle-color="primary"
                  color="white"
                  text-color="black"
                  :options="[
                     { label: 'Male', value: 1 },
                     { label: 'Female', value: 0 },
                  ]"
               />
               <q-stepper-navigation>
                  <q-btn @click="step = 3" color="primary" label="Continue" />
                  <q-btn
                     flat
                     @click="step = 1"
                     color="primary"
                     label="Back"
                     class="q-ml-sm"
                  />
               </q-stepper-navigation>
            </q-step>
            <!-- Question 3 -->
            <q-step
               :name="3"
               title="Do you have symptoms of Polyuria?"
               icon="help_outline"
               :done="step > 3"
               :error="step > 3 && payload.Polyuria == null"
            >
               <p>
                  Polyuria is a condition where the body urinates more than
                  usual and passes excessive or abnormally large amounts of
                  urine each time you urinate
               </p>
               <q-btn-toggle
                  v-model="payload.Polyuria"
                  no-caps
                  toggle-color="primary"
                  color="white"
                  text-color="black"
                  :options="[
                     { label: 'Yes', value: 1 },
                     { label: 'No', value: 0 },
                  ]"
               />
               <q-stepper-navigation>
                  <q-btn @click="step = 4" color="primary" label="Continue" />
                  <q-btn
                     flat
                     @click="step = 2"
                     color="primary"
                     label="Back"
                     class="q-ml-sm"
                  />
               </q-stepper-navigation>
            </q-step>
            <!-- Question 4 -->
            <q-step
               :name="4"
               title="Do you have symptoms of Polydipsia?"
               icon="help_outline"
               :done="step > 4"
               :error="step > 4 && payload.Polydipsia == null"
            >
               <p>
                  Polydipsia is a condition marked by excessive thirst that
                  lasts for long periods of time.
               </p>
               <q-btn-toggle
                  v-model="payload.Polydipsia"
                  no-caps
                  toggle-color="primary"
                  color="white"
                  text-color="black"
                  :options="[
                     { label: 'Yes', value: 1 },
                     { label: 'No', value: 0 },
                  ]"
               />
               <q-stepper-navigation>
                  <q-btn @click="step = 5" color="primary" label="Continue" />
                  <q-btn
                     flat
                     @click="step = 3"
                     color="primary"
                     label="Back"
                     class="q-ml-sm"
                  />
               </q-stepper-navigation>
            </q-step>
            <!-- Question 5 -->
            <q-step
               :name="5"
               title="Do you suffer from sudden weight loss?"
               icon="help_outline"
               :done="step > 5"
               :error="step > 5 && payload.SuddenWeightLoss == null"
            >
               <q-btn-toggle
                  v-model="payload.SuddenWeightLoss"
                  no-caps
                  toggle-color="primary"
                  color="white"
                  text-color="black"
                  :options="[
                     { label: 'Yes', value: 1 },
                     { label: 'No', value: 0 },
                  ]"
               />
               <q-stepper-navigation>
                  <q-btn @click="step = 6" color="primary" label="Continue" />
                  <q-btn
                     flat
                     @click="step = 4"
                     color="primary"
                     label="Back"
                     class="q-ml-sm"
                  />
               </q-stepper-navigation>
            </q-step>
            <!-- Question 6 -->
            <q-step
               :name="6"
               title="Do you have weakness?"
               icon="help_outline"
               :done="step > 6"
               :error="step > 6 && payload.Weakness == null"
            >
               <q-btn-toggle
                  v-model="payload.Weakness"
                  no-caps
                  toggle-color="primary"
                  color="white"
                  text-color="black"
                  :options="[
                     { label: 'Yes', value: 1 },
                     { label: 'No', value: 0 },
                  ]"
               />
               <q-stepper-navigation>
                  <q-btn @click="step = 7" color="primary" label="Continue" />
                  <q-btn
                     flat
                     @click="step = 5"
                     color="primary"
                     label="Back"
                     class="q-ml-sm"
                  />
               </q-stepper-navigation>
            </q-step>
            <!-- Question 7 -->
            <q-step
               :name="7"
               title="Do you suffer from Polyphagia?"
               icon="help_outline"
               :done="step > 7"
               :error="step > 7 && payload.Polyphagia == null"
            >
               <p>
                  Polyphagia, also known as hyperphagia, is the medical term for
                  excessive or extreme hunger. It's different than having an
                  increased appetite after exercise or other physical activity.
                  While your hunger level will return to normal after eating in
                  those cases, polyphagia won't go away if you eat more food.
               </p>
               <q-btn-toggle
                  v-model="payload.Polyphagia"
                  no-caps
                  toggle-color="primary"
                  color="white"
                  text-color="black"
                  :options="[
                     { label: 'Yes', value: 1 },
                     { label: 'No', value: 0 },
                  ]"
               />
               <q-stepper-navigation>
                  <q-btn @click="step = 8" color="primary" label="Continue" />
                  <q-btn
                     flat
                     @click="step = 6"
                     color="primary"
                     label="Back"
                     class="q-ml-sm"
                  />
               </q-stepper-navigation>
            </q-step>
            <!-- Question 8 -->
            <q-step
               :name="8"
               title="Do you suffer from Genital thrush?"
               icon="help_outline"
               :done="step > 8"
               :error="step > 8 && payload.GenitalThrush == null"
            >
               <p>
                  Thrush is a type of yeast infection, caused by Candida
                  albicans, that can develop in your mouth and throat, on your
                  skin, or specifically on your genitals.
               </p>
               <q-btn-toggle
                  v-model="payload.GenitalThrush"
                  no-caps
                  toggle-color="primary"
                  color="white"
                  text-color="black"
                  :options="[
                     { label: 'Yes', value: 1 },
                     { label: 'No', value: 0 },
                  ]"
               />
               <q-stepper-navigation>
                  <q-btn @click="step = 9" color="primary" label="Continue" />
                  <q-btn
                     flat
                     @click="step = 7"
                     color="primary"
                     label="Back"
                     class="q-ml-sm"
                  />
               </q-stepper-navigation>
            </q-step>
         </q-stepper>
      </div>
   </q-page>
</template>

<script>
export default {
   data() {
      return {
         step: 1,
         payload: {
            Age: null,
            Gender: null,
            Polyuria: null,
            Polydipsia: null,
            SuddenWeightLoss: null,
            Weakness: null,
            Polyphagia: null,
            GenitalThrush: null,
            VisualBlurring: null,
            Itching: null,
            Irritability: null,
            DelayedHealing: null,
            PartialParesis: null,
            MuscleStiffness: null,
            Alopecia: null,
            Obesity: null,
         },
      };
   },
};
</script>

<style scoped>
#questions {
   max-width: 600px;
}
</style>