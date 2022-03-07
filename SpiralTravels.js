// Given a matrix of m x n elements, where m is the number of rows and n is the
// number of columns. Write a program to return all elements of the matrix in spiral
// order.

let N=3 
let M=4
let arr=[[1 ,2, 3, 4],[5, 6, 7, 8],[9 ,10, 11, 12]]
spiralTraversal(N,M,arr)
function spiralTraversal(N, M, arr){
    //write code here
  let left=0;
  let right=M-1;
  let top=0;
  let bottom=N-1;
  let count=0;
  let str=""
  while(count<N*M)
  {
      for(let i=top;i<=bottom&& count<N*M;i++)
      {
          str+=arr[i][left]+" ";
          count++
      }
      left++;
      for(let i=left;i<=right&& count<N*M;i++)
      {
          str+=arr[bottom][i]+" ";
          count++
      }
      bottom--;
      for(let i=bottom;i>=top&& count<N*M;i--)
      {
          str+=arr[i][right]+" ";
          count++
      }
      right--;
      for(let i=right;i>=left&& count<N*M;i--)
      {
          str+=arr[top][i]+" ";
          count++
      }
      top++;
  }
  console.log(str)
}



