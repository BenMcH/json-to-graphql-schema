const types = [];

const isInt = n => n % 1 === 0;

const graphType = obj => {
  const type = typeof obj;
  switch (type) {
    case 'number':
      return isInt(obj) ? 'Int' : 'Float';
    case 'boolean':
      return `Boolean`;
    case 'string':
      return obj.startsWith('@') ? obj.substring(1) : `String`;
    case 'object':
      return Array.isArray(obj) ? `[${graphType(obj[0])}]` : 'OBJECT';
    default:
  }
};

const capitalize = word => `${word.charAt(0).toUpperCase()}${word.slice(1)}`;

const createType = (name, obj, spaces) => {
  const indent = ' '.repeat(spaces);

  let newType = `type ${name} {\n`;
  Object.keys(obj).forEach(
    key => (newType += `${indent}${convertToGraphDSL(key, obj[key])}\n`)
  );
  newType = `${newType}}\n`;
  types.push(newType);
};

const convertToGraphDSL = (name, obj, spaces = 2) => {
  const type = graphType(obj);
  if (type.includes('OBJECT')) {
    let newName = capitalize(name);
    if (type === 'OBJECT') {
      createType(newName, obj, spaces);
    } else if (type === '[OBJECT]') {
      createType(newName, obj[0], spaces);
      newName = `[${newName}]`;
    }
    return `${name}: ${newName}`;
  }
  return `${name}: ${type}`;
};

const buildSchema = ({ typeDefs, spaces }) => {
  Object.keys(typeDefs).forEach(key =>
    convertToGraphDSL(key, typeDefs[key], spaces)
  );
  return types.join('\n');
};

module.exports = { buildSchema };
