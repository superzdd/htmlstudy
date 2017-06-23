// es6 第9章 属性名表达式

// ex 1
let obj = {
    foo: 123
};

console.log(JSON.stringify(Object.getOwnPropertyDescriptor(obj,'foo')));

// ex 2
// 对象属性的遍历顺序，比如一个对象用json.stringify输出时哪些属性在前
// 首先遍历所有属性名为数值的，按照数字排序(一般对象少见，这个可能可以解释数组的属性输出顺序)
// 其次遍历所有属性名为字符串的属性，按照生成时间排序（也就是定义该属性名的顺序）
// 最后遍历所有属性名为Symbol止的属性，按照生成时间排序（同上，Symbol在后面会有案例）

var ex2obj = {
    [Symbol('s1')]: 0,
    b: 0,
    10: 0,
    2: 0,
    a: 0,
    [Symbol('s2')]: 0
};

var arr = Reflect.ownKeys(ex2obj); // ["2", "10", "b", "a", Symbol(s1), Symbol(2)]

console.log(JSON.stringify(arr)); //["2","10","b","a",null,null]

console.log('JSON.stringify(ex2obj) : ' + JSON.stringify(ex2obj)); //  {"2":0,"10":0,"b":0,"a":0}
