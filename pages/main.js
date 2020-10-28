//import Tree from "../components/tree"

export default function buttonClick(ctx) {
  /*let t = new Tree(
        document.getElementById("type").value, 
        document.getElementById("angle").value, 
        document.getElementById("axiom").value, 
        document.getElementById("iter").value
    );*/

  // Make and example canvas drawing
  ctx.beginPath()
  ctx.strokeStyle = 'black'
  ctx.lineWidth = 1
  ctx.moveTo(0, 0)
  ctx.lineTo(100, 100)
  ctx.stroke()
  ctx.closePath()

  alert('The tree should now be drawn if the code were there!')
  alert(
    document.getElementById('type').value +
      document.getElementById('angle').value +
      document.getElementById('axiom').value +
      document.getElementById('iter').value
  )
}
