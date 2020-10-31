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
               :done="payload.Pregnancies || !showPreg"
            >
               <q-btn-toggle
                  v-model="showPreg"
                  no-caps
                  toggle-color="primary"
                  color="white"
                  text-color="black"
                  :options="[
                     { label: 'Male', value: false },
                     { label: 'Female', value: true },
                  ]"
               />
               <q-input
                  v-if="showPreg"
                  dense
                  outlined
                  label="Number of Pregnancies"
                  class="q-pt-sm"
                  style="max-width: 400px"
                  v-model="payload.Pregnancies"
               />
               <q-stepper-navigation>
                  <q-btn @click="step = 3" color="primary" label="Continue" />
               </q-stepper-navigation>
            </q-step>

            <!-- Question 3 -->
            <q-step
               :name="3"
               title="What is your Glucose level?"
               icon="help_outline"
               done-color="positive"
               :done="payload.Glucose != null"
            >
               <q-input
                  dense
                  outlined
                  label="Glucose level"
                  class="q-pt-sm"
                  style="max-width: 400px"
                  v-model="payload.Glucose"
               />
               <q-stepper-navigation>
                  <q-btn @click="step = 4" color="primary" label="Continue" />
               </q-stepper-navigation>
            </q-step>

            <!-- Question 4 -->
            <q-step
               :name="4"
               title="How much is your Blood Pressure?"
               icon="help_outline"
               done-color="positive"
               :done="payload.BloodPressure != null"
            >
               <q-input
                  dense
                  outlined
                  label="Blood pressure"
                  class="q-pt-sm"
                  style="max-width: 400px"
                  v-model="payload.BloodPressure"
               />
               <q-stepper-navigation>
                  <q-btn @click="step = 5" color="primary" label="Continue" />
               </q-stepper-navigation>
            </q-step>

            <!-- Question 5 -->
            <q-step
               :name="5"
               title="What is your skin thickness value?"
               icon="help_outline"
               done-color="positive"
               :done="payload.SkinThickness != null"
            >
               <q-input
                  dense
                  outlined
                  label="Skin Thickness"
                  class="q-pt-sm"
                  style="max-width: 400px"
                  v-model="payload.SkinThickness"
               />
               <q-stepper-navigation>
                  <q-btn @click="step = 6" color="primary" label="Continue" />
               </q-stepper-navigation>
            </q-step>

            <!-- Question 6 -->
            <q-step
               :name="6"
               title="Amount of Insulin?"
               icon="help_outline"
               done-color="positive"
               :done="payload.Insulin != null"
            >
               <q-input
                  dense
                  outlined
                  label="Amount of Insulin"
                  class="q-pt-sm"
                  style="max-width: 400px"
                  v-model="payload.Insulin"
               />
               <q-stepper-navigation>
                  <q-btn @click="step = 7" color="primary" label="Continue" />
               </q-stepper-navigation>
            </q-step>

            <!-- Question 7 -->
            <q-step
               :name="7"
               title="What is your BMI value?"
               icon="help_outline"
               done-color="positive"
               :done="payload.BMI != null"
            >
               <q-input
                  dense
                  outlined
                  label="BMI value"
                  class="q-pt-sm"
                  style="max-width: 400px"
                  v-model="payload.BMI"
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
         <probability-dialog @close="reset" :data="response" :advanced="true"/>
      </q-dialog>
   </q-page>
</template>

<script>
function initialState() {
   return {
      showPreg: false,
      step: 1,
      loading: false,
      percentage: 0,
      response: null,
      response_available: false,
      payload: {
         Age: null,
         Pregnancies: null,
         Glucose: null,
         BloodPressure: null,
         SkinThickness: null,
         Insulin: null,
         BMI: null,
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
             // Male
             if(!this.showPreg){
                 this.payload.Pregnancies = 0
             }
            console.log(this.payload);
            const res = await this.$axios.post(
               "https://vdiabetes.pythonanywhere.com/type2",
               this.payload
            );
            this.response = res.data;
            this.response_available = true;
         } catch(err) {
            alert(err);
         }
      },
   },
};
</script>

<style scoped>
#questions {
   max-width: 600px;
}
p {
   font-size: 15px;
}
</style>