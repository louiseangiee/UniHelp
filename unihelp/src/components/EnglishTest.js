export const EnglishTest = {
    '': {'min': 0, 'max': 0},
    'IELTS': {'min': 1, 'max': 9},
    'TOEFL': {'min': 0, 'max': 120},
    'Inapplicable': {'min': 0, 'max': 0}
}

var tempArr = []
for(var test in EnglishTest) {
    tempArr.push(test);
}

export const EnglishArray = tempArr;