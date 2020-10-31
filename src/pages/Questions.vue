<template>
   <q-page>
      <div id="questions" class="q-ma-md q-mx-auto">
         <h5>Please answer the following questions</h5>
         <q-stepper v-model="step" vertical color="primary" animated header-nav>
            <!-- Question 1 -->
            <q-step
               :name="1"
               title="What is your age?"
               icon="help_outline"
               done-color="positive"
               
               :done="payload.Age != null && step > 1"
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
               done-color="positive"
               :done="step > 2 && payload.Gender != null"
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
                  
               </q-stepper-navigation>
            </q-step>
            <!-- Question 3 -->
            <q-step
               :name="3"
               title="Do you have symptoms of Polyuria?"
               icon="help_outline"
               done-color="positive"
               :done="step > 3 && payload.Polyuria != null"
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
                  
               </q-stepper-navigation>
            </q-step>
            <!-- Question 4 -->
            <q-step
               :name="4"
               title="Do you have symptoms of Polydipsia?"
               icon="help_outline"
               done-color="positive"
               :done="step > 4 && payload.Polydipsia != null"
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
                  
               </q-stepper-navigation>
            </q-step>
            <!-- Question 5 -->
            <q-step
               :name="5"
               title="Do you suffer from sudden weight loss?"
               icon="help_outline"
               done-color="positive"
               :done="step > 5 && payload.SuddenWeightLoss != null"
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
                  
               </q-stepper-navigation>
            </q-step>
            <!-- Question 6 -->
            <q-step
               :name="6"
               title="Do you have weakness?"
               icon="help_outline"
               done-color="positive"
               :done="step > 6 && payload.Weakness != null"
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
                  
               </q-stepper-navigation>
            </q-step>
            <!-- Question 7 -->
            <q-step
               :name="7"
               title="Do you suffer from Polyphagia?"
               icon="help_outline"
               done-color="positive"
               :done="step > 7 && payload.Polyphagia != null"
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
                  
               </q-stepper-navigation>
            </q-step>
            <!-- Question 8 -->
            <q-step
               :name="8"
               title="Do you suffer from Genital thrush?"
               icon="help_outline"
               done-color="positive"
               :done="step > 8 && payload.GenitalThrush != null"
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
                  
               </q-stepper-navigation>
            </q-step>

            <!-- Question 9 -->
            <q-step
               :name="9"
               title="Do you suffer from Visual Blurring?"
               icon="help_outline"
               done-color="positive"
               :done="step > 9 && payload.VisualBlurring != null"
            >
            
               <q-btn-toggle
                  v-model="payload.VisualBlurring"
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
                  <q-btn @click="step = 10" color="primary" label="Continue" />
                  
               </q-stepper-navigation>
            </q-step>

            <!-- Question 10 -->
            <q-step
               :name="10"
               title="Do you suffer from Itching?"
               icon="help_outline"
               done-color="positive"
               :done="step > 10 && payload.Itching != null"
            >
            
               <q-btn-toggle
                  v-model="payload.Itching"
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
                  <q-btn @click="step = 11" color="primary" label="Continue" />
                  
               </q-stepper-navigation>
            </q-step>

            <!-- Question 11 -->
            <q-step
               :name="11"
               title="Do you suffer from Irritability?"
               icon="help_outline"
               done-color="positive"
               :done="step > 11 && payload.Irritability != null"
            >
               <!-- <P></P> -->
               <q-btn-toggle
                  v-model="payload.Irritability"
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
                  <q-btn @click="step = 12" color="primary" label="Continue" />
               </q-stepper-navigation>
            </q-step>

            <!-- Question 12 -->
            <q-step
               :name="12"
               title="Do you suffer from Delayed Healing?"
               icon="help_outline"
               done-color="positive"
               :done="step > 12 && payload.DelayedHealing != null"
            >
               <p></P>
               <q-btn-toggle
                  v-model="payload.DelayedHealing"
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
                  <q-btn @click="step = 13" color="primary" label="Continue" />
               </q-stepper-navigation>
            </q-step>

            <!-- Question 13 -->
            <q-step
               :name="13"
               title="Do you suffer from Partial Paresis?"
               icon="help_outline"
               done-color="positive"
               :done="step > 13 && payload.PartialParesis != null"
            >
               <P>Partial paralysis</P>
               <q-btn-toggle
                  v-model="payload.PartialParesis"
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
                  <q-btn @click="step = 14" color="primary" label="Continue" />
               </q-stepper-navigation>
            </q-step>

            <!-- Question 14 -->
            <q-step
               :name="14"
               title="Do you suffer from Muscle Stiffness?"
               icon="help_outline"
               done-color="positive"
               :done="step > 14 && payload.MuscleStiffness != null"
            >
               <P>Muscle stiffness is when your muscles feel tight and you find it more difficult to move than you usually do, especially after rest. You may also have muscle pains, cramping, and discomfort</P>
               <q-btn-toggle
                  v-model="payload.MuscleStiffness"
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
                  <q-btn @click="step = 15" color="primary" label="Continue" />
               </q-stepper-navigation>
            </q-step>

            <!-- Question 15 -->
            <q-step
               :name="15"
               title="Do you suffer from Alopecia?"
               icon="help_outline"
               done-color="positive"
               :done="step > 15 && payload.Alopecia != null"
            >
               <P>Partial or complete absence of hair from areas of the body where it normally grows</P>
               <q-btn-toggle
                  v-model="payload.Alopecia"
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
                  <q-btn @click="step = 16" color="primary" label="Continue" />
               </q-stepper-navigation>
            </q-step>

            <!-- Question 16 -->
            <q-step
               :name="16"
               title="Do you suffer from Obesity?"
               icon="help_outline"
               done-color="positive"
               :done="step > 16 && payload.Obesity != null"
            >
               <!-- <P>Partial or complete absence of hair from areas of the body where it normally grows</P> -->
               <q-btn-toggle
                  v-model="payload.Obesity"
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
                  <q-btn @click="step = 16" color="primary" label="Continue" />
                  <!-- <q-btn
                     flat
                     @click="step = 15"
                     color="primary"
                     label="Back"
                     class="q-ml-sm"
                  /> -->
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