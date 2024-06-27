function mostFrequentlyLongStrings(arr) {
  const map = new Map();
  for (const str of arr) {
    const len = str.length;
    map.set(len, (map.get(len) || 0) + 1);
  }

  let bestCount = 0,
      bestLen = 0;
  for (const [len, count] of map.entries()) {
    if (count > bestCount) {
      bestCount = count;
      bestLen = len;
    }
  }
  return arr.filter((str) => str.length === bestLen);
}

const arr1 = ["a", "ab", "abc", "cd", "def", "gh"];
console.log("Test1:", mostFrequentlyLongStrings(arr1));

const arr2 = ["a", "ab", "abc", "cd", "def", "gh", "r", "t", "p"];
console.log("Test2:", mostFrequentlyLongStrings(arr2));

const arr3 = ["a", "ab", "abc", "cd", "def", "gh", "ghi", "nmo", "abcd"];
console.log("Test3:", mostFrequentlyLongStrings(arr3));
