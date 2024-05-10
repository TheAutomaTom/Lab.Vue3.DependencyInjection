<script setup lang="ts">
import { ref } from "vue";
import { useSomeStore } from "../../Core/Features/SomeFeature/SomeStore";
import { DependencyInjector } from "../Infra/DependencyInjector";
import { GetSomeDataRequest } from "@/Core/Features/SomeFeature/GetSomeData/GetSomeDataRequest";

console.warn(`BEGIN SomeView initializing`);

// const some$ = useSomeStore();
const someFeatures = DependencyInjector.ProvideSomeFeatures();

const someOutput = ref("Please provide input.");
const someInput = ref("");

const tryGetData = async() => {

  console.warn(`BEGIN SomeView.tryGetData`);

  if(someInput.value == ""){
    someOutput.value = "Please provide input.";
    return;
  }

  const request = new GetSomeDataRequest(someInput.value);

  // var result = await someFeature.getSomeData(request);
  var result = await someFeatures.getSomeDataUseCase.handle(request);
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