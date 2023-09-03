const encode = (originalSms) => {
  let key = +originalSms[originalSms.length - 1];
  let gizliSms = "";
  for (let i = 0; i < originalSms.length - 1; i++) {
    let charCode = originalSms.charCodeAt(i);
    let newCharCode = charCode + key;
    let newSymbol = String.fromCharCode(newCharCode);
    gizliSms += newSymbol;
  }
  gizliSms += key;
  console.log(gizliSms);
  return gizliSms;
};

const decode = (gizliSms) => {
  let key = +gizliSms[gizliSms.length - 1];
  let originalSms = "";
  for (let i = 0; i < gizliSms.length - 1; i++) {
    let charCode = gizliSms.charCodeAt(i);
    let newCharCode = charCode - key;
    let newSymbol = String.fromCharCode(newCharCode);
    originalSms += newSymbol;
  }
  return originalSms;
};

console.log(decode(encode("Salam4")));
console.log("---------------");
console.log(decode(encode("kod yazirsan?3")));
console.log("---------------");
console.log(decode(encode("He2")));
console.log("---------------");
console.log(decode(encode("sagol6")));
console.log("---------------");
