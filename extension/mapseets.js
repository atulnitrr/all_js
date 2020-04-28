console.log("map and sets");

const set = new Set();
set.add(34);
set.add(36);
set.add(34);
console.log(set);

for (element of set) {
  console.log(element);
}

// weak map

/*
const map = new Map();
map.set("ab", "atul");
map.set("mn", "kumar");

// map.delete("ab")
// map.clear();
console.log(map);
console.log(map.get("mn"));
console.log(map.keys());

for (const iterator of map.keys()) {
  console.log(iterator);
}
for (const iterator of map.values()) {
  console.log(iterator);
}

// no need to use entries 
for (const iterator of map.entries()) {
  console.log(iterator);
}


*/
