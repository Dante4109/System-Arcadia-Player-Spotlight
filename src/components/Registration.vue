<template>
  <div>
      <v-flex class="heading">
        <h1>Registration</h1>
        <h4>Register your player info below</h4>
      </v-flex>

        <v-layout>
            <v-form
                ref="form"
          style="width:100%;"
          >

         <v-text-field label="Username"></v-text-field>

            <v-file-input label="Upload Photo"></v-file-input>
        <v-btn label="Submit Issue" style="margin-left: auto;">Submit Issue</v-btn>
          </v-form>
        </v-layout>

  </div>
</template>

<script>
export default {
  name: 'Registration',
  data() {
    return {
      user: JSON.stringify
    }
  },
  mounted() {
  
  }
}
</script>

<style scoped>
p {
  color: #B2B4B2;
  margin: 0 1em;
  font-weight: 700;
}

.v-card {
  margin-bottom: 2em;
}

.heading {
  margin-bottom: 1em !important;
}

a {
  color: #fff !important;
  text-decoration: none;
}

</style>
