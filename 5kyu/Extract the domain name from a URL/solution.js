function domainName(url) {
  // given a url I won't know what the domain name is, but it always comes in the first path and it ignores "http://" and "www."
  // so maybe write a code that ignores that until it sees ".com" at which it will stop.
  // Create a loop that iterates through each character
  //looking up online looks like I could use regular expression
  return url.replace(/.+\/\/|www.|\..+/g, "");
}
