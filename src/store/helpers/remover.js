export const remover = (tree, id, all = false) => {
  // Возвращает массив из удаляемого id и дочерних id
  const ids = [];
  tree.forEach((i) => {
    if (i.id == id || all) {
      ids.push(i.id);
    }
    ids.push(remover(i.childrens, id, i.id == id ? true : all));
  });
  return ids.flat();
};
