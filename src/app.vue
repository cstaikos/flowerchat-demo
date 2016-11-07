<style>
.controls {
  position: fixed;
}
</style>

<template>
<div class="controls">
    <input v-model="smallRadius" type="range" name="smallRadiusInputName" id="smallRadiusInputId" value="200" min="100" max="1000" oninput="smallRadiusOutputId.value = smallRadiusInputId.value" />
  <br/>
  Small Circle Radius (flower head): <output name="smallRadiusOutputName" id="smallRadiusOutputId">{{small-radius}}</output>
  <br/>
  <br/>

  <input v-model="largeRadius" type="range" name="largeRadiusInputName" id="largeRadiusInputId" value="300" min="200" max="2000" oninput="largeRadiusOutputId.value = largeRadiusInputId.value" />
  <br/>
  Large Circle Radius (projected control points): <output name="largeRadiusOutputName" id="largeRadiusOutputId">{{large-radius}}</output>
  <br/>
  <br/>

  <input v-model="centerX" type="range" name="centerXInputName" id="centerXInputId" value="500" min="0" max="2000" oninput="centerXOutputId.value = centerXInputId.value" />
  <br/>
  Center x: <output name="centerXOutputName" id="centerXOutputId">{{center-x}}</output>
  <br/>
  <br/>

  <input v-model="centerY" type="range" name="centerYInputName" id="centerYInputId" value="350" min="0" max="2000" oninput="centerYOutputId.value = centerYInputId.value" />
  <br/>
  Center y: <output name="centerYOutputName" id="centerYOutputId">{{center-y}}</output>
  <br/>
  <br/>

  <input v-model="numPetals" type="range" name="numPetalsInputName" id="numPetalsInputId" value="5" min="0" max="20" oninput="numPetalsOutputId.value = numPetalsInputId.value" />
  <br/>
  Number of petals: <output name="numPetalsOutputName" id="numPetalsOutputId">{{num-petals}}</output>
  <br/>
  <br/>

</div>

  <flower
    :small-radius="smallRadius"
    :large-radius="largeRadius"
    :center-x="centerX"
    :center-y="centerY"
    :num-petals="numPetals">
    </flower>
</template>

<script>
  import Flower from './flower.vue'

  module.exports = {
  data: function() {
    return {
      "smallRadius": "199",
      "largeRadius": "1",
      "centerX": "1",
      "centerY": "1",
      "numPetals": "1"
    };
  },
  components: { Flower }
}

</script>
