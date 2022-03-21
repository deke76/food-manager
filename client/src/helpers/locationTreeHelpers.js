// const locations = [
//   { id: 0, name: "House", parent: null },
//   { id: 1, name: "Pantry", parent: 0 },
//   { id: 2, name: "Downstairs Freezer", parent: 0 },
//   { id: 3, name: "Fridge", parent: 2 },
//   { id: 4, name: "Freezer", parent: 2 },
//   { id: 5, name: "Panty", parent: 6 },
//   { id: 6, name: "Apartment", parent: null },
//   { id: 7, name: "Cabin", parent: null },
//   { id: 8, name: "Freezer", parent: 7 },
//   { id: 9, name: "Cupboard", parent: 6 },
//   { id: 10, name: "Fridge", parent: 6 },
// ];

export const generateLocationTree = (locationList) => {
  const locationMap = new Map(
    locationList.map((i) => [i.id, { ...i, children: [] }])
  );
  const result = [];
  locationMap.forEach((obj) => {
    if (obj.parent !== null && locationMap.has(obj.parent)) {
      locationMap.get(obj.parent).children.push(obj);
    } else {
      result.push(obj);
    }
  });
  return result;
};

// console.log(JSON.stringify(generateLocationTree(locations), null, 2));
