export const AR_PRESENT = [
  "o",
  "as",
  "a",
  "amos",
  "áis",
  "an",
];
export const AR_PRETERITE = [
  "é",
  "aste",
  "ó",
  "amos",
  "asteis",
  "aron",
];
export const AR_CONDITIONAL = [
  "aría",
  "arías",
  "aría",
  "aríamos",
  "aríais",
  "arían",
];
export const AR_IMPERFECT = [
  "aba",
  "abas",
  "aba",
  "ábamos",
  "abais",
  "aban",
];
export const AR_FUTURE = [
  "aré",
  "arás",
  "ará",
  "aremos",
  "aréis",
  "arán",
];
export const AR_PRESENT_PARTICIPLE = "ando";
export const AR_PAST_PARTICIPLE = "ado";

export function arPresentVerbos(rootVerb = "", AR_PRESENT) {
  let arPresentVerbo = [];
  // loop over keys
  // concatenate value to end of root verb;
  for (var i = 0; i < AR_PRESENT.length; i++) {
    let root = rootVerb + AR_PRESENT[i];
    arPresentVerbo.push(root);
  }
  console.log(arPresentVerbo);
  return arPresentVerbo;
}

export function arPreteriteVerbos(rootVerb = "", AR_PRETERITE) {
  let arPreteriteVerbo = [];
  // loop over keys
  // concatenate value to end of root verb;
  for (var i = 0; i < AR_PRETERITE.length; i++) {
    let root = rootVerb + AR_PRETERITE[i];
    arPreteriteVerbo.push(root);
  }
  console.log(arPreteriteVerbo);
  return arPreteriteVerbo;
}

export function arConditionalVerbos(rootVerb = "", AR_CONDITIONAL) {
  let arConditionalVerbo = [];
  // loop over keys
  // concatenate value to end of root verb;
  for (var i = 0; i < AR_CONDITIONAL.length; i++) {
    let root = rootVerb + AR_CONDITIONAL[i];
    arConditionalVerbo.push(root);
  }
  console.log(arConditionalVerbo);
  return arConditionalVerbo;
}

export function arImperfectVerbos(rootVerb = "", AR_IMPERFECT) {
  let arImperfectVerbo = [];
  // loop over keys
  // concatenate value to end of root verb;
  for (var i = 0; i < AR_IMPERFECT.length; i++) {
    let root = rootVerb + AR_IMPERFECT[i];
    arImperfectVerbo.push(root);
  }
  console.log(arImperfectVerbo);
  return arImperfectVerbo;
}

export function arFutureVerbos(rootVerb = "", AR_FUTURE) {
  let arFutureVerbo = [];
  // loop over keys
  // concatenate value to end of root verb;
  for (var i = 0; i < AR_FUTURE.length; i++) {
    let root = rootVerb + AR_FUTURE[i];
    arFutureVerbo.push(root);
  }
  console.log(arFutureVerbo);
  return arFutureVerbo;
}

export function arPresentParticipleVerbos(rootVerb = "", ArPresentParticipleVerbo) {
  let arPresentParticipleVerbo = "";
  arPresentParticipleVerbo = ArPresentParticipleVerbo + ArPresentParticipleVerbo;
  return arPresentParticipleVerbo;
}

export function arPastParticipleVerbos(rootVerb = "", ArPastParticipleVerbo) {
  let arPastParticipleVerbo = "";
  arPastParticipleVerbo = ArPastParticipleVerbo + ArPastParticipleVerbo;
  return arPastParticipleVerbo;
}
