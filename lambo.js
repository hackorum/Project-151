AFRAME.registerComponent("lamborghini", {
  schema: {
    rotationY: {
      type: "number",
      default: 90,
    },
  },
  tick: function () {
    this.data.rotationY += 0.5;
    let rot = this.el.getAttribute("rotation");
    rot.y = this.data.rotationY;
    this.el.setAttribute("rotation", {
      y: rot.y,
    });
  },
});
