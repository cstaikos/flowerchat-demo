// app.vue
<style>

</style>

<template>
<div>

  <div id="flower-container">
    <svg width="1400" height="1300">
      <circle cx="{{CENTER_X}}" cy="{{CENTER_Y}}" r="{{SMALL_RADIUS}}" stroke="gold" fill="gold" />
      <circle cx="{{CENTER_X}}" cy="{{CENTER_Y}}" r="{{LARGE_RADIUS}}" stroke="black" fill="transparent" />
      <!-- <circle cx="{{CONTROL_1_X}}" cy="{{CONTROL_1_Y}}", r="5" stroke="black" />
      <circle cx="{{CONTROL_2_X}}" cy="{{CONTROL_2_Y}}", r="5" stroke="black" /> -->

      <path v-for="pedal in pedals" d="M {{pedal.startX}} {{pedal.startY}} C {{pedal.control1X}} {{pedal.control1Y}}, {{pedal.control2X}} {{pedal.control2Y}}, {{pedal.endX}} {{pedal.endY}}" stroke="black" fill="transparent" />
      <!-- <path d="M {{START_X}} {{START_Y}} C {{CONTROL_1_X}} {{CONTROL_1_Y}}, {{CONTROL_2_X}} {{CONTROL_2_Y}}, {{END_X}} {{END_Y}}" stroke="black" fill="transparent" /> -->
    </svg>
  </div>


</div>
</template>

<script>

var SMALL_RADIUS = 200;
var CENTER_X = 500;
var CENTER_Y = 350;
var NUM_PEDALS = 10;
var LARGE_RADIUS = 400 - (5*NUM_PEDALS);

// var startX = CENTER_X + SMALL_RADIUS * Math.cos(Math.PI);
// var startY = CENTER_Y + SMALL_RADIUS * Math.sin(Math.PI);
// var endX = CENTER_X + SMALL_RADIUS * Math.cos(5*Math.PI/4);
// var endY = CENTER_Y + SMALL_RADIUS * Math.sin(5*Math.PI/4);
//
// var control1X = CENTER_X + LARGE_RADIUS * Math.cos(Math.PI);
// var control1Y = CENTER_Y + LARGE_RADIUS * Math.sin(Math.PI);
// var control2X = CENTER_X + LARGE_RADIUS * Math.cos(5*Math.PI/4);
// var control2Y = CENTER_Y + LARGE_RADIUS * Math.sin(5*Math.PI/4);

var makePedals = function(num) {
  var pedals = [];
  for (var i=0;i<num;i++) {
    var startAngle = (2*Math.PI/num) * i;
    var endAngle = (2*Math.PI/num) * (i+1);
    pedals.push({
      startX: CENTER_X + SMALL_RADIUS * Math.cos(startAngle),
      startY: CENTER_Y + SMALL_RADIUS * Math.sin(startAngle),
      endX: CENTER_X + SMALL_RADIUS * Math.cos(endAngle),
      endY: CENTER_Y + SMALL_RADIUS * Math.sin(endAngle),

      control1X: CENTER_X + LARGE_RADIUS * Math.cos(startAngle),
      control1Y: CENTER_Y + LARGE_RADIUS * Math.sin(startAngle),
      control2X: CENTER_X + LARGE_RADIUS * Math.cos(endAngle),
      control2Y: CENTER_Y + LARGE_RADIUS * Math.sin(endAngle)
    });
  }
  return pedals;
};

module.exports = {
  data: function() {
    return {
      SMALL_RADIUS: SMALL_RADIUS,
      LARGE_RADIUS: LARGE_RADIUS,
      CENTER_Y: CENTER_Y,
      CENTER_X: CENTER_X,
      // START_X: startX,
      // START_Y: startY,
      // END_X: endX,
      // END_Y: endY,
      // CONTROL_1_X: control1X,
      // CONTROL_1_Y: control1Y,
      // CONTROL_2_X: control2X,
      // CONTROL_2_Y: control2Y,
      content: "I have a strong opinion, etc... blah blah",
      author: "Chris Staikos",
      date: "Yesterday",
      pedals: makePedals(NUM_PEDALS),
      children: [
        {relevance: 5},
        {relevance: 4},
        {relevance: 7},
        {relevance: 10},
        {relevance: 15}
      ]
    }
  }
}

</script>
