<template>
  <div class="form pt-6">
    <div class="summary text-red" v-if="$v.form.$error">
      Form has errors
    </div>
    <form @submit.prevent="submit">
      <div class="flex justify-center my-6">
        <div 
          class="px-4"
          :class="{ 'hasError': $v.form.age.$error }">
          <label class="mr-2 font-bold text-grey">How many years old are you?</label>
          <input type="age" class="input" v-model="form.age">
        </div>
      </div>
      <div class="text-center">
        <button type="submit" class="button">
          Submit
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import { required, minLength, between } from 'vuelidate/lib/validators'
 
export default {
  data () {
    return {
      age: 0
    }
  },
  validations: {
    age: {
      required,
      minLength: minLength(1)
    },
    age: {
      between: between(1, 120)
    }
  }
}
</script>
