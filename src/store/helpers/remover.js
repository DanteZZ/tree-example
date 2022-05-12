export const remover = (tree, id, all = false) => {
  // Возвращает массив из удаляемого id и дочерних id
  const ids = [];
  tree.forEach((i) => {
    if (all) {
      ids.push(i.id);
      ids.push(remover(i.childrens, id, all));
    } else {
      if (i.id == id) {
        ids.push(i.id);
        ids.push(remover(i.childrens, id, true));
      } else {
        ids.push(remover(i.childrens, id, all));
      }
    }
  });
  return ids.flat();
};
