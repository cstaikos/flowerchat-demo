<style>

</style>

<template>
  <div>
    haiii i'm a FLOWER YES
    <svg width='1400' height='1300'>
      <circle cx='{{centerX}}' cy='{{centerY}}' r='{{smallRadius}}' stroke='gold' fill='gold' />
      <circle cx='{{centerX}}' cy='{{centerY}}' r='{{largeRadius}}' stroke='black' fill='transparent' />
      <path v-for='petal in petals' d='M {{petal.startX}} {{petal.startY}} C {{petal.control1X}} {{petal.control1Y}}, {{petal.control2X}} {{petal.control2Y}}, {{petal.endX}} {{petal.endY}}' stroke='black' fill='transparent' />
    </svg>
  </div>
</template>

<script>
module.exports = {
  props: [
    'smallRadius',
    'largeRadius',
    'centerX',
    'centerY',
    'numPetals'
  ],
  computed: {
    petals: function() {
      var petals = [];
      for (var i=0;i<this.numPetals;i++) {
        var startAngle = (2*Math.PI/this.numPetals) * i;
        var endAngle = (2*Math.PI/this.numPetals) * (i+1);
        petals.push({
          startX: this.centerX + this.smallRadius * Math.cos(startAngle),
          startY: this.centerY + this.smallRadius * Math.sin(startAngle),
          endX: this.centerX + this.smallRadius * Math.cos(endAngle),
          endY: this.centerY + this.smallRadius * Math.sin(endAngle),

          control1X: this.centerX + this.largeRadius * Math.cos(startAngle),
          control1Y: this.centerY + this.largeRadius * Math.sin(startAngle),
          control2X: this.centerX + this.largeRadius * Math.cos(endAngle),
          control2Y: this.centerY + this.largeRadius * Math.sin(endAngle)
        });
      }
      return petals;
    }
  }
}
</script>
