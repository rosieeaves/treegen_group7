import Tree from '../components/tree'

// Test a very basic tree model generation for whether the rule propagation works

let test_tree = new Tree('deterministic', 10, 'A', 3)

test_tree.addRule('A', 'AB')
test_tree.addRule('B','[AA]')

let output = test_tree.generate()

test('Test simple rule output', () => {
    expect(output).toBe('AB[AA][ABAB]')
  })