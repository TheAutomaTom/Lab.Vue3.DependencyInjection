<script setup lang="ts">
import { ref } from "vue";
import { DependencyFactory } from "../Infra/DependencyFactory";
import { GetSomeDataRequest } from "@/Core/Features/SomeFeature/GetSomeData/GetSomeDataRequest";

console.warn(`BEGIN SomeView initializing`);

// const some$ = useSomeStore();
const someFeatureCollection = DependencyFactory.SomeFeatureCollectionImplementation();

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
  var result = await someFeatureCollection.getSomeDataHandler.handle(request);
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