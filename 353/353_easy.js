"use strict";
/**
 * [2018-03-05] Challenge #353 [Easy] Closest String
 *
 * In theoretical computer science, the closest string is an NP-hard computational problem, which tries to find the geometrical center of a set of input strings. To
 * understand the word "center", it is necessary to define a distance between two strings. Usually, this problem is studied with the Hamming distance in mind.
 * This center must be one of the input strings.
 * In bioinformatics, the closest string problem is an intensively studied facet of the problem of finding signals in DNA. In keeping with the bioinformatics utility,
 * we'll use DNA sequences as examples.
 *
 * Consider the following DNA sequences:
 *
 * ATCAATATCAA
 * ATTAAATAACT
 * AATCCTTAAAC
 * CTACTTTCTTT
 * TCCCATCCTTT
 * ACTTCAATATA
 *
 * Using the Hamming distance (the number of different characters between two sequences of the same length), the all-pairs distances of the above 6 sequences puts
 *  ATTAAATAACT at the center.
 */

function distanceBetweenStrings(stringA, stringB) {
   let distance = 0;
   for (let k = 0; k < stringA.length; k++) {
        if(stringA[k] !== stringB[k]) {
            ++distance;
        }
    }
    return distance;
}

function calcDistances(strings) {
    let distances = {};

    for(let i = 0; i < strings.length; i++) {
        let strA = strings[i];

        if(!distances[strA]) {
            distances[strA] = 0;
        }
        for(let j = 0; j < strings.length; j++) {
            if(strings[i] === strings[j]) {
                continue;
            }
            distances[strA] += distanceBetweenStrings(strings[i], strings[j]);
        }
    }
    return distances;
}

function getClosestString(strings) {
    let distances = calcDistances(strings);
    let smallestDist = null;
    let nearestString = "";

    for(let i in distances) {
        if(!smallestDist) {
            smallestDist = distances[i];
            nearestString = i;
        }
        if(smallestDist > distances[i]) {
            smallestDist = distances[i];
            nearestString = i;
        }
    }
    return nearestString;
}

module.exports.getClosestString = getClosestString;
