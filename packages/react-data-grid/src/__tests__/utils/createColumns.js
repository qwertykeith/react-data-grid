
export const createColumn = (index, props) => {
  const key = `Column${index}`;
  return {
    key,
    name: key,
    Id: index,
    editable: true,
    getRowMetaData: () => [],
    width: 100,
    left: 100 * index,
    ...props
  };
};

export const createColumns = (count) => {
  return Array.from(Array(count).keys()).map(i => createColumn(i));
};
