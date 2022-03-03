function lengthOfLongestSubstring(s: string): number {
  let arr: string[] = [];
  let palabra: string = "";
  let arr2: string[] = [];

  for (let i = 0; i < s.length; i++) {
    arr.push(s[i]);
  }
  arr2.push(arr[0]);
  for (let i = 0; i <= arr2.length - 1; i++) {
    if (arr2[i] !== arr[i]) {
      console.log("Estamos dentro del if");
    }
  }
  console.log(arr2, arr, "Tenemos los arreglos");

  return 0;
}

lengthOfLongestSubstring("abcabcbb");

// TODO Crear un arreglo donde pondre todo y despues este compare el arreglo principal para no repetirlo
