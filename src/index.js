import {parse} from 'babylon';
import generate from 'babel-generator';
import traverse from 'babel-traverse';

export const replace = code => {
  const ast = parse(code);
  traverse(ast, {
    enter (node, parent) {
      console.log(node.type);
    }
  });
  const output = generate(ast, {}, code);
  return output.code;
};

export default { replace };
