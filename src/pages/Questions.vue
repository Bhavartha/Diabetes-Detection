<template>
   <q-page>
      <div id="questions" class="q-ma-md q-mx-auto">
         <h5 class="text-center">Please answer the following Questions</h5>
         <q-stepper v-model="step" vertical color="primary" animated header-nav>
            <!-- Question 1 -->
            <q-step
               :name="1"
               title="What is your age?"
               icon="help_outline"
               done-color="positive"
               :done="payload.Age != null"
            >
               <p>Please specify your age (eg:25)</p>
               <q-input
                  outlined
                  label="Age"
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
               :done="payload.Gender != null"
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
               :done="payload.Polyuria != null"
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
               :done="payload.Polydipsia != null"
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
               :done="payload.SuddenWeightLoss != null"
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
               :done="payload.Weakness != null"
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
               :done="payload.Polyphagia != null"
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
               :done="payload.GenitalThrush != null"
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
               :done="payload.VisualBlurring != null"
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
               :done="payload.Itching != null"
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
               :done="payload.Irritability != null"
            >
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
               :done="payload.DelayedHealing != null"
            >
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
               :done="payload.PartialParesis != null"
            >
               <p>Partial paralysis condition</p>
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
               :done="payload.MuscleStiffness != null"
            >
               <p>
                  Muscle stiffness is when your muscles feel tight and you find
                  it more difficult to move than you usually do, especially
                  after rest. You may also have muscle pains, cramping, and
                  discomfort
               </p>
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
               :done="payload.Alopecia != null"
            >
               <p>
                  Partial or complete absence of hair from areas of the body
                  where it normally grows
               </p>
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
               :done="payload.Obesity != null"
            >
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
                  <q-btn
                     @click="simulateProgress"
                     color="primary"
                     label="Submit"
                     :loading="loading"
                     :percentage="percentage"
                     style="width: 150px"
                  >
                     <template v-slot:loading>
                        <q-spinner-gears class="on-left" />
                        Calculating...
                     </template>
                  </q-btn>
               </q-stepper-navigation>
            </q-step>
         </q-stepper>
      </div>
      <q-dialog v-model="response_available" persistent>
         <probability-dialog @close="reset" :data="response" :advanced="false"/>
      </q-dialog>
   </q-page>
</template>

<script>
function initialState() {
   return {
      step: 1,
      loading: false,
      percentage: 0,
      response: null,
      response_available: false,
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
}

export default {
   components: {
      "probability-dialog": require("components/ProbabilityDialog").default,
   },
   data() {
      return initialState();
   },
   methods: {
      reset() {
         Object.assign(this.$data, initialState());
      },
      simulateProgress() {
         this.loading = true;
         this.percentage = 0;
         this.interval = setInterval(() => {
            this.percentage += Math.floor(Math.random() * 8 + 10);
            if (this.percentage >= 100) {
               clearInterval(this.interval);
               this.loading = false;
               this.submit();
            }
         }, 300);
      },
      async submit() {
         try {
            const res = await this.$axios.post(
               "https://vdiabetes.pythonanywhere.com/detect",
               this.payload
            );
            this.response = res.data;
            this.response_available = true;
         } catch {
            alert("Error");
         }
      },
   },
};
</script>

<style scoped>
#questions {
   max-width: 600px;
}
p{
   font-size:15px;
}
</style>