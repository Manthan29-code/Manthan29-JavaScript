let str="  my name is manthan  "

/* The `str.lastIndexOf(a)` method is trying to find the last occurrence of the character 'a' in the
string `str`. */
str.lastIndexOf(a)

/* The `str.lastIndexOf(a,7)` method is trying to find the last occurrence of the character 'a' in the
string `str`, but it will only search within the first 7 characters of the string. */
str.lastIndexOf(a,7)


/* `str.indexOf("na")` is searching for the first occurrence of the substring "na" within the string
`str`. It will return the index of the first character of the substring "na" if it is found, or -1
if the substring is not found in the string. */
str.indexOf("na")

/* `str.indexOf("na",8)` is searching for the first occurrence of the substring "na" within the string
`str`, starting the search from index 8 onwards. It will return the index of the first character of
the substring "na" if it is found after index 8, or -1 if the substring is not found in that portion
of the string. */
str.indexOf("na")

/* `str.includes("mant")` is checking if the substring "mant" is present in the string `str`. It will
return `true` if the substring "mant" is found in `str`, and `false` if it is not found. */
str.includes("mant")


/* `str.endsWith('is')` is a method in JavaScript that checks if the string `str` ends with the
specified substring 'is'. It returns `true` if the string ends with 'is', and `false` if it does
not. */
str.endsWith('is')

/* `str.endsWith('is',5)` is checking if the substring 'is' is present at the end of the string `str`,
but it only considers the first 5 characters of the string. It will return `true` if the first 5
characters of `str` end with 'is', and `false` otherwise. */
str.endsWith('is',5)

/* `str.startsWith("my")` is a method in JavaScript that checks if the string `str` starts with the
specified substring "my". It will return `true` if the string starts with "my", and `false` if it
does not. */
str.startsWith("my")

/* `str.startsWith("my", 8)` is checking if the substring "my" is present at the position specified by
the index 8 in the string `str`. It will return `true` if the substring "my" is found starting from
index 8 in `str`, and `false` if it is not found at that position. */
str.startsWith("my", 8)

str.trim()
str.trimEnd()
str.trimStart()

/* `str.substring(2)` is a method in JavaScript that returns a new string containing the characters of
the original string `str` starting from index 2 (inclusive) to the end of the string. It extracts a
substring from `str` starting at index 2 and returns it. */
str.substring(2)

/* The `str.repeat(4)` method in JavaScript is used to create and return a new string by concatenating
the original string `str` four times in a row. In this case, it will repeat the string "  my name is
manthan  " four times, resulting in a new string that is the concatenation of the original string
repeated four times. */
str.repeat(4)