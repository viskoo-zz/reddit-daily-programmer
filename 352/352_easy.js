"use strict";

/**
 * [2018-02-20] Challenge #352 [Easy] Making Imgur-style Links
 *
 * Short links have been all the rage for several years now, spurred in part by Twitter's character limits. Imgur - Reddit's go-to image hosting site -
 * uses a similar style for their links. Monotonically increasing IDs represented in Base62.
 *
 * Your task today is to convert a number to its Base62 representation.
 *
 */
const base = 62;
const chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

function base62Encode(number) {
    let result = "";
    while (number > base) {
        let a = number % base;
        result += chars[a];
        number = parseInt(number / base, 10);
    };

    result += chars[parseInt(number, 10)];
    return result.split("").reverse().join("");
}

module.exports.base62Encode = base62Encode;
