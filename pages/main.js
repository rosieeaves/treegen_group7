import { NAME_OF_FUNCTION } from "~/components/dummyFunction"
import Tree from "~/components/tree"

//import Tree from "../components/tree"

export default function buttonClick(ctx,model,angle,rule,axiom,n) {
  /*let t = new Tree(p1,p2,p3,p4);
  let t = new Tree(
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
  ctx.lineTo(200, 50)
  ctx.lineTo(p4,p5)
  ctx.stroke()
  ctx.closePath()

  alert('The tree should now be drawn if the code were there!')
  
}

export function algo (string,n) {
  alert("this is your info "+string+", "+n )
}