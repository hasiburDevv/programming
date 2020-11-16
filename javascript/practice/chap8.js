//************************* object literal ***************************
//************************* object literal ***************************

var rect = {
    wight: 100,
    hight: 50,
    
    draw: function() {
        console.log('i am a rectangle');
        console.log('my weight is ' +this.wight);
        console.log('my hight is ' +this.hight);
    }
}

rect.draw()
rect.hight = 60

rect.draw()

//************************* this ***************************
//************************* this ***************************

var rect = {
    wight: 100,
    hight: 50,
    
    draw: function() {
        console.log('i am a rectangle');
        this.printProperties()
        console.log(this);
    },

    printProperties: function() {
        console.log('my weight is ' +this.wight);
        console.log('my hight is ' +this.hight);
    }
}

rect.draw()
rect.hight = 60

rect.draw()

var another = {
    wight: 14,
    hight: 51,
    print: rect.printProperties// 14, 51
}

another.print()

//************************* factory pattern ***************************
//************************* factory pattern ***************************

var createRect = function (width, hight) {
    return {
        wight: width,
        hight: hight,
        
        draw: function() {
            console.log('i am a rectangle');
            console.log('my weight is ' +this.wight);
            console.log('my hight is ' +this.hight);
        }
    }
}

var rect5 = createRect(123, 321)
rect5.draw()

var rect1 = createRect(12, 32)
rect1.draw()

//************************* constructor pattern ***************************
//************************* constructor pattern ***************************

var Rectangle = function (width, hight) {

        this.wight = width,
        this.hight = hight,
        
        this.draw = function() {
            console.log('i am a rectangle');
            console.log('my weight is ' +this.wight);
            console.log('my hight is ' +this.hight);
        }
    }


var rect3 = new Rectangle(123, 321)
rect3.draw()
//************************* call apply bind ***************************
//************************* call apply bind ***************************

function myFunc(c, d) {
    console.log(this);
    console.log(this.a + this.b + c + d);
}

myFunc()
//-----------------------it always return default window object
//Window {window: Window, self: Window, document: document, name: "", location: Location, …}
//NaN

myFunc.call({})//given an empty object as arguments
//-----------------------it will return an empty object
//{}
//NaN
myFunc.call({a: 40, b: 60}, 20, 10)//given an object as arguments
myFunc.apply({a: 400, b: 600}, [20, 10])

var bindValue = myFunc.bind({a: 40, b: 60})
bindValue(20, 10)
//************************* call by value vs call by reference ***************************
//************************* call by value vs call by reference ***************************

var number = 10

function changeValue (number) {
    number = number + 100
    console.log(number);//110
}

changeValue(number)
console.log(number);//10

//************************* pass by value vs pass by reference ***************************
//************************* pass by value vs pass by reference ***************************

var obj = {
    a: 10,
    b: 20
}

function changeReference (obj) {
    obj.a = obj.a + 100
    obj.b = obj.b + 100
    console.log(obj);//{ a: 110, b: 120 }
}
changeReference(obj)
console.log(obj);//{ a: 110, b: 120 }
//******************************************** Abstraction *******************************************
//**************************************** private properties *******************************************

var Rectangle = function (width, hight) {
    
    var position = {
        x: 56,
        y: -100
    }

    this.wight = width
    this.hight = hight
    
    var printProperty = function () {
        console.log('Position: X ' + position.x + ', Position: Y ' + position.y);
        }

    this.draw = function() {
        console.log('i am a rectangle');
        printProperty()
        console.log('my weight is ' +this.wight);
        console.log('my hight is ' +this.hight);
    }
}


var rect6 = new Rectangle(123, 321)
rect6.draw()
rect6.printProperty()//TypeError: rect6.printProperty is not a function
//******************************************** getter setter *******************************************
//******************************************** getter setter *******************************************

var Rectangle = function (width, hight) {
    
    var position = {
        x: 56,
        y: -100
    }

    this.wight = width
    this.hight = hight
    
    var printProperty = function () {
        console.log('Position: X ' + position.x + ', Position: Y ' + position.y);
        }

    this.draw = function() {
        console.log('i am a rectangle');
        printProperty()
        console.log('my weight is ' +this.wight);
        console.log('my hight is ' +this.hight);
    }

    Object.defineProperty(this, 'pos', {
        get: function () {
            return position
        },
        set: function (value) {
            position = value
        }
    }) 
}


var rect7 = new Rectangle(123, 321)
rect7.draw()
console.log(rect7.pos);//{ x: 56, y: -100 }
 rect7.pos = {
     x: 256,
     y: -456
 }
 console.log(rect7.pos);//{ x: 56, y: -100 }
//******************************************** get prototype *******************************************
console.log(Object.getPrototypeOf(rect7));