// es6 第9章 对象的扩展
"use strict";

// ex 1
var foo = 'bar';
var bar = {
    foo
};
bar; // {foo: "bar"}
// ex 2
function f(x, y) {
    return {
        x,
        y
    };
}
var ret = f(1, 2);

console.log(JSON.stringify(ret));