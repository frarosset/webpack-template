export function subStrMatch(str, lookupStr) {
  if (str == "" || lookupStr == "") {
    return false;
  }

  str = str.toLowerCase();
  const lookupStrSplit = lookupStr.toLowerCase().trim().split(/\W+/);

  return lookupStrSplit.every((lookupSubStr) => {
    return str.includes(lookupSubStr);
  });
}

export function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function randomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
