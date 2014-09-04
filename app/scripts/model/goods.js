/**
 * Created by TanghaoTsui on 14-9-3.
 */
function Goods(type,name, price, unit, number){
    this.type = type;
    this.name = name;
    this.price = price;
    this.unit = unit;
    this.number = number;
}
Goods.prototype.save = function(){
    var cart = Goods.get();
    cart.unshift(this);
    Goods.save(cart);
}
//
Goods.find_by = function (dict) {
    var goods = _(Goods.get()).findWhere(dict);
    if (goods) {
        return new Goods(goods.type, goods.name, goods.price, goods.unit, goods.number);
    };
    return false;
};
//
Goods.get = function(){
 return JSON.parse(localStorage.cart);
}
Goods.save = function(cart){
    localStorage.cart = JSON.stringify(cart);
}
Goods.initial = function(){
    var cart = [{
        type: "饮料",
        name: "可口可乐",
        price: 3,
        unit: "瓶",
        number: 0
    },{
        type: "饮料",
        name: "雪碧",
        price: 3,
        unit: "瓶",
        number: 0
    },{
        type: "水果",
        name: "苹果",
        price: 5.5,
        unit: "斤",
        number: 0
    },{
        type: "水果",
        name: "荔枝",
        price: 15,
        unit: "斤",
        number: 0
    },{
        type: "生活用品",
        name: "电池",
        price: 2,
        unit: "个",
        number: 0
    },{
        type: "食品",
        name: "方便面",
        price: 4.5,
        unit: "袋",
        number: 0
    },]
    localStorage.cart = JSON.stringify(cart);
}