let BigInteger = require('big-integer');


function findKey(key, space_of_keys, message)
{
    console.time(message);
    for (let k = 0; k <= space_of_keys; ++k)
        if (k == key)
        {
            console.timeEnd(message);
            break;
        }
}



console.log('Hi! Will compute key lengths for crypto purposes!');
const power = 2, min_value = 3, max_value = 12, radix = 16;
let key_power, space_of_keys;
for (let i = min_value; i <= max_value; ++i)
{
    key_power = Math.pow(power, i);
    space_of_keys = BigInteger(power).pow(key_power);
    console.log('Space of keys with ' + key_power +  '-bit length: ' + space_of_keys.toString());
}
console.log('Oh, what are the big numbers! Will try to measure calculating time ' +
    'to find random key with given ' +
    'bit length!');



let random_key, information_about_brut_force_iteration;
const brut_force_message = 'Brut force time for finding key ';
for (let i = min_value; i <= max_value; ++i)
{
    key_power = Math.pow(power, i);
    space_of_keys = BigInteger(power).pow(key_power);
    random_key = BigInteger.randBetween(BigInteger(0), space_of_keys);
    console.log('Randomly generated ' + key_power + '-bit key: ' + random_key.toString(radix));
    information_about_brut_force_iteration = brut_force_message + random_key.toString(radix);
    findKey(random_key, space_of_keys, information_about_brut_force_iteration);
}