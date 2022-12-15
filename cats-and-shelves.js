function solution(start, finish) {
   let jumps = 0
   let shelf = start

   while (shelf < finish) {
      if (shelf + 3 <= finish) {
         jumps++
         shelf += 3
      } else if (shelf + 1 <= finish) {
         jumps++
         shelf++
      }
   }
   return jumps
}

console.log(solution(3, 3))
console.log(solution(1, 8))