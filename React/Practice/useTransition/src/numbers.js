export let setNumbres = (num) => {
  let array = [];
  if (!num) {
    for (let i = 100; i > 0; i--) {
      array.push(i);
    }
  } else {
    for (let i = num; i > 0; i--) {
      array.push(i);
    }
  }
  return array;
};
