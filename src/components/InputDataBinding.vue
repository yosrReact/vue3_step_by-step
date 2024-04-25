<script setup>
import { ref } from 'vue';


const input = ref("")
const radio = ref("")
const checkboxes = ref([])
const radios = ref([{ value: "1", label: "radio 1" }, { value: "2", label: "radio 2" }])
const select = ref()
const options = ref([{ value: "1", label: "option 1" }, { value: "2", label: "option 2" }, { value: "3", label: "option 3" }])
</script>
<template>
    <div>
        <strong>input</strong>
        <!-- input type="text" -->

        <input type="text" v-model.number="input" placeholder="type ..." />
        <!-- à utiliser au cas  où on a besoin de faire un traitement avant le binding-->
        <input type="text" :value="input" @input="input = $event.target.value" placeholder="type ..." />
    </div>
    <div>
        <p>{{ input }}</p>
    </div>
    <div>
        <strong>radio 1st solution</strong>
        <!-- input type="radio" -->
        <input type="radio" v-model="radio" value="1" />radio 1
        <input type="radio" v-model="radio" value="2" /> radio 2
        <br />
        <strong>radio 2nd solution</strong>
        <template v-for="({ value, label }, index) in radios" :key="index">
            <input type="radio" v-model="radio" :value="value" /> {{ label }}
        </template>
    </div>
    <div>
        <p>{{ radio }}</p>
    </div>
    <div>
        <strong>checkbox</strong>
        <!-- input type="checkbox" -->
        <input type="checkbox" v-model="checkboxes" value="1" />checkbox 1
        <input type="checkbox" v-model="checkboxes" value="2" /> checkbox 2

    </div>
    <div>
        <p>{{ checkboxes }}</p>
    </div>
    <div>
        <strong>select</strong>
        <!-- input type="select" -->
        <select v-model="select">
            <option value="" disabled>Select an option</option>
            <option v-for="({ value, label }, index) in options" :key="index" :value="value">{{ label }}</option>
        </select>

    </div>
    <div>
        <p>{{ select }}</p>
    </div>
</template>