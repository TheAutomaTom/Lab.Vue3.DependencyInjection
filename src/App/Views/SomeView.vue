<script setup lang="ts">
import { ref } from "vue";
import { useSomeState } from "../../Core/Features/SomeFeature/SomeStore";
import { DependencyInjector } from "../Infra/DependencyInjector";
import { GetSomeDataRequest } from "@/Core/Features/SomeFeature/GetSomeData/GetSomeDataRequest";

console.warn(`SomeView initializing`);

const some$ = useSomeState();
const someFeature = DependencyInjector.ProvideSomeFeatures(some$);

const someOutput = ref("Please provide input.");
const someInput = ref("");

const tryGetData = async() => {

  console.warn(`SomeView.tryGetData`);

  if(someInput.value == ""){
    someOutput.value = "Please provide input.";
    return;
  }

  const request = new GetSomeDataRequest(someInput.value);

  var result = await someFeature.getSomeData(request);
  someOutput.value = result.data;
}

</script>

<template>
  <h3>Some App</h3>  
  <input
    v-model="someInput"
  >
  <button @click="tryGetData">Get Some Data</button>
  <div>{{ someOutput }}</div>
</template>