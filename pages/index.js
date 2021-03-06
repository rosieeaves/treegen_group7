import Tree from '~/components/tree'

/* This will check for erros in the user input, and if there are none
create a tree and give it the necessary information*/
export default function clickHandler(
  modeltype,
  angle,
  axiom,
  iter,
  ctx,
  rules
) {
  // Check for valid angle, checking for self-equality is checking for NaN
  let valid = true
  angle = parseFloat(angle)
  if (angle != angle || angle > 90 || angle < 0) {
    alert('Angle must be a floating point number 0<=x<=90!')
    valid = false
  }

  // Check for valid number of iterations
  iter = parseInt(iter)
  if (iter != iter || iter > 10 || iter <= 0) {
    alert('Number of iterations must be an integer 0<x<=10!')
    valid = false
  }

  // Proceed if all is good!
  if (valid) {
    /* Here we should call the appropriate function of tree.js */

    ctx.beginPath()
    ctx.clearRect(0, 0, 500, 500)
    ctx.stroke()
    let tree = new Tree(modeltype, angle, axiom, iter)
    console.log(tree)

    for (let i = 0; i < rules.length; i++) {
      tree.addRule(rules[i][0], rules[i][1])
    }

    tree.generate(ctx, iter)

    // Make little test drawing
    /*
    ctx.beginPath()
    ctx.strokeStyle = 'white'
    ctx.lineWidth = 1
    ctx.moveTo(0, 0)
    ctx.lineTo(100, 100)
    ctx.stroke()
    ctx.closePath()
    */
  }
}
