<style>
.petal {
  stroke: black;
}

.petal:hover {
  stroke: green;
  stroke-width: 5px;
}
</style>

<template>
  <div>
    <svg width='1400' height='1300'>
      <circle cx='{{centerX}}' cy='{{centerY}}' r='{{smallRadius}}' stroke='gold' fill='gold' />
      <!-- <circle cx='{{centerX}}' cy='{{centerY}}' r='{{350}}' stroke='green' fill='transparent' /> -->
      <!-- <circle cx='{{centerX}}' cy='{{centerY}}' r='{{largeRadius}}' stroke='black' fill='transparent' /> -->
      <path class="petal" v-for='petal in petals' d='M {{petal.startX}} {{petal.startY}} C {{petal.control1X}} {{petal.control1Y}}, {{petal.control2X}} {{petal.control2Y}}, {{petal.endX}} {{petal.endY}}' stroke='black' fill='transparent' />
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
      var containerRadius = this.largeRadius;

      var smallRadius = this.smallRadius;

      // TODO this formula is pretty ugly, was just a curve fitted to some data. It should be a closed-form solution based on the geometry of bezier curves
      // TODO also, we need a special case for 1 and 2 replies so we don't just get a horizontal line
      var largeRadius = 428.9 + 9,803.5/(1 + Math.pow(this.numPetals/0.83,2.5));

      for (var i=0;i<this.numPetals;i++) {
        var startAngle = (2*Math.PI/this.numPetals) * i;
        var endAngle = (2*Math.PI/this.numPetals) * (i+1);
        petals.push({
          startX: this.centerX + smallRadius * Math.cos(startAngle),
          startY: this.centerY + smallRadius * Math.sin(startAngle),
          endX: this.centerX + smallRadius * Math.cos(endAngle),
          endY: this.centerY + smallRadius * Math.sin(endAngle),

          control1X: this.centerX + largeRadius * Math.cos(startAngle),
          control1Y: this.centerY + largeRadius * Math.sin(startAngle),
          control2X: this.centerX + largeRadius * Math.cos(endAngle),
          control2Y: this.centerY + largeRadius * Math.sin(endAngle)
        });
      }
      return petals;
    }
  }
}
</script>
