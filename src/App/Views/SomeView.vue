<script setup lang="ts">
import { ref } from "vue";
import { DependencyFactory } from "../Infra/DependencyFactory";
import { GetSomeDataRequest } from "@/Core/Features/SomeFeature/GetSomeData/GetSomeDataRequest";
import type { SomeFeatureCollection } from "@/Core/Features/SomeFeature/SomeFeatureCollection";

console.warn(`BEGIN SomeView initializing`);

// const some$ = useSomeStore();
let someFeatureCollection: SomeFeatureCollection; // = DependencyFactory.SomeFeatureCollectionImplementation();

const someOutput = ref("Please provide input.");
const someInput = ref("");

const tryGetData = async() => {
  if(someFeatureCollection == null){
    someFeatureCollection = DependencyFactory.SomeFeatureCollectionImplementation();
  }
  console.warn(`BEGIN SomeView.tryGetData`);
  if(someInput.value == ""){
    someOutput.value = "Please provide input.";
    return;
  }

  const request = new GetSomeDataRequest(someInput.value);
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