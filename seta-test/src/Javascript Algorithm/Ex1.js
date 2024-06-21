function mostFrequentlyLongStrings(arr) {
  arr.sort((a, b) => a.length - b.length);
    
  let count = 1,
    len = arr[0].length;
  let best_count = 1,
    best_len = len;

  for (let i = 1; i < arr.length; ++i) {
    if (len === arr[i].length) {
      count++;
    } else {
      if (count > best_count) {
        best_count = count;
        best_len = len;
      }
      count = 1;
      len = arr[i].length;
    }
  }

  const result = [];
  for (let i = 0; i < arr.length; ++i) {
    if (arr[i].length === best_len) {
      result.push(arr[i]);
    }
  }
  return (result);
}

const arr1 = ["a", "ab", "abc", "cd", "def", "gh"];
console.log("Test1:",mostFrequentlyLongStrings(arr1));

const arr2 = ["a", "ab", "abc", "cd", "def", "gh", "r", "t", "p"];
console.log("Test2:",mostFrequentlyLongStrings(arr2));

const arr3 = ["a", "ab", "abc", "cd", "def", "gh", "ghi", "nmo", "abcd"];
console.log("Test3:",mostFrequentlyLongStrings(arr3));


