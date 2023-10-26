# Decoder-ring
Building functions for an application that will either encode or decode a string using a variety of ciphers. 

## Caesar shift
When encoding a message, the function caesar() takes the alphabet and "shifting" letters to the right or left, based on the typical alphabetic order.
When decoding a message, the function caesar() shifts the number the original message was shifted by  in the opposite direction.

## Polybius Square
The Polybius square is a cipher that is achieved by arranging a typical alphabet into a grid. 
When encoding a message, each letter is represented through a coordinate. 
When decoding a message, each pair of numbers is translated to a typical alphabet using the coordinates.

## Substitution Cipher
The substitution cipher requires a standard alphabet and a substitution alphabet. Letters from the standard alphabet will be transposed to the substitution alphabet. This cipher requires that the recipient have the substitution alphabet, otherwise it will be difficult for them to decode the message.

