// Given arrival and departure times of all trains that reach a railway station. Find the
// minimum number of platforms required for the railway station so that no train is kept
// waiting. Consider that all the trains arrive on the same day and leave on the same
// day. Arrival and departure time can never be the same for a train but we can have
// the arrival time of one train equal to the departure time of the other. At any given
// instance of time, the same platform can not be used for both departures of a train
// and the arrival of another train. In such cases, we need different platforms.
let max=[[1,2],[5,8],[3,6]]
max.sort((a,b)=>a[0]-b[0])
//console.log(max)
let arrival=[]
let departure=[]
for(let i=0;i<max.length;i++)
{
   let [a,b]=max[i]
   arrival.push(a)
   departure.push(b)
}
//console.log(arrival,departure)
let n=arrival.length;
NumberOfPlatform(arrival,departure,n)
function NumberOfPlatform( arrival, departure, n)
{
    let count = 1;
    let ans = 1;
    for (let i = 0; i < n; i++) {
        count = 1;
        for (let j = i + 1; j < n; j++) {
            if ((arrival[i] >= arrival[j] && arrival[i] <= departure[j]) ||(arrival[j] >= arrival[i] && arrival[j] <= departure[i]))
            {
                count++;
            }       
        }
        ans = Math.max(ans, count);
    }
 
    console.log(ans);
}

