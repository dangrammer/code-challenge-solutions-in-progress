// function countTriplets(arr, r) {
//   const hGram = {}
//   const hGram2 = {}
//   let triplets = 0

//   for (let i = 0; i < arr.length; i++) {
//     hGram[arr[i]] ? hGram[arr[i]]++ : hGram[arr[i]] = 1
//   }

//   for (let i = 0; i < arr.length; i++) {
//     let n1 = arr[i] 
//     let n2 = n1 / r 

//     if (hGram[n2]) {
//       hGram2[n1] ? hGram2[n1] += hGram[n2] : hGram2[n1] = hGram[n2]
//     }
//   }

//   for (let i = 0; i < arr.length; i++) {
//     let n3 = arr[i]
//     let n2 = n3 / r
  
//     if (hGram2[n2]) triplets += hGram2[n2]
//   }

//   console.log(arr, hGram, hGram2, triplets)
//   return triplets
// }

// const arr = [1, 3, 9, 9, 27, 81] // => 6
// const r = 3
// const arr = [1, 5, 5, 25, 125] // => 4
// const r = 5
const arr = [1, 2, 1, 2, 4] // => 3
const r = 2

countTriplets(arr, r)

// int main()
// {
//     cin.tie(NULL);
//     ios_base::sync_with_stdio(false);

//     long n,r;
//     cin >> n >> r;

//     map<int,long> mp2, mp3;
// 	//mp2 to hold count of needed values after this one to complete 
// 	//2nd part of triplet
// 	//mp3 to hold count of needed values to complete triplet

//     int val;
//     long long res = 0;
//     while(n--)
//     {
//         cin >> val;
//         if (mp3.count(val))		//This value completes mp3[val] triplets
//             res += mp3[val];
//         if (mp2.count(val))		//This value is valid as 2° part of mp2[val] triplets
//             mp3[val*r] += mp2[val];
//         mp2[val*r]++;			//"Push-up" this value as possible triplet start
//     }

//     cout << res << endl;

//     return 0;
// }

function countTriplets(arr, r) {
  const hGram1 = {}
  const hGram2 = {}
  const hGram3 = {}
  let count = 0

  for (let i = 0; i < arr.length; i++) {
    hGram1[arr[i]] ? hGram1[arr[i]]++ : hGram1[arr[i]] = 1
  }

  for (let i = 0; i < arr.length; i++) {
    let n = arr[i]
    if (hGram3[n]) count += hGram3[n]
    if (hGram2[n]) hGram3[n * r] += hGram2[n]
    if (hGram1[n]) hGram2[n * r] += hGram1[n]
  }

  console.log(arr, hGram1, hGram2, hGram3, count)
  return count
}
