/*VERY HARD: You are given coins of different denominations and a total amount of money amount. Write a function to compute the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.

Hint:  Sudo code this problem. Focus on breaking the problem down into steps  Use functions, arrays and logical operators.  Do not have anyone give you the answer or solve this problem for you. 

Example 1:

Input: coins = [1, 2, 5], amount = 11

Output: 3 

Explanation: 11 = 5 + 5 + 1

Example 2:

Input: coins = [2], amount = 3

Output: -1
*/



function fewestNumOfCoins(coins, coinLength, amount)
{
     
    if (amount <= 0){
        return -1;
    }
    else if (coins.includes(0) && coins.length === 1 && amount >0){
        return -1
    }
     
    let amountOfCoins = Number.MAX_VALUE;
     
    for(let i = 0; i < coinLength; i++)
    {
        if (coins[i] <= amount)
        {
            let coinSubtraction = fewestNumOfCoins(coins, coinLength,
                               amount - coins[i]);
            if (coinSubtraction != Number.MAX_VALUE &&
                coinSubtraction + 1 < amountOfCoins)
                amountOfCoins = coinSubtraction + 1;
        }
    }
    return amountOfCoins;
}

let coins = [ 2,4,6,8,3];
let coinLength = coins.length;
let amount = 11;
console.log(fewestNumOfCoins(coins, coinLength, amount)) 