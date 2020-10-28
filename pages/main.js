import Tree from '../components/tree'

export default function buttonClick() {
  let t = new Tree(
    document.getElementById('type').value,
    document.getElementById('angle').value,
    document.getElementById('axiom').value,
    document.getElementById('iter').value
  )
  alert('The tree should now be drawn if the code were there!')
  alert(
    document.getElementById('type').value +
      document.getElementById('angle').value +
      document.getElementById('axiom').value +
      document.getElementById('iter').value
  )
}
