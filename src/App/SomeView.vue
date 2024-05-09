<script setup lang="ts">
import { ref } from "vue";
import { useSomeState } from "../Core/SomeController";
const some$ = useSomeState();

const someData = ref("...");

const tryGetData=()=>{
  
  var result = some$.GetSomeData("XYZ");
  someData.value = result.data;
}
</script>
<template>
  <span>Some App</span>
  <button
    @click="tryGetData"
  >Get Some Data</button>
  <div>{{ someData }}</div>
</template>