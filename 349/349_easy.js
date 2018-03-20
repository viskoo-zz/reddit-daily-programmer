"use strict";
/**
 * You own a nice tiny mini-market that sells candies to children. You need to know if you'll be able to give the change back to those little
 * cute creatures and it happens you don't know basic math because when you were a child you were always eating candies and did not study very well.
 * So you need some help from a little tool that tell you if you can.
 *
 * On the line beginning "Input:" be given a single number that tells you how much change to produce, and then a list of coins you own. The next line,
 * beginning with "Output:", tells you the number of coins to give back to achieve the change you need to give back (bounded by the number of coins you have).
 * Here's one that says "give the customer 3 or fewer coins". Example:
 *  Input: 10 5 5 2 2 1
 *  Output: n <= 3
 *
 * Your progam should emit the coins you would give back to yield the correct value of change, if possible. Multiple solutions may be possible.
 * If no solution is possible, state that. Example:
 *  5 5
 */

function findCoins(change, coins) {
    let usedcoins = [];

    for(let i = 0; i < coins.length; i++) {
        let sum = coins[i];
        let target = [coins[i]];

        //checking if the used coin is already same as the change that needs to be returned
        if(coins[i] === change) {
            target.push(coins[i]);
            if(usedcoins.length === 0) {
                usedcoins = target;
            }
            return target;
        }
        //going through coins for the second time (skipping the same one) and summing them
        //If the sum is exceeds change we skip that coin.
        for(let j = 0; j < coins.length; j++) {
            if(i == j) {
                continue;
            }
            if((sum + coins[j]) > change) {
                continue;
            } else {
                sum += coins[j];
                target.push(coins[j]);
            }
        }
        //Checking if the sum of coins is the same as needed change and if we used less coins this time
        //we replace the used coins with new value
        if(sum === change) {
            if(usedcoins.length === 0 && target.length > 0) {
                usedcoins = target;
            }
            if(target.length < usedcoins.length) {
                usedcoins = target;
            }
        }
    }
    if(usedcoins.length === 0) {
        return "It is not possible to return change with available coins";
    }
    return usedcoins;
}

module.exports.findCoins = findCoins;