export const getColorByType = (type) => {
  switch (type) {
    case 'grass':
      return '#a8ff98';
    case 'poison':
      return '#d6a2e4';
    case 'normal':
      return '#dcdcdc';
    case 'fire':
      return '#ffb971';
    case 'water':
      return '#8cc4e2';
    case 'electric':
      return '#ffe662';
    case 'ice':
      return '#8cf5e4';
    case 'fighting':
      return '#da7589';
    case 'ground':
      return '#e69a74';
    case 'flying':
      return '#bbc9e4';
    case 'psychic':
      return '#ffa5da';
    case 'bug':
      return '#bae05f';
    case 'rock':
      return '#C9BB8A';
    case 'ghost':
      return '#8291e0';
    case 'dark':
      return '#8e8c94';
    case 'dragon':
      return '#88a2e8';
    case 'steel':
      return '#9fb8b9';
    case 'fairy':
      return '#fdb9e9';
    default:
      return 'gainsboro';
  }
};

export const colorTypeGradients = (type1, type2, length) => {
  let color1, color2;

  color1 = getColorByType(type1);
  color2 = length === 2 ? getColorByType(type2) : color1;

  return [color1, color2];
};
