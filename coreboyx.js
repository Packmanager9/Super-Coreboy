
let boys = []
let selectors = []
let characterbuttons = []
let scores = []
let baselaunch = .3
let vsmashlimit = 35
let jumplimit = 20
let scale = .4
let invscale = 1 / scale
window.addEventListener('DOMContentLoaded', (event) => {
    const gamepadAPI = [{
        controller: {},
        turbo: true,
        connect: function (evt) {
            if (navigator.getGamepads()[0] != null) {
                gamepadAPI[0].controller = navigator.getGamepads()[0]
                gamepadAPI[0].turbo = true;
            } else if (navigator.getGamepads()[1] != null) {
                gamepadAPI[0].controller = navigator.getGamepads()[0]
                gamepadAPI[0].turbo = true;
            } else if (navigator.getGamepads()[2] != null) {
                gamepadAPI[0].controller = navigator.getGamepads()[0]
                gamepadAPI[0].turbo = true;
            } else if (navigator.getGamepads()[3] != null) {
                gamepadAPI[0].controller = navigator.getGamepads()[0]
                gamepadAPI[0].turbo = true;
            }
            for (let i = 0; i < gamepads.length; i++) {
                if (gamepads[i] === null) {
                    continue;
                }
                if (!gamepads[i].connected) {
                    continue;
                }
            }
            let coreboy = new Boy(0)
            boys.push(coreboy)
        },
        disconnect: function (evt) {
            gamepadAPI[0].turbo = false;
            delete gamepadAPI[0].controller;
        },
        update: function () {
            gamepadAPI[0].controller = navigator.getGamepads()[0]
            gamepadAPI[0].buttonsCache = [];// clear the buttons cache
            for (var k = 0; k < gamepadAPI[0].buttonsStatus.length; k++) {// move the buttons status from the previous frame to the cache
                gamepadAPI[0].buttonsCache[k] = gamepadAPI[0].buttonsStatus[k];
            }
            gamepadAPI[0].buttonsStatus = [];// clear the buttons status
            var c = gamepadAPI[0].controller || {}; // get the gamepad object
            var pressed = [];
            if (c.buttons) {
                for (var b = 0, t = c.buttons.length; b < t; b++) {// loop through buttons and push the pressed ones to the array
                    if (c.buttons[b].pressed) {
                        if (c.buttons[b].pressed == true) {
                            boys[0].wasfalse[b] = 0
                        }
                        pressed.push(gamepadAPI[0].buttons[b]);
                    } else if (c.buttons[b].pressed == false) {
                        boys[0].wasfalse[b] = 1
                    }
                }
            }
            var axes = [];
            if (c.axes) {
                for (var a = 0, x = c.axes.length; a < x; a++) {// loop through axes and push their values to the array
                    axes.push(c.axes[a].toFixed(2));
                }
            }
            gamepadAPI[0].axesStatus = axes;// assign received values
            gamepadAPI[0].buttonsStatus = pressed;
            // console.log(pressed); // return buttons for debugging purposes
            return pressed;
        },
        buttonPressed: function (button, hold) {
            var newPress = false;
            for (var i = 0, s = gamepadAPI[0].buttonsStatus.length; i < s; i++) {// loop through pressed buttons
                if (gamepadAPI[0].buttonsStatus[i] == button) {// if we found the button we're looking for..
                    newPress = true;// set the boolean variable to true
                    if (!hold) {// if we want to check the single press
                        for (var j = 0, p = gamepadAPI[0].buttonsCache.length; j < p; j++) {// loop through the cached states from the previous frame
                            if (gamepadAPI[0].buttonsCache[j] == button) { // if the button was already pressed, ignore new press
                                newPress = false;
                            }
                        }
                    }
                }
            }
            return newPress;
        },
        buttons: [
            'A', 'B', 'X', 'Y', 'LB', 'RB', 'Left-Trigger', 'Right-Trigger', 'Back', 'Start', 'Axis-Left', 'Axis-Right', 'DPad-Up', 'DPad-Down', 'DPad-Left', 'DPad-Right', "Power"
        ],
        buttonsCache: [],
        buttonsStatus: [],
        axesStatus: []
    }, {
        controller: {},
        turbo: true,
        connect: function (evt) {
            if (navigator.getGamepads()[1] != null) {
                gamepadAPI[1].controller = navigator.getGamepads()[1]
                gamepadAPI[1].turbo = true;
            } else if (navigator.getGamepads()[1] != null) {
                gamepadAPI[1].controller = navigator.getGamepads()[1]
                gamepadAPI[1].turbo = true;
            } else if (navigator.getGamepads()[2] != null) {
                gamepadAPI[1].controller = navigator.getGamepads()[1]
                gamepadAPI[1].turbo = true;
            } else if (navigator.getGamepads()[3] != null) {
                gamepadAPI[1].controller = navigator.getGamepads()[1]
                gamepadAPI[1].turbo = true;
            }
            for (let i = 0; i < gamepads.length; i++) {
                if (gamepads[i] === null) {
                    continue;
                }
                if (!gamepads[i].connected) {
                    continue;
                }
            }

            let coreboy = new Boy(1)
            boys.push(coreboy)
        },
        disconnect: function (evt) {
            gamepadAPI[1].turbo = false;
            delete gamepadAPI[1].controller;
        },
        update: function () {
            gamepadAPI[1].controller = navigator.getGamepads()[1]
            gamepadAPI[1].buttonsCache = [];// clear the buttons cache
            for (var k = 0; k < gamepadAPI[1].buttonsStatus.length; k++) {// move the buttons status from the previous frame to the cache
                gamepadAPI[1].buttonsCache[k] = gamepadAPI[1].buttonsStatus[k];
            }
            gamepadAPI[1].buttonsStatus = [];// clear the buttons status
            var c = gamepadAPI[1].controller || {}; // get the gamepad object
            var pressed = [];
            if (c.buttons) {
                for (var b = 0, t = c.buttons.length; b < t; b++) {// loop through buttons and push the pressed ones to the array
                    if (c.buttons[b].pressed) {
                        if (c.buttons[b].pressed == true) {
                            boys[1].wasfalse[b] = 0
                        }
                        pressed.push(gamepadAPI[1].buttons[b]);
                    } else if (c.buttons[b].pressed == false) {
                        boys[1].wasfalse[b] = 1
                    }
                }
            }
            var axes = [];
            if (c.axes) {
                for (var a = 0, x = c.axes.length; a < x; a++) {// loop through axes and push their values to the array
                    axes.push(c.axes[a].toFixed(2));
                }
            }
            gamepadAPI[1].axesStatus = axes;// assign received values
            gamepadAPI[1].buttonsStatus = pressed;
            // console.log(pressed); // return buttons for debugging purposes
            return pressed;
        },
        buttonPressed: function (button, hold) {
            var newPress = false;
            for (var i = 0, s = gamepadAPI[1].buttonsStatus.length; i < s; i++) {// loop through pressed buttons
                if (gamepadAPI[1].buttonsStatus[i] == button) {// if we found the button we're looking for..
                    newPress = true;// set the boolean variable to true
                    if (!hold) {// if we want to check the single press
                        for (var j = 0, p = gamepadAPI[1].buttonsCache.length; j < p; j++) {// loop through the cached states from the previous frame
                            if (gamepadAPI[1].buttonsCache[j] == button) { // if the button was already pressed, ignore new press
                                newPress = false;
                            }
                        }
                    }
                }
            }
            return newPress;
        },
        buttons: [
            'A', 'B', 'X', 'Y', 'LB', 'RB', 'Left-Trigger', 'Right-Trigger', 'Back', 'Start', 'Axis-Left', 'Axis-Right', 'DPad-Up', 'DPad-Down', 'DPad-Left', 'DPad-Right', "Power"
        ],
        buttonsCache: [],
        buttonsStatus: [],
        axesStatus: []
    }, {
        controller: {},
        turbo: true,
        connect: function (evt) {
            if (navigator.getGamepads()[0] != null) {
                gamepadAPI[2].controller = navigator.getGamepads()[2]
                gamepadAPI[2].turbo = true;
            } else if (navigator.getGamepads()[1] != null) {
                gamepadAPI[2].controller = navigator.getGamepads()[2]
                gamepadAPI[2].turbo = true;
            } else if (navigator.getGamepads()[2] != null) {
                gamepadAPI[2].controller = navigator.getGamepads()[2]
                gamepadAPI[2].turbo = true;
            } else if (navigator.getGamepads()[3] != null) {
                gamepadAPI[2].controller = navigator.getGamepads()[2]
                gamepadAPI[2].turbo = true;
            }
            for (let i = 0; i < gamepads.length; i++) {
                if (gamepads[i] === null) {
                    continue;
                }
                if (!gamepads[i].connected) {
                    continue;
                }
            }

            let coreboy = new Boy(1)
            boys.push(coreboy)
        },
        disconnect: function (evt) {
            gamepadAPI[2].turbo = false;
            delete gamepadAPI[2].controller;
        },
        update: function () {
            gamepadAPI[2].controller = navigator.getGamepads()[2]
            gamepadAPI[2].buttonsCache = [];// clear the buttons cache
            for (var k = 0; k < gamepadAPI[2].buttonsStatus.length; k++) {// move the buttons status from the previous frame to the cache
                gamepadAPI[2].buttonsCache[k] = gamepadAPI[2].buttonsStatus[k];
            }
            gamepadAPI[2].buttonsStatus = [];// clear the buttons status
            var c = gamepadAPI[2].controller || {}; // get the gamepad object
            var pressed = [];
            if (c.buttons) {
                for (var b = 0, t = c.buttons.length; b < t; b++) {// loop through buttons and push the pressed ones to the array
                    if (c.buttons[b].pressed) {
                        if (c.buttons[b].pressed == true) {
                            boys[2].wasfalse[b] = 0
                        }
                        pressed.push(gamepadAPI[2].buttons[b]);
                    } else if (c.buttons[b].pressed == false) {
                        boys[2].wasfalse[b] = 1
                    }
                }
            }
            var axes = [];
            if (c.axes) {
                for (var a = 0, x = c.axes.length; a < x; a++) {// loop through axes and push their values to the array
                    axes.push(c.axes[a].toFixed(2));
                }
            }
            gamepadAPI[2].axesStatus = axes;// assign received values
            gamepadAPI[2].buttonsStatus = pressed;
            // console.log(pressed); // return buttons for debugging purposes
            return pressed;
        },
        buttonPressed: function (button, hold) {
            var newPress = false;
            for (var i = 0, s = gamepadAPI[2].buttonsStatus.length; i < s; i++) {// loop through pressed buttons
                if (gamepadAPI[2].buttonsStatus[i] == button) {// if we found the button we're looking for..
                    newPress = true;// set the boolean variable to true
                    if (!hold) {// if we want to check the single press
                        for (var j = 0, p = gamepadAPI[2].buttonsCache.length; j < p; j++) {// loop through the cached states from the previous frame
                            if (gamepadAPI[2].buttonsCache[j] == button) { // if the button was already pressed, ignore new press
                                newPress = false;
                            }
                        }
                    }
                }
            }
            return newPress;
        },
        buttons: [
            'A', 'B', 'X', 'Y', 'LB', 'RB', 'Left-Trigger', 'Right-Trigger', 'Back', 'Start', 'Axis-Left', 'Axis-Right', 'DPad-Up', 'DPad-Down', 'DPad-Left', 'DPad-Right', "Power"
        ],
        buttonsCache: [],
        buttonsStatus: [],
        axesStatus: []
    }, {
        controller: {},
        turbo: true,
        connect: function (evt) {
            if (navigator.getGamepads()[0] != null) {
                gamepadAPI[3].controller = navigator.getGamepads()[3]
                gamepadAPI[3].turbo = true;
            } else if (navigator.getGamepads()[1] != null) {
                gamepadAPI[3].controller = navigator.getGamepads()[3]
                gamepadAPI[3].turbo = true;
            } else if (navigator.getGamepads()[2] != null) {
                gamepadAPI[3].controller = navigator.getGamepads()[3]
                gamepadAPI[3].turbo = true;
            } else if (navigator.getGamepads()[3] != null) {
                gamepadAPI[3].controller = navigator.getGamepads()[3]
                gamepadAPI[3].turbo = true;
            }
            for (let i = 0; i < gamepads.length; i++) {
                if (gamepads[i] === null) {
                    continue;
                }
                if (!gamepads[i].connected) {
                    continue;
                }
            }

            let coreboy = new Boy(1)
            boys.push(coreboy)
        },
        disconnect: function (evt) {
            gamepadAPI[3].turbo = false;
            delete gamepadAPI[3].controller;
        },
        update: function () {
            gamepadAPI[3].controller = navigator.getGamepads()[3]
            gamepadAPI[3].buttonsCache = [];// clear the buttons cache
            for (var k = 0; k < gamepadAPI[3].buttonsStatus.length; k++) {// move the buttons status from the previous frame to the cache
                gamepadAPI[3].buttonsCache[k] = gamepadAPI[3].buttonsStatus[k];
            }
            gamepadAPI[3].buttonsStatus = [];// clear the buttons status
            var c = gamepadAPI[3].controller || {}; // get the gamepad object
            var pressed = [];
            if (c.buttons) {
                for (var b = 0, t = c.buttons.length; b < t; b++) {// loop through buttons and push the pressed ones to the array
                    if (c.buttons[b].pressed) {
                        if (c.buttons[b].pressed == true) {
                            boys[3].wasfalse[b] = 0
                        }
                        pressed.push(gamepadAPI[3].buttons[b]);
                    } else if (c.buttons[b].pressed == false) {
                        boys[3].wasfalse[b] = 1
                    }
                }
            }
            var axes = [];
            if (c.axes) {
                for (var a = 0, x = c.axes.length; a < x; a++) {// loop through axes and push their values to the array
                    axes.push(c.axes[a].toFixed(2));
                }
            }
            gamepadAPI[3].axesStatus = axes;// assign received values
            gamepadAPI[3].buttonsStatus = pressed;
            // console.log(pressed); // return buttons for debugging purposes
            return pressed;
        },
        buttonPressed: function (button, hold) {
            var newPress = false;
            for (var i = 0, s = gamepadAPI[3].buttonsStatus.length; i < s; i++) {// loop through pressed buttons
                if (gamepadAPI[3].buttonsStatus[i] == button) {// if we found the button we're looking for..
                    newPress = true;// set the boolean variable to true
                    if (!hold) {// if we want to check the single press
                        for (var j = 0, p = gamepadAPI[3].buttonsCache.length; j < p; j++) {// loop through the cached states from the previous frame
                            if (gamepadAPI[3].buttonsCache[j] == button) { // if the button was already pressed, ignore new press
                                newPress = false;
                            }
                        }
                    }
                }
            }
            return newPress;
        },
        buttons: [
            'A', 'B', 'X', 'Y', 'LB', 'RB', 'Left-Trigger', 'Right-Trigger', 'Back', 'Start', 'Axis-Left', 'Axis-Right', 'DPad-Up', 'DPad-Down', 'DPad-Left', 'DPad-Right', "Power"
        ],
        buttonsCache: [],
        buttonsStatus: [],
        axesStatus: []
    }];
    let canvas
    let canvas_context
    let keysPressed = {}
    let FLEX_engine
    let TIP_engine = {}
    let XS_engine
    let YS_engine
    class Point {
        constructor(x, y) {
            this.x = x
            this.y = y
            this.radius = 0
        }
        pointDistance(point) {
            return (new LineOP(this, point, "transparent", 0)).hypotenuse()
        }
    }
    class Line {
        constructor(x, y, x2, y2, color, width) {
            this.x1 = x
            this.y1 = y
            this.x2 = x2
            this.y2 = y2
            this.color = color
            this.width = width
        }
        angle() {
            return Math.atan2(this.y1 - this.y2, this.x1 - this.x2)
        }
        hypotenuse() {
            let xdif = this.x1 - this.x2
            let ydif = this.y1 - this.y2
            let hypotenuse = (xdif * xdif) + (ydif * ydif)
            return Math.sqrt(hypotenuse)
        }
        draw() {
            let linewidthstorage = canvas_context.lineWidth
            canvas_context.strokeStyle = this.color
            canvas_context.lineWidth = this.width
            canvas_context.beginPath()
            canvas_context.moveTo(this.x1, this.y1)
            canvas_context.lineTo(this.x2, this.y2)
            canvas_context.stroke()
            canvas_context.lineWidth = linewidthstorage
        }
    }
    class LineOP {
        constructor(object, target, color, width) {
            this.object = object
            this.target = target
            this.color = color
            this.width = width
        }
        hypotenuse() {
            let xdif = this.object.x - this.target.x
            let ydif = this.object.y - this.target.y
            let hypotenuse = (xdif * xdif) + (ydif * ydif)
            return Math.sqrt(hypotenuse)
        }
        angle() {
            return Math.atan2(this.object.y - this.target.y, this.object.x - this.target.x)
        }
        draw() {
            let linewidthstorage = canvas_context.lineWidth
            canvas_context.strokeStyle = this.color
            canvas_context.lineWidth = this.width
            canvas_context.beginPath()
            canvas_context.moveTo(this.object.x, this.object.y)
            canvas_context.lineTo(this.target.x, this.target.y)
            canvas_context.stroke()
            canvas_context.lineWidth = linewidthstorage
        }
    }
    class Triangle {
        constructor(x, y, color, length, fill = 0, strokeWidth = 0, leg1Ratio = 1, leg2Ratio = 1, heightRatio = 1) {
            this.x = x
            this.y = y
            this.color = color
            this.length = length
            this.x1 = this.x + this.length * leg1Ratio
            this.x2 = this.x - this.length * leg2Ratio
            this.tip = this.y - this.length * heightRatio
            this.accept1 = (this.y - this.tip) / (this.x1 - this.x)
            this.accept2 = (this.y - this.tip) / (this.x2 - this.x)
            this.fill = fill
            this.stroke = strokeWidth
        }
        draw() {
            canvas_context.strokeStyle = this.color
            canvas_context.stokeWidth = this.stroke
            canvas_context.beginPath()
            canvas_context.moveTo(this.x, this.y)
            canvas_context.lineTo(this.x1, this.y)
            canvas_context.lineTo(this.x, this.tip)
            canvas_context.lineTo(this.x2, this.y)
            canvas_context.lineTo(this.x, this.y)
            if (this.fill == 1) {
                canvas_context.fill()
            }
            canvas_context.stroke()
            canvas_context.closePath()
        }
        isPointInside(point) {
            if (point.x <= this.x1) {
                if (point.y >= this.tip) {
                    if (point.y <= this.y) {
                        if (point.x >= this.x2) {
                            this.accept1 = (this.y - this.tip) / (this.x1 - this.x)
                            this.accept2 = (this.y - this.tip) / (this.x2 - this.x)
                            this.basey = point.y - this.tip
                            this.basex = point.x - this.x
                            if (this.basex == 0) {
                                return true
                            }
                            this.slope = this.basey / this.basex
                            if (this.slope >= this.accept1) {
                                return true
                            } else if (this.slope <= this.accept2) {
                                return true
                            }
                        }
                    }
                }
            }
            return false
        }
    }
    class Rectangle {
        constructor(x, y, width, height, color, fill = 1, stroke = 0, strokeWidth = 1) {
            this.x = x
            this.y = y
            this.height = height
            this.width = width
            this.color = color
            this.xmom = 0
            this.ymom = 0
            this.stroke = stroke
            this.strokeWidth = strokeWidth
            this.fill = fill
        }
        draw() {
            canvas_context.fillStyle = this.color
            canvas_context.fillRect(this.x, this.y, this.width, this.height)
        }
        move() {
            this.x += this.xmom
            this.y += this.ymom
        }
        isPointInside(point) {
            if (point.x >= this.x) {
                if (point.y >= this.y) {
                    if (point.x <= this.x + this.width) {
                        if (point.y <= this.y + this.height) {
                            return true
                        }
                    }
                }
            }
            return false
        }
        doesPerimeterTouch(point) {
            if (point.x + point.radius >= this.x) {
                if (point.y + point.radius >= this.y) {
                    if (point.x - point.radius <= this.x + this.width) {
                        if (point.y - point.radius <= this.y + this.height) {
                            return true
                        }
                    }
                }
            }
            return false
        }
    }
    class Circle {
        constructor(x, y, radius, color, xmom = 0, ymom = 0, friction = 1, reflect = 0, strokeWidth = 0, strokeColor = "transparent") {
            this.x = x
            this.y = y
            this.radius = radius
            this.color = color
            this.xmom = xmom
            this.ymom = ymom
            this.friction = friction
            this.reflect = reflect
            this.strokeWidth = strokeWidth
            this.strokeColor = strokeColor
            this.anchored = 0
            this.anchor = this
            this.sxmom = 0
            this.symom = 0
        }
        smove() {
            this.x += this.sxmom
            this.y += this.symom
        }
        reversePointinside(point) {

            this.areaY = point.y - this.y
            this.areaX = point.x - this.x
            if (((this.areaX * this.areaX) + (this.areaY * this.areaY)) <= (point.radius * point.radius)) {
                return true
            }
            return false
        }
        draw() {
            canvas_context.lineWidth = this.strokeWidth
            canvas_context.strokeStyle = this.color
            canvas_context.beginPath();
            if (this.radius > 0) {
                canvas_context.arc(this.x, this.y, this.radius, 0, (Math.PI * 2), true)
                canvas_context.fillStyle = this.color
                canvas_context.fill()
                canvas_context.stroke();
            } else {
                // console.log("The circle is below a radius of 0, and has not been drawn. The circle is:", this)
            }
        }
        track() {

            if (this.anchored !== 2) {
                this.x += this.xmom
                this.y += this.ymom
            } else {
                this.x = this.anchor.x
                this.y = this.anchor.y
            }
        }
        move() {
            if (this.reflect == 1) {
                if (this.x + this.radius > canvas.width) {
                    if (this.xmom > 0) {
                        this.xmom *= -1
                    }
                }
                if (this.y + this.radius > canvas.height) {
                    if (this.ymom > 0) {
                        this.ymom *= -1
                    }
                }
                if (this.x - this.radius < 0) {
                    if (this.xmom < 0) {
                        this.xmom *= -1
                    }
                }
                if (this.y - this.radius < 0) {
                    if (this.ymom < 0) {
                        this.ymom *= -1
                    }
                }
            }
            if (this.anchored !== 1) {
                this.x += this.xmom
                this.y += this.ymom
            } else {
                this.x = this.anchor.x
                this.y = this.anchor.y
                this.xmom = 0
                this.ymom = 0
            }
        }
        unmove() {
            if (this.reflect == 1) {
                if (this.x + this.radius > canvas.width) {
                    if (this.xmom > 0) {
                        this.xmom *= -1
                    }
                }
                if (this.y + this.radius > canvas.height) {
                    if (this.ymom > 0) {
                        this.ymom *= -1
                    }
                }
                if (this.x - this.radius < 0) {
                    if (this.xmom < 0) {
                        this.xmom *= -1
                    }
                }
                if (this.y - this.radius < 0) {
                    if (this.ymom < 0) {
                        this.ymom *= -1
                    }
                }
            }
            this.x -= this.xmom
            this.y -= this.ymom
        }
        frictiveMove() {
            if (this.reflect == 1) {
                if (this.x + this.radius > canvas.width) {
                    if (this.xmom > 0) {
                        this.xmom *= -1
                    }
                }
                if (this.y + this.radius > canvas.height) {
                    if (this.ymom > 0) {
                        this.ymom *= -1
                    }
                }
                if (this.x - this.radius < 0) {
                    if (this.xmom < 0) {
                        this.xmom *= -1
                    }
                }
                if (this.y - this.radius < 0) {
                    if (this.ymom < 0) {
                        this.ymom *= -1
                    }
                }
            }
            if (this.anchored !== 1) {
                this.x += this.xmom
                this.y += this.ymom
            } else {
                this.x = this.anchor.x
                this.y = this.anchor.y
                this.xmom = 0
                this.ymom = 0
            }
            this.xmom *= this.friction
            this.ymom *= this.friction
        }
        frictiveunMove() {
            if (this.reflect == 1) {
                if (this.x + this.radius > canvas.width) {
                    if (this.xmom > 0) {
                        this.xmom *= -1
                    }
                }
                if (this.y + this.radius > canvas.height) {
                    if (this.ymom > 0) {
                        this.ymom *= -1
                    }
                }
                if (this.x - this.radius < 0) {
                    if (this.xmom < 0) {
                        this.xmom *= -1
                    }
                }
                if (this.y - this.radius < 0) {
                    if (this.ymom < 0) {
                        this.ymom *= -1
                    }
                }
            }
            this.xmom /= this.friction
            this.ymom /= this.friction
            this.x -= this.xmom
            this.y -= this.ymom
        }
        isPointInside(point) {
            this.areaY = point.y - this.y
            this.areaX = point.x - this.x
            if (((this.areaX * this.areaX) + (this.areaY * this.areaY)) <= (this.radius * this.radius)) {
                return true
            }
            return false
        }
        doesPerimeterTouch(point) {
            this.areaY = point.y - this.y
            this.areaX = point.x - this.x
            if (((this.areaX * this.areaX) + (this.areaY * this.areaY)) <= ((this.radius + point.radius) * (this.radius + point.radius))) {
                return true
            }
            return false
        }
    }
    class Shot {
        constructor(x, y, radius, color, xmom = 0, ymom = 0, friction = 1, reflect = 0, strokeWidth = 0, strokeColor = "transparent") {
            this.x = x
            this.y = y
            this.radius = radius
            this.color = color
            this.xmom = xmom
            this.ymom = ymom
            this.friction = friction
            this.reflect = reflect
            this.strokeWidth = strokeWidth
            this.strokeColor = strokeColor
            this.anchored = 0
            this.anchor = this
            this.sxmom = 0
            this.symom = 0
        }
        smove() {
            this.x += this.sxmom
            this.y += this.symom
        }
        reversePointinside(point) {

            this.areaY = point.y - this.y
            this.areaX = point.x - this.x
            if (((this.areaX * this.areaX) + (this.areaY * this.areaY)) <= (point.radius * point.radius)) {
                return true
            }
            return false
        }
        draw() {
            canvas_context.lineWidth = 5
            canvas_context.strokeStyle = this.color
            canvas_context.beginPath();
            if (this.radius > 0) {
                canvas_context.arc(this.x, this.y, this.radius, 0, (Math.PI * 2), true)
                canvas_context.fillStyle = this.color


                var gard = canvas_context.createRadialGradient(this.x, this.y, 0, this.x - (0), this.y - (0), this.radius)
                this.string = this.color

                gard.addColorStop(0, this.string + `ff`)
                gard.addColorStop(0.01, this.string + "a1")
                gard.addColorStop(0.41, this.string + "94")
                gard.addColorStop(1, this.string + "51")
                canvas_context.fillStyle = gard
                canvas_context.fill()
                canvas_context.stroke();
            } else {
                // console.log("The circle is below a radius of 0, and has not been drawn. The circle is:", this)
            }
        }
        move() {
            if (this.reflect == 1) {
                if (this.x + this.radius > canvas.width) {
                    if (this.xmom > 0) {
                        this.xmom *= -1
                    }
                }
                if (this.y + this.radius > canvas.height) {
                    if (this.ymom > 0) {
                        this.ymom *= -1
                    }
                }
                if (this.x - this.radius < 0) {
                    if (this.xmom < 0) {
                        this.xmom *= -1
                    }
                }
                if (this.y - this.radius < 0) {
                    if (this.ymom < 0) {
                        this.ymom *= -1
                    }
                }
            }
            if (this.anchored !== 1) {
                this.x += this.xmom
                this.y += this.ymom
            } else {
                this.x = this.anchor.x
                this.y = this.anchor.y
                this.xmom = 0
                this.ymom = 0
            }
        }
        unmove() {
            if (this.reflect == 1) {
                if (this.x + this.radius > canvas.width) {
                    if (this.xmom > 0) {
                        this.xmom *= -1
                    }
                }
                if (this.y + this.radius > canvas.height) {
                    if (this.ymom > 0) {
                        this.ymom *= -1
                    }
                }
                if (this.x - this.radius < 0) {
                    if (this.xmom < 0) {
                        this.xmom *= -1
                    }
                }
                if (this.y - this.radius < 0) {
                    if (this.ymom < 0) {
                        this.ymom *= -1
                    }
                }
            }
            this.x -= this.xmom
            this.y -= this.ymom
        }
        frictiveMove() {
            if (this.reflect == 1) {
                if (this.x + this.radius > canvas.width) {
                    if (this.xmom > 0) {
                        this.xmom *= -1
                    }
                }
                if (this.y + this.radius > canvas.height) {
                    if (this.ymom > 0) {
                        this.ymom *= -1
                    }
                }
                if (this.x - this.radius < 0) {
                    if (this.xmom < 0) {
                        this.xmom *= -1
                    }
                }
                if (this.y - this.radius < 0) {
                    if (this.ymom < 0) {
                        this.ymom *= -1
                    }
                }
            }
            if (this.anchored !== 1) {
                this.x += this.xmom
                this.y += this.ymom
            } else {
                this.x = this.anchor.x
                this.y = this.anchor.y
                this.xmom = 0
                this.ymom = 0
            }
            this.xmom *= this.friction
            this.ymom *= this.friction
        }
        frictiveunMove() {
            if (this.reflect == 1) {
                if (this.x + this.radius > canvas.width) {
                    if (this.xmom > 0) {
                        this.xmom *= -1
                    }
                }
                if (this.y + this.radius > canvas.height) {
                    if (this.ymom > 0) {
                        this.ymom *= -1
                    }
                }
                if (this.x - this.radius < 0) {
                    if (this.xmom < 0) {
                        this.xmom *= -1
                    }
                }
                if (this.y - this.radius < 0) {
                    if (this.ymom < 0) {
                        this.ymom *= -1
                    }
                }
            }
            this.xmom /= this.friction
            this.ymom /= this.friction
            this.x -= this.xmom
            this.y -= this.ymom
        }
        isPointInside(point) {
            this.areaY = point.y - this.y
            this.areaX = point.x - this.x
            if (((this.areaX * this.areaX) + (this.areaY * this.areaY)) <= (this.radius * this.radius)) {
                return true
            }
            return false
        }
        doesPerimeterTouch(point) {
            this.areaY = point.y - this.y
            this.areaX = point.x - this.x
            if (((this.areaX * this.areaX) + (this.areaY * this.areaY)) <= ((this.radius + point.radius) * (this.radius + point.radius))) {
                return true
            }
            return false
        }
    }
    class Shotb {
        constructor(x, y, radius, color, xmom = 0, ymom = 0, friction = 1, reflect = 0, strokeWidth = 0, strokeColor = "transparent") {
            this.x = x
            this.y = y
            this.radius = radius
            this.color = color
            this.xmom = xmom
            this.ymom = ymom
            this.friction = friction
            this.reflect = reflect
            this.strokeWidth = strokeWidth
            this.strokeColor = strokeColor
            this.anchored = 0
            this.anchor = this
            this.sxmom = 0
            this.symom = 0
        }
        smove() {
            this.x += this.sxmom
            this.y += this.symom
        }
        reversePointinside(point) {

            this.areaY = point.y - this.y
            this.areaX = point.x - this.x
            if (((this.areaX * this.areaX) + (this.areaY * this.areaY)) <= (point.radius * point.radius)) {
                return true
            }
            return false
        }
        draw() {
            canvas_context.lineWidth = 5
            canvas_context.strokeStyle = this.color
            canvas_context.beginPath();
            if (this.radius > 0) {
                canvas_context.arc(this.x, this.y, this.radius, 0, (Math.PI * 2), true)
                canvas_context.fillStyle = this.color


                var gard = canvas_context.createRadialGradient(this.x, this.y, 0, this.x - (0), this.y - (0), this.radius)
                this.string = this.color

                gard.addColorStop(0, invertColor(this.string) + `51`)
                gard.addColorStop(0.01, invertColor(this.string) + "94")
                gard.addColorStop(0.41, invertColor(this.string) + "a1")
                gard.addColorStop(1, this.string + "ff")
                canvas_context.fillStyle = gard
                canvas_context.fill()
                canvas_context.stroke();
            } else {
                // console.log("The circle is below a radius of 0, and has not been drawn. The circle is:", this)
            }
        }
        move() {
            if (this.reflect == 1) {
                if (this.x + this.radius > canvas.width) {
                    if (this.xmom > 0) {
                        this.xmom *= -1
                    }
                }
                if (this.y + this.radius > canvas.height) {
                    if (this.ymom > 0) {
                        this.ymom *= -1
                    }
                }
                if (this.x - this.radius < 0) {
                    if (this.xmom < 0) {
                        this.xmom *= -1
                    }
                }
                if (this.y - this.radius < 0) {
                    if (this.ymom < 0) {
                        this.ymom *= -1
                    }
                }
            }
            if (this.anchored !== 1) {
                this.x += this.xmom
                this.y += this.ymom
            } else {
                this.x = this.anchor.x
                this.y = this.anchor.y
                this.xmom = 0
                this.ymom = 0
            }
        }
        unmove() {
            if (this.reflect == 1) {
                if (this.x + this.radius > canvas.width) {
                    if (this.xmom > 0) {
                        this.xmom *= -1
                    }
                }
                if (this.y + this.radius > canvas.height) {
                    if (this.ymom > 0) {
                        this.ymom *= -1
                    }
                }
                if (this.x - this.radius < 0) {
                    if (this.xmom < 0) {
                        this.xmom *= -1
                    }
                }
                if (this.y - this.radius < 0) {
                    if (this.ymom < 0) {
                        this.ymom *= -1
                    }
                }
            }
            this.x -= this.xmom
            this.y -= this.ymom
        }
        frictiveMove() {
            if (this.reflect == 1) {
                if (this.x + this.radius > canvas.width) {
                    if (this.xmom > 0) {
                        this.xmom *= -1
                    }
                }
                if (this.y + this.radius > canvas.height) {
                    if (this.ymom > 0) {
                        this.ymom *= -1
                    }
                }
                if (this.x - this.radius < 0) {
                    if (this.xmom < 0) {
                        this.xmom *= -1
                    }
                }
                if (this.y - this.radius < 0) {
                    if (this.ymom < 0) {
                        this.ymom *= -1
                    }
                }
            }
            if (this.anchored !== 1) {
                this.x += this.xmom
                this.y += this.ymom
            } else {
                this.x = this.anchor.x
                this.y = this.anchor.y
                this.xmom = 0
                this.ymom = 0
            }
            this.xmom *= this.friction
            this.ymom *= this.friction
        }
        frictiveunMove() {
            if (this.reflect == 1) {
                if (this.x + this.radius > canvas.width) {
                    if (this.xmom > 0) {
                        this.xmom *= -1
                    }
                }
                if (this.y + this.radius > canvas.height) {
                    if (this.ymom > 0) {
                        this.ymom *= -1
                    }
                }
                if (this.x - this.radius < 0) {
                    if (this.xmom < 0) {
                        this.xmom *= -1
                    }
                }
                if (this.y - this.radius < 0) {
                    if (this.ymom < 0) {
                        this.ymom *= -1
                    }
                }
            }
            this.xmom /= this.friction
            this.ymom /= this.friction
            this.x -= this.xmom
            this.y -= this.ymom
        }
        isPointInside(point) {
            this.areaY = point.y - this.y
            this.areaX = point.x - this.x
            if (((this.areaX * this.areaX) + (this.areaY * this.areaY)) <= (this.radius * this.radius)) {
                return true
            }
            return false
        }
        doesPerimeterTouch(point) {
            this.areaY = point.y - this.y
            this.areaX = point.x - this.x
            if (((this.areaX * this.areaX) + (this.areaY * this.areaY)) <= ((this.radius + point.radius) * (this.radius + point.radius))) {
                return true
            }
            return false
        }
    }
    class ShotC {
        constructor(x, y, radius, color, xmom = 0, ymom = 0, friction = 1, reflect = 0, strokeWidth = 0, strokeColor = "transparent") {
            this.x = x
            this.y = y
            this.radius = radius
            this.color = color
            this.xmom = xmom
            this.ymom = ymom
            this.friction = friction
            this.reflect = reflect
            this.strokeWidth = strokeWidth
            this.strokeColor = strokeColor
            this.anchored = 0
            this.anchor = this
            this.sxmom = 0
            this.symom = 0
        }
        smove() {
            this.x += this.sxmom
            this.y += this.symom
        }
        reversePointinside(point) {

            this.areaY = point.y - this.y
            this.areaX = point.x - this.x
            if (((this.areaX * this.areaX) + (this.areaY * this.areaY)) <= (point.radius * point.radius)) {
                return true
            }
            return false
        }
        draw() {
            canvas_context.lineWidth = 5
            canvas_context.strokeStyle = this.color
            canvas_context.beginPath();
            if (this.radius > 0) {
                canvas_context.arc(this.x, this.y, this.radius, 0, (Math.PI * 2), true)
                canvas_context.fillStyle = this.color


                var gard = canvas_context.createRadialGradient(this.x, this.y, 0, this.x - (0), this.y - (0), this.radius)
                this.string = this.color

                gard.addColorStop(0, (this.string) + `ff`)
                gard.addColorStop(0.33, invertColor(this.string) + "ff")
                gard.addColorStop(0.66, (this.string) + "ff")
                gard.addColorStop(1, invertColor(this.string) + "ff")
                canvas_context.fillStyle = gard
                canvas_context.fill()
                canvas_context.stroke();
            } else {
                // console.log("The circle is below a radius of 0, and has not been drawn. The circle is:", this)
            }
        }
        move() {
            if (this.reflect == 1) {
                if (this.x + this.radius > canvas.width) {
                    if (this.xmom > 0) {
                        this.xmom *= -1
                    }
                }
                if (this.y + this.radius > canvas.height) {
                    if (this.ymom > 0) {
                        this.ymom *= -1
                    }
                }
                if (this.x - this.radius < 0) {
                    if (this.xmom < 0) {
                        this.xmom *= -1
                    }
                }
                if (this.y - this.radius < 0) {
                    if (this.ymom < 0) {
                        this.ymom *= -1
                    }
                }
            }
            if (this.anchored !== 1) {
                this.x += this.xmom
                this.y += this.ymom
            } else {
                this.x = this.anchor.x
                this.y = this.anchor.y
                this.xmom = 0
                this.ymom = 0
            }
        }
        unmove() {
            if (this.reflect == 1) {
                if (this.x + this.radius > canvas.width) {
                    if (this.xmom > 0) {
                        this.xmom *= -1
                    }
                }
                if (this.y + this.radius > canvas.height) {
                    if (this.ymom > 0) {
                        this.ymom *= -1
                    }
                }
                if (this.x - this.radius < 0) {
                    if (this.xmom < 0) {
                        this.xmom *= -1
                    }
                }
                if (this.y - this.radius < 0) {
                    if (this.ymom < 0) {
                        this.ymom *= -1
                    }
                }
            }
            this.x -= this.xmom
            this.y -= this.ymom
        }
        frictiveMove() {
            if (this.reflect == 1) {
                if (this.x + this.radius > canvas.width) {
                    if (this.xmom > 0) {
                        this.xmom *= -1
                    }
                }
                if (this.y + this.radius > canvas.height) {
                    if (this.ymom > 0) {
                        this.ymom *= -1
                    }
                }
                if (this.x - this.radius < 0) {
                    if (this.xmom < 0) {
                        this.xmom *= -1
                    }
                }
                if (this.y - this.radius < 0) {
                    if (this.ymom < 0) {
                        this.ymom *= -1
                    }
                }
            }
            if (this.anchored !== 1) {
                this.x += this.xmom
                this.y += this.ymom
            } else {
                this.x = this.anchor.x
                this.y = this.anchor.y
                this.xmom = 0
                this.ymom = 0
            }
            this.xmom *= this.friction
            this.ymom *= this.friction
        }
        frictiveunMove() {
            if (this.reflect == 1) {
                if (this.x + this.radius > canvas.width) {
                    if (this.xmom > 0) {
                        this.xmom *= -1
                    }
                }
                if (this.y + this.radius > canvas.height) {
                    if (this.ymom > 0) {
                        this.ymom *= -1
                    }
                }
                if (this.x - this.radius < 0) {
                    if (this.xmom < 0) {
                        this.xmom *= -1
                    }
                }
                if (this.y - this.radius < 0) {
                    if (this.ymom < 0) {
                        this.ymom *= -1
                    }
                }
            }
            this.xmom /= this.friction
            this.ymom /= this.friction
            this.x -= this.xmom
            this.y -= this.ymom
        }
        isPointInside(point) {
            this.areaY = point.y - this.y
            this.areaX = point.x - this.x
            if (((this.areaX * this.areaX) + (this.areaY * this.areaY)) <= (this.radius * this.radius)) {
                return true
            }
            return false
        }
        doesPerimeterTouch(point) {
            this.areaY = point.y - this.y
            this.areaX = point.x - this.x
            if (((this.areaX * this.areaX) + (this.areaY * this.areaY)) <= ((this.radius + point.radius) * (this.radius + point.radius))) {
                return true
            }
            return false
        }
    } class Polygon {
        constructor(x, y, size, color, sides = 3, xmom = 0, ymom = 0, angle = 0, reflect = 0) {
            if (sides < 2) {
                sides = 2
            }
            this.reflect = reflect
            this.xmom = xmom
            this.ymom = ymom
            this.body = new Circle(x, y, size - (size * .293), "transparent")
            this.nodes = []
            this.angle = angle
            this.size = size
            this.color = color
            this.angleIncrement = (Math.PI * 2) / sides
            this.sides = sides
            for (let t = 0; t < sides; t++) {
                let node = new Circle(this.body.x + (this.size * (Math.cos(this.angle))), this.body.y + (this.size * (Math.sin(this.angle))), 0, "transparent")
                this.nodes.push(node)
                this.angle += this.angleIncrement
            }
        }
        isPointInside(point) { // rough approximation
            this.body.radius = this.size - (this.size * .293)
            if (this.sides <= 2) {
                return false
            }
            this.areaY = point.y - this.body.y
            this.areaX = point.x - this.body.x
            if (((this.areaX * this.areaX) + (this.areaY * this.areaY)) <= (this.body.radius * this.body.radius)) {
                return true
            }
            return false
        }
        move() {
            if (this.reflect == 1) {
                if (this.body.x > canvas.width) {
                    if (this.xmom > 0) {
                        this.xmom *= -1
                    }
                }
                if (this.body.y > canvas.height) {
                    if (this.ymom > 0) {
                        this.ymom *= -1
                    }
                }
                if (this.body.x < 0) {
                    if (this.xmom < 0) {
                        this.xmom *= -1
                    }
                }
                if (this.body.y < 0) {
                    if (this.ymom < 0) {
                        this.ymom *= -1
                    }
                }
            }
            this.body.x += this.xmom
            this.body.y += this.ymom
        }
        draw() {
            this.nodes = []
            this.angleIncrement = (Math.PI * 2) / this.sides
            this.body.radius = this.size - (this.size * .293)
            for (let t = 0; t < this.sides; t++) {
                let node = new Circle(this.body.x + (this.size * (Math.cos(this.angle))), this.body.y + (this.size * (Math.sin(this.angle))), 0, "transparent")
                this.nodes.push(node)
                this.angle += this.angleIncrement
            }
            canvas_context.strokeStyle = this.color
            canvas_context.fillStyle = this.color
            canvas_context.lineWidth = 0
            canvas_context.beginPath()
            canvas_context.moveTo(this.nodes[0].x, this.nodes[0].y)
            for (let t = 1; t < this.nodes.length; t++) {
                canvas_context.lineTo(this.nodes[t].x, this.nodes[t].y)
            }
            canvas_context.lineTo(this.nodes[0].x, this.nodes[0].y)
            // canvas_context.fill()
            canvas_context.stroke()
            canvas_context.closePath()
        }
    }
    class Shape {
        constructor(shapes) {
            this.shapes = shapes
        }
        draw() {
            for (let t = 0; t < this.shapes.length; t++) {
                this.shapes[t].draw()
            }
        }
        isPointInside(point) {
            for (let t = 0; t < this.shapes.length; t++) {
                if (this.shapes[t].isPointInside(point)) {
                    return true
                }
            }
            return false
        }
        doesPerimeterTouch(point) {
            for (let t = 0; t < this.shapes.length; t++) {
                if (this.shapes[t].doesPerimeterTouch(point)) {
                    return true
                }
            }
            return false
        }
        isInsideOf(box) {
            for (let t = 0; t < this.shapes.length; t++) {
                if (box.isPointInside(this.shapes[t])) {
                    return true
                }
            }
            return false
        }
        push(object) {
            this.shapes.push(object)
        }
    }
    class Spring {
        constructor(x, y, radius, color, body = 0, length = 1, gravity = 0, width = 1) {
            if (body == 0) {
                this.body = new Circle(x, y, radius, color)
                this.anchor = new Circle(x, y, radius, color)
                this.beam = new Line(this.body.x, this.body.y, this.anchor.x, this.anchor.y, "yellow", width)
                this.length = length
            } else {
                this.body = body
                this.anchor = new Circle(x, y, radius, color)
                this.beam = new Line(this.body.x, this.body.y, this.anchor.x, this.anchor.y, "yellow", width)
                this.length = length
            }
            this.gravity = gravity
            this.width = width
        }
        balance() {
            this.beam = new Line(this.body.x, this.body.y, this.anchor.x, this.anchor.y, "yellow", this.width)
            if (this.beam.hypotenuse() < this.length) {
                this.body.xmom += (this.body.x - this.anchor.x) / this.length
                this.body.ymom += (this.body.y - this.anchor.y) / this.length
                this.anchor.xmom -= (this.body.x - this.anchor.x) / this.length
                this.anchor.ymom -= (this.body.y - this.anchor.y) / this.length
            } else {
                this.body.xmom -= (this.body.x - this.anchor.x) / this.length
                this.body.ymom -= (this.body.y - this.anchor.y) / this.length
                this.anchor.xmom += (this.body.x - this.anchor.x) / this.length
                this.anchor.ymom += (this.body.y - this.anchor.y) / this.length
            }
            let xmomentumaverage = (this.body.xmom + this.anchor.xmom) / 2
            let ymomentumaverage = (this.body.ymom + this.anchor.ymom) / 2
            this.body.xmom = (this.body.xmom + xmomentumaverage) / 2
            this.body.ymom = (this.body.ymom + ymomentumaverage) / 2
            this.anchor.xmom = (this.anchor.xmom + xmomentumaverage) / 2
            this.anchor.ymom = (this.anchor.ymom + ymomentumaverage) / 2
        }
        draw() {
            this.beam = new Line(this.body.x, this.body.y, this.anchor.x, this.anchor.y, "yellow", this.width)
            this.beam.draw()
            this.body.draw()
            this.anchor.draw()
        }
        move() {
            this.anchor.ymom += this.gravity
            this.anchor.move()
        }

    }
    class SpringOP {
        constructor(body, anchor, length, width = 3, color = body.color) {
            this.body = body
            this.anchor = anchor
            this.beam = new LineOP(body, anchor, color, width)
            this.str = this.beam.hypotenuse()
            this.length = length
        }
        balance() {
            this.str = this.beam.hypotenuse()
            if (this.str < this.length - 2) {
                this.body.xmom += ((this.body.x - this.anchor.x) / this.length) * 2
                this.body.ymom += ((this.body.y - this.anchor.y) / this.length) * 2
                this.anchor.xmom -= ((this.body.x - this.anchor.x) / this.length) * 2
                this.anchor.ymom -= ((this.body.y - this.anchor.y) / this.length) * 2
                this.body.xmom *= .9
                this.body.ymom *= .9
                this.anchor.xmom *= .9
                this.anchor.ymom *= .9
                if (this.anchor.fired < 8 && this.anchor.fired > 0) {
                    this.anchor.xmom -= ((this.body.x - this.anchor.x) / (this.length)) * 7.66
                    this.anchor.ymom -= ((this.body.y - this.anchor.y) / (this.length)) * 7.66
                    if (this.anchor.fired < 6 && this.anchor.fired > 3) {
                        this.anchor.xmom *= .4
                        this.anchor.ymom *= .4
                        this.body.xmom *= .4
                        this.body.ymom *= .4
                    }
                }
            } else if (this.str > this.length * 2) {
                this.body.xmom -= ((this.body.x - this.anchor.x) / (this.length)) * 5.66
                this.body.ymom -= ((this.body.y - this.anchor.y) / (this.length)) * 5.66
                this.anchor.xmom += ((this.body.x - this.anchor.x) / (this.length)) * 5.66
                this.anchor.ymom += ((this.body.y - this.anchor.y) / (this.length)) * 5.66
                if (this.anchor.anchored == 1) {
                    this.body.xmom -= ((this.body.x - this.anchor.x) / (this.length)) * 5.66
                    this.body.ymom -= ((this.body.y - this.anchor.y) / (this.length)) * 5.66
                    this.body.ymom += this.body.self.gravity
                }
                if (this.anchor.fired < 10 && this.anchor.fired > 0) {
                    this.anchor.xmom += ((this.body.x - this.anchor.x) / (this.length)) * 7.66
                    this.anchor.ymom += ((this.body.y - this.anchor.y) / (this.length)) * 7.66
                    if (this.anchor.fired < 6 && this.anchor.fired > 3) {
                        this.anchor.xmom *= .4
                        this.anchor.ymom *= .4
                        this.body.xmom *= .4
                        this.body.ymom *= .4
                    }
                }
            } else if (this.str > this.length + 2) {
                this.body.xmom -= ((this.body.x - this.anchor.x) / (this.length)) * 1.66
                this.body.ymom -= ((this.body.y - this.anchor.y) / (this.length)) * 1.66
                this.anchor.xmom += ((this.body.x - this.anchor.x) / (this.length)) * 1.66
                this.anchor.ymom += ((this.body.y - this.anchor.y) / (this.length)) * 1.66
                if (this.anchor.anchored == 1) {
                    this.body.xmom -= ((this.body.x - this.anchor.x) / (this.length)) * 5.66
                    this.body.ymom -= ((this.body.y - this.anchor.y) / (this.length)) * 5.66
                    this.body.ymom += this.body.self.gravity
                }
                if (this.anchor.fired < 10 && this.anchor.fired > 0) {
                    this.anchor.xmom += ((this.body.x - this.anchor.x) / (this.length)) * 5.66
                    this.anchor.ymom += ((this.body.y - this.anchor.y) / (this.length)) * 5.66
                    if (this.anchor.fired < 6 && this.anchor.fired > 3) {
                        this.anchor.xmom *= .4
                        this.anchor.ymom *= .4
                        this.body.xmom *= .4
                        this.body.ymom *= .4
                    }
                }
            } else {
                this.body.xmom *= .19
                this.body.ymom *= .19
                this.anchor.xmom *= .19
                this.anchor.ymom *= .19
            }
            let xmomentumaverage = (this.body.xmom + (this.anchor.xmom * 10)) / 11
            let ymomentumaverage = (this.body.ymom + (this.anchor.ymom * 10)) / 11
            this.body.xmom = (this.body.xmom + xmomentumaverage) / 2
            this.body.ymom = (this.body.ymom + ymomentumaverage) / 2
            this.anchor.xmom = (this.anchor.xmom + xmomentumaverage) / 2
            this.anchor.ymom = (this.anchor.ymom + ymomentumaverage) / 2

            if (this.anchor.anchored !== 1) {
                let xmomentumaverage = (this.body.xmom + (this.anchor.xmom * 10)) / 11
                let ymomentumaverage = (this.body.ymom + (this.anchor.ymom * 10)) / 11
                this.body.xmom = (this.body.xmom + xmomentumaverage) / 2
                this.body.ymom = (this.body.ymom + ymomentumaverage) / 2
                this.anchor.xmom = (this.anchor.xmom + xmomentumaverage) / 2
                this.anchor.ymom = (this.anchor.ymom + ymomentumaverage) / 2
                xmomentumaverage = (this.body.xmom + (this.anchor.xmom * 10)) / 11
                ymomentumaverage = (this.body.ymom + (this.anchor.ymom * 10)) / 11
                this.body.xmom = (this.body.xmom + xmomentumaverage) / 2
                this.body.ymom = (this.body.ymom + ymomentumaverage) / 2
                this.anchor.xmom = (this.anchor.xmom + xmomentumaverage) / 2
                this.anchor.ymom = (this.anchor.ymom + ymomentumaverage) / 2
                xmomentumaverage = (this.body.xmom + (this.anchor.xmom * 10)) / 11
                ymomentumaverage = (this.body.ymom + (this.anchor.ymom * 10)) / 11
                this.body.xmom = (this.body.xmom + xmomentumaverage) / 2
                this.body.ymom = (this.body.ymom + ymomentumaverage) / 2
                this.anchor.xmom = (this.anchor.xmom + xmomentumaverage) / 2
                this.anchor.ymom = (this.anchor.ymom + ymomentumaverage) / 2
            }
            //      xmomentumaverage = (this.body.xmom + this.anchor.xmom) / 2
            //      ymomentumaverage = (this.body.ymom + this.anchor.ymom) / 2
            //     this.body.xmom = (this.body.xmom + xmomentumaverage) / 2
            //     this.body.ymom = (this.body.ymom + ymomentumaverage) / 2
            //     this.anchor.xmom = (this.anchor.xmom + xmomentumaverage) / 2
            //     this.anchor.ymom = (this.anchor.ymom + ymomentumaverage) / 2
        }
        draw() {
            this.beam.draw()
        }
        move() {
            //movement of SpringOP objects should be handled separate from their linkage, to allow for many connections, balance here with this object, move nodes independently
        }
    }

    class Color {
        constructor(baseColor, red = -1, green = -1, blue = -1, alpha = 1) {
            this.hue = baseColor
            if (red != -1 && green != -1 && blue != -1) {
                this.r = red
                this.g = green
                this.b = blue
                if (alpha != 1) {
                    if (alpha < 1) {
                        this.alpha = alpha
                    } else {
                        this.alpha = alpha / 255
                        if (this.alpha > 1) {
                            this.alpha = 1
                        }
                    }
                }
                if (this.r > 255) {
                    this.r = 255
                }
                if (this.g > 255) {
                    this.g = 255
                }
                if (this.b > 255) {
                    this.b = 255
                }
                if (this.r < 0) {
                    this.r = 0
                }
                if (this.g < 0) {
                    this.g = 0
                }
                if (this.b < 0) {
                    this.b = 0
                }
            } else {
                this.r = 0
                this.g = 0
                this.b = 0
            }
        }
        normalize() {
            if (this.r > 255) {
                this.r = 255
            }
            if (this.g > 255) {
                this.g = 255
            }
            if (this.b > 255) {
                this.b = 255
            }
            if (this.r < 0) {
                this.r = 0
            }
            if (this.g < 0) {
                this.g = 0
            }
            if (this.b < 0) {
                this.b = 0
            }
        }
        randomLight() {
            var letters = '0123456789ABCDEF';
            var hash = '#';
            for (var i = 0; i < 6; i++) {
                hash += letters[(Math.floor(Math.random() * 12) + 4)];
            }
            var color = new Color(hash, 55 + Math.random() * 200, 55 + Math.random() * 200, 55 + Math.random() * 200)
            return color;
        }
        randomDark() {
            var letters = '0123456789ABCDEF';
            var hash = '#';
            for (var i = 0; i < 6; i++) {
                hash += letters[(Math.floor(Math.random() * 12))];
            }
            var color = new Color(hash, Math.random() * 200, Math.random() * 200, Math.random() * 200)
            return color;
        }
        random() {
            var letters = '0123456789ABCDEF';
            var hash = '#';
            for (var i = 0; i < 6; i++) {
                hash += letters[(Math.floor(Math.random() * 16))];
            }
            var color = new Color(hash, Math.random() * 255, Math.random() * 255, Math.random() * 255)
            return color;
        }
    }
    class Softbody { //buggy, spins in place
        constructor(x, y, radius, color, members = 10, memberLength = 5, force = 10, gravity = 0) {
            this.springs = []
            this.pin = new Circle(x, y, radius, color)
            this.spring = new Spring(x, y, radius, color, this.pin, memberLength, gravity)
            this.springs.push(this.spring)
            for (let k = 0; k < members; k++) {
                this.spring = new Spring(x, y, radius, color, this.spring.anchor, memberLength, gravity)
                if (k < members - 1) {
                    this.springs.push(this.spring)
                } else {
                    this.spring.anchor = this.pin
                    this.springs.push(this.spring)
                }
            }
            this.forceConstant = force
            this.centroid = new Point(0, 0)
        }
        circularize() {
            this.xpoint = 0
            this.ypoint = 0
            for (let s = 0; s < this.springs.length; s++) {
                this.xpoint += (this.springs[s].anchor.x / this.springs.length)
                this.ypoint += (this.springs[s].anchor.y / this.springs.length)
            }
            this.centroid.x = this.xpoint
            this.centroid.y = this.ypoint
            this.angle = 0
            this.angleIncrement = (Math.PI * 2) / this.springs.length
            for (let t = 0; t < this.springs.length; t++) {
                this.springs[t].body.x = this.centroid.x + (Math.cos(this.angle) * this.forceConstant)
                this.springs[t].body.y = this.centroid.y + (Math.sin(this.angle) * this.forceConstant)
                this.angle += this.angleIncrement
            }
        }
        balance() {
            for (let s = this.springs.length - 1; s >= 0; s--) {
                this.springs[s].balance()
            }
            this.xpoint = 0
            this.ypoint = 0
            for (let s = 0; s < this.springs.length; s++) {
                this.xpoint += (this.springs[s].anchor.x / this.springs.length)
                this.ypoint += (this.springs[s].anchor.y / this.springs.length)
            }
            this.centroid.x = this.xpoint
            this.centroid.y = this.ypoint
            for (let s = 0; s < this.springs.length; s++) {
                this.link = new Line(this.centroid.x, this.centroid.y, this.springs[s].anchor.x, this.springs[s].anchor.y, 0, "transparent")
                if (this.link.hypotenuse() != 0) {
                    this.springs[s].anchor.xmom += (((this.springs[s].anchor.x - this.centroid.x) / (this.link.hypotenuse()))) * this.forceConstant
                    this.springs[s].anchor.ymom += (((this.springs[s].anchor.y - this.centroid.y) / (this.link.hypotenuse()))) * this.forceConstant
                }
            }
            for (let s = 0; s < this.springs.length; s++) {
                this.springs[s].move()
            }
            for (let s = 0; s < this.springs.length; s++) {
                this.springs[s].draw()
            }
        }
    }
    class Observer {
        constructor(x, y, radius, color, range = 100, rays = 10, angle = (Math.PI * .125)) {
            this.body = new Circle(x, y, radius, color)
            this.color = color
            this.ray = []
            this.rayrange = range
            this.globalangle = Math.PI
            this.gapangle = angle
            this.currentangle = 0
            this.obstacles = []
            this.raymake = rays
        }
        beam() {
            this.currentangle = this.gapangle / 2
            for (let k = 0; k < this.raymake; k++) {
                this.currentangle += (this.gapangle / Math.ceil(this.raymake / 2))
                let ray = new Circle(this.body.x, this.body.y, 1, "white", (((Math.cos(this.globalangle + this.currentangle)))), (((Math.sin(this.globalangle + this.currentangle)))))
                ray.collided = 0
                ray.lifespan = this.rayrange - 1
                this.ray.push(ray)
            }
            for (let f = 0; f < this.rayrange; f++) {
                for (let t = 0; t < this.ray.length; t++) {
                    if (this.ray[t].collided < 1) {
                        this.ray[t].move()
                        for (let q = 0; q < this.obstacles.length; q++) {
                            if (this.obstacles[q].isPointInside(this.ray[t])) {
                                this.ray[t].collided = 1
                            }
                        }
                    }
                }
            }
        }
        draw() {
            this.beam()
            this.body.draw()
            canvas_context.lineWidth = 1
            canvas_context.fillStyle = this.color
            canvas_context.strokeStyle = this.color
            canvas_context.beginPath()
            canvas_context.moveTo(this.body.x, this.body.y)
            for (let y = 0; y < this.ray.length; y++) {
                canvas_context.lineTo(this.ray[y].x, this.ray[y].y)
                canvas_context.lineTo(this.body.x, this.body.y)
            }
            canvas_context.stroke()
            canvas_context.fill()
            this.ray = []
        }
    }
    function setUp(canvas_pass, style = "#000000") {
        canvas = canvas_pass
        canvas_context = canvas.getContext('2d');
        canvas.style.background = style
        canvas_context.scale(.4, .4)
        window.setInterval(function () {
            main()
        }, 22)
        document.addEventListener('keydown', (event) => {
            keysPressed[event.key] = true;
        });
        document.addEventListener('keyup', (event) => {
            delete keysPressed[event.key];
        });
        window.addEventListener('pointerdown', e => {
            FLEX_engine = canvas.getBoundingClientRect();
            XS_engine = e.clientX - FLEX_engine.left;
            YS_engine = e.clientY - FLEX_engine.top;
            TIP_engine.x = XS_engine * invscale
            TIP_engine.y = YS_engine * invscale
            TIP_engine.body = TIP_engine

            for (let t = 0; t < selectors.length; t++) {
                if (selectors[t].body.isPointInside(TIP_engine)) {
                    selectors[t].body.anchored = 2
                    selectors[t].body.anchor = TIP_engine
                    break
                }
            }
            // boys[0].righthand.anchored = 0
            // boys[0].lefthand.anchored = 0
            // boys[0].righthand.x += (TIP_engine.x * 1) - boys[0].righthand.x
            // boys[0].righthand.y += (TIP_engine.y * 1) - boys[0].righthand.y
            // boys[0].lefthand.x += (TIP_engine.x * 1) - boys[0].lefthand.x
            // boys[0].lefthand.y += (TIP_engine.y * 1) - boys[0].lefthand.y
            // boys[0].body.x = TIP_engine.x * 1
            // boys[0].body.y = TIP_engine.y * 1
            // boys[0].body.xmom = 0
            // boys[0].body.ymom = 0
            // example usage: if(object.isPointInside(TIP_engine)){ take action }
            window.addEventListener('pointermove', continued_stimuli);
        });
        window.addEventListener('pointermove', continued_stimuli);
        window.addEventListener('pointerup', e => {
            for (let t = 0; t < selectors.length; t++) {
                selectors[t].body.anchored = 0
            }
            window.removeEventListener("pointermove", continued_stimuli);
        })
        function continued_stimuli(e) {
            FLEX_engine = canvas.getBoundingClientRect();
            XS_engine = e.clientX - FLEX_engine.left;
            YS_engine = e.clientY - FLEX_engine.top;
            TIP_engine.x = XS_engine * invscale
            TIP_engine.y = YS_engine * invscale
            TIP_engine.body = TIP_engine
        }
    }


    function gamepad_control_controller_proto(object, speed = 1, controller) { // basic control for objects using the controler
        //         console.log(gamepadAPI[0].axesStatus[1]*gamepadAPI[0].axesStatus[0]) //debugging

        if (object.self.shield == 0) {

            if (keysPressed['w']) {
                if (object.self.grounded == 1) {
                    object.self.jumping = 1
                    object.ymom -= speed
                } else {
                    if (object.self.lefthand.anchored == 1) {
                        object.self.degripl()
                        object.self.jumping = 1
                        object.ymom -= speed
                    }
                    if (object.self.righthand.anchored == 1) {
                        object.self.degripr()
                        object.self.jumping = 1
                        object.ymom -= speed
                    }
                }
            }
            if (keysPressed['d']) {
                object.self.face = 1
                object.x += speed
                if (object.self.righthand.anchored == 1) {
                    object.self.degripr()
                    object.self.jumping = 1
                }
            }
            // if (keysPressed['s']) {
            //     object.y += speed
            //     object.self.degrip()
            // }
            if (keysPressed['a']) {
                object.self.face = -1
                object.x -= speed
                if (object.self.righthand.anchored == 1 || object.self.lefthand.anchored == 1) {
                    object.self.degripl()
                    object.self.jumping = 1
                }
            }


            if (typeof (gamepadAPI[controller].axesStatus[1]) != 'undefined') {
                if (gamepadAPI[controller].axesStatus[0] > .1) {
                    object.self.face = 1
                }

                if (gamepadAPI[controller].axesStatus[1] < -.1) {
                    object.self.face = -1
                }
            }

            if (typeof object != 'undefined') {
                if (typeof (gamepadAPI[controller].axesStatus[1]) != 'undefined') {
                    if (typeof (gamepadAPI[controller].axesStatus[0]) != 'undefined') {
                        // object.y += (gamepadAPI[controller].axesStatus[1] * speed)
                        // if((gamepadAPI[controller].axesStatus[1] * speed)  < speed*-.5){             
                        if (object.self.grounded == 1) {
                            object.x += (gamepadAPI[controller].axesStatus[0] * speed)
                            if ((gamepadAPI[controller].axesStatus[1] * speed) < speed * -.5) {
                                object.ymom -= speed
                                object.self.jumping = 1
                            }
                        } else {


                            if (gamepadAPI[controller].axesStatus[0] < -.5) {
                                if (object.self.lefthand.anchored == 1) {
                                    object.self.degripl()
                                    object.self.jumping = 1
                                    object.ymom -= speed
                                } else {
                                    object.x += (gamepadAPI[controller].axesStatus[0] * speed)
                                }
                            }
                            if (gamepadAPI[controller].axesStatus[0] > .5) {
                                object.self.face = 1
                                if (object.self.righthand.anchored == 1) {
                                    object.self.degripr()
                                    object.self.jumping = 1
                                    object.ymom -= speed
                                } else {
                                    object.x += (gamepadAPI[controller].axesStatus[0] * speed)
                                }
                            }


                            if (gamepadAPI[controller].axesStatus[1] < -.5) {
                                object.self.face = -1
                                if (object.self.righthand.anchored == 1 || object.self.lefthand.anchored == 1) {
                                    object.self.degripr()
                                    object.self.degripl()
                                    object.self.jumping = 1
                                    object.ymom -= speed
                                }

                            }
                        }
                        // }
                    }
                }
            }
        }
    }

    function gamepad_control_controller_proto_dj(object, speed = 1, controller) { // basic control for objects using the controler
        //         console.log(gamepadAPI[0].axesStatus[1]*gamepadAPI[0].axesStatus[0]) //debugging


        if (keysPressed['w']) {
            object.self.jumping = 1
            object.ymom = -speed * 2
            object.self.jumpcount = 100

        }
        if (typeof object != 'undefined') {
            if (typeof (gamepadAPI[controller].axesStatus[1]) != 'undefined') {
                if (typeof (gamepadAPI[controller].axesStatus[0]) != 'undefined') {
                    if (gamepadAPI[controller].axesStatus[1] < -.5) {
                        object.ymom = -speed * 2
                        object.self.jumpcount = 100
                    }
                    // if((gamepadAPI[controller].axesStatus[1] * speed)  < speed*-.5){             

                    //             if (object.self.lefthand.anchored == 1) {
                    //                 object.self.degripl()
                    //                 object.self.jumping = 1
                    //                 object.ymom -= speed 
                    //                 // object.self.jumpcount = 12
                    //             }
                    //             if (object.self.righthand.anchored == 1) {
                    //                 object.self.degripr()
                    //                 object.self.jumping = 1
                    //                 object.ymom -= speed 
                    //             }
                    // }
                }
            }
        }
    }
    function gamepad_control(object, speed = 1) { // basic control for objects using the controler
        //         console.log(gamepadAPI[0].axesStatus[1]*gamepadAPI[0].axesStatus[0]) //debugging
        if (typeof object.body != 'undefined') {
            if (typeof (gamepadAPI[controller].axesStatus[1]) != 'undefined') {
                if (typeof (gamepadAPI[controller].axesStatus[0]) != 'undefined') {
                    object.body.x += (gamepadAPI[controller].axesStatus[0] * speed)
                    object.body.y += (gamepadAPI[controller].axesStatus[1] * speed)
                }
            }
        } else if (typeof object != 'undefined') {
            if (typeof (gamepadAPI[controller].axesStatus[1]) != 'undefined') {
                if (typeof (gamepadAPI[controller].axesStatus[0]) != 'undefined') {
                    object.x += (gamepadAPI[controller].axesStatus[0] * speed)
                    object.y += (gamepadAPI[controller].axesStatus[1] * speed)

                }
            }
        }
    }
    function control(object, speed = 1) { // basic control for objects
        if (typeof object.body != 'undefined') {
            if (keysPressed['w']) {
                object.body.y -= speed
            }
            if (keysPressed['d']) {
                object.body.x += speed
            }
            if (keysPressed['s']) {
                object.body.y += speed
            }
            if (keysPressed['a']) {
                object.body.x -= speed
            }
        } else if (typeof object != 'undefined') {
            if (keysPressed['w']) {
                object.y -= speed
            }
            if (keysPressed['d']) {
                object.x += speed
            }
            if (keysPressed['s']) {
                object.y += speed
            }
            if (keysPressed['a']) {
                object.x -= speed
            }
        }
    }

    function invertColorx(hex) {
        if (hex.indexOf('#') === 0) {
            hex = hex.slice(1);
        }
        // convert 3-digit hex to 6-digits.
        if (hex.length === 3) {
            hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
        }
        if (hex.length !== 6) {
            throw new Error('Invalid HEX color.');
        }
        // invert color components
        var g = (255 - parseInt(hex.slice(0, 2), 16)).toString(16),
            r = (255 - parseInt(hex.slice(2, 4), 16)).toString(16),
            b = (255 - parseInt(hex.slice(4, 6), 16)).toString(16);
        // pad each with zeros and return
        return '#' + padZero(r) + padZero(g) + padZero(b);
    }

    function invertColor(hex) {
        if (hex.indexOf('#') === 0) {
            hex = hex.slice(1);
        }
        // convert 3-digit hex to 6-digits.
        if (hex.length === 3) {
            hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
        }
        if (hex.length !== 6) {
            throw new Error('Invalid HEX color.');
        }
        // invert color components
        var r = (255 - parseInt(hex.slice(0, 2), 16)).toString(16),
            g = (255 - parseInt(hex.slice(2, 4), 16)).toString(16),
            b = (255 - parseInt(hex.slice(4, 6), 16)).toString(16);
        // pad each with zeros and return
        return '#' + padZero(r) + padZero(g) + padZero(b);
    }
    function padZero(str, len) {
        len = len || 2;
        var zeros = new Array(len).join('0');
        return (zeros + str).slice(-len);
    }


    function getRandomLightColor() { // random color that will be visible on  black background
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[(Math.floor(Math.random() * 12) + 4)];
        }
        return color;
    }
    function getRandomColor() { // random color
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[(Math.floor(Math.random() * 16) + 0)];
        }
        return color;
    }
    function getRandomDarkColor() {// color that will be visible on a black background
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[(Math.floor(Math.random() * 12))];
        }
        return color;
    }
    function castBetween(from, to, granularity = 10, radius = 1) { //creates a sort of beam hitbox between two points, with a granularity (number of members over distance), with a radius defined as well
        let limit = granularity
        let shape_array = []
        for (let t = 0; t < limit; t++) {
            let circ = new Circle((from.x * (t / limit)) + (to.x * ((limit - t) / limit)), (from.y * (t / limit)) + (to.y * ((limit - t) / limit)), radius, "red")
            shape_array.push(circ)
            // circ.draw()
        }
        return (new Shape(shape_array))
    }

    let setup_canvas = document.getElementById('canvas') //getting canvas from document

    setUp(setup_canvas) // setting up canvas refrences, starting timer. 

    class Stage {

        constructor() {
            this.bricks = [new Brick(1440, 1760, 1410), new Brick(2400, 1460, 1000), new Brick(1430, 1200, 400), new Brick(500, 1420, 750)]
        }
        draw() {
            for (let t = 0; t < this.bricks.length; t++) {
                this.bricks[t].draw()
            }
        }
    }

    class Brick {
        constructor(x, y, width = 900, height = 60) {
            this.center = new Point(x, y)
            this.height = height
            this.edgeleft = new Circle(x - (width * .5), y, 4, "cyan")
            this.edgeright = new Circle(x + (width * .5), y, 4, "blue")
            this.link = new Line(this.edgeleft.x - 5, this.edgeleft.y, this.edgeright.x + 5, this.edgeright.y, getRandomColor(), height * 2)
            this.shape = castBetween(this.edgeleft, this.edgeright, 20, height)
            this.edgeleft = new Circle(x - (width * .5), y - (height * 1), 8, "cyan")
            this.edgeright = new Circle(x + (width * .5), y - (height * 1), 8, "blue")
        }
        doesPerimeterTouch(circle) {
            // this.edgeleft.draw()
            // this.edgeright.draw()
            // let link = new Line(this.edgeleft.x, this.center.y + (this.height*.5), this.edgeright.x, this.center.y + (this.height*.5), "red", 1)
            // link.draw()

            // for(let t = 0;t<circle.self.shots.length;t++){
            //     if(this.shape.doesPerimeterTouch(circle.self.shots[t])){
            //         // circle.self.shots[t].marked = 1
            //     }
            // }

            if (circle == circle.self.rightshoulder) {
                return
            }
            if (circle == circle.self.leftshoulder) {
                return
            }

            if (circle.doesPerimeterTouch(this.edgeleft)) {
                if (circle == circle.self.righthand) {
                    if (circle.anchored >= -1) {
                        circle.anchored = 1
                        circle.self.brick = this
                        circle.anchor = this.edgeleft
                    }
                    if (circle.self.body.y > circle.y) {
                        circle.x--
                    }
                }
            }
            if (circle.doesPerimeterTouch(this.edgeright)) {
                if (circle == circle.self.lefthand) {
                    if (circle.anchored >= -1) {
                        circle.anchored = 1
                        circle.self.brick = this
                        circle.anchor = this.edgeright
                    }
                    if (circle.self.body.y > circle.y) {
                        circle.x++
                    }
                }
            }

            if (circle !== circle.self.rightshoulder && circle !== circle.self.leftshoulder) {
                if (circle.x <= this.edgeright.x + circle.radius) {
                    if (circle.x + circle.radius >= this.edgeleft.x) {
                        if (this.shape.doesPerimeterTouch(circle)) {
                            if (circle == circle.self.body) {
                                if (circle.y < this.center.y) {
                                    circle.self.grounded = 1
                                    circle.self.brick = this
                                }
                            }
                            if (circle.ymom > 4) {
                                if (circle.ymom > 1) {
                                    // console.log("hitr")
                                    // if (circle.self.jumping == 0) {
                                    if (circle == circle.self.righthand) {
                                        // if (circle.self.rightarm.hypotenuse() < this.height * 5.2) {
                                        if (circle.self.body.y <= this.edgeleft.y) {
                                            circle.ymom *= -1
                                        }
                                        // } else {
                                        //    // console.log("hit7")
                                        // }
                                    } else if (circle == circle.self.lefthand) {
                                        // if (circle.self.leftarm.hypotenuse() < this.height * 5.2) {
                                        if (circle.self.body.y <= this.edgeleft.y) {
                                            circle.ymom *= -1
                                        }
                                        // } else {
                                        //    // console.log("hit8")
                                        // }
                                    } else {
                                        if (circle.self.jumping == 0) {
                                            circle.ymom *= -.6
                                        }
                                    }
                                    // } else {

                                    //     circle.ymom = 0
                                    // }
                                } else {
                                    circle.ymom = 0
                                }
                            } else {
                                if (circle.ymom > 0) {
                                    // if (circle.self.jumping == 0) {
                                    if (circle == circle.self.righthand) {
                                        // if (circle.self.rightarm.hypotenuse() < this.height * 5.2) {
                                        if (circle.self.body.y <= this.edgeleft.y) {
                                            circle.ymom *= -.6
                                        }
                                        // }
                                    } else if (circle == circle.self.lefthand) {
                                        // if (circle.self.leftarm.hypotenuse() < this.height * 5.2) {
                                        if (circle.self.body.y <= this.edgeleft.y) {
                                            circle.ymom *= -.6
                                        }
                                        // }
                                    } else {
                                        circle.ymom *= -.6
                                    }

                                    // } else {
                                    //     circle.ymom = 0
                                    // }
                                }
                            }
                            if (circle.y > this.center.y) {
                                if (circle == circle.self.body) {
                                    if (circle.ymom < 0) {
                                        // console.log("hit14")
                                        circle.ymom *= -1
                                        circle.frictiveMove()
                                    }
                                    while (this.shape.doesPerimeterTouch(circle)) {
                                        if (circle != circle.self.lefthand && circle != circle.self.righthand) {
                                            circle.y += .1
                                        } else {
                                            if (circle == circle.self.lefthand) {
                                                if (circle.self.leftarm.hypotenuse() < this.height * 5.2) {
                                                    circle.y += .1
                                                } else {
                                                    // console.log("hit9")
                                                    break
                                                }
                                            }
                                            if (circle == circle.self.righthand) {
                                                if (circle.self.rightarm.hypotenuse() < this.height * 5.2) {
                                                    circle.y += .1
                                                } else {
                                                    // console.log("hit10")
                                                    break
                                                }
                                            }
                                        }
                                    }
                                } else {
                                    if (circle.self.body.y > circle.y) {
                                        if (circle.ymom < 0) {
                                            // console.log("hit11")
                                            circle.ymom *= -1
                                            circle.frictiveMove()
                                        }
                                    }
                                }
                                // circle.y -= .1
                            } else {
                                while (this.shape.doesPerimeterTouch(circle)) {
                                    if (circle != circle.self.lefthand && circle != circle.self.righthand) {
                                        if(circle.anchored != 1){
                                            circle.y -= .1
                                            }else {
                                                break
                                            }
                                    } else {
                                        if (circle == circle.self.lefthand) {
                                            if (circle.self.leftarm.hypotenuse() < this.height * 15.2) {
                                                if (circle.self.body.y <= this.edgeleft.y) {
                                                    //// console.log("hit15")
                                                    if(circle.anchored != 1){
                                                        circle.y -= .1
                                                        }else {
                                                            break
                                                        }
                                                } else {
                                                    //// console.log("hit2")
                                                    break
                                                }

                                                if (this.shape.doesPerimeterTouch(circle)) {
                                                    if (circle == circle.self.righthand) {
                                                        if (circle.self.body.y > circle.y) {
                                                            if (circle.x > circle.self.body.x) {
                                                                if(circle.anchored != 1){
                                                                    circle.x -= .15
                                                                }
                                                            }
                                                        }
                                                    }

                                                    if (circle == circle.self.lefthand) {
                                                        if (circle.self.body.y > circle.y) {
                                                            if (circle.x < circle.self.body.x) {
                                                                if(circle.anchored != 1){
                                                                circle.x += .15
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            } else {
                                                // console.log("hit1")
                                                break
                                            }
                                        }
                                        if (circle == circle.self.righthand) {
                                            if (circle.self.rightarm.hypotenuse() < this.height * 15.2) {
                                                if (circle.self.body.y <= this.edgeleft.y) {
                                                    if(circle.anchored != 1){
                                                        circle.y -= .1
                                                        }else {
                                                            break
                                                        }
                                                } else {
                                                    // console.log("hit3")
                                                    break
                                                }
                                                if (this.shape.doesPerimeterTouch(circle)) {
                                                    if (circle == circle.self.righthand) {
                                                        if (circle.self.body.y > circle.y) {
                                                            if (circle.x > circle.self.body.x) {
                                                                if(circle.anchored != 1){
                                                                circle.x -= .15
                                                                }
                                                            }
                                                        }
                                                    }

                                                    if (circle == circle.self.lefthand) {
                                                        if (circle.self.body.y > circle.y) {
                                                            if (circle.x < circle.self.body.x) {
                                                                if(circle.anchored != 1){
                                                                circle.x += .15
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            } else {
                                                // console.log("hit4")
                                                break
                                            }
                                        }
                                    }

                                    if (this.shape.doesPerimeterTouch(circle)) {
                                        if (circle == circle.self.righthand) {
                                            if (circle.self.body.y > circle.y) {
                                                if (circle.x > circle.self.body.x) {
                                                    if(circle.anchored != 1){
                                                    circle.x -= .15
                                                    }
                                                }
                                            }
                                        }

                                        if (circle == circle.self.lefthand) {
                                            if (circle.self.body.y > circle.y) {
                                                if (circle.x < circle.self.body.x) {
                                                    if(circle.anchored != 1){
                                                    circle.x += .15
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                                //// console.log("hit13")
                                circle.y += .1
                            }
                        } else {
                            if (circle == circle.self.body) {
                                if (circle.y + circle.radius >= this.edgeleft.y - 1) {
                                    if (circle.y + circle.radius <= this.edgeleft.y + this.height * 2.5) {
                                        if (circle.x > this.edgeleft.x) {
                                            // this.edgeleft.draw()
                                            if (circle.x < this.edgeright.x) {
                                                circle.self.grounded = 1
                                                circle.self.brick = this
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }


            while (this.shape.doesPerimeterTouch(circle)) {
                if (circle.self.body.x < this.edgeright.x + (circle.self.body.radius*1.2)) {
                    if (circle.self.body.x > this.edgeleft.x - (circle.self.body.radius*1.2)) {
                        if (circle.self.body.y < this.edgeleft.y) {
                            if(circle.anchored != 1){
                            circle.y -= .1
                            }else {
                                break
                            }
                        } else if (circle.self.body.y > this.edgeleft.y + (this.height * 2)) {
                            if(circle.anchored != 1){
                            circle.y += .1
                            }else {
                                break
                            }
                        } else {
                            break
                        }
                    } else {
                        break
                    }
                } else {
                    break
                }
            }
        }
    
    draw() {
        this.link.draw()
        // this.edgeright.draw()
        // this.edgeleft.draw()
    }
}

    let stage = new Stage()

    class Explosion {
        constructor(x) {
            this.count = -90
            this.center = x
            this.links = []
            for (let t = 0; t < 12; t++) {
                let curve = ((Math.random() - .5) * 150)
                let link = new Line(this.center + curve, 720 + (Math.abs(curve) * 2), this.center + curve, 10000 + ((Math.random() - .5) * 1000), getRandomLightColor(), 10)
                this.links.push(link)
            }
        }
        draw() {
            this.count += 5.5
            for (let t = 0; t < this.links.length; t++) {
                this.links[t].draw()
                this.links[t].width -= .5
                if (this.links[t].width < 1) {
                    this.links[t].width = 1
                }
                this.links[t].y1 += this.count
            }
        }
    }


    class Boy {
        constructor(controller) {
            this.blasting = 0
            this.recovering = 0
            this.dmomu = 0
            this.amomu = 0
            this.amom = 0
            this.dmom = 0
            this.fleeing = 0
            this.face = 0
            this.screwshot = 0
            this.rightshot = 0
            this.hortsmash = 0
            this.leftshot = 0
            this.downspike = 0
            this.brick = new Brick(1, 1, 1, 1)
            this.storeshield = 0
            this.face = 0
            this.shots = []
            this.wasfalse = []
            this.controller = controller
            this.armlength = 30
            this.shoulderwidth = 8
            this.damage = 0
            this.nodes = []
            this.springs = []
            this.hitboxes = []
            this.links = []
            this.speed = 11.5
            this.punchspeed = 6.5
            this.grounded = 0
            this.jumping = 1

            this.color = getRandomColor()
            if (controller == 0) {
                this.color = "#ffAA00"
            }
            if (controller == 1) {
                this.color = "#ff0000"
            }
            this.body = new Circle(800 + ((boys.length * 350) % 800), 500, 37, this.color)
            this.nodes.push(this.body)
            this.leftshoulder = new Circle(this.body.x - (this.body.radius + this.shoulderwidth), 350, 10, "magenta", 0, 0, .999)
            this.rightshoulder = new Circle(this.body.x + (this.body.radius + this.shoulderwidth), 350, 10, "red", 0, 0, .999)
            this.lefthand = new Circle(this.leftshoulder.x, (this.leftshoulder.y + this.armlength), 26, "magenta", 0, 0, .85)
            this.righthand = new Circle(this.rightshoulder.x, (this.rightshoulder.y + this.armlength), 26, "red", 0, 0, .85)
            this.nodes.push(this.leftshoulder)
            this.nodes.push(this.rightshoulder)
            this.nodes.push(this.righthand)
            this.nodes.push(this.lefthand)
            this.leftcollar = new LineOP(this.leftshoulder, this.body, this.body.color, 8)
            this.rightcollar = new LineOP(this.rightshoulder, this.body, this.body.color, 8)
            this.links.push(this.leftcollar)
            this.links.push(this.rightcollar)
            this.leftarm = new LineOP(this.leftshoulder, this.lefthand, invertColor(this.body.color), 8)
            this.rightarm = new LineOP(this.rightshoulder, this.righthand, invertColor(this.body.color), 8)
            this.links.push(this.leftarm)
            this.links.push(this.rightarm)
            this.leftarm = new SpringOP(this.leftshoulder, this.lefthand, this.armlength, 8)
            this.rightarm = new SpringOP(this.rightshoulder, this.righthand, this.armlength, 8)
            this.springs.push(this.leftarm)
            this.springs.push(this.rightarm)
            this.gravity = 1
            this.righthand.fired = 0
            this.lefthand.fired = 0
            this.shield = 0
            this.shieldpower = 100
            this.breaktimer = 0
            this.bodyx = this.body.x
            for (let t = 0; t < this.nodes.length; t++) {
                this.nodes[t].self = this // lmao
            }
        }
        copy() {
            let copy = new Boy(this.controller)
            copy.body.color = this.body.color
            return copy
        }
        control() {
            gamepad_control_controller_proto(this.center, this.speed + (this.speed * (this.grounded * .5)), this.controller)
        }
        fixupshoulder() {

            this.leftshoulder.x = this.body.x - (this.body.radius + this.shoulderwidth)
            this.leftshoulder.y = this.body.y - (this.shoulderwidth)

            this.rightshoulder.x = this.body.x + (this.body.radius + this.shoulderwidth)
            this.rightshoulder.y = this.body.y - (this.shoulderwidth)

            this.leftshoulder.color = this.body.color
            this.rightshoulder.color = this.body.color
            this.lefthand.color = this.body.color
            this.righthand.color = this.body.color


            if (this.lefthand.anchored == 0) {
                this.lefthand.x = this.lefthand.x + (this.leftshoulder.x - (this.body.x - (this.body.radius + this.shoulderwidth)))
                this.lefthand.y -= this.leftshoulder.y - (this.body.y - (this.shoulderwidth))
                this.leftshoulder.xmom *= 0
                this.leftshoulder.ymom *= 0
            }
            if (this.righthand.anchored == 0) {
                this.righthand.x = this.righthand.x + (this.rightshoulder.x - (this.body.x + (this.body.radius + this.shoulderwidth)))
                this.righthand.y -= this.rightshoulder.y - (this.body.y - (this.shoulderwidth))
                this.rightshoulder.xmom *= 0
                this.rightshoulder.ymom *= 0
            }

            if (this.body.ymom < -vsmashlimit) {
                this.body.ymom = -vsmashlimit
            }
            if (this.body.ymom > vsmashlimit) {
                this.body.ymom = vsmashlimit
            }



            // this.leftshoulder.x = this.body.x - (this.body.radius + this.shoulderwidth)
            // this.leftshoulder.y = this.body.y

            // this.rightshoulder.x = this.body.x + (this.body.radius + this.shoulderwidth)
            // this.rightshoulder.y = this.body.y

        }
        AIarmControl() {
            if (this.wmove == 1) {
                this.jumping = 1
                this.body.ymom = -this.speed * 2
                this.lefthand.ymom = -this.speed * 2
                this.righthand.ymom = -this.speed * 2
                this.jumpcount = 100

            }
        }
        enemycollide() {

            for (let t = 0; t < boys.length; t++) {
                if (this != boys[t]) {

                    for (let k = 0; k < boys[t].shots.length; k++) {
                        if (boys[t].shots[k].marked != 1) {
                            if (boys[t].shots[k].doesPerimeterTouch(this.body)) {
                                if (this.shield == 1) {
                                    this.shieldpower -= (Math.abs(boys[t].shots[k].xmom) + Math.abs(boys[t].shots[k].ymom)) / 3
                                } else {
                                    this.body.xmom = ((boys[t].shots[k].xmom * (this.damage / 200)) + (boys[t].shots[k].xmom * baselaunch)) * 2
                                    this.body.ymom = (((boys[t].shots[k].ymom * (this.damage / 200)) + (boys[t].shots[k].ymom * baselaunch)) * 2) - (10 * (this.damage / 200))
                                    this.damage += (Math.abs(boys[t].shots[k].xmom) + Math.abs(boys[t].shots[k].ymom)) / 2
                                    this.breaktimer = 0
                                }
                                boys[t].shots[k].marked = 1
                            }
                        }
                    }
                    boys[t].righthands = castBetween(boys[t].rightshoulder, boys[t].righthand, 20, boys[t].rightshoulder.radius)
                    boys[t].lefthands = castBetween(boys[t].leftshoulder, boys[t].lefthand, 20, boys[t].leftshoulder.radius)
                    if (boys[t].righthands.doesPerimeterTouch(this.body) || boys[t].righthand.doesPerimeterTouch(this.body)) {
                        if (boys[t].righthand.fired > 14) {
                            if (this.shield == 1) {
                                this.shieldpower -= (Math.abs(boys[t].righthand.xmom) + Math.abs(boys[t].righthand.ymom)) / 11
                            } else {
                                this.body.xmom = ((boys[t].righthand.xmom * (this.damage / 200)) + (boys[t].righthand.xmom * baselaunch)) * Math.max((1 + (boys[t].blasting / 40)), 1)
                                this.body.ymom = (((boys[t].righthand.ymom * (this.damage / 200)) + (boys[t].righthand.ymom * baselaunch)) * 1) * Math.max((1 + (boys[t].blasting / 40)), 1)
                                this.damage += ((Math.abs(boys[t].righthand.xmom) + Math.abs(boys[t].righthand.ymom)) / 7) * Math.max((1 + (boys[t].blasting / 40)), 1)
                                this.breaktimer = 0
                            }
                            boys[t].righthand.fired = 14

                            if (this.righthand.anchored == 1 || this.lefthand.anchored == 1) {
                                this.lefthand.anchored = -40
                                this.righthand.anchored = -40
                            }


                            if (this.body.ymom < -vsmashlimit) {
                                this.body.ymom = -vsmashlimit
                            }
                            if (this.body.ymom > vsmashlimit) {
                                this.body.ymom = vsmashlimit
                            }
                            this.body.move()
                            this.fixupshoulder()

                        }
                    } else if (boys[t].lefthands.doesPerimeterTouch(this.body) || boys[t].lefthand.doesPerimeterTouch(this.body)) {
                        if (boys[t].lefthand.fired > 14) {

                            if (this.shield == 1) {
                                this.shieldpower -= (Math.abs(boys[t].lefthand.xmom) + Math.abs(boys[t].lefthand.ymom)) / 11
                            } else {
                                this.body.xmom = (boys[t].lefthand.xmom * (this.damage / 200)) + (boys[t].lefthand.xmom * baselaunch)
                                this.body.ymom = (((boys[t].lefthand.ymom * (this.damage / 200)) + (boys[t].lefthand.ymom * baselaunch)) * 1)
                                this.damage += (Math.abs(boys[t].lefthand.xmom) + Math.abs(boys[t].lefthand.ymom)) / 7
                                this.breaktimer = 0
                            }
                            boys[t].lefthand.fired = 14
                            if (this.righthand.anchored == 1 || this.lefthand.anchored == 1) {
                                this.lefthand.anchored = -40
                                this.righthand.anchored = -40
                            }
                            if (this.body.ymom < -vsmashlimit) {
                                this.body.ymom = -vsmashlimit
                            }
                            if (this.body.ymom > vsmashlimit) {
                                this.body.ymom = vsmashlimit
                            }
                            this.body.move()
                            this.fixupshoulder()
                        }
                    }
                    if (boys[t].screwangle != 0 && boys[t].body.doesPerimeterTouch(this.body)) {
                        if (boys[t].body.fired > 14) {
                            if (this.shield == 1) {
                                this.shieldpower -= (Math.abs(boys[t].body.xmom) + Math.max(20, Math.abs(boys[t].body.ymom))) / 3
                            } else {
                                this.body.xmom = (boys[t].body.xmom * (this.damage / 200)) + (boys[t].body.xmom * baselaunch) * 2
                                this.body.ymom = (((boys[t].body.ymom * (this.damage / 200)) + (boys[t].body.ymom * baselaunch)) * 2)
                                this.damage += (Math.abs(boys[t].body.xmom) + Math.max(20, Math.abs(boys[t].body.ymom))) / 2
                            }
                            boys[t].body.fired = 14
                            if (this.righthand.anchored == 1 || this.lefthand.anchored == 1) {
                                this.lefthand.anchored = -40
                                this.righthand.anchored = -40
                            }
                            if (this.body.ymom < -vsmashlimit) {
                                this.body.ymom = -vsmashlimit
                            }
                            if (this.body.ymom > vsmashlimit) {
                                this.body.ymom = vsmashlimit
                            }
                            this.body.move()
                            this.fixupshoulder()
                        }
                    }
                }
            }


            for (let t = 0; t < boys.length; t++) {
                if (this != boys[t]) {


                    while (boys[t].body.doesPerimeterTouch(this.body)) {
                        if (this.body.x > boys[t].body.x) {
                            this.body.x += .5
                            boys[t].body.x -= .5
                            this.fixupshoulder()
                            boys[t].fixupshoulder()
                            this.body.ymom *= .99
                        } else {
                            this.body.x -= .5
                            boys[t].body.x += .5
                            this.fixupshoulder()
                            boys[t].fixupshoulder()
                            this.body.ymom *= .99
                        }

                    }


                    // while (boys[t].rightshoulder.reversePointinside(this.leftshoulder) || boys[t].rightshoulder.reversePointinside(this.body)) {
                    //     this.body.x += .5
                    //     boys[t].body.x -= .5
                    //     this.fixupshoulder()
                    //     boys[t].fixupshoulder()
                    //     this.righthand.x += .5
                    //     this.lefthand.x += .5
                    //     boys[t].lefthand.x -= .5
                    //     boys[t].righthand.x -= .5
                    // }
                    // while (boys[t].leftshoulder.reversePointinside(this.rightshoulder) || boys[t].leftshoulder.reversePointinside(this.body)) {
                    //     this.body.x -= .5
                    //     boys[t].body.x += .5
                    //     this.fixupshoulder()
                    //     boys[t].fixupshoulder()
                    //     this.righthand.x -= .5
                    //     this.lefthand.x -= .5
                    //     boys[t].lefthand.x += .5
                    //     boys[t].righthand.x += .5
                    // }
                }
            }

        }

        doubleJump() {
            this.jumpcount--
            if (this.jumpcount <= -20) {
                if (this == boys[0]) {
                    gamepad_control_controller_proto_dj(this.body, this.speed, this.controller)
                } else {
                    this.AIarmControl()
                }
            }
        }
        breaks() {
            if (this.shield == 1) {
                if (this.shieldpower <= 0) {
                    this.breaktimer = 200
                    this.shieldpower = 1
                    this.shield = 0
                }
            }
        }
        fightcontrol() {
            this.breaks()
            this.righthand.fired--
            this.lefthand.fired--
            this.breaktimer--
            if (gamepadAPI[this.controller].buttonsStatus.includes('RB') || keysPressed['o']) {
                if (this.breaktimer < 0) {
                    if (this.grounded == 1) {
                        this.shieldpower -= .63
                        this.shield = 1
                        let shild = new Circle(this.body.x, this.body.y, (Math.max((new LineOP(this.body, this.lefthand)).hypotenuse(), (new LineOP(this.body, this.righthand)).hypotenuse())) + this.lefthand.radius, this.body.color + Math.min(Math.round(this.shieldpower + 11), 99))
                        shild.draw()
                    }
                }
            } else {
                this.shield = 0
                this.shieldpower += .2
                if (this.shieldpower > 100) {
                    this.shieldpower = 100
                }
            }


            if (this.breaktimer <= 0 && this.shield == 0) {

                if (gamepadAPI[this.controller].buttonsStatus.includes('B') || keysPressed['l']) {
                    if (this.face == 1) {
                        if (this.righthand.fired <= 0) {
                            if (this.righthand.anchored == 0) {
                                this.righthand.ymom = 0
                                this.righthand.xmom = this.punchspeed * 14
                                this.righthand.fired = 18
                            }
                        }
                    }
                    if (this.face == -1) {
                        if (this.lefthand.fired <= 0) {
                            if (this.lefthand.anchored == 0) {
                                this.lefthand.ymom = 0
                                this.lefthand.xmom = -this.punchspeed * 14
                                this.lefthand.fired = 18
                            }
                        }
                    }
                }


                if (gamepadAPI[this.controller].buttonsStatus.includes('Y') || keysPressed['i']) {
                    if (this.righthand.fired <= 0) {
                        if (this.righthand.anchored == 0) {
                            this.righthand.ymom = -this.punchspeed * 14
                            this.righthand.xmom = this.punchspeed * 1
                            this.righthand.fired = 18
                        }
                    }
                    if (this.lefthand.fired <= 0) {
                        if (this.lefthand.anchored == 0) {
                            this.lefthand.ymom = -this.punchspeed * 14
                            this.lefthand.xmom = -this.punchspeed * 1
                            this.lefthand.fired = 18
                        }
                    }
                }

                if (gamepadAPI[this.controller].buttonsStatus.includes('A') || keysPressed['k']) {
                    if (this.righthand.fired <= 0) {
                        if (this.righthand.anchored == 0) {
                            this.rightshoulder.xmom = 0
                            this.rightshoulder.ymom = 0
                            this.righthand.ymom = this.punchspeed * 14
                            this.righthand.xmom = this.punchspeed * 9
                            this.righthand.fired = 18
                        }
                    }
                    if (this.lefthand.fired <= 0) {
                        if (this.lefthand.anchored == 0) {
                            this.leftshoulder.xmom = 0
                            this.leftshoulder.ymom = 0
                            this.lefthand.ymom = this.punchspeed * 14
                            this.lefthand.xmom = -this.punchspeed * 9
                            this.lefthand.fired = 18
                        }
                    }
                }


                if (gamepadAPI[this.controller].buttonsStatus.includes('X') || keysPressed['j']) {
                    if (this.lefthand.fired <= 0) {
                        if (this.righthand.fired <= 0) {
                            let shot = new Shot(this.body.x, this.body.y, 20, "#bbbbbb", 0, (this.speed * 1.9))
                            this.shots.push(shot)
                            if (this.body.ymom > -jumplimit) {
                                this.body.ymom -= 8
                                if (this.body.ymom < -jumplimit) {
                                    this.body.ymom = -jumplimit
                                }
                            } else {
                            }
                            this.lefthand.fired = 12
                            this.righthand.fired = 12
                        }
                    }
                }
            }
        }

        AImove(object, speed, controller) {
            if (object == this.body) {
                this.amom--
                this.dmom--
                this.dmomu--
                this.amomu--
            }
            this.wmove = 0
            this.amove = 0
            this.dmove = 0
            if (Math.random() < .0015) {
                this.fleeing = 1
            }
            if (this.charge > 90) {
                this.fleeing = 0
            }
            if (Math.random() < .05) {
                this.fleeing = 0
            }

            this.safe = 0
            this.recovering = 0
            for (let t = 0; t < stage.bricks.length; t++) {
                if (stage.bricks[t].edgeleft.x < this.body.x && stage.bricks[t].edgeright.x > this.body.x) {
                    if (Math.max(stage.bricks[t].edgeright.y, stage.bricks[t].edgeleft.y) > this.body.y) {
                        this.safe = 1
                        break
                    }
                }
            }
            if (this.safe == 0) {
                if (Math.random() < .5) {
                    if (this.dmove == 1) {
                        this.amove = 1
                        this.dmove = 0
                    } else if (this.amove == 1) {
                        this.amove = 0
                        this.dmove = 1
                    }
                } else {
                    if (this.amove == 1) {
                        this.amove = 0
                        this.dmove = 1
                    } else if (this.dmove == 1) {
                        this.amove = 1
                        this.dmove = 0
                    }
                }
                this.fleeing = 0
            } else {

            }

            for (let t = 0; t < boys.length; t++) {
                if (this != boys[t]) {
                    if (Math.abs(this.body.x - boys[t].body.x) > 1 && this.body.y > (boys[t].body.y + 15)) {
                        this.wmove = 1
                    }

                    if (this.fleeing == 0) {
                        if (Math.abs(this.body.x - boys[t].body.x) > (this.body.radius * 4) && this.body.x > (boys[t].body.x + 5)) {
                            this.amove = 1
                        } else if (Math.abs(this.body.x - boys[t].body.x) > (this.body.radius * 4) && this.body.x < (boys[t].body.x + 5)) {
                            this.dmove = 1
                        }
                    } else {
                        if (Math.abs(this.body.x - boys[t].body.x) > (this.body.radius * 4) && this.body.x > (boys[t].body.x + 5)) {
                            this.dmove = 1
                        } else if (Math.abs(this.body.x - boys[t].body.x) > (this.body.radius * 4) && this.body.x < (boys[t].body.x + 5)) {
                            this.amove = 1
                        }
                    }


                    if (this.righthand.anchored == 1 || this.lefthand.anchored == 1) {
                        if (Math.random() < .2) {
                            this.wmove = 1
                        }
                        if (Math.random() < .1) {
                            this.dmove = 1
                        }
                        if (Math.random() < .1) {
                            this.amove = 1
                        }
                    }
                }
            }

            this.safe = 0
            this.recovering = 0
            for (let t = 0; t < stage.bricks.length; t++) {
                if (stage.bricks[t].edgeleft.x < (this.body.x + this.body.radius) && stage.bricks[t].edgeright.x > (this.body.x - this.body.radius)) {
                    if (Math.max(stage.bricks[t].edgeright.y, stage.bricks[t].edgeleft.y) > this.body.y) {
                        this.safe = 1
                        break
                    }
                }
            }

            this.under = 0
            for (let k = 0; k < boys.length; k++) {
                if (this != boys[k]) {
                    for (let t = 0; t < stage.bricks.length; t++) {
                        if (stage.bricks[t].edgeleft.x < (this.body.x + (this.body.radius * 1.6)) && stage.bricks[t].edgeright.x > (this.body.x - (this.body.radius * 1.6))) {
                            if (Math.max(stage.bricks[t].edgeright.y, stage.bricks[t].edgeleft.y) < this.body.y) {
                                if (this.body.y - Math.max(stage.bricks[t].edgeright.y, stage.bricks[t].edgeleft.y) > (stage.bricks[t].height * 2) + 10) {
                                    this.recovering = 1
                                }
                                if (boys[k].brick == stage.bricks[t]) {
                                    this.under = 1
                                }
                                if (Math.abs(this.body.x - Math.max(stage.bricks[t].edgeright.x)) < Math.abs(this.body.x - Math.max(stage.bricks[t].edgeleft.x))) {
                                    if (boys[k].body.x < this.body.x) {
                                        if ((boys[k].body.y - (boys[k].body.radius * 1.5)) < Math.max(stage.bricks[t].edgeright.y, stage.bricks[t].edgeleft.y)) {
                                            if (this.body.x - (this.body.radius * 1.2) <= stage.bricks[t].edgeright.x) {
                                                if (this.grounded == 1 || this.jumping == 1) {
                                                    if (boys[k].brick == stage.bricks[t]) {
                                                        this.under = 2
                                                    }
                                                }
                                            }
                                        }
                                    }
                                } else if (Math.abs(this.body.x - Math.max(stage.bricks[t].edgeright.x)) > Math.abs(this.body.x - Math.max(stage.bricks[t].edgeleft.x))) {
                                    if (boys[k].body.x > this.body.x) {
                                        if ((boys[k].body.y - (boys[k].body.radius * 1.5)) < Math.max(stage.bricks[t].edgeright.y, stage.bricks[t].edgeleft.y)) {
                                            if (this.body.x + (this.body.radius * 1.2) >= stage.bricks[t].edgeleft.x) {
                                                if (this.grounded == 1 || this.jumping == 1) {
                                                    if (boys[k].brick == stage.bricks[t]) {
                                                        this.under = 3
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                                if (this.under !== 0) {
                                    if (this.under == 2) {
                                        this.screwshot = 1
                                        this.amove = 0
                                        this.dmom = 100
                                        this.amom = 0
                                        this.dmove = 1
                                        this.wmove = 1
                                    }
                                    if (this.under == 3) {
                                        this.screwshot = 1
                                        this.amove = 1
                                        this.amom = 100
                                        this.dmom = 0
                                        this.dmove = 0
                                        this.wmove = 1
                                    }
                                }

                                break
                            }
                        }
                    }
                }
            }

            for (let t = 0; t < boys.length; t++) {
                if (this != boys[t]) {
                    if (Math.max(boys[t].brick.edgeleft.y, boys[t].brick.edgeright.y) > Math.max(this.brick.edgeleft.y, this.brick.edgeright.y)) {
                        if (this.safe == 1) {
                            if (this.dmomu <= 0 && this.amomu <= 0) {
                                if (this.righthand.anchored != 1 && this.lefthand.anchored != 1) {
                                    if (boys[t].body.x < this.body.x) {
                                        if ((this.brick.edgeright.x > this.body.x - this.body.radius)) {
                                            this.amomu = (Math.abs(this.brick.edgeright.x - this.body.x)) / this.speed
                                            this.amomu += 25
                                        }
                                    } else {
                                        if ((this.brick.edgeleft.x < this.body.x + this.body.radius)) {
                                            this.dmomu = (Math.abs(this.brick.edgeleft.x - this.body.x)) / this.speed
                                            this.dmomu += 25
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }


            if (this.dmom > 0) {
                if (Math.random() < .1) {
                    this.downspike = 1
                }
                this.dmove = 1
                this.wmove = 1
                this.amomu = 0
                this.dmomu = 0
            }
            if (this.amom > 0) {
                if (Math.random() < .1) {
                    this.downspike = 1
                }
                this.amove = 1
                this.wmove = 1
                this.amomu = 0
                this.dmomu = 0
            }

            if (this.dmomu > 0) {
                this.dmove = 1
                this.amove = 0
                this.amomu = 0
                this.screwshot = 0
                this.wmove = 0
            }
            if (this.amomu > 0) {
                this.amove = 1
                this.dmove = 0
                this.dmomu = 0
                this.screwshot = 0
                this.wmove = 0
            }

            if (this.safe == 0) {
                this.downspike = 1
                if (this.body.x > (1280 * (invscale * .5))) {
                    this.amove = 1
                    this.dmove = 0
                    this.wmove = 1
                    this.amomu = 0
                    this.dmomu = 0
                } else {
                    this.amove = 0
                    this.dmove = 1
                    this.wmove = 1
                    this.amomu = 0
                    this.dmomu = 0
                }
                this.fleeing = 0
            } else {

            }

            if (this.shield == 0) {

                if (this.dmove == 0 && this.amove == 0) {
                    if (Math.random() < .5) {
                        this.dmove = 1
                    } else {
                        this.amove = 1
                    }
                }
                if (this.wmove == 1) {
                    if (this.grounded == 1) {
                        this.jumping = 1
                        object.ymom -= speed
                    } else {
                        if (this.lefthand.anchored == 1) {
                            this.degripl()
                            this.jumping = 1
                            object.ymom -= speed
                        }
                        if (this.righthand.anchored == 1) {
                            this.degripr()
                            this.jumping = 1
                            object.ymom -= speed
                        }
                    }
                }
                if (this.dmove == 1) {
                    this.face = 1
                    if (object == this.body) {
                        object.x += speed
                        this.righthand.x += speed
                        this.lefthand.x += speed
                    }
                    if (this.righthand.anchored == 1) {
                        this.degripr()
                        this.jumping = 1
                    }
                }
                if (this.amove == 1) {
                    this.face = -1
                    if (object == this.body) {
                        object.x -= speed
                        this.righthand.x -= speed
                        this.lefthand.x -= speed
                    }
                    if (this.righthand.anchored == 1 || this.lefthand.anchored == 1) {
                        this.degripl()
                        this.jumping = 1
                    }
                }
            }
        }
        AI() {

            this.breaks()
            for (let t = 0; t < this.shots.length; t++) {
                this.shots[t].move()
                this.shots[t].draw()
            }
            for (let t = 0; t < this.shots.length; t++) {
                if (this.shots[t].marked == 1) {
                    this.shots.splice(t, 1)
                }
            }

            if (this.screwtimer > 0) {
                this.screwtimer--
                this.screwangle += this.screwmomentum
            } else {
                this.screwtimer = 0
                this.screwangle = 0
            }


            // if (gamepadAPI[this.controller].buttonsStatus.includes('RB') || keysPressed['o']) {

            if (Math.random() < .1) {
                this.storeshield = 0
            }
            if (Math.random() < .5) {
                this.screwshot = 0
            }
            if (Math.random() < .01 || this.charge == 0) {
                this.rightshot = 0
            }
            if (Math.random() < .01 || this.charge == 0) {
                this.leftshot = 0
            }
            if (Math.random() < .1) {
                this.downspike = 0
            }
            if (Math.random() < .1) {
                this.hortsmash = 0
            }
            for (let t = 0; t < boys.length; t++) {
                if (this != boys[t]) {

                    if (Math.abs(this.body.x - boys[t].body.x) < 45 && this.body.y < boys[t].body.y) {
                        this.downspike = 1
                    } else if (Math.abs(this.body.x - boys[t].body.x) < 150 && this.body.y <= boys[t].body.y && (boys[t].righthand.anchored == 1 || boys[t].lefthand.anchored == 1)) {
                        this.hortsmash = 1
                    }
                    if (Math.abs(this.body.x - boys[t].body.x) < 70 && this.body.y > boys[t].body.y) {
                        this.screwshot = 1
                    } else if (this.body.y - boys[t].body.y > 100) {
                        if (Math.random() < .01) {
                            this.downspike = 1
                        }
                    }




                    if (Math.abs(this.body.x - boys[t].body.x) < 240) {
                        if (this.body.x > boys[t].body.x) {
                            if (this.face == 1) {
                                this.hortsmash = 1
                            }
                        }
                        if (this.body.x < boys[t].body.x) {
                            if (this.face == -1) {
                                this.hortsmash = 1
                            }
                        }
                    }

                    if (boys[t].righthand.fired > 14) {
                        if (this.body.x > boys[t].body.x) {
                            if (Math.random() < .09) {
                                this.storeshield = 1
                            }
                        }
                    }
                    if (this.screwshot + this.hortsmash + this.downspike + this.storeshield == 0) {
                        if (Math.abs(this.body.y - boys[t].body.y) < 35 && this.body.x > boys[t].body.x) {
                            if (this.face == -1) {
                                if (Math.abs(this.body.x - boys[t].body.x) < 170) {
                                    this.leftshot = 1
                                    if (Math.random() < .009) {
                                        this.hortsmash = 1
                                        this.leftshot = 0
                                    }
                                }
                            }
                        }
                        if (Math.abs(this.body.y - boys[t].body.y) < 35 && this.body.x < boys[t].body.x) {
                            if (this.face == 1) {
                                if (Math.abs(this.body.x - boys[t].body.x) < 170) {
                                    this.rightshot = 1
                                    if (Math.random() < .009) {
                                        this.hortsmash = 1
                                        this.rightshot = 0
                                    }
                                }
                            }
                        }
                    }


                    if (Math.abs(this.body.y - boys[t].body.y) < 50 && Math.abs(this.body.x - boys[t].body.x) < 200) {
                        if (boys[t].lefthand.fired > 14 || boys[t].righthand.fired > 14) {
                            if (this.body.x < boys[t].body.x) {
                                if (Math.random() < .4) {
                                    this.storeshield = 1
                                }
                            }
                        }
                    }
                }
            }

            this.safe = 0
            for (let t = 0; t < stage.bricks.length; t++) {
                if (stage.bricks[t].edgeleft.x < (this.body.x + (this.body.radius * 2.5)) && stage.bricks[t].edgeright.x > (this.body.x - (this.body.radius * 2.5))) {
                    if (Math.max(stage.bricks[t].edgeright.y, stage.bricks[t].edgeleft.y) > this.body.y) {
                        this.safe = 1
                        break
                    }
                }
            }

            if (this.safe == 0) {
                if (this.recovering == 1) {
                    this.downspike = 1
                }
            }

            this.breaks()
            this.righthand.fired--
            this.lefthand.fired--
            this.breaktimer--
            // if (gamepadAPI[this.controller].buttonsStatus.includes('RB') || keysPressed['o']) {

            if (Math.random() < .1) {
                this.storeshield = 0
            }
            for (let t = 0; t < boys.length; t++) {
                if (this != boys[t]) {
                    if (boys[t].righthand.fired > 14) {
                        if (this.body.x > boys[t].body.x) {
                            if (Math.random() < .94) {
                                this.storeshield = 1
                            }
                        }
                    }
                    if (boys[t].lefthand.fired > 14) {
                        if (this.body.x < boys[t].body.x) {
                            if (Math.random() < .94) {
                                this.storeshield = 1
                            }
                        }
                    }
                }
            }

            if (this.shieldpower < 10) {
                if (Math.random() < .95) {
                    this.storeshield = 0
                }
            }
            if (this.storeshield == 1) {
                if (this.breaktimer < 0) {
                    if (this.grounded == 1) {
                        this.shieldpower -= .63
                        this.shield = 1
                        let shild = new Circle(this.body.x, this.body.y, (Math.max((new LineOP(this.body, this.lefthand)).hypotenuse(), (new LineOP(this.body, this.righthand)).hypotenuse())) + this.lefthand.radius, this.body.color + Math.min(Math.round(this.shieldpower + 11), 99))
                        shild.draw()
                    }
                }
            } else {
                this.shield = 0
                this.shieldpower += .2
                if (this.shieldpower > 100) {
                    this.shieldpower = 100
                }
            }


            if (this.breaktimer <= 0 && this.shield == 0) {



                if (this.downspike == 1) {
                    if (this.lefthand.fired <= 0) {
                        if (this.righthand.fired <= 0) {
                            let shot = new Shot(this.body.x, this.body.y, 20, "#bbbbbb", 0, (this.speed * 1.9))
                            this.shots.push(shot)
                            if (this.body.ymom > -jumplimit) {
                                this.body.ymom -= 8
                                if (this.body.ymom < -jumplimit) {
                                    this.body.ymom = -jumplimit
                                }
                            } else {
                            }
                            this.lefthand.fired = 12
                            this.righthand.fired = 12
                        }
                    }
                }

                if (this.leftshot == 1 || this.rightshot == 1) {
                    if (this.face == 1) {
                        if (this.righthand.fired <= 0) {
                            if (this.righthand.anchored == 0) {
                                this.righthand.ymom = 0
                                this.righthand.xmom = this.punchspeed * 14
                                this.righthand.fired = 18
                            }
                        }
                    }
                    if (this.face == -1) {
                        if (this.lefthand.fired <= 0) {
                            if (this.lefthand.anchored == 0) {
                                this.lefthand.ymom = 0
                                this.lefthand.xmom = -this.punchspeed * 14
                                this.lefthand.fired = 18
                            }
                        }
                    }
                }


                if (this.screwshot == 1) {
                    if (this.righthand.fired <= 0) {
                        if (this.righthand.anchored == 0) {
                            this.righthand.ymom = -this.punchspeed * 14
                            this.righthand.xmom = this.punchspeed * 1
                            this.righthand.fired = 18
                        }
                    }
                    if (this.lefthand.fired <= 0) {
                        if (this.lefthand.anchored == 0) {
                            this.lefthand.ymom = -this.punchspeed * 14
                            this.lefthand.xmom = -this.punchspeed * 1
                            this.lefthand.fired = 18
                        }
                    }
                }

                if (this.hortsmash == 1) {
                    if (this.righthand.fired <= 0) {
                        if (this.righthand.anchored == 0) {
                            this.rightshoulder.xmom = 0
                            this.rightshoulder.ymom = 0
                            this.righthand.ymom = this.punchspeed * 14
                            this.righthand.xmom = this.punchspeed * 9
                            this.righthand.fired = 18
                        }
                    }
                    if (this.lefthand.fired <= 0) {
                        if (this.lefthand.anchored == 0) {
                            this.leftshoulder.xmom = 0
                            this.leftshoulder.ymom = 0
                            this.lefthand.ymom = this.punchspeed * 14
                            this.lefthand.xmom = -this.punchspeed * 9
                            this.lefthand.fired = 18
                        }
                    }
                }

            }
        }
        degripl() {
            this.body.sxmom = 0
            this.body.symom = 0

            if (this.lefthand.anchored == 1) {

                if (this.body.ymom > 0) {
                    this.body.ymom = 0
                }
                this.body.ymom -= this.speed
                this.lefthand.anchored = -10
                this.righthand.anchored = -10
                for (let t = 0; t < this.springs.length; t++) {
                    this.springs[t].balance()
                }
                for (let t = 0; t < this.nodes.length; t++) {
                    this.nodes[t].move()
                }
            }


        }
        degripr() {
            this.body.sxmom = 0
            this.body.symom = 0

            if (this.righthand.anchored == 1) {

                if (this.body.ymom > 0) {
                    this.body.ymom = 0
                }
                this.body.ymom -= this.speed
                this.lefthand.anchored = -10
                this.righthand.anchored = -10
                for (let t = 0; t < this.springs.length; t++) {
                    this.springs[t].balance()
                }
                for (let t = 0; t < this.nodes.length; t++) {
                    this.nodes[t].move()
                }
            }


        }
        collideStage() {
            for (let t = 0; t < stage.bricks.length; t++) {
                for (let k = 0; k < this.nodes.length; k++) {
                    stage.bricks[t].doesPerimeterTouch(this.nodes[k])
                }
            }
            this.fixupshoulder()
            //this.enemycollide()
        }
        draw() {


            if (this.righthand.anchored == 1) {
                if (this.body.x > this.righthand.x) {
                    this.righthand.anchored = -10
                }
            }
            if (this.lefthand.anchored == 1) {
                if (this.body.x < this.lefthand.x) {
                    this.lefthand.anchored = -10
                }
            }

            for (let t = 0; t < this.shots.length; t++) {
                this.shots[t].radius *= 1.02
                this.shots[t].ymom *= 1.02
                this.shots[t].move()
                this.shots[t].draw()
                if (this.shots[t].radius > 30) {
                    this.shots[t].marked = 1
                }
            }
            for (let t = 0; t < this.shots.length; t++) {
                if (this.shots[t].marked == 1) {
                    this.shots.splice(t, 1)
                }
            }
            if (this.lefthand.anchored != 1 && this.righthand.anchored != 1) {
                this.body.sxmom = 0
                this.body.symom = 0
            }
            // if (this.controller == 0) {

            if (this == boys[0]) {
                if (this.breaktimer < 0) {
                    gamepad_control_controller_proto(this.body, this.speed, this.controller)

                    if (this.righthand.anchored == 0) {
                        gamepad_control_controller_proto(this.righthand, this.speed, this.controller)
                    }
                    if (this.lefthand.anchored == 0) {
                        gamepad_control_controller_proto(this.lefthand, this.speed, this.controller)
                    }
                    this.doubleJump()
                }
            } else {
                if (this.breaktimer < 0) {
                    this.AImove(this.body, this.speed, this.controller)

                    if (this.righthand.anchored == 0) {
                        this.AImove(this.righthand, this.speed, this.controller)
                    }
                    if (this.lefthand.anchored == 0) {
                        this.AImove(this.lefthand, this.speed, this.controller)
                    }
                    this.doubleJump()
                }
            }
            // }

            if (this.lefthand.anchored == 1 || this.righthand.anchored == 1) {
                this.body.xmom *= .2
            }
            if (this.jumping == 1) {
                this.body.xmom *= .95
            }

            if (this.grounded == 0) {

                if (this.lefthand.anchored == 1) {
                    this.body.ymom *= .7
                    this.body.symom = this.leftshoulder.ymom * .99
                    this.body.sxmom = this.leftshoulder.xmom * .99
                } else if (this.righthand.anchored == 1) {
                    this.body.ymom *= .7
                    this.body.symom = this.rightshoulder.ymom * .99
                    this.body.sxmom = this.rightshoulder.xmom * .99
                } else {
                    // if (Math.abs(this.body.sxmom) < 5) {
                    //     this.body.sxmom *= .5
                    // }
                }
                this.body.ymom += this.gravity
            } else {

                this.jumpcount = 0
                this.jumping -= .5

                this.body.xmom *= .7

                if (this.body.ymom > 0) {
                    this.body.ymom = 0
                }
            }
            if (this.jumping < 0) {
                this.jumping = 0
            }
            this.grounded = 0
            if (this.lefthand.anchored <= -1) {
                this.lefthand.anchored++
            } else {
                //this.collideStage()
            }
            if (this.righthand.anchored <= -1) {
                this.righthand.anchored++
            } else {
                //this.collideStage()
            }
            this.righthand.ymom += this.gravity
            this.lefthand.ymom += this.gravity



            if (this.body.ymom < -vsmashlimit) {
                this.body.ymom = -vsmashlimit
            }
            if (this.body.ymom > vsmashlimit) {
                this.body.ymom = vsmashlimit
            }

            for (let t = 0; t < this.nodes.length; t++) {
                this.nodes[t].frictiveMove()
            }
            for (let t = 0; t < this.nodes.length; t++) {
                this.nodes[t].smove()
            }

            this.lefthand.xmom += (this.lefthand.x - this.body.x) / 80
            this.righthand.xmom += (this.righthand.x - this.body.x) / 80
            this.leftshoulder.xmom -= (this.leftshoulder.x - this.body.x) / 40
            this.rightshoulder.xmom -= (this.rightshoulder.x - this.body.x) / 40
            this.fixupshoulder()

            // this.leftshoulder.x = this.body.x - (this.body.radius + this.shoulderwidth)
            // this.leftshoulder.y = this.body.y

            // this.rightshoulder.x = this.body.x + (this.body.radius + this.shoulderwidth)
            // this.rightshoulder.y = this.body.y

            // this.leftshoulder.xmom *= 0
            // this.leftshoulder.ymom *= 0

            // this.rightshoulder.xmom *= 0
            // this.rightshoulder.ymom *= 0


            this.leftarm = new LineOP(this.leftshoulder, this.lefthand, invertColor(this.body.color), 8)
            this.rightarm = new LineOP(this.rightshoulder, this.righthand, invertColor(this.body.color), 8)

            this.collideStage()

            for (let t = 0; t < this.links.length; t++) {
                //this.collideStage()
                this.links[t].color = invertColor(this.body.color)
                this.links[t].draw()
            }
            for (let t = 0; t < this.nodes.length; t++) {
                //this.collideStage()
                this.nodes[t].draw()
            }
            for (let t = 0; t < this.springs.length; t++) {
                this.springs[t].beam.color = invertColor(this.body.color)
                this.springs[t].balance()
            }
            for (let t = 0; t < this.hitboxes.length; t++) {

            }
            // if (this.controller == 0) {
            let link = new Line(this.body.x, this.body.y, this.body.x + (((this.body.radius * .8) * this.face)), this.body.y, invertColor(this.body.color), this.body.radius * .2)

            canvas_context.lineWidth = 0
            canvas_context.strokeStyle = invertColor(this.body.color)
            canvas_context.beginPath();
            canvas_context.arc((link.x1 + link.x2) * .5, link.y1 - this.body.radius * .09, this.body.radius * .4, 0, (Math.PI * 1), true)
            canvas_context.fillStyle = invertColor(this.body.color)
            canvas_context.fill()
            // canvas_context.stroke();
            link.draw()
            if (this == boys[0]) {

                this.fightcontrol()
            } else {
                this.AI()
            }
            // }
            if (this.breaktimer > 0) {
                for (let t = 0; t < 5; t++) {
                    let spot = new Circle(this.body.x + ((Math.random() - .5) * this.body.radius * 2), this.body.y - (this.body.radius + 4), 3, "yellow")
                    spot.draw()
                }
            }

            canvas_context.font = "32px arial"
            canvas_context.fillStyle = `rgb(${255 - (this.damage / 10)},${255 - this.damage},${255 - this.damage})`
            canvas_context.fillText(`${Math.round(this.damage)}%`, this.body.x - 20, this.body.y - 60)


            // this.bodyx = this.body.x
        }
    }

    class Selector {
        constructor() {
            this.body = new Circle(400 + (selectors.length * 100), 400, 25, getRandomLightColor())
            this.num = selectors.length + 1
        }
        draw() {
            this.body.track()
            this.body.draw()
            canvas_context.font = "30px arial"
            canvas_context.fillStyle = `Black`
            canvas_context.fillText(this.num, this.body.x - (this.body.radius * .5), this.body.y + (this.body.radius * .5))
        }
    }


    class Mass {
        constructor(controller) {
            this.blasting = 0
            this.brick = new Brick(1, 1, 1, 1)
            this.dmomu = 0
            this.amomu = 0
            this.amom = 0
            this.dmom = 0
            this.fleeing = 0
            this.face = 0
            this.screwshot = 0
            this.rightshot = 0
            this.hortsmash = 0
            this.leftshot = 0
            this.downspike = 0
            this.storeshield = 0
            this.wasfalse = []
            for (let t = 0; t < 100; t++) {
                this.wasfalse.push(1)
            }
            this.shield = 0
            this.shieldpower = 100
            this.breaktimer = 0
            this.screwangle = 0
            this.charge = 0
            this.shots = []
            this.controller = controller
            this.armlength = 34  // 40
            this.shoulderwidth = 18
            this.damage = 0
            this.nodes = []
            this.springs = []
            this.hitboxes = []
            this.links = []
            this.speed = 11.5
            this.punchspeed = 5.7 // 5
            this.grounded = 0
            this.jumping = 1


            this.color = getRandomColor()
            if (controller == 0) {
                this.color = "#ffAA00"
            }
            if (controller == 1) {
                this.color = "#ff0000"
            }
            this.body = new Shot(700 + ((boys.length * 1200) % 2260), 500, 35, this.color)
            this.nodes.push(this.body)
            this.leftshoulder = new Shot(this.body.x - (this.body.radius + this.shoulderwidth), 350, 10, "magenta", 0, 0, .999)
            this.rightshoulder = new Shot(this.body.x + (this.body.radius + this.shoulderwidth), 350, 10, "red", 0, 0, .999)
            this.lefthand = new Shot(this.leftshoulder.x, (this.leftshoulder.y + this.armlength), 19, "magenta", 0, 0, .85)
            this.righthand = new Shot(this.rightshoulder.x, (this.rightshoulder.y + this.armlength), 19, "red", 0, 0, .85)
            this.nodes.push(this.leftshoulder)
            this.nodes.push(this.rightshoulder)
            this.nodes.push(this.righthand)
            this.nodes.push(this.lefthand)
            this.leftcollar = new LineOP(this.leftshoulder, this.body, this.body.color, 8)
            this.rightcollar = new LineOP(this.rightshoulder, this.body, this.body.color, 8)
            this.links.push(this.leftcollar)
            this.links.push(this.rightcollar)
            this.leftarm = new LineOP(this.leftshoulder, this.lefthand, invertColor(this.body.color), 8)
            this.rightarm = new LineOP(this.rightshoulder, this.righthand, invertColor(this.body.color), 8)
            this.links.push(this.leftarm)
            this.links.push(this.rightarm)
            this.leftarm = new SpringOP(this.leftshoulder, this.lefthand, this.armlength, 8)
            this.rightarm = new SpringOP(this.rightshoulder, this.righthand, this.armlength, 8)
            this.springs.push(this.leftarm)
            this.springs.push(this.rightarm)
            this.gravity = 1
            this.righthand.fired = 0
            this.lefthand.fired = 0
            this.body.fired = 0
            this.screwmomentum = 0
            this.screwtimer = 0
            for (let t = 0; t < this.nodes.length; t++) {
                this.nodes[t].self = this // lmao
            }
        }
        copy() {
            let copy = new Mass(this.controller)
            copy.body.color = this.body.color
            return copy
        }
        control() {
            gamepad_control_controller_proto(this.center, this.speed + (this.speed * (this.grounded * .5)), this.controller)
        }
        fixupshoulder() {

            for (let t = 0; t < stage.bricks.length; t++) {
                if (stage.bricks[t].edgeleft.x < this.body.x && stage.bricks[t].edgeright.x > this.body.x) {
                    if (this.brick.edgeleft.x < this.body.x && this.brick.edgeright.x > this.body.x) {
                        if (Math.max(this.brick.edgeright.y, this.brick.edgeleft.y) > Math.max(stage.bricks[t].edgeright.y, stage.bricks[t].edgeleft.y)) {
                            if (this.body.y < Math.max(stage.bricks[t].edgeright.y, stage.bricks[t].edgeleft.y)) {
                                this.brick = stage.bricks[t]
                            }
                        }
                    } else {
                        this.brick = stage.bricks[t]
                    }
                }
            }

            if (this.screwangle != 0) {

                this.leftshoulder.x = this.body.x + ((((this.body.radius + this.shoulderwidth) * (Math.cos(this.screwangle)))))
                this.leftshoulder.y = this.body.y + (((this.body.radius + this.shoulderwidth) * (Math.sin(this.screwangle))))

                this.rightshoulder.x = this.body.x + (((this.body.radius + this.shoulderwidth) * (Math.cos(this.screwangle))))
                this.rightshoulder.y = this.body.y + (((this.body.radius + this.shoulderwidth) * (Math.sin(this.screwangle))))

                this.leftshoulder.color = this.body.color
                this.rightshoulder.color = this.body.color
                this.lefthand.color = this.body.color
                this.righthand.color = this.body.color


                if (this.lefthand.anchored == 0) {
                    this.lefthand.x = this.lefthand.x + (this.leftshoulder.x - (this.body.x + (((this.body.radius + this.shoulderwidth) * (Math.cos(this.screwangle))))))
                    this.lefthand.y -= this.leftshoulder.y - (this.body.y + (((this.body.radius + this.shoulderwidth) * (Math.sin(this.screwangle)))))
                    // this.lefthand.xmom *=  this.lefthand.friction
                    // this.lefthand.ymom *=  this.lefthand.friction
                    this.leftshoulder.xmom *= 0
                    this.leftshoulder.ymom *= 0
                }
                if (this.righthand.anchored == 0) {
                    this.righthand.x = this.righthand.x + (this.rightshoulder.x - (this.body.x + (((this.body.radius + this.shoulderwidth) * (Math.cos(this.screwangle))))))
                    this.righthand.y -= this.rightshoulder.y - (this.body.y + (((this.body.radius + this.shoulderwidth) * (Math.sin(this.screwangle)))))
                    // this.righthand.xmom *=  this.righthand.friction
                    // this.righthand.ymom *=  this.righthand.friction
                    this.rightshoulder.xmom *= 0
                    this.rightshoulder.ymom *= 0
                }

                if (this.body.ymom < -vsmashlimit) {
                    this.body.ymom = -vsmashlimit
                }
                if (this.body.ymom > vsmashlimit) {
                    this.body.ymom = vsmashlimit
                }


                // this.lefthand.xmom += (this.lefthand.x - this.body.x) / 100
                // this.righthand.xmom += (this.righthand.x - this.body.x) / 100

                // this.lefthand.ymom += (this.lefthand.y - this.body.y) / 100
                // this.righthand.ymom += (this.righthand.y - this.body.y) / 100


            } else {
                this.leftshoulder.x = this.body.x - (this.body.radius + this.shoulderwidth * .3)
                this.leftshoulder.y = this.body.y - (this.shoulderwidth * .7)

                this.rightshoulder.x = this.body.x + (this.body.radius + this.shoulderwidth * .3)
                this.rightshoulder.y = this.body.y - (this.shoulderwidth * .7)

                this.leftshoulder.color = this.body.color
                this.rightshoulder.color = this.body.color
                this.lefthand.color = this.body.color
                this.righthand.color = this.body.color


                if (this.lefthand.anchored == 0) {
                    this.lefthand.x = this.lefthand.x + (this.leftshoulder.x - (this.body.x - (this.body.radius + this.shoulderwidth * .3)))
                    this.lefthand.y -= this.leftshoulder.y - (this.body.y - (this.shoulderwidth * .7))
                    this.leftshoulder.xmom *= 0
                    this.leftshoulder.ymom *= 0
                }
                if (this.righthand.anchored == 0) {
                    this.righthand.x = this.righthand.x + (this.rightshoulder.x - (this.body.x + (this.body.radius + this.shoulderwidth * .3)))
                    this.righthand.y -= this.rightshoulder.y - (this.body.y - (this.shoulderwidth * .7))
                    this.rightshoulder.xmom *= 0
                    this.rightshoulder.ymom *= 0
                }

                if (this.body.ymom < -vsmashlimit) {
                    this.body.ymom = -vsmashlimit
                }



            }


            // this.leftshoulder.x = this.body.x - (this.body.radius + this.shoulderwidth)
            // this.leftshoulder.y = this.body.y

            // this.rightshoulder.x = this.body.x + (this.body.radius + this.shoulderwidth)
            // this.rightshoulder.y = this.body.y

        }
        enemycollide() {


            for (let f = 0; f < boys.length; f++) {
                if (this != boys[f]) {

                    for (let t = 0; t < boys.length; t++) {
                        if (this != boys[t]) {
                            for (let k = 0; k < boys[t].shots.length; k++) {
                                if (boys[t].shots[k].marked != 1) {
                                    if (boys[t].shots[k].doesPerimeterTouch(this.body)) {
                                        if (this.shield == 1) {
                                            this.shieldpower -= (Math.abs(boys[t].shots[k].xmom) + Math.abs(boys[t].shots[k].ymom)) / 3
                                        } else {
                                            this.body.xmom = ((boys[t].shots[k].xmom * (this.damage / 200)) + (boys[t].shots[k].xmom * baselaunch)) * 2
                                            this.body.ymom = (((boys[t].shots[k].ymom * (this.damage / 200)) + (boys[t].shots[k].ymom * baselaunch)) * 2) - (10 * (this.damage / 200))
                                            this.damage += (Math.abs(boys[t].shots[k].xmom) + Math.abs(boys[t].shots[k].ymom)) / 2
                                            this.breaktimer = 0
                                        }
                                        boys[t].shots[k].marked = 1
                                    }
                                }
                            }
                            boys[t].lefthands = castBetween(boys[t].leftshoulder, boys[t].lefthand, 20, boys[t].leftshoulder.radius)
                            boys[t].righthands = castBetween(boys[t].rightshoulder, boys[t].righthand, 20, boys[t].rightshoulder.radius)
                            if (boys[t].righthands.doesPerimeterTouch(this.body) || boys[t].righthand.doesPerimeterTouch(this.body)) {
                                if (boys[t].righthand.fired > 14) {
                                    if (this.shield == 1) {
                                        this.shieldpower -= (Math.abs(boys[t].righthand.xmom) + Math.abs(boys[t].righthand.ymom)) / 11
                                    } else {
                                        this.body.xmom = ((boys[t].righthand.xmom * (this.damage / 200)) + (boys[t].righthand.xmom * baselaunch)) * Math.max((1 + (boys[t].blasting / 40)), 1)
                                        this.body.ymom = (((boys[t].righthand.ymom * (this.damage / 200)) + (boys[t].righthand.ymom * baselaunch)) * 1) * Math.max((1 + (boys[t].blasting / 40)), 1)
                                        this.damage += ((Math.abs(boys[t].righthand.xmom) + Math.abs(boys[t].righthand.ymom)) / 7) * Math.max((1 + (boys[t].blasting / 40)), 1)
                                        this.breaktimer = 0
                                    }
                                    boys[t].righthand.fired = 14

                                    if (this.righthand.anchored == 1 || this.lefthand.anchored == 1) {
                                        this.lefthand.anchored = -40
                                        this.righthand.anchored = -40
                                    }
                                    if (this.body.ymom < -vsmashlimit) {
                                        this.body.ymom = -vsmashlimit
                                    }
                                    if (this.body.ymom > vsmashlimit) {
                                        this.body.ymom = vsmashlimit
                                    }
                                    this.body.move()
                                    this.fixupshoulder()

                                }
                            } else if (boys[t].lefthands.doesPerimeterTouch(this.body) || boys[t].lefthand.doesPerimeterTouch(this.body)) {
                                if (boys[t].lefthand.fired > 14) {

                                    if (this.shield == 1) {
                                        this.shieldpower -= (Math.abs(boys[t].lefthand.xmom) + Math.abs(boys[t].lefthand.ymom)) / 11
                                    } else {
                                        this.body.xmom = (boys[t].lefthand.xmom * (this.damage / 200)) + (boys[t].lefthand.xmom * baselaunch)
                                        this.body.ymom = (((boys[t].lefthand.ymom * (this.damage / 200)) + (boys[t].lefthand.ymom * baselaunch)) * 1)
                                        this.damage += (Math.abs(boys[t].lefthand.xmom) + Math.abs(boys[t].lefthand.ymom)) / 11
                                        this.breaktimer = 0
                                    }
                                    boys[t].lefthand.fired = 14
                                    if (this.righthand.anchored == 1 || this.lefthand.anchored == 1) {
                                        this.lefthand.anchored = -40
                                        this.righthand.anchored = -40
                                    }
                                    if (this.body.ymom < -vsmashlimit) {
                                        this.body.ymom = -vsmashlimit
                                    }
                                    if (this.body.ymom > vsmashlimit) {
                                        this.body.ymom = vsmashlimit
                                    }
                                    this.body.move()
                                    this.fixupshoulder()
                                }
                            }
                            if (boys[t].screwangle != 0 && boys[t].body.doesPerimeterTouch(this.body)) {
                                if (boys[t].body.fired > 14) {
                                    if (this.shield == 1) {
                                        this.shieldpower -= (Math.abs(boys[t].body.xmom) + Math.max(20, Math.abs(boys[t].body.ymom))) / 3
                                    } else {
                                        this.body.xmom = (boys[t].body.xmom * (this.damage / 200)) + (boys[t].body.xmom * baselaunch) * 2
                                        this.body.ymom = (((boys[t].body.ymom * (this.damage / 200)) + (boys[t].body.ymom * baselaunch)) * 2)
                                        this.damage += (Math.abs(boys[t].body.xmom) + Math.max(20, Math.abs(boys[t].body.ymom))) / 2
                                        this.breaktimer = 0
                                    }
                                    boys[t].body.fired = 14
                                    if (this.righthand.anchored == 1 || this.lefthand.anchored == 1) {
                                        this.lefthand.anchored = -40
                                        this.righthand.anchored = -40
                                    }
                                    if (this.body.ymom < -vsmashlimit) {
                                        this.body.ymom = -vsmashlimit
                                    }
                                    if (this.body.ymom > vsmashlimit) {
                                        this.body.ymom = vsmashlimit
                                    }
                                    this.body.move()
                                    this.fixupshoulder()
                                }
                            }
                        }
                    }


                    while (boys[f].body.doesPerimeterTouch(this.body)) {
                        if (this.body.x > boys[f].body.x) {
                            this.body.x += .5
                            boys[f].body.x -= .5
                            this.fixupshoulder()
                            boys[f].fixupshoulder()
                            this.body.ymom *= .99
                        } else {
                            this.body.x -= .5
                            boys[f].body.x += .5
                            this.fixupshoulder()
                            boys[f].fixupshoulder()
                            this.body.ymom *= .99
                        }

                    }


                    // while (boys[t].rightshoulder.reversePointinside(this.leftshoulder) || boys[t].rightshoulder.reversePointinside(this.body)) {
                    //     this.body.x += .5
                    //     boys[t].body.x -= .5
                    //     this.fixupshoulder()
                    //     boys[t].fixupshoulder()
                    //     this.righthand.x += .5
                    //     this.lefthand.x += .5
                    //     boys[t].lefthand.x -= .5
                    //     boys[t].righthand.x -= .5
                    // }
                    // while (boys[t].leftshoulder.reversePointinside(this.rightshoulder) || boys[t].leftshoulder.reversePointinside(this.body)) {
                    //     this.body.x -= .5
                    //     boys[t].body.x += .5
                    //     this.fixupshoulder()
                    //     boys[t].fixupshoulder()
                    //     this.righthand.x -= .5
                    //     this.lefthand.x -= .5
                    //     boys[t].lefthand.x += .5
                    //     boys[t].righthand.x += .5
                    // }
                }
            }

        }
        AIarmControl() {
            if (this.wmove == 1) {
                this.jumping = 1
                this.body.ymom = -this.speed * 2
                this.lefthand.ymom = -this.speed * 2
                this.righthand.ymom = -this.speed * 2
                this.jumpcount = 100

            }
        }
        doubleJump() {
            this.jumpcount--
            if (this.jumpcount <= -20) {
                if (this == boys[0]) {
                    gamepad_control_controller_proto_dj(this.body, this.speed, this.controller)
                } else {
                    this.AIarmControl()
                }
            }
        }
        breaks() {

            if (this.shield == 1) {
                if (this.shieldpower <= 0) {
                    this.breaktimer = 200
                    this.shieldpower = 1
                    this.shield = 0
                }
            }
        }

        AImove(object, speed, controller) {
            if (object == this.body) {
                this.amom--
                this.dmom--
                this.dmomu--
                this.amomu--
            }
            this.wmove = 0
            this.amove = 0
            this.dmove = 0
            if (Math.random() < .0015) {
                this.fleeing = 1
            }
            if (this.charge > 90) {
                this.fleeing = 0
            }
            if (Math.random() < .05) {
                this.fleeing = 0
            }

            this.safe = 0
            for (let t = 0; t < stage.bricks.length; t++) {
                if (stage.bricks[t].edgeleft.x < this.body.x && stage.bricks[t].edgeright.x > this.body.x) {
                    if (Math.max(stage.bricks[t].edgeright.y, stage.bricks[t].edgeleft.y) > this.body.y) {
                        this.safe = 1
                        break
                    }
                }
            }
            if (this.safe == 0) {
                if (Math.random() < .5) {
                    if (this.dmove == 1) {
                        this.amove = 1
                        this.dmove = 0
                    } else if (this.amove == 1) {
                        this.amove = 0
                        this.dmove = 1
                    }
                } else {
                    if (this.amove == 1) {
                        this.amove = 0
                        this.dmove = 1
                    } else if (this.dmove == 1) {
                        this.amove = 1
                        this.dmove = 0
                    }
                }
                this.fleeing = 0
            } else {

            }

            for (let t = 0; t < boys.length; t++) {
                if (this != boys[t]) {
                    if (Math.abs(this.body.x - boys[t].body.x) > 1 && this.body.y > (boys[t].body.y + 15)) {
                        this.wmove = 1
                    }

                    if (this.fleeing == 0) {
                        if (Math.abs(this.body.x - boys[t].body.x) > (this.body.radius * 4) && this.body.x > (boys[t].body.x + 5)) {
                            this.amove = 1
                        } else if (Math.abs(this.body.x - boys[t].body.x) > (this.body.radius * 4) && this.body.x < (boys[t].body.x + 5)) {
                            this.dmove = 1
                        }
                    } else {
                        if (Math.abs(this.body.x - boys[t].body.x) > (this.body.radius * 4) && this.body.x > (boys[t].body.x + 5)) {
                            this.dmove = 1
                        } else if (Math.abs(this.body.x - boys[t].body.x) > (this.body.radius * 4) && this.body.x < (boys[t].body.x + 5)) {
                            this.amove = 1
                        }
                    }


                    if (this.righthand.anchored == 1 || this.lefthand.anchored == 1) {
                        if (Math.random() < .2) {
                            this.wmove = 1
                        }
                        if (Math.random() < .1) {
                            this.dmove = 1
                        }
                        if (Math.random() < .1) {
                            this.amove = 1
                        }
                    }
                }
            }

            this.safe = 0
            for (let t = 0; t < stage.bricks.length; t++) {
                if (stage.bricks[t].edgeleft.x < (this.body.x + this.body.radius) && stage.bricks[t].edgeright.x > (this.body.x - this.body.radius)) {
                    if (Math.max(stage.bricks[t].edgeright.y, stage.bricks[t].edgeleft.y) > this.body.y) {
                        this.safe = 1
                        break
                    }
                }
            }

            this.under = 0
            for (let k = 0; k < boys.length; k++) {
                if (this != boys[k]) {
                    for (let t = 0; t < stage.bricks.length; t++) {
                        if (stage.bricks[t].edgeleft.x < (this.body.x + (this.body.radius * 1.6)) && stage.bricks[t].edgeright.x > (this.body.x - (this.body.radius * 1.6))) {
                            if (Math.max(stage.bricks[t].edgeright.y, stage.bricks[t].edgeleft.y) < this.body.y) {
                                if (boys[k].brick == stage.bricks[t]) {
                                    this.under = 1
                                }
                                if (Math.abs(this.body.x - Math.max(stage.bricks[t].edgeright.x)) < Math.abs(this.body.x - Math.max(stage.bricks[t].edgeleft.x))) {
                                    if (boys[k].body.x < this.body.x) {
                                        if ((boys[k].body.y - (boys[k].body.radius * 1.5)) < Math.max(stage.bricks[t].edgeright.y, stage.bricks[t].edgeleft.y)) {
                                            if (this.body.x - (this.body.radius * 1.2) <= stage.bricks[t].edgeright.x) {
                                                if (this.grounded == 1 || this.jumping == 1) {
                                                    if (boys[k].brick == stage.bricks[t]) {
                                                        this.under = 2
                                                    }
                                                }
                                            }
                                        }
                                    }
                                } else if (Math.abs(this.body.x - Math.max(stage.bricks[t].edgeright.x)) > Math.abs(this.body.x - Math.max(stage.bricks[t].edgeleft.x))) {
                                    if (boys[k].body.x > this.body.x) {
                                        if ((boys[k].body.y - (boys[k].body.radius * 1.5)) < Math.max(stage.bricks[t].edgeright.y, stage.bricks[t].edgeleft.y)) {
                                            if (this.body.x + (this.body.radius * 1.2) >= stage.bricks[t].edgeleft.x) {
                                                if (this.grounded == 1 || this.jumping == 1) {
                                                    if (boys[k].brick == stage.bricks[t]) {
                                                        this.under = 3
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                                if (this.under !== 0) {
                                    if (this.under == 2) {
                                        // this.screwshot = 1
                                        this.amove = 0
                                        this.dmom = 100
                                        this.amom = 0
                                        this.dmove = 1
                                        this.wmove = 1
                                    }
                                    if (this.under == 3) {
                                        // this.screwshot = 1
                                        this.amove = 1
                                        this.amom = 100
                                        this.dmom = 0
                                        this.dmove = 0
                                        this.wmove = 1
                                    }
                                }

                                break
                            }
                        }
                    }
                }
            }

            for (let t = 0; t < boys.length; t++) {
                if (this != boys[t]) {
                    if (Math.max(boys[t].brick.edgeleft.y, boys[t].brick.edgeright.y) > Math.max(this.brick.edgeleft.y, this.brick.edgeright.y)) {
                        if (this.safe == 1) {
                            if (this.dmomu <= 0 && this.amomu <= 0) {
                                if (this.righthand.anchored != 1 && this.lefthand.anchored != 1) {
                                    if (boys[t].body.x < this.body.x) {
                                        if ((this.brick.edgeright.x > this.body.x - this.body.radius)) {
                                            this.amomu = (Math.abs(this.brick.edgeright.x - this.body.x)) / this.speed
                                            this.amomu += 25
                                        }
                                    } else {
                                        if ((this.brick.edgeleft.x < this.body.x + this.body.radius)) {
                                            this.dmomu = (Math.abs(this.brick.edgeleft.x - this.body.x)) / this.speed
                                            this.dmomu += 25
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }


            if (this.dmom > 0) {
                if (Math.random() < .003) {
                    this.screwshot = 1
                }
                this.dmove = 1
                this.wmove = 1
                this.amomu = 0
                this.dmomu = 0
            }
            if (this.amom > 0) {
                if (Math.random() < .003) {
                    this.screwshot = 1
                }
                this.amove = 1
                this.wmove = 1
                this.amomu = 0
                this.dmomu = 0
            }

            if (this.dmomu > 0) {
                this.dmove = 1
                this.amove = 0
                this.amomu = 0
                this.screwshot = 0
                this.wmove = 0
            }
            if (this.amomu > 0) {
                this.amove = 1
                this.dmove = 0
                this.dmomu = 0
                this.screwshot = 0
                this.wmove = 0
            }

            if (this.safe == 0) {
                this.screwshot = 1
                if (this.body.x > (1280 * (invscale * .5))) {
                    this.amove = 1
                    this.dmove = 0
                    this.wmove = 1
                    this.amomu = 0
                    this.dmomu = 0
                } else {
                    this.amove = 0
                    this.dmove = 1
                    this.wmove = 1
                    this.amomu = 0
                    this.dmomu = 0
                }
                this.fleeing = 0
            } else {

            }

            if (this.shield == 0) {

                if (this.dmove == 0 && this.amove == 0) {
                    if (Math.random() < .5) {
                        this.dmove = 1
                    } else {
                        this.amove = 1
                    }
                }
                if (this.wmove == 1) {
                    if (this.grounded == 1) {
                        this.jumping = 1
                        object.ymom -= speed
                    } else {
                        if (this.lefthand.anchored == 1) {
                            this.degripl()
                            this.jumping = 1
                            object.ymom -= speed
                        }
                        if (this.righthand.anchored == 1) {
                            this.degripr()
                            this.jumping = 1
                            object.ymom -= speed
                        }
                    }
                }
                if (this.dmove == 1) {
                    this.face = 1
                    if (object == this.body) {
                        object.x += speed
                        this.righthand.x += speed
                        this.lefthand.x += speed
                    }
                    if (this.righthand.anchored == 1) {
                        this.degripr()
                        this.jumping = 1
                    }
                }
                // if (keysPressed['s']) {
                //     object.y += speed
                //     this.degrip()
                // }
                if (this.amove == 1) {
                    this.face = -1
                    if (object == this.body) {
                        object.x -= speed
                        this.righthand.x -= speed
                        this.lefthand.x -= speed
                    }
                    if (this.righthand.anchored == 1 || this.lefthand.anchored == 1) {
                        this.degripl()
                        this.jumping = 1
                    }
                }


                // if (typeof (gamepadAPI[controller].axesStatus[1]) != 'undefined') {
                // if (gamepadAPI[controller].axesStatus[0] > .1) {
                //     this.face = 1
                // }

                // if (gamepadAPI[controller].axesStatus[1] < -.1) {
                //     this.face = -1
                // }
                // }

            }
            // if (this.dmomu > 0 || this.amomu > 0) {
            //     this.lefthand.anchored = 0
            //     this.righthand.anchored = 0
            // }

        }
        AI() {
            this.breaks()
            for (let t = 0; t < this.shots.length; t++) {
                this.shots[t].move()
                this.shots[t].draw()
            }
            for (let t = 0; t < this.shots.length; t++) {
                if (this.shots[t].marked == 1) {
                    this.shots.splice(t, 1)
                }
            }

            if (this.screwtimer > 0) {
                this.screwtimer--
                this.screwangle += this.screwmomentum
            } else {
                this.screwtimer = 0
                this.screwangle = 0
            }


            this.righthand.fired--
            this.body.fired--
            this.lefthand.fired--

            this.breaktimer--
            // if (gamepadAPI[this.controller].buttonsStatus.includes('RB') || keysPressed['o']) {

            if (Math.random() < .1) {
                this.storeshield = 0
            }
            if (Math.random() < .5) {
                this.screwshot = 0
            }
            if (Math.random() < .01 || this.charge == 0) {
                this.rightshot = 0
            }
            if (Math.random() < .01 || this.charge == 0) {
                this.leftshot = 0
            }
            if (Math.random() < .1) {
                this.downspike = 0
            }
            if (Math.random() < .1) {
                this.hortsmash = 0
            }
            for (let t = 0; t < boys.length; t++) {
                if (this != boys[t]) {

                    if (Math.abs(this.body.x - boys[t].body.x) < 50 && this.body.y < boys[t].body.y) {
                        this.downspike = 1
                    } else if (Math.abs(this.body.x - boys[t].body.x) < 150 && this.body.y <= boys[t].body.y && (boys[t].righthand.anchored == 1 || boys[t].lefthand.anchored == 1)) {
                        this.hortsmash = 1
                    }
                    if (Math.abs(this.body.x - boys[t].body.x) < 70 && this.body.y > boys[t].body.y) {
                        this.screwshot = 1
                    }




                    if (Math.abs(this.body.x - boys[t].body.x) < 240) {
                        if (this.body.x > boys[t].body.x) {
                            if (this.face == 1) {
                                this.hortsmash = 1
                            }
                        }
                        if (this.body.x < boys[t].body.x) {
                            if (this.face == -1) {
                                this.hortsmash = 1
                            }
                        }
                    }

                    if (boys[t].righthand.fired > 14) {
                        if (this.body.x > boys[t].body.x) {
                            if (Math.random() < .09) {
                                this.storeshield = 1
                            }
                        }
                    }
                    if (this.screwshot + this.hortsmash + this.downspike + this.storeshield == 0) {
                        if (Math.abs(this.body.y - boys[t].body.y) < 35 && this.body.x > boys[t].body.x) {
                            if (this.face == -1) {
                                this.leftshot = 1
                                if (Math.abs(this.body.x - boys[t].body.x) < 170) {
                                    if (Math.random() < .009) {
                                        this.hortsmash = 1
                                        this.leftshot = 0
                                    }
                                }
                            }
                        }
                        if (Math.abs(this.body.y - boys[t].body.y) < 35 && this.body.x < boys[t].body.x) {
                            if (this.face == 1) {
                                this.rightshot = 1
                                if (Math.abs(this.body.x - boys[t].body.x) < 170) {
                                    if (Math.random() < .009) {
                                        this.hortsmash = 1
                                        this.rightshot = 0
                                    }
                                }
                            }
                        }
                    }


                    if (Math.abs(this.body.y - boys[t].body.y) < 50 && Math.abs(this.body.x - boys[t].body.x) < 200) {
                        if (boys[t].lefthand.fired > 14 || boys[t].righthand.fired > 14) {
                            if (this.body.x < boys[t].body.x) {
                                if (Math.random() < .4) {
                                    this.storeshield = 1
                                }
                            }
                        }
                    }
                }
            }

            this.safe = 0
            for (let t = 0; t < stage.bricks.length; t++) {
                if (stage.bricks[t].edgeleft.x < (this.body.x + (this.body.radius * 2.5)) && stage.bricks[t].edgeright.x > (this.body.x - (this.body.radius * 2.5))) {
                    if (Math.max(stage.bricks[t].edgeright.y, stage.bricks[t].edgeleft.y) > this.body.y) {
                        this.safe = 1
                        break
                    }
                }
            }

            if (this.safe == 0) {
                this.screwshot = 1
            }

            if (this.shieldpower < 10) {
                if (Math.random() < .95) {
                    this.storeshield = 0
                }
            }
            if (this.storeshield == 1) {
                if (this.breaktimer < 0) {
                    if (this.grounded == 1) {
                        this.shieldpower -= .63
                        this.shield = 1
                        let shild = new Circle(this.body.x, this.body.y, (Math.max((new LineOP(this.body, this.lefthand)).hypotenuse(), (new LineOP(this.body, this.righthand)).hypotenuse())) + this.lefthand.radius, this.body.color + Math.min(Math.round(this.shieldpower + 10), 99))
                        shild.draw()
                    }
                }
            } else {
                this.shield = 0
                this.shieldpower += .2
                if (this.shieldpower > 100) {
                    this.shieldpower = 100
                }
            }

            if (this.breaktimer <= 0 && this.shield == 0) {

                if (this.screwshot == 1) {
                    if (this.body.fired <= 0) {
                        this.screwmomentum = Math.PI / 5
                        this.screwtimer = 30
                        this.jumping = 1
                        this.lefthand.fired = 30
                        this.righthand.fired = 30
                        // this.degripr()
                        // this.degripl()
                        this.body.fired = 40
                        this.lefthand.anchored = -10
                        this.righthand.anchored = -10
                        this.body.ymom = -jumplimit //-this.speed * 3
                    }
                }
                if (this.downspike == 1) {
                    if (this.righthand.fired <= 0) {
                        if (this.righthand.anchored == 0) {
                            this.rightshoulder.xmom = 0
                            this.rightshoulder.ymom = 0
                            this.lefthand.ymom = (this.punchspeed * 12) //+ this.body.ymom
                            this.lefthand.xmom = -(this.punchspeed * 2.1) //+ this.body.xmom
                            this.righthand.fired = 18
                        }
                    }
                    if (this.lefthand.fired <= 0) {
                        if (this.lefthand.anchored == 0) {
                            this.leftshoulder.xmom = 0
                            this.leftshoulder.ymom = 0
                            this.lefthand.ymom = (this.punchspeed * 12) //+ this.body.ymom
                            this.lefthand.xmom = (this.punchspeed * 2.1) //+ this.body.xmom
                            this.lefthand.fired = 18
                        }
                    }
                }
                if (this.hortsmash == 1) {
                    if (this.righthand.fired <= 0) {
                        if (this.righthand.anchored == 0) {
                            this.fleeing = 0
                            this.rightshoulder.xmom = 0
                            this.rightshoulder.ymom = 0
                            this.righthand.ymom = (this.punchspeed * 5) //+ this.body.ymom
                            this.righthand.xmom = (this.punchspeed * 11.1) //+ this.body.xmom
                            this.righthand.fired = 18
                        }
                    }
                    if (this.lefthand.fired <= 0) {
                        if (this.lefthand.anchored == 0) {
                            this.fleeing = 0
                            this.leftshoulder.xmom = 0
                            this.leftshoulder.ymom = 0
                            this.righthand.ymom = (this.punchspeed * 5) //+ this.body.ymom
                            this.righthand.xmom = -(this.punchspeed * 11.1) //+ this.body.xmom
                            this.lefthand.fired = 18
                        }
                    }
                }

                if (this.righthand.fired <= 0) {
                    if (this.righthand.anchored == 0) {
                        if (this.rightshot == 1) {
                            if (this.face == 1) {
                                let shot = new Shot(this.righthand.x, this.righthand.y, this.charge * .66, "#00FFFF", this.speed * 2, 0)
                                if (this.charge > 80) {
                                    shot.color = "#88FFFF"
                                }
                                // if(this.wasfalse[1] == 0){
                                if (this.charge >= 100) {
                                    this.charge = 0
                                    this.righthand.xmom = 10
                                    this.righthand.ymom = 0
                                    this.shots.push(shot)
                                    if (this.grounded != 1) {
                                        this.body.xmom -= 5
                                    }
                                }
                                if (this.righthand.anchored == 0) {
                                    this.righthand.xmom += 1
                                    this.righthand.ymom -= 1
                                    this.charge += 3.5
                                }
                                shot.draw()
                            }
                        }
                        if (this.leftshot == 1) {
                            if (this.face == -1) {
                                if (this.lefthand.anchored == 0) {
                                    let shot = new Shot(this.lefthand.x, this.lefthand.y, this.charge * .66, "#00FFFF", -this.speed * 2, 0)
                                    if (this.charge > 80) {
                                        shot.color = "#88FFFF"
                                    }
                                    if (this.charge >= 100) {
                                        this.charge = 0
                                        this.lefthand.xmom = -10
                                        this.lefthand.ymom = 0
                                        this.shots.push(shot)
                                        if (this.grounded != 1) {
                                            this.body.xmom += 5
                                        }
                                    }
                                    if (this.lefthand.anchored == 0) {
                                        this.lefthand.xmom -= 1
                                        this.lefthand.ymom -= 1
                                        this.charge += 3.5
                                    }
                                    shot.draw()

                                }
                            }
                        }
                    }
                }

            }

        }
        fightcontrol() {
            this.breaks()



            for (let t = 0; t < this.shots.length; t++) {
                this.shots[t].move()
                this.shots[t].draw()
            }
            for (let t = 0; t < this.shots.length; t++) {
                if (this.shots[t].marked == 1) {
                    this.shots.splice(t, 1)
                }
            }

            if (this.screwtimer > 0) {
                this.screwtimer--
                this.screwangle += this.screwmomentum
            } else {
                this.screwtimer = 0
                this.screwangle = 0
            }


            this.righthand.fired--
            this.body.fired--
            this.lefthand.fired--

            this.breaktimer--
            if (gamepadAPI[this.controller].buttonsStatus.includes('RB') || keysPressed['o']) {
                if (this.breaktimer < 0) {
                    if (this.grounded !== 0) {
                        // if(this.wasfalse.includes(0)){
                        // }else{
                        this.shieldpower -= .63
                        this.shield = 1
                        let shild = new Circle(this.body.x, this.body.y, (Math.max((new LineOP(this.body, this.lefthand)).hypotenuse(), (new LineOP(this.body, this.righthand)).hypotenuse())) + this.lefthand.radius, this.body.color + Math.min(Math.round(this.shieldpower + 10), 99))
                        shild.draw()
                        // }
                    }
                }
            } else {
                this.shield = 0
                this.shieldpower += .2
                if (this.shieldpower > 100) {
                    this.shieldpower = 100
                }
            }



            if (this.breaktimer <= 0 && this.shield == 0) {

                if (this.righthand.fired <= 0) {
                    if (gamepadAPI[this.controller].buttonsStatus.includes('B') || keysPressed['l']) {

                        if (this.face == 1) {
                            if (this.righthand.anchored == 0) {
                                let shot = new Shot(this.righthand.x, this.righthand.y, this.charge * .66, "#00FFFF", this.speed * 2, 0)
                                if (this.charge > 80) {
                                    shot.color = "#88FFFF"
                                }
                                // if(this.wasfalse[1] == 0){
                                if (this.charge >= 100) {
                                    this.charge = 0
                                    this.righthand.xmom = 10
                                    this.righthand.ymom = 0
                                    this.shots.push(shot)
                                    if (this.grounded != 1) {
                                        this.body.xmom -= 5
                                    }
                                }
                                if (this.righthand.anchored == 0) {
                                    this.righthand.xmom += 1
                                    this.righthand.ymom -= 1
                                    this.charge += 3.5
                                }
                                shot.draw()
                            }
                        }
                        if (this.face == -1) {
                            if (this.lefthand.anchored == 0) {
                                let shot = new Shot(this.lefthand.x, this.lefthand.y, this.charge * .66, "#00FFFF", -this.speed * 2, 0)
                                if (this.charge > 80) {
                                    shot.color = "#88FFFF"
                                }
                                if (this.charge >= 100) {
                                    this.charge = 0
                                    this.lefthand.xmom = -10
                                    this.lefthand.ymom = 0
                                    this.shots.push(shot)
                                    if (this.grounded != 1) {
                                        this.body.xmom += 5
                                    }
                                }
                                if (this.lefthand.anchored == 0) {
                                    this.lefthand.xmom -= 1
                                    this.lefthand.ymom -= 1
                                    this.charge += 3.5
                                }
                                shot.draw()

                            }
                        }
                    }
                }

                if (gamepadAPI[this.controller].buttonsStatus.includes('Y') || keysPressed['i']) {
                    if (this.body.fired <= 0) {
                        this.screwmomentum = Math.PI / 5
                        this.screwtimer = 30
                        this.jumping = 1
                        this.lefthand.fired = 30
                        this.righthand.fired = 30
                        // this.degripr()
                        // this.degripl()
                        this.body.fired = 40
                        this.lefthand.anchored = -10
                        this.righthand.anchored = -10
                        this.body.ymom = -jumplimit  //-this.speed * 3
                    }
                }
                if (gamepadAPI[this.controller].buttonsStatus.includes('A') || keysPressed['k']) {
                    if (this.righthand.fired <= 0) {
                        if (this.righthand.anchored == 0) {
                            this.rightshoulder.xmom = 0
                            this.rightshoulder.ymom = 0
                            this.righthand.ymom = (this.punchspeed * 12) //+ this.body.ymom
                            this.righthand.xmom = -(this.punchspeed * 2.1) //+ this.body.xmom
                            this.righthand.fired = 18
                        }
                    }
                    if (this.lefthand.fired <= 0) {
                        if (this.lefthand.anchored == 0) {
                            this.leftshoulder.xmom = 0
                            this.leftshoulder.ymom = 0
                            this.lefthand.ymom = (this.punchspeed * 12) //+ this.body.ymom
                            this.lefthand.xmom = (this.punchspeed * 2.1) //+ this.body.xmom
                            this.lefthand.fired = 18
                        }
                    }
                }

                if (gamepadAPI[this.controller].buttonsStatus.includes('X') || keysPressed['j']) {
                    if (this.righthand.fired <= 0) {
                        if (this.righthand.anchored == 0) {
                            this.rightshoulder.xmom = 0
                            this.rightshoulder.ymom = 0
                            this.righthand.ymom = (this.punchspeed * 5) //+ this.body.ymom
                            this.righthand.xmom = (this.punchspeed * 11.1) //+ this.body.xmom
                            this.righthand.fired = 18
                        }
                    }
                    if (this.lefthand.fired <= 0) {
                        if (this.lefthand.anchored == 0) {
                            this.leftshoulder.xmom = 0
                            this.leftshoulder.ymom = 0
                            this.lefthand.ymom = (this.punchspeed * 5) //+ this.body.ymom
                            this.lefthand.xmom = -(this.punchspeed * 11.1) //+ this.body.xmom
                            this.lefthand.fired = 18
                        }
                    }
                }
            }

        }
        degripl() {
            this.body.sxmom = 0
            this.body.symom = 0

            if (this.lefthand.anchored == 1) {

                if (this.body.ymom > 0) {
                    this.body.ymom = 0
                }
                this.body.ymom -= this.speed
                this.lefthand.anchored = -10
                this.righthand.anchored = -10
                for (let t = 0; t < this.springs.length; t++) {
                    this.springs[t].balance()
                }
                for (let t = 0; t < this.nodes.length; t++) {
                    this.nodes[t].move()
                }
            }


        }
        degripr() {
            this.body.sxmom = 0
            this.body.symom = 0

            if (this.righthand.anchored == 1) {

                if (this.body.ymom > 0) {
                    this.body.ymom = 0
                }
                this.body.ymom -= this.speed
                this.lefthand.anchored = -10
                this.righthand.anchored = -10
                for (let t = 0; t < this.springs.length; t++) {
                    this.springs[t].balance()
                }
                for (let t = 0; t < this.nodes.length; t++) {
                    this.nodes[t].move()
                }
            }


        }
        collideStage() {
            for (let t = 0; t < stage.bricks.length; t++) {
                for (let k = 0; k < this.nodes.length; k++) {
                    stage.bricks[t].doesPerimeterTouch(this.nodes[k])
                }
            }
            this.fixupshoulder()
            //this.enemycollide()
        }
        draw() {

            if (this.righthand.anchored == 1) {
                if (this.body.x > this.righthand.x) {
                    this.righthand.anchored = -10
                }
            }
            if (this.lefthand.anchored == 1) {
                if (this.body.x < this.lefthand.x) {
                    this.lefthand.anchored = -10
                }
            }

            if (this.lefthand.anchored != 1 && this.righthand.anchored != 1) {
                this.body.sxmom = 0
                this.body.symom = 0
            }
            // if (this.controller == 0) {
            if (this == boys[0]) {
                // if (this.breaktimer < 0) {
                //     this.AImove(this.body, this.speed, this.controller)

                //     if (this.righthand.anchored == 0) {
                //         this.AImove(this.righthand, this.speed, this.controller)
                //     }
                //     if (this.lefthand.anchored == 0) {
                //         this.AImove(this.lefthand, this.speed, this.controller)
                //     }
                //     this.doubleJump()
                // }
                if (this.breaktimer < 0) {
                    gamepad_control_controller_proto(this.body, this.speed, this.controller)

                    if (this.righthand.anchored == 0) {
                        gamepad_control_controller_proto(this.righthand, this.speed, this.controller)
                    }
                    if (this.lefthand.anchored == 0) {
                        gamepad_control_controller_proto(this.lefthand, this.speed, this.controller)
                    }
                    this.doubleJump()
                }
            } else {
                if (this.breaktimer < 0) {
                    this.AImove(this.body, this.speed, this.controller)

                    if (this.righthand.anchored == 0) {
                        this.AImove(this.righthand, this.speed, this.controller)
                    }
                    if (this.lefthand.anchored == 0) {
                        this.AImove(this.lefthand, this.speed, this.controller)
                    }
                    this.doubleJump()
                }
            }
            // }
            if (this.lefthand.anchored == 1 || this.righthand.anchored == 1) {
                this.body.xmom *= .2
            }
            if (this.jumping == 1) {
                this.body.xmom *= .95
            }

            if (this.grounded == 0) {

                if (this.lefthand.anchored == 1) {
                    this.body.ymom *= .1
                    this.body.symom = this.leftshoulder.ymom * .99
                    this.body.sxmom = this.leftshoulder.xmom * .99
                } else if (this.righthand.anchored == 1) {
                    this.body.ymom *= .1
                    this.body.symom = this.rightshoulder.ymom * .99
                    this.body.sxmom = this.rightshoulder.xmom * .99
                } else {
                    // if (Math.abs(this.body.sxmom) < 5) {
                    //     // this.body.sxmom *= 0
                    //     this.body.xmom *= .5
                    // }
                }
                this.body.ymom += this.gravity
            } else {

                this.jumpcount = 0
                this.jumping -= .5

                this.body.xmom *= .7

                if (this.body.ymom > 0) {
                    this.body.ymom = 0
                }
            }
            if (this.jumping < 0) {
                this.jumping = 0
            }
            this.grounded = 0
            if (this.lefthand.anchored <= -1) {
                this.lefthand.anchored++
            } else {
                //this.collideStage()
            }
            if (this.righthand.anchored <= -1) {
                this.righthand.anchored++
            } else {
                //this.collideStage()
            }
            this.righthand.ymom += this.gravity
            this.lefthand.ymom += this.gravity


            if (this.body.ymom < -vsmashlimit) {
                this.body.ymom = -vsmashlimit
            }
            if (this.body.ymom > vsmashlimit) {
                this.body.ymom = vsmashlimit
            }

            this.body.xmom *= .99
            this.body.ymom *= .99

            for (let t = 0; t < this.nodes.length; t++) {
                this.nodes[t].frictiveMove()
            }
            for (let t = 0; t < this.nodes.length; t++) {
                this.nodes[t].smove()
            }

            this.lefthand.xmom += (this.lefthand.x - this.body.x) / 80
            this.righthand.xmom += (this.righthand.x - this.body.x) / 80
            this.leftshoulder.xmom -= (this.leftshoulder.x - this.body.x) / 40
            this.rightshoulder.xmom -= (this.rightshoulder.x - this.body.x) / 40
            this.fixupshoulder()

            // this.leftshoulder.x = this.body.x - (this.body.radius + this.shoulderwidth)
            // this.leftshoulder.y = this.body.y

            // this.rightshoulder.x = this.body.x + (this.body.radius + this.shoulderwidth)
            // this.rightshoulder.y = this.body.y

            // this.leftshoulder.xmom *= 0
            // this.leftshoulder.ymom *= 0

            // this.rightshoulder.xmom *= 0
            // this.rightshoulder.ymom *= 0


            this.leftarm = new LineOP(this.leftshoulder, this.lefthand, invertColor(this.body.color), 8)
            this.rightarm = new LineOP(this.rightshoulder, this.righthand, invertColor(this.body.color), 8)


            this.collideStage()

            for (let t = 0; t < this.links.length; t++) {
                //this.collideStage()
                this.links[t].color = invertColor(this.body.color)
                this.links[t].draw()
            }
            for (let t = 0; t < this.nodes.length; t++) {
                //this.collideStage()

                // if(this.righthand.fired > 14){
                //     this.righthand.color = "#ffffff"
                // }else{
                //     this.righthand.color = "#FF0000"
                // }
                this.nodes[t].draw()
            }
            for (let t = 0; t < this.springs.length; t++) {
                this.springs[t].beam.color = invertColor(this.body.color)
                this.springs[t].balance()
            }
            for (let t = 0; t < this.hitboxes.length; t++) {

            }
            // if (this.controller == 0) {

            let link = new Line(this.body.x, this.body.y, this.body.x + (((this.body.radius * .8) * this.face)), this.body.y + Math.sin(this.screwangle), invertColor(this.body.color), this.body.radius * .2)

            canvas_context.lineWidth = this.strokeWidth
            canvas_context.strokeStyle = invertColor(this.body.color)
            canvas_context.beginPath();
            canvas_context.arc(((link.x1 + link.x2) * .5) + Math.cos(this.screwangle), link.y1 - this.body.radius * .1, this.body.radius * .4, this.screwangle, (Math.PI * 1) + this.screwangle, false)
            canvas_context.fillStyle = invertColor(this.body.color)
            canvas_context.fill()
            canvas_context.stroke();
            if (this.screwangle == 0) {
                link.draw()
            }

            if (this == boys[0]) {

                // this.AI()
                this.fightcontrol()
            } else {
                this.AI()
            }
            // }
            if (this.breaktimer > 0) {
                for (let t = 0; t < 5; t++) {
                    let spot = new Circle(this.body.x + ((Math.random() - .5) * this.body.radius * 2), this.body.y - (this.body.radius + 4), 3, "yellow")
                    spot.draw()
                }
            }
            if (this.screwangle != 0) {
                for (let t = 0; t < 25; t++) {
                    let spot = new Circle(this.body.x + ((Math.random() - .5) * this.body.radius * 2), this.body.y - ((Math.random() - .5) * this.body.radius * 2), 3, invertColor(this.body.color))
                    if (spot.doesPerimeterTouch(this.body)) {
                        spot.draw()
                    }
                }
            }

            canvas_context.font = "32px arial"
            canvas_context.fillStyle = `rgb(${255 - (this.damage / 10)},${255 - this.damage},${255 - this.damage})`
            canvas_context.fillText(`${Math.round(this.damage)}%`, this.body.x - 20, this.body.y - 60)
            // if (this != boys[0]) {
            //     canvas_context.fillText(`${Math.round(this.dmomu)},${Math.round(this.amomu)}`, this.body.x - 20, this.body.y - 150)
            //     canvas_context.fillText(`Under:${Math.round(this.under)},Safe:${Math.round(this.safe)}`, this.body.x - 20, this.body.y - 200)
            //     canvas_context.fillText(`Height:${Math.round(this.brick.edgeright.y)}`, this.body.x - 20, this.body.y - 250)
            //     if (this.fleeing == 1) {
            //         canvas_context.fillText(`fleeing`, this.body.x - 20, this.body.y - 100)
            //     }
            // }

        }
    }



    class Blastgirl {
        constructor(controller) {
            this.blasting = 0
            this.brick = new Brick(1, 1, 1, 1)
            this.dmomu = 0
            this.amomu = 0
            this.amom = 0
            this.dmom = 0
            this.fleeing = 0
            this.face = 0
            this.screwshot = 0
            this.rightshot = 0
            this.hortsmash = 0
            this.leftshot = 0
            this.downspike = 0
            this.storeshield = 0
            this.wasfalse = []
            for (let t = 0; t < 100; t++) {
                this.wasfalse.push(1)
            }
            this.shield = 0
            this.shieldpower = 100
            this.breaktimer = 0
            this.screwangle = 0
            this.charge = 0
            this.shots = []
            this.controller = controller
            this.armlength = 15
            this.shoulderwidth = 58
            this.damage = 0
            this.nodes = []
            this.springs = []
            this.hitboxes = []
            this.links = []
            this.speed = 11.5
            this.punchspeed = 5
            this.grounded = 0
            this.jumping = 1


            this.color = getRandomColor()
            if (controller == 0) {
                this.color = "#ffAA00"
            }
            if (controller == 1) {
                this.color = "#ff0000"
            }
            this.body = new Shotb(700 + ((boys.length * 1200) % 2260), 500, 55, this.color)
            this.nodes.push(this.body)
            this.leftshoulder = new Shotb(this.body.x - (this.body.radius + this.shoulderwidth), 350, 17, "magenta", 0, 0, .999)
            this.rightshoulder = new Shotb(this.body.x + (this.body.radius + this.shoulderwidth), 350, 17, "red", 0, 0, .999)
            this.lefthand = new Shotb(this.leftshoulder.x, (this.leftshoulder.y + this.armlength), 24, "magenta", 0, 0, .85)
            this.righthand = new Shotb(this.rightshoulder.x, (this.rightshoulder.y + this.armlength), 24, "red", 0, 0, .85)
            this.nodes.push(this.leftshoulder)
            this.nodes.push(this.rightshoulder)
            this.nodes.push(this.righthand)
            this.nodes.push(this.lefthand)
            this.leftcollar = new LineOP(this.leftshoulder, this.body, this.body.color, 8)
            this.rightcollar = new LineOP(this.rightshoulder, this.body, this.body.color, 8)
            this.links.push(this.leftcollar)
            this.links.push(this.rightcollar)
            this.leftarm = new LineOP(this.leftshoulder, this.lefthand, invertColor(this.body.color), 8)
            this.rightarm = new LineOP(this.rightshoulder, this.righthand, invertColor(this.body.color), 8)
            this.links.push(this.leftarm)
            this.links.push(this.rightarm)
            this.leftarm = new SpringOP(this.leftshoulder, this.lefthand, this.armlength, 8)
            this.rightarm = new SpringOP(this.rightshoulder, this.righthand, this.armlength, 8)
            this.springs.push(this.leftarm)
            this.springs.push(this.rightarm)
            this.gravity = 1
            this.righthand.fired = 0
            this.lefthand.fired = 0
            this.body.fired = 0
            this.screwmomentum = 0
            this.screwtimer = 0
            for (let t = 0; t < this.nodes.length; t++) {
                this.nodes[t].self = this // lmao
            }
        }
        copy() {
            let copy = new Blastgirl(this.controller)
            copy.body.color = this.body.color
            return copy
        }
        control() {
            gamepad_control_controller_proto(this.center, this.speed + (this.speed * (this.grounded * .5)), this.controller)
        }
        fixupshoulder() {

            for (let t = 0; t < stage.bricks.length; t++) {
                if (stage.bricks[t].edgeleft.x < this.body.x && stage.bricks[t].edgeright.x > this.body.x) {
                    if (this.brick.edgeleft.x < this.body.x && this.brick.edgeright.x > this.body.x) {
                        if (Math.max(this.brick.edgeright.y, this.brick.edgeleft.y) > Math.max(stage.bricks[t].edgeright.y, stage.bricks[t].edgeleft.y)) {
                            if (this.body.y < Math.max(stage.bricks[t].edgeright.y, stage.bricks[t].edgeleft.y)) {
                                this.brick = stage.bricks[t]
                            }
                        }
                    } else {
                        this.brick = stage.bricks[t]
                    }
                }
            }

            if (this.screwangle != 0) {

                this.leftshoulder.x = this.body.x + ((((this.body.radius + this.shoulderwidth) * (Math.cos(this.screwangle)))))
                this.leftshoulder.y = this.body.y + (((this.body.radius + this.shoulderwidth) * (Math.sin(this.screwangle))))

                this.rightshoulder.x = this.body.x + (((this.body.radius + this.shoulderwidth) * (Math.cos(this.screwangle))))
                this.rightshoulder.y = this.body.y + (((this.body.radius + this.shoulderwidth) * (Math.sin(this.screwangle))))

                this.leftshoulder.color = this.body.color
                this.rightshoulder.color = this.body.color
                this.lefthand.color = this.body.color
                this.righthand.color = this.body.color


                if (this.lefthand.anchored !== 1) {
                    this.lefthand.x = this.leftshoulder.x
                    this.lefthand.y = this.leftshoulder.y
                    // this.lefthand.xmom *=  this.lefthand.friction
                    // this.lefthand.ymom *=  this.lefthand.friction
                    // this.leftshoulder.xmom *= 0
                    // this.leftshoulder.ymom *= 0
                }
                if (this.righthand.anchored !== 1) {
                    this.righthand.x = this.rightshoulder.x
                    this.righthand.y = this.rightshoulder.y
                    // this.righthand.xmom *=  this.righthand.friction
                    // this.righthand.ymom *=  this.righthand.friction
                    // this.rightshoulder.xmom *= 0
                    // this.rightshoulder.ymom *= 0
                }

                if (this.body.ymom < -vsmashlimit) {
                    this.body.ymom = -vsmashlimit
                }
                if (this.body.ymom > vsmashlimit) {
                    this.body.ymom = vsmashlimit
                }


                // this.lefthand.xmom += (this.lefthand.x - this.body.x) / 100
                // this.righthand.xmom += (this.righthand.x - this.body.x) / 100

                // this.lefthand.ymom += (this.lefthand.y - this.body.y) / 100
                // this.righthand.ymom += (this.righthand.y - this.body.y) / 100


            } else {
                this.leftshoulder.x = this.body.x - (this.body.radius + this.shoulderwidth * .3)
                this.leftshoulder.y = this.body.y - (this.shoulderwidth * .7)

                this.rightshoulder.x = this.body.x + (this.body.radius + this.shoulderwidth * .3)
                this.rightshoulder.y = this.body.y - (this.shoulderwidth * .7)

                this.leftshoulder.color = this.body.color
                this.rightshoulder.color = this.body.color
                this.lefthand.color = this.body.color
                this.righthand.color = this.body.color


                if (this.lefthand.anchored == 0) {
                    this.lefthand.x = this.lefthand.x + (this.leftshoulder.x - (this.body.x - (this.body.radius + this.shoulderwidth * .3)))
                    this.lefthand.y -= this.leftshoulder.y - (this.body.y - (this.shoulderwidth * .7))
                    this.leftshoulder.xmom *= 0
                    this.leftshoulder.ymom *= 0
                }
                if (this.righthand.anchored == 0) {
                    this.righthand.x = this.righthand.x + (this.rightshoulder.x - (this.body.x + (this.body.radius + this.shoulderwidth * .3)))
                    this.righthand.y -= this.rightshoulder.y - (this.body.y - (this.shoulderwidth * .7))
                    this.rightshoulder.xmom *= 0
                    this.rightshoulder.ymom *= 0
                }

                if (this.body.ymom < -vsmashlimit) {
                    this.body.ymom = -vsmashlimit
                }



            }


            // this.leftshoulder.x = this.body.x - (this.body.radius + this.shoulderwidth)
            // this.leftshoulder.y = this.body.y

            // this.rightshoulder.x = this.body.x + (this.body.radius + this.shoulderwidth)
            // this.rightshoulder.y = this.body.y

        }
        enemycollide() {


            for (let f = 0; f < boys.length; f++) {
                if (this != boys[f]) {

                    for (let t = 0; t < boys.length; t++) {
                        if (this != boys[t]) {
                            for (let k = 0; k < boys[t].shots.length; k++) {
                                if (boys[t].shots[k].marked != 1) {
                                    if (boys[t].shots[k].doesPerimeterTouch(this.body)) {
                                        if (this.shield == 1) {
                                            this.shieldpower -= (Math.abs(boys[t].shots[k].xmom) + Math.abs(boys[t].shots[k].ymom)) / 3
                                        } else {
                                            this.body.xmom = ((boys[t].shots[k].xmom * (this.damage / 200)) + (boys[t].shots[k].xmom * baselaunch)) * 2
                                            this.body.ymom = (((boys[t].shots[k].ymom * (this.damage / 200)) + (boys[t].shots[k].ymom * baselaunch)) * 2) - (10 * (this.damage / 200))
                                            this.damage += (Math.abs(boys[t].shots[k].xmom) + Math.abs(boys[t].shots[k].ymom)) / 2
                                            this.breaktimer = 0
                                        }
                                        boys[t].shots[k].marked = 1
                                    }
                                }
                            }
                            boys[t].lefthands = castBetween(boys[t].leftshoulder, boys[t].lefthand, 20, boys[t].leftshoulder.radius)
                            boys[t].righthands = castBetween(boys[t].rightshoulder, boys[t].righthand, 20, boys[t].rightshoulder.radius)
                            if (boys[t].righthands.doesPerimeterTouch(this.body) || boys[t].righthand.doesPerimeterTouch(this.body)) {
                                if (boys[t].righthand.fired > 14) {
                                    if (this.shield == 1) {
                                        this.shieldpower -= (Math.abs(boys[t].righthand.xmom) + Math.abs(boys[t].righthand.ymom)) / 11
                                    } else {
                                        this.body.xmom = ((boys[t].righthand.xmom * (this.damage / 200)) + (boys[t].righthand.xmom * baselaunch)) * Math.max((1 + (boys[t].blasting / 40)), 1)
                                        this.body.ymom = (((boys[t].righthand.ymom * (this.damage / 200)) + (boys[t].righthand.ymom * baselaunch)) * 1) * Math.max((1 + (boys[t].blasting / 40)), 1)
                                        this.damage += ((Math.abs(boys[t].righthand.xmom) + Math.abs(boys[t].righthand.ymom)) / 7) * Math.max((1 + (boys[t].blasting / 40)), 1)
                                        this.breaktimer = 0
                                    }
                                    boys[t].righthand.fired = 14

                                    if (this.righthand.anchored == 1 || this.lefthand.anchored == 1) {
                                        this.lefthand.anchored = -40
                                        this.righthand.anchored = -40
                                    }
                                    if (this.body.ymom < -vsmashlimit) {
                                        this.body.ymom = -vsmashlimit
                                    }
                                    if (this.body.ymom > vsmashlimit) {
                                        this.body.ymom = vsmashlimit
                                    }
                                    this.body.move()
                                    this.fixupshoulder()

                                }
                            } else if (boys[t].lefthands.doesPerimeterTouch(this.body) || boys[t].lefthand.doesPerimeterTouch(this.body)) {
                                if (boys[t].lefthand.fired > 14) {

                                    if (this.shield == 1) {
                                        this.shieldpower -= (Math.abs(boys[t].lefthand.xmom) + Math.abs(boys[t].lefthand.ymom)) / 11
                                    } else {
                                        this.body.xmom = (boys[t].lefthand.xmom * (this.damage / 200)) + (boys[t].lefthand.xmom * baselaunch)
                                        this.body.ymom = (((boys[t].lefthand.ymom * (this.damage / 200)) + (boys[t].lefthand.ymom * baselaunch)) * 1)
                                        this.damage += (Math.abs(boys[t].lefthand.xmom) + Math.abs(boys[t].lefthand.ymom)) / 11
                                        this.breaktimer = 0
                                    }
                                    boys[t].lefthand.fired = 14
                                    if (this.righthand.anchored == 1 || this.lefthand.anchored == 1) {
                                        this.lefthand.anchored = -40
                                        this.righthand.anchored = -40
                                    }
                                    if (this.body.ymom < -vsmashlimit) {
                                        this.body.ymom = -vsmashlimit
                                    }
                                    if (this.body.ymom > vsmashlimit) {
                                        this.body.ymom = vsmashlimit
                                    }
                                    this.body.move()
                                    this.fixupshoulder()
                                }
                            }
                            if (boys[t].screwangle != 0 && boys[t].body.doesPerimeterTouch(this.body)) {
                                if (boys[t].body.fired > 14) {
                                    if (this.shield == 1) {
                                        this.shieldpower -= (Math.abs(boys[t].body.xmom) + Math.max(20, Math.abs(boys[t].body.ymom))) / 3
                                    } else {
                                        this.body.xmom = (boys[t].body.xmom * (this.damage / 200)) + (boys[t].body.xmom * baselaunch) * 2
                                        this.body.ymom = (((boys[t].body.ymom * (this.damage / 200)) + (boys[t].body.ymom * baselaunch)) * 2)
                                        this.damage += (Math.abs(boys[t].body.xmom) + Math.max(20, Math.abs(boys[t].body.ymom))) / 2
                                        this.breaktimer = 0
                                    }
                                    boys[t].body.fired = 14
                                    if (this.righthand.anchored == 1 || this.lefthand.anchored == 1) {
                                        this.lefthand.anchored = -40
                                        this.righthand.anchored = -40
                                    }
                                    if (this.body.ymom < -vsmashlimit) {
                                        this.body.ymom = -vsmashlimit
                                    }
                                    if (this.body.ymom > vsmashlimit) {
                                        this.body.ymom = vsmashlimit
                                    }
                                    this.body.move()
                                    this.fixupshoulder()
                                }
                            }
                        }
                    }


                    while (boys[f].body.doesPerimeterTouch(this.body)) {
                        if (this.body.x > boys[f].body.x) {
                            this.body.x += .5
                            boys[f].body.x -= .5
                            this.fixupshoulder()
                            boys[f].fixupshoulder()
                            this.body.ymom *= .99
                        } else {
                            this.body.x -= .5
                            boys[f].body.x += .5
                            this.fixupshoulder()
                            boys[f].fixupshoulder()
                            this.body.ymom *= .99
                        }

                    }


                    // while (boys[t].rightshoulder.reversePointinside(this.leftshoulder) || boys[t].rightshoulder.reversePointinside(this.body)) {
                    //     this.body.x += .5
                    //     boys[t].body.x -= .5
                    //     this.fixupshoulder()
                    //     boys[t].fixupshoulder()
                    //     this.righthand.x += .5
                    //     this.lefthand.x += .5
                    //     boys[t].lefthand.x -= .5
                    //     boys[t].righthand.x -= .5
                    // }
                    // while (boys[t].leftshoulder.reversePointinside(this.rightshoulder) || boys[t].leftshoulder.reversePointinside(this.body)) {
                    //     this.body.x -= .5
                    //     boys[t].body.x += .5
                    //     this.fixupshoulder()
                    //     boys[t].fixupshoulder()
                    //     this.righthand.x -= .5
                    //     this.lefthand.x -= .5
                    //     boys[t].lefthand.x += .5
                    //     boys[t].righthand.x += .5
                    // }
                }
            }

        }
        AIarmControl() {
            if (this.wmove == 1) {
                this.jumping = 1
                this.body.ymom = -this.speed * 2
                this.lefthand.ymom = -this.speed * 2
                this.righthand.ymom = -this.speed * 2
                this.jumpcount = 100

            }
        }
        doubleJump() {
            this.jumpcount--
            if (this.jumpcount <= -20) {
                if (this == boys[0]) {
                    gamepad_control_controller_proto_dj(this.body, this.speed, this.controller)
                } else {
                    this.AIarmControl()
                }
            }
        }
        breaks() {

            if (this.shield == 1) {
                if (this.shieldpower <= 0) {
                    this.breaktimer = 200
                    this.shieldpower = 1
                    this.shield = 0
                }
            }
        }

        AImove(object, speed, controller) {
            if (object == this.body) {
                this.amom--
                this.dmom--
                this.dmomu--
                this.amomu--
            }
            this.wmove = 0
            this.amove = 0
            this.dmove = 0
            if (Math.random() < .0015) {
                this.fleeing = 1
            }
            if (this.charge > 90) {
                this.fleeing = 0
            }
            if (Math.random() < .05) {
                this.fleeing = 0
            }

            this.safe = 0
            for (let t = 0; t < stage.bricks.length; t++) {
                if (stage.bricks[t].edgeleft.x < this.body.x && stage.bricks[t].edgeright.x > this.body.x) {
                    if (Math.max(stage.bricks[t].edgeright.y, stage.bricks[t].edgeleft.y) > this.body.y) {
                        this.safe = 1
                        break
                    }
                }
            }
            if (this.safe == 0) {
                if (Math.random() < .5) {
                    if (this.dmove == 1) {
                        this.amove = 1
                        this.dmove = 0
                    } else if (this.amove == 1) {
                        this.amove = 0
                        this.dmove = 1
                    }
                } else {
                    if (this.amove == 1) {
                        this.amove = 0
                        this.dmove = 1
                    } else if (this.dmove == 1) {
                        this.amove = 1
                        this.dmove = 0
                    }
                }
                this.fleeing = 0
            } else {

            }

            for (let t = 0; t < boys.length; t++) {
                if (this != boys[t]) {
                    if (Math.abs(this.body.x - boys[t].body.x) > 1 && this.body.y > (boys[t].body.y + 15)) {
                        this.wmove = 1
                    }

                    if (this.fleeing == 0) {
                        if (Math.abs(this.body.x - boys[t].body.x) > (this.body.radius * 3) && this.body.x > (boys[t].body.x + 5)) {
                            this.amove = 1
                        } else if (Math.abs(this.body.x - boys[t].body.x) > (this.body.radius * 3) && this.body.x < (boys[t].body.x + 5)) {
                            this.dmove = 1
                        }
                    } else {
                        if (Math.abs(this.body.x - boys[t].body.x) > (this.body.radius * 3) && this.body.x > (boys[t].body.x + 5)) {
                            this.dmove = 1
                        } else if (Math.abs(this.body.x - boys[t].body.x) > (this.body.radius * 3) && this.body.x < (boys[t].body.x + 5)) {
                            this.amove = 1
                        }
                    }


                    if (this.righthand.anchored == 1 || this.lefthand.anchored == 1) {
                        if (Math.random() < .2) {
                            this.wmove = 1
                        }
                        if (Math.random() < .1) {
                            this.dmove = 1
                        }
                        if (Math.random() < .1) {
                            this.amove = 1
                        }
                    }
                }
            }

            this.safe = 0
            for (let t = 0; t < stage.bricks.length; t++) {
                if (stage.bricks[t].edgeleft.x < (this.body.x + this.body.radius) && stage.bricks[t].edgeright.x > (this.body.x - this.body.radius)) {
                    if (Math.max(stage.bricks[t].edgeright.y, stage.bricks[t].edgeleft.y) > this.body.y) {
                        this.safe = 1
                        break
                    }
                }
            }

            this.under = 0
            for (let k = 0; k < boys.length; k++) {
                if (this != boys[k]) {
                    for (let t = 0; t < stage.bricks.length; t++) {
                        if (stage.bricks[t].edgeleft.x < (this.body.x + (this.body.radius * 1.6)) && stage.bricks[t].edgeright.x > (this.body.x - (this.body.radius * 1.6))) {
                            if (Math.max(stage.bricks[t].edgeright.y, stage.bricks[t].edgeleft.y) < this.body.y) {
                                if (boys[k].brick == stage.bricks[t]) {
                                    this.under = 1
                                } else {
                                    if (Math.abs(Math.max(stage.bricks[t].edgeright.y, stage.bricks[t].edgeleft.y) - this.body.y) < 300) {
                                        this.under = 4
                                    }
                                }
                                if (Math.abs(this.body.x - Math.max(stage.bricks[t].edgeright.x)) < Math.abs(this.body.x - Math.max(stage.bricks[t].edgeleft.x))) {
                                    if (boys[k].body.x < this.body.x) {
                                        if ((boys[k].body.y - (boys[k].body.radius * 1.5)) < Math.max(stage.bricks[t].edgeright.y, stage.bricks[t].edgeleft.y)) {
                                            if (this.body.x - (this.body.radius * 1.2) <= stage.bricks[t].edgeright.x) {
                                                if (this.grounded == 1 || this.jumping == 1) {
                                                    if (boys[k].brick == stage.bricks[t]) {
                                                        this.under = 2
                                                    }
                                                }
                                            }
                                        }
                                    }
                                } else if (Math.abs(this.body.x - Math.max(stage.bricks[t].edgeright.x)) > Math.abs(this.body.x - Math.max(stage.bricks[t].edgeleft.x))) {
                                    if (boys[k].body.x > this.body.x) {
                                        if ((boys[k].body.y - (boys[k].body.radius * 1.5)) < Math.max(stage.bricks[t].edgeright.y, stage.bricks[t].edgeleft.y)) {
                                            if (this.body.x + (this.body.radius * 1.2) >= stage.bricks[t].edgeleft.x) {
                                                if (this.grounded == 1 || this.jumping == 1) {
                                                    if (boys[k].brick == stage.bricks[t]) {
                                                        this.under = 3
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                                if (this.under !== 0) {
                                    if (this.under == 2) {
                                        this.screwshot = 0
                                        this.amove = 0
                                        this.dmom = 100
                                        this.amom = 0
                                        this.dmove = 1
                                        this.wmove = 1
                                    }
                                    if (this.under == 3) {
                                        this.screwshot = 0
                                        this.amove = 1
                                        this.amom = 100
                                        this.dmom = 0
                                        this.dmove = 0
                                        this.wmove = 1
                                    }
                                }

                                break
                            }
                        }
                    }
                }
            }

            for (let t = 0; t < boys.length; t++) {
                if (this != boys[t]) {
                    if (Math.max(boys[t].brick.edgeleft.y, boys[t].brick.edgeright.y) > Math.max(this.brick.edgeleft.y, this.brick.edgeright.y)) {
                        if (this.safe == 1) {
                            if (this.dmomu <= 0 && this.amomu <= 0) {
                                if (this.righthand.anchored != 1 && this.lefthand.anchored != 1) {
                                    if (boys[t].body.x < this.body.x) {
                                        if ((this.brick.edgeright.x > this.body.x - this.body.radius)) {
                                            this.amomu = (Math.abs(this.brick.edgeright.x - this.body.x)) / this.speed
                                            this.amomu += 25
                                        }
                                    } else {
                                        if ((this.brick.edgeleft.x < this.body.x + this.body.radius)) {
                                            this.dmomu = (Math.abs(this.brick.edgeleft.x - this.body.x)) / this.speed
                                            this.dmomu += 25
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }


            if (this.dmom > 0) {
                if (Math.random() < .003) {
                    this.screwshot = 1
                }
                this.dmove = 1
                this.wmove = 1
                this.amomu = 0
                this.dmomu = 0
            }
            if (this.amom > 0) {
                if (Math.random() < .003) {
                    this.screwshot = 1
                }
                this.amove = 1
                this.wmove = 1
                this.amomu = 0
                this.dmomu = 0
            }

            if (this.dmomu > 0) {
                this.dmove = 1
                this.amove = 0
                this.amomu = 0
                this.screwshot = 0
                this.wmove = 0
            }
            if (this.amomu > 0) {
                this.amove = 1
                this.dmove = 0
                this.dmomu = 0
                this.screwshot = 0
                this.wmove = 0
            }

            if (this.safe == 0) {
                if (this.under == 0) {
                    this.screwshot = 1
                }
                if (this.body.x > (1280 * (invscale * .5))) {
                    this.amove = 1
                    this.dmove = 0
                    this.wmove = 1
                    this.amomu = 0
                    this.dmomu = 0
                } else {
                    this.amove = 0
                    this.dmove = 1
                    this.wmove = 1
                    this.amomu = 0
                    this.dmomu = 0
                }
                this.fleeing = 0
            } else {

            }

            if (this.shield == 0) {

                if (this.dmove == 0 && this.amove == 0) {
                    if (Math.random() < .5) {
                        this.dmove = 1
                    } else {
                        this.amove = 1
                    }
                }
                if (this.wmove == 1) {
                    if (this.grounded == 1) {
                        this.jumping = 1
                        object.ymom -= speed
                    } else {
                        if (this.lefthand.anchored == 1) {
                            this.degripl()
                            this.jumping = 1
                            object.ymom -= speed
                        }
                        if (this.righthand.anchored == 1) {
                            this.degripr()
                            this.jumping = 1
                            object.ymom -= speed
                        }
                    }
                }
                if (this.dmove == 1) {
                    this.face = 1
                    if (object == this.body) {
                        object.x += speed
                        this.righthand.x += speed
                        this.lefthand.x += speed
                    }
                    if (this.righthand.anchored == 1) {
                        this.degripr()
                        this.jumping = 1
                    }
                }
                // if (keysPressed['s']) {
                //     object.y += speed
                //     this.degrip()
                // }
                if (this.amove == 1) {
                    this.face = -1
                    if (object == this.body) {
                        object.x -= speed
                        this.righthand.x -= speed
                        this.lefthand.x -= speed
                    }
                    if (this.righthand.anchored == 1 || this.lefthand.anchored == 1) {
                        this.degripl()
                        this.jumping = 1
                    }
                }


                // if (typeof (gamepadAPI[controller].axesStatus[1]) != 'undefined') {
                // if (gamepadAPI[controller].axesStatus[0] > .1) {
                //     this.face = 1
                // }

                // if (gamepadAPI[controller].axesStatus[1] < -.1) {
                //     this.face = -1
                // }
                // }

            }
            // if (this.dmomu > 0 || this.amomu > 0) {
            //     this.lefthand.anchored = 0
            //     this.righthand.anchored = 0
            // }

        }
        AI() {
            this.breaks()
            for (let t = 0; t < this.shots.length; t++) {
                if (typeof this.shots[t].gravity == "number") {
                    this.shots[t].ymom += this.shots[t].gravity
                }
                if (typeof this.shots[t].countdown == "number") {
                    this.shots[t].countdown--
                    this.shots[t].gravity = Math.cos(this.shots[t].countdown * (Math.PI / 4)) * 20
                    if (this.shots[t].countdown <= 0) {
                        this.shots[t].marked = 1
                    }
                }
                this.shots[t].move()
                this.shots[t].draw()
            }
            for (let t = 0; t < this.shots.length; t++) {
                if (this.shots[t].marked == 1) {
                    this.shots.splice(t, 1)
                }
            }

            if (this.screwtimer > 0) {
                this.screwtimer--
                this.screwangle += this.screwmomentum
            } else {
                this.screwtimer = 0
                this.screwangle = 0
            }


            this.righthand.fired--
            this.charge--
            if (this.charge <= 0) {
                this.charge = 0
            }
            this.body.fired -= .25
            this.lefthand.fired--

            this.breaktimer--
            // if (gamepadAPI[this.controller].buttonsStatus.includes('RB') || keysPressed['o']) {

            if (Math.random() < .1) {
                this.storeshield = 0
            }
            if (Math.random() < .5) {
                this.screwshot = 0
            }
            if (Math.random() < .01 || this.charge == 0) {
                this.rightshot = 0
            }
            if (Math.random() < .01 || this.charge == 0) {
                this.leftshot = 0
            }
            if (Math.random() < .1) {
                this.downspike = 0
            }
            if (Math.random() < .1) {
                this.hortsmash = 0
            }
            for (let t = 0; t < boys.length; t++) {
                if (this != boys[t]) {

                    if (Math.abs(this.body.x - boys[t].body.x) < 50 && this.body.y < boys[t].body.y) {
                        this.downspike = 1
                    } else if (Math.abs(this.body.x - boys[t].body.x) < 150 && this.body.y <= boys[t].body.y && (boys[t].righthand.anchored == 1 || boys[t].lefthand.anchored == 1)) {
                        this.downspike = 1
                    }
                    if (Math.abs(this.body.x - boys[t].body.x) < 70 && this.body.y > boys[t].body.y) {
                        this.screwshot = 1
                    }




                    if (Math.abs(this.body.x - boys[t].body.x) < 240) {
                        if (this.body.x > boys[t].body.x) {
                            if (this.face == 1) {
                                this.hortsmash = 1
                            }
                        }
                        if (this.body.x < boys[t].body.x) {
                            if (this.face == -1) {
                                this.hortsmash = 1
                            }
                        }
                    }

                    if (boys[t].righthand.fired > 14) {
                        if (this.body.x > boys[t].body.x) {
                            if (Math.random() < .09) {
                                this.storeshield = 1
                            }
                        }
                    }
                    if (this.screwshot + this.hortsmash + this.downspike + this.storeshield == 0) {
                        if (Math.abs(this.body.y - boys[t].body.y) < 35 && this.body.x > boys[t].body.x) {
                            if (this.face == -1) {
                                this.leftshot = 1
                                if (Math.abs(this.body.x - boys[t].body.x) < 170) {
                                    if (Math.random() < .009) {
                                        this.hortsmash = 1
                                        this.leftshot = 0
                                    }
                                }
                            }
                        }
                        if (Math.abs(this.body.y - boys[t].body.y) < 35 && this.body.x < boys[t].body.x) {
                            if (this.face == 1) {
                                this.rightshot = 1
                                if (Math.abs(this.body.x - boys[t].body.x) < 170) {
                                    if (Math.random() < .009) {
                                        this.hortsmash = 1
                                        this.rightshot = 0
                                    }
                                }
                            }
                        }
                    }


                    if (Math.abs(this.body.y - boys[t].body.y) < 50 && Math.abs(this.body.x - boys[t].body.x) < 200) {
                        if (boys[t].lefthand.fired > 14 || boys[t].righthand.fired > 14) {
                            if (this.body.x < boys[t].body.x) {
                                if (Math.random() < .4) {
                                    this.storeshield = 1
                                }
                            }
                        }
                    }
                }
            }

            this.safe = 0
            for (let t = 0; t < stage.bricks.length; t++) {
                if (stage.bricks[t].edgeleft.x < (this.body.x + (this.body.radius * 2.5)) && stage.bricks[t].edgeright.x > (this.body.x - (this.body.radius * 2.5))) {
                    if (Math.max(stage.bricks[t].edgeright.y, stage.bricks[t].edgeleft.y) > this.body.y) {
                        this.safe = 1
                        break
                    }
                }
            }

            if (this.safe == 0) {
                if (this.under == 0) {
                    this.screwshot = 1
                } else {
                    this.wmove = 1
                }
            }

            if (this.shieldpower < 10) {
                if (Math.random() < .95) {
                    this.storeshield = 0
                }
            }
            if (this.storeshield == 1) {
                if (this.breaktimer < 0) {
                    if (this.grounded == 1) {
                        this.shieldpower -= .63
                        this.shield = 1
                        let shild = new Circle(this.body.x, this.body.y, (Math.max((new LineOP(this.body, this.lefthand)).hypotenuse(), (new LineOP(this.body, this.righthand)).hypotenuse())) + this.lefthand.radius, this.body.color + Math.min(Math.round(this.shieldpower + 10), 99))
                        shild.draw()
                    }
                }
            } else {
                this.shield = 0
                this.shieldpower += .2
                if (this.shieldpower > 100) {
                    this.shieldpower = 100
                }
            }

            if (this.breaktimer <= 0 && this.shield == 0) {

                if (this.body.fired > 0) {
                    this.body.ymom -= this.body.fired * .025
                }
                if (this.screwshot == 1) {
                    if (this.body.fired <= 0) {
                        this.jumping = 1
                        this.screwangle = Math.PI * 1.5
                        this.screwtimer = 30
                        this.lefthand.ymom = -70
                        this.righthand.ymom = -70
                        this.lefthand.xmom = 25
                        this.righthand.xmom = -25
                        this.lefthand.fired = 40
                        this.righthand.fired = 40
                        this.body.fired = 35
                        this.lefthand.anchored = -10
                        this.righthand.anchored = -10
                        this.body.ymom = -jumplimit
                    }
                }
                if (this.downspike == 1) {
                    if (this.righthand.fired <= 0) {
                        if (this.righthand.anchored == 0) {
                            this.rightshoulder.xmom = 0
                            this.rightshoulder.ymom = 0
                            this.righthand.ymom = this.punchspeed * 18
                            this.righthand.xmom = -this.punchspeed * -5.1
                            this.righthand.fired = 18
                        }
                    }
                    if (this.lefthand.fired <= 0) {
                        if (this.lefthand.anchored == 0) {
                            this.leftshoulder.xmom = 0
                            this.leftshoulder.ymom = 0
                            this.lefthand.ymom = this.punchspeed * 18
                            this.lefthand.xmom = this.punchspeed * -5.1
                            this.lefthand.fired = 18
                        }
                    }
                }
                if (this.hortsmash == 1) {
                    if (this.righthand.fired <= 0) {
                        if (this.righthand.anchored == 0) {
                            let shot = new Shot(this.rightshoulder.x, this.rightshoulder.y, 20, "#FFAA00", this.speed * 1.2, -this.speed * 1.4)
                            shot.gravity = 1
                            this.shots.push(shot)
                            this.fleeing = 0
                            this.rightshoulder.xmom = 0
                            this.rightshoulder.ymom = 0
                            this.righthand.ymom = this.punchspeed * 5
                            this.righthand.xmom = this.punchspeed * 18.1
                            this.righthand.fired = 22
                        }
                    }
                    if (this.lefthand.fired <= 0) {
                        if (this.lefthand.anchored == 0) {
                            let shot = new Shot(this.leftshoulder.x, this.leftshoulder.y, 20, "#FFAA00", - this.speed * 1.2, -this.speed * 1.4)
                            shot.gravity = 1
                            this.shots.push(shot)
                            this.fleeing = 0
                            this.leftshoulder.xmom = 0
                            this.leftshoulder.ymom = 0
                            this.lefthand.ymom = this.punchspeed * 5
                            this.lefthand.xmom = -this.punchspeed * 18.1
                            this.lefthand.fired = 22
                        }
                    }
                }

                if (this.righthand.fired <= 0) {
                    if (this.righthand.anchored == 0) {
                        if (this.rightshot == 1) {
                            if (this.face == 1) {
                                if (this.righthand.anchored == 0) {
                                    let shot = new Shot(this.righthand.x, this.righthand.y, 40, "#FF0000", this.speed * (1.9), 0)
                                    // if(this.wasfalse[1] == 0){
                                    shot.gravity = -.1
                                    shot.countdown = 100
                                    if (this.charge <= 0) {
                                        this.righthand.fired = 10
                                        if (this.righthand.anchored == 0) {
                                            this.charge += 40.5
                                        }
                                        this.shots.push(shot)
                                        if (this.grounded != 1) {
                                            this.body.xmom -= .5
                                        }
                                    } else {
                                        // if (this.charge < 104) {
                                        //     this.charge = 200
                                        // }
                                    }
                                }
                            }
                        }
                        if (this.leftshot == 1) {
                            if (this.face == -1) {
                                if (this.lefthand.anchored == 0) {
                                    let shot = new Shot(this.lefthand.x, this.lefthand.y, 40, "#FF0000", -this.speed * (1.9), 0)
                                    shot.gravity = -.1
                                    shot.countdown = 100
                                    if (this.charge <= 0) {
                                        this.lefthand.fired = 10
                                        if (this.lefthand.anchored == 0) {
                                            this.charge += 40.5
                                        }
                                        this.shots.push(shot)
                                        if (this.grounded != 1) {
                                            this.body.xmom -= .5
                                        }
                                    }
                                }
                            }
                        }
                    }
                }

            }

        }
        fightcontrol() {
            this.breaks()


            for (let t = 0; t < this.shots.length; t++) {
                if (typeof this.shots[t].gravity == "number") {
                    this.shots[t].ymom += this.shots[t].gravity
                }
                if (typeof this.shots[t].countdown == "number") {
                    this.shots[t].countdown--
                    this.shots[t].gravity = Math.cos(this.shots[t].countdown * (Math.PI / 4)) * 20
                    if (this.shots[t].countdown <= 0) {
                        this.shots[t].marked = 1
                    }
                }
                this.shots[t].move()
                this.shots[t].draw()
            }
            for (let t = 0; t < this.shots.length; t++) {
                if (this.shots[t].marked == 1) {
                    this.shots.splice(t, 1)
                }
            }

            if (this.screwtimer > 0) {
                this.screwtimer--
                this.screwangle += this.screwmomentum
            } else {
                this.screwtimer = 0
                this.screwangle = 0
            }


            this.righthand.fired--
            this.charge--
            if (this.charge <= 0) {
                this.charge = 0
            }
            this.body.fired -= .25
            this.lefthand.fired--

            this.breaktimer--
            if (gamepadAPI[this.controller].buttonsStatus.includes('RB') || keysPressed['o']) {
                if (this.breaktimer < 0) {
                    if (this.grounded !== 0) {
                        // if(this.wasfalse.includes(0)){
                        // }else{
                        this.shieldpower -= .63
                        this.shield = 1
                        let shild = new Circle(this.body.x, this.body.y, (Math.max((new LineOP(this.body, this.lefthand)).hypotenuse(), (new LineOP(this.body, this.righthand)).hypotenuse())) + this.lefthand.radius, this.body.color + Math.min(Math.round(this.shieldpower + 10), 99))
                        shild.draw()
                        // }
                    }
                }
            } else {
                this.shield = 0
                this.shieldpower += .2
                if (this.shieldpower > 100) {
                    this.shieldpower = 100
                }
            }



            if (this.breaktimer <= 0 && this.shield == 0) {


                if (this.righthand.fired <= 0) {
                    if (gamepadAPI[this.controller].buttonsStatus.includes('B') || keysPressed['l']) {
                        if (this.face == 1) {
                            if (this.righthand.anchored == 0) {
                                let shot = new Shot(this.righthand.x, this.righthand.y, 40, "#FF0000", this.speed * (1.9), 0)
                                // if(this.wasfalse[1] == 0){
                                shot.gravity = -.1
                                shot.countdown = 100
                                if (this.charge <= 0) {
                                    this.righthand.fired = 10
                                    if (this.righthand.anchored == 0) {
                                        this.charge += 40.5
                                    }
                                    this.shots.push(shot)
                                    if (this.grounded != 1) {
                                        this.body.xmom -= .5
                                    }
                                }
                            }
                        }
                        if (this.face == -1) {
                            if (this.lefthand.anchored == 0) {
                                let shot = new Shot(this.lefthand.x, this.lefthand.y, 40, "#FF0000", -this.speed * (1.9), 0)
                                shot.gravity = -.1
                                shot.countdown = 100
                                if (this.charge <= 0) {
                                    this.lefthand.fired = 10
                                    if (this.lefthand.anchored == 0) {
                                        this.charge += 40.5
                                    }
                                    this.shots.push(shot)
                                    if (this.grounded != 1) {
                                        this.body.xmom -= .5
                                    }
                                }
                            }
                        }
                    }
                }

                if (this.body.fired > 0) {
                    this.body.ymom -= this.body.fired * .025
                }
                if (gamepadAPI[this.controller].buttonsStatus.includes('Y') || keysPressed['i']) {

                    if (this.body.fired <= 0) {
                        this.jumping = 1
                        this.screwangle = Math.PI * 1.5
                        this.screwtimer = 30
                        this.lefthand.fired = 40
                        this.righthand.fired = 40
                        this.lefthand.ymom = -70
                        this.righthand.ymom = -70
                        this.lefthand.xmom = 25
                        this.righthand.xmom = -25
                        this.body.fired = 35
                        this.lefthand.anchored = -10
                        this.righthand.anchored = -10
                        this.body.ymom = -jumplimit
                    }
                }
                if (gamepadAPI[this.controller].buttonsStatus.includes('A') || keysPressed['k']) {
                    if (this.righthand.fired <= 0) {
                        if (this.righthand.anchored == 0) {
                            this.rightshoulder.xmom = 0
                            this.rightshoulder.ymom = 0
                            this.righthand.ymom = this.punchspeed * 18
                            this.righthand.xmom = -this.punchspeed * -5.1
                            this.righthand.fired = 18
                        }
                    }
                    if (this.lefthand.fired <= 0) {
                        if (this.lefthand.anchored == 0) {
                            this.leftshoulder.xmom = 0
                            this.leftshoulder.ymom = 0
                            this.lefthand.ymom = this.punchspeed * 18
                            this.lefthand.xmom = this.punchspeed * -5.1
                            this.lefthand.fired = 18
                        }
                    }
                }

                if (gamepadAPI[this.controller].buttonsStatus.includes('X') || keysPressed['j']) {
                    if (this.righthand.fired <= 0) {
                        if (this.righthand.anchored == 0) {
                            let shot = new Shot(this.rightshoulder.x, this.rightshoulder.y, 20, "#FFAA00", this.speed * 1.2, -this.speed * 1.4)
                            shot.gravity = 1
                            this.shots.push(shot)
                            this.fleeing = 0
                            this.rightshoulder.xmom = 0
                            this.rightshoulder.ymom = 0
                            this.righthand.ymom = this.punchspeed * 5
                            this.righthand.xmom = this.punchspeed * 18.1
                            this.righthand.fired = 22
                        }
                    }
                    if (this.lefthand.fired <= 0) {
                        if (this.lefthand.anchored == 0) {
                            let shot = new Shot(this.leftshoulder.x, this.leftshoulder.y, 20, "#FFAA00", - this.speed * 1.2, -this.speed * 1.4)
                            shot.gravity = 1
                            this.shots.push(shot)
                            this.fleeing = 0
                            this.leftshoulder.xmom = 0
                            this.leftshoulder.ymom = 0
                            this.lefthand.ymom = this.punchspeed * 5
                            this.lefthand.xmom = -this.punchspeed * 18.1
                            this.lefthand.fired = 22
                        }
                    }
                }
            }

        }
        degripl() {
            this.body.sxmom = 0
            this.body.symom = 0

            if (this.lefthand.anchored == 1) {

                if (this.body.ymom > 0) {
                    this.body.ymom = 0
                }
                this.body.ymom -= this.speed
                this.lefthand.anchored = -10
                this.righthand.anchored = -10
                for (let t = 0; t < this.springs.length; t++) {
                    this.springs[t].balance()
                }
                for (let t = 0; t < this.nodes.length; t++) {
                    this.nodes[t].move()
                }
            }


        }
        degripr() {
            this.body.sxmom = 0
            this.body.symom = 0

            if (this.righthand.anchored == 1) {

                if (this.body.ymom > 0) {
                    this.body.ymom = 0
                }
                this.body.ymom -= this.speed
                this.lefthand.anchored = -10
                this.righthand.anchored = -10
                for (let t = 0; t < this.springs.length; t++) {
                    this.springs[t].balance()
                }
                for (let t = 0; t < this.nodes.length; t++) {
                    this.nodes[t].move()
                }
            }


        }
        collideStage() {
            for (let t = 0; t < stage.bricks.length; t++) {
                for (let k = 0; k < this.nodes.length; k++) {
                    stage.bricks[t].doesPerimeterTouch(this.nodes[k])
                }
            }
            this.fixupshoulder()
            //this.enemycollide()
        }
        draw() {

            if (this.righthand.anchored == 1) {
                if (this.body.x > this.righthand.x) {
                    this.righthand.anchored = -10
                }
            }
            if (this.lefthand.anchored == 1) {
                if (this.body.x < this.lefthand.x) {
                    this.lefthand.anchored = -10
                }
            }

            if (this.lefthand.anchored != 1 && this.righthand.anchored != 1) {
                this.body.sxmom = 0
                this.body.symom = 0
            }
            // if (this.controller == 0) {
            if (this == boys[0]) {
                // if (this.breaktimer < 0) {
                //     this.AImove(this.body, this.speed, this.controller)

                //     if (this.righthand.anchored == 0) {
                //         this.AImove(this.righthand, this.speed, this.controller)
                //     }
                //     if (this.lefthand.anchored == 0) {
                //         this.AImove(this.lefthand, this.speed, this.controller)
                //     }
                //     this.doubleJump()
                // }
                if (this.breaktimer < 0) {
                    gamepad_control_controller_proto(this.body, this.speed, this.controller)

                    if (this.righthand.anchored == 0) {
                        gamepad_control_controller_proto(this.righthand, this.speed, this.controller)
                    }
                    if (this.lefthand.anchored == 0) {
                        gamepad_control_controller_proto(this.lefthand, this.speed, this.controller)
                    }
                    this.doubleJump()
                }
            } else {
                if (this.breaktimer < 0) {
                    this.AImove(this.body, this.speed, this.controller)

                    if (this.righthand.anchored == 0) {
                        this.AImove(this.righthand, this.speed, this.controller)
                    }
                    if (this.lefthand.anchored == 0) {
                        this.AImove(this.lefthand, this.speed, this.controller)
                    }
                    this.doubleJump()
                }
            }
            // }
            if (this.lefthand.anchored == 1 || this.righthand.anchored == 1) {
                this.body.xmom *= .2
            }
            if (this.jumping == 1) {
                this.body.xmom *= .95
            }

            if (this.grounded == 0) {

                if (this.lefthand.anchored == 1) {
                    this.body.ymom *= .1
                    this.body.symom = this.leftshoulder.ymom * .99
                    this.body.sxmom = this.leftshoulder.xmom * .99
                } else if (this.righthand.anchored == 1) {
                    this.body.ymom *= .1
                    this.body.symom = this.rightshoulder.ymom * .99
                    this.body.sxmom = this.rightshoulder.xmom * .99
                } else {
                    // if (Math.abs(this.body.sxmom) < 5) {
                    //     // this.body.sxmom *= 0
                    //     this.body.xmom *= .5
                    // }
                }
                this.body.ymom += this.gravity
            } else {

                this.jumpcount = 0
                this.jumping -= .5

                this.body.xmom *= .7

                if (this.body.ymom > 0) {
                    this.body.ymom = 0
                }
            }
            if (this.jumping < 0) {
                this.jumping = 0
            }
            this.grounded = 0
            if (this.lefthand.anchored <= -1) {
                this.lefthand.anchored++
            } else {
                //this.collideStage()
            }
            if (this.righthand.anchored <= -1) {
                this.righthand.anchored++
            } else {
                //this.collideStage()
            }
            this.righthand.ymom += this.gravity
            this.lefthand.ymom += this.gravity


            if (this.body.ymom < -vsmashlimit) {
                this.body.ymom = -vsmashlimit
            }
            if (this.body.ymom > vsmashlimit) {
                this.body.ymom = vsmashlimit
            }

            this.body.xmom *= .99
            this.body.ymom *= .99

            for (let t = 0; t < this.nodes.length; t++) {
                this.nodes[t].frictiveMove()
            }
            for (let t = 0; t < this.nodes.length; t++) {
                this.nodes[t].smove()
            }

            this.lefthand.xmom += (this.lefthand.x - this.body.x) / 80
            this.righthand.xmom += (this.righthand.x - this.body.x) / 80
            this.leftshoulder.xmom -= (this.leftshoulder.x - this.body.x) / 40
            this.rightshoulder.xmom -= (this.rightshoulder.x - this.body.x) / 40
            this.fixupshoulder()

            // this.leftshoulder.x = this.body.x - (this.body.radius + this.shoulderwidth)
            // this.leftshoulder.y = this.body.y

            // this.rightshoulder.x = this.body.x + (this.body.radius + this.shoulderwidth)
            // this.rightshoulder.y = this.body.y

            // this.leftshoulder.xmom *= 0
            // this.leftshoulder.ymom *= 0

            // this.rightshoulder.xmom *= 0
            // this.rightshoulder.ymom *= 0


            this.leftarm = new LineOP(this.leftshoulder, this.lefthand, invertColor(this.body.color), 8)
            this.rightarm = new LineOP(this.rightshoulder, this.righthand, invertColor(this.body.color), 8)



            this.collideStage()
            for (let t = 0; t < this.links.length; t++) {
                //this.collideStage()
                this.links[t].color = invertColor(this.body.color)
                this.links[t].draw()
            }
            for (let t = 0; t < this.nodes.length; t++) {
                //this.collideStage()
                this.nodes[t].draw()
            }
            for (let t = 0; t < this.springs.length; t++) {
                this.springs[t].beam.color = invertColor(this.body.color)
                this.springs[t].balance()
            }
            for (let t = 0; t < this.hitboxes.length; t++) {

            }
            // if (this.controller == 0) {

            let link = new Line(this.body.x, this.body.y, this.body.x + (((this.body.radius * .8) * this.face)), this.body.y + Math.sin(this.screwangle), invertColor(this.body.color), this.body.radius * .2)

            canvas_context.lineWidth = this.strokeWidth
            canvas_context.strokeStyle = (this.body.color)
            canvas_context.beginPath();
            canvas_context.arc(((link.x1 + link.x2) * .5) + Math.cos(this.screwangle), link.y1 + this.body.radius * .1, this.body.radius * .4, this.screwangle, (Math.PI * 1) + this.screwangle, true)
            canvas_context.fillStyle = (this.body.color)
            canvas_context.fill()
            canvas_context.stroke();
            canvas_context.beginPath();
            canvas_context.arc(((link.x1 + link.x2) * .5) + Math.cos(this.screwangle), link.y1 - this.body.radius * .1, this.body.radius * .4, this.screwangle, (Math.PI * 1) + this.screwangle, false)
            canvas_context.fillStyle = (this.body.color)
            canvas_context.fill()
            canvas_context.stroke();
            // if (this.screwangle == 0) {
            //     link.draw()
            // }

            if (this == boys[0]) {

                // this.AI()
                this.fightcontrol()
            } else {
                this.AI()
            }
            // }
            if (this.breaktimer > 0) {
                for (let t = 0; t < 5; t++) {
                    let spot = new Circle(this.body.x + ((Math.random() - .5) * this.body.radius * 2), this.body.y - (this.body.radius + 4), 3, "yellow")
                    spot.draw()
                }
            }
            if (this.screwangle != 0) {
                let link1 = new Line(this.rightshoulder.x, this.rightshoulder.y, this.rightshoulder.x + 50, this.rightshoulder.y + 50, invertColor(this.body.color), 8)
                let link2 = new Line(this.leftshoulder.x, this.leftshoulder.y, this.leftshoulder.x - 50, this.leftshoulder.y + 50, invertColor(this.body.color), 8)
                link1.draw()
                link2.draw()
            }

            canvas_context.font = "32px arial"
            canvas_context.fillStyle = `rgb(${255 - (this.damage / 10)},${255 - this.damage},${255 - this.damage})`
            canvas_context.fillText(`${Math.round(this.damage)}%`, this.body.x - 20, this.body.y - 60)
            // if (this != boys[0]) {
            //     canvas_context.fillText(`${Math.round(this.dmomu)},${Math.round(this.amomu)}`, this.body.x - 20, this.body.y - 150)
            //     canvas_context.fillText(`Under:${Math.round(this.under)},Safe:${Math.round(this.safe)}`, this.body.x - 20, this.body.y - 200)
            //     canvas_context.fillText(`Height:${Math.round(this.brick.edgeright.y)}`, this.body.x - 20, this.body.y - 250)
            //     if (this.fleeing == 1) {
            //         canvas_context.fillText(`fleeing`, this.body.x - 20, this.body.y - 100)
            //     }
            // }

        }
    }




    class Jox {
        constructor(controller) {
            this.blasting = 0
            this.reflecting = 0
            this.brick = new Brick(1, 1, 1, 1)
            this.dmomu = 0
            this.amomu = 0
            this.amom = 0
            this.dmom = 0
            this.fleeing = 0
            this.face = 0
            this.screwshot = 0
            this.rightshot = 0
            this.hortsmash = 0
            this.leftshot = 0
            this.downspike = 0
            this.storeshield = 0
            this.wasfalse = []
            for (let t = 0; t < 100; t++) {
                this.wasfalse.push(1)
            }
            this.shield = 0
            this.shieldpower = 100
            this.breaktimer = 0
            this.screwangle = 0
            this.charge = 0
            this.shots = []
            this.controller = controller
            this.armlength = 12
            this.shoulderwidth = 12
            this.damage = 0
            this.nodes = []
            this.springs = []
            this.hitboxes = []
            this.links = []
            this.speed = 11.5
            this.punchspeed = 5
            this.grounded = 0
            this.jumping = 1


            this.color = getRandomColor()
            if (controller == 0) {
                this.color = "#ffAA00"
            }
            if (controller == 1) {
                this.color = "#ff0000"
            }
            this.body = new ShotC(700 + ((boys.length * 1200) % 2260), 500, 37, this.color)
            this.nodes.push(this.body)
            this.leftshoulder = new ShotC(this.body.x - (this.body.radius + this.shoulderwidth), 350, 12, "magenta", 0, 0, .999)
            this.rightshoulder = new ShotC(this.body.x + (this.body.radius + this.shoulderwidth), 350, 12, "red", 0, 0, .999)
            this.lefthand = new ShotC(this.leftshoulder.x, (this.leftshoulder.y + this.armlength), 14, "magenta", 0, 0, .85)
            this.righthand = new ShotC(this.rightshoulder.x, (this.rightshoulder.y + this.armlength), 14, "red", 0, 0, .85)
            this.nodes.push(this.leftshoulder)
            this.nodes.push(this.rightshoulder)
            this.nodes.push(this.righthand)
            this.nodes.push(this.lefthand)
            this.leftcollar = new LineOP(this.leftshoulder, this.body, this.body.color, 8)
            this.rightcollar = new LineOP(this.rightshoulder, this.body, this.body.color, 8)
            this.links.push(this.leftcollar)
            this.links.push(this.rightcollar)
            this.leftarm = new LineOP(this.leftshoulder, this.lefthand, invertColor(this.body.color), 8)
            this.rightarm = new LineOP(this.rightshoulder, this.righthand, invertColor(this.body.color), 8)
            this.links.push(this.leftarm)
            this.links.push(this.rightarm)
            this.leftarm = new SpringOP(this.leftshoulder, this.lefthand, this.armlength, 8)
            this.rightarm = new SpringOP(this.rightshoulder, this.righthand, this.armlength, 8)
            this.springs.push(this.leftarm)
            this.springs.push(this.rightarm)
            this.gravity = 1
            this.righthand.fired = 0
            this.lefthand.fired = 0
            this.body.fired = 0
            this.screwmomentum = 0
            this.screwtimer = 0
            for (let t = 0; t < this.nodes.length; t++) {
                this.nodes[t].self = this // lmao
            }

        }
        copy() {
            let copy = new Jox(this.controller)
            copy.body.color = this.body.color
            return copy
        }
        control() {
            gamepad_control_controller_proto(this.center, this.speed + (this.speed * (this.grounded * .5)), this.controller)
        }
        fixupshoulder() {

            for (let t = 0; t < stage.bricks.length; t++) {
                if (stage.bricks[t].edgeleft.x < this.body.x && stage.bricks[t].edgeright.x > this.body.x) {
                    if (this.brick.edgeleft.x < this.body.x && this.brick.edgeright.x > this.body.x) {
                        if (Math.max(this.brick.edgeright.y, this.brick.edgeleft.y) > Math.max(stage.bricks[t].edgeright.y, stage.bricks[t].edgeleft.y)) {
                            if (this.body.y < Math.max(stage.bricks[t].edgeright.y, stage.bricks[t].edgeleft.y)) {
                                this.brick = stage.bricks[t]
                            }
                        }
                    } else {
                        this.brick = stage.bricks[t]
                    }
                }
            }

            if (this.screwangle != 0) {

                this.leftshoulder.x = this.body.x + ((((this.body.radius + this.shoulderwidth) * (Math.cos(this.screwangle)))))
                this.leftshoulder.y = this.body.y - (((this.body.radius + this.shoulderwidth) * (Math.sin(this.screwangle))))

                this.rightshoulder.x = this.body.x + (((this.body.radius + this.shoulderwidth) * (Math.cos(this.screwangle))))
                this.rightshoulder.y = this.body.y - (((this.body.radius + this.shoulderwidth) * (Math.sin(this.screwangle))))

                this.leftshoulder.color = this.body.color
                this.rightshoulder.color = this.body.color
                this.lefthand.color = this.body.color
                this.righthand.color = this.body.color


                if (this.lefthand.anchored !== 1) {
                    this.lefthand.x = this.leftshoulder.x
                    this.lefthand.y = this.leftshoulder.y
                    // this.lefthand.xmom *=  this.lefthand.friction
                    // this.lefthand.ymom *=  this.lefthand.friction
                    // this.leftshoulder.xmom *= 0
                    // this.leftshoulder.ymom *= 0
                }
                if (this.righthand.anchored !== 1) {
                    this.righthand.x = this.rightshoulder.x
                    this.righthand.y = this.rightshoulder.y
                    // this.righthand.xmom *=  this.righthand.friction
                    // this.righthand.ymom *=  this.righthand.friction
                    // this.rightshoulder.xmom *= 0
                    // this.rightshoulder.ymom *= 0
                }

                if (this.body.ymom < -vsmashlimit) {
                    this.body.ymom = -vsmashlimit
                }
                if (this.body.ymom > vsmashlimit) {
                    this.body.ymom = vsmashlimit
                }


                // this.lefthand.xmom += (this.lefthand.x - this.body.x) / 100
                // this.righthand.xmom += (this.righthand.x - this.body.x) / 100

                // this.lefthand.ymom += (this.lefthand.y - this.body.y) / 100
                // this.righthand.ymom += (this.righthand.y - this.body.y) / 100


            } else {
                this.leftshoulder.x = this.body.x - (this.body.radius + this.shoulderwidth * .3)
                this.leftshoulder.y = this.body.y + (this.shoulderwidth * .7)

                this.rightshoulder.x = this.body.x + (this.body.radius + this.shoulderwidth * .3)
                this.rightshoulder.y = this.body.y + (this.shoulderwidth * .7)

                this.leftshoulder.color = this.body.color
                this.rightshoulder.color = this.body.color
                this.lefthand.color = this.body.color
                this.righthand.color = this.body.color


                if (this.lefthand.anchored == 0) {
                    this.lefthand.x = this.lefthand.x + (this.leftshoulder.x - (this.body.x - (this.body.radius + this.shoulderwidth * .3)))
                    this.lefthand.y -= this.leftshoulder.y - (this.body.y + (this.shoulderwidth * .7))
                    this.leftshoulder.xmom *= 0
                    this.leftshoulder.ymom *= 0
                }
                if (this.righthand.anchored == 0) {
                    this.righthand.x = this.righthand.x + (this.rightshoulder.x - (this.body.x + (this.body.radius + this.shoulderwidth * .3)))
                    this.righthand.y -= this.rightshoulder.y - (this.body.y + (this.shoulderwidth * .7))
                    this.rightshoulder.xmom *= 0
                    this.rightshoulder.ymom *= 0
                }

                if (this.body.ymom < -vsmashlimit) {
                    this.body.ymom = -vsmashlimit
                }



            }


            // this.leftshoulder.x = this.body.x - (this.body.radius + this.shoulderwidth)
            // this.leftshoulder.y = this.body.y

            // this.rightshoulder.x = this.body.x + (this.body.radius + this.shoulderwidth)
            // this.rightshoulder.y = this.body.y

        }
        enemycollide() {


            for (let f = 0; f < boys.length; f++) {
                if (this != boys[f]) {

                    for (let t = 0; t < boys.length; t++) {
                        if (this != boys[t]) {
                            for (let k = 0; k < boys[t].shots.length; k++) {
                                if (boys[t].shots[k].marked != 1) {
                                    if (boys[t].shots[k].doesPerimeterTouch(this.body)) {
                                        if (this.reflecting <= 0) {
                                            if (this.shield == 1) {
                                                this.shieldpower -= (Math.abs(boys[t].shots[k].xmom) + Math.abs(boys[t].shots[k].ymom)) / 3
                                            } else {
                                                this.body.xmom = ((boys[t].shots[k].xmom * (this.damage / 200)) + (boys[t].shots[k].xmom * baselaunch)) * 2
                                                this.body.ymom = (((boys[t].shots[k].ymom * (this.damage / 200)) + (boys[t].shots[k].ymom * baselaunch)) * 2) - (10 * (this.damage / 200))
                                                this.damage += (Math.abs(boys[t].shots[k].xmom) + Math.abs(boys[t].shots[k].ymom)) / 2
                                                this.breaktimer = 0
                                            }
                                            boys[t].shots[k].marked = 1
                                        } else {
                                            boys[t].shots[k].ymom *= -1
                                            boys[t].shots[k].xmom *= -1
                                            this.shots.push(boys[t].shots[k])
                                            boys[t].shots.splice(k, 1)
                                        }
                                    }
                                }
                            }
                            boys[t].lefthands = castBetween(boys[t].leftshoulder, boys[t].lefthand, 20, boys[t].leftshoulder.radius)
                            boys[t].righthands = castBetween(boys[t].rightshoulder, boys[t].righthand, 20, boys[t].rightshoulder.radius)
                            if (boys[t].righthands.doesPerimeterTouch(this.body) || boys[t].righthand.doesPerimeterTouch(this.body)) {
                                if (boys[t].righthand.fired > 14) {
                                    if (this.shield == 1) {
                                        this.shieldpower -= (Math.abs(boys[t].righthand.xmom) + Math.abs(boys[t].righthand.ymom)) / 11
                                    } else {
                                        this.body.xmom = ((boys[t].righthand.xmom * (this.damage / 200)) + (boys[t].righthand.xmom * baselaunch)) * Math.max((1 + (boys[t].blasting / 40)), 1)
                                        this.body.ymom = (((boys[t].righthand.ymom * (this.damage / 200)) + (boys[t].righthand.ymom * baselaunch)) * 1) * Math.max((1 + (boys[t].blasting / 40)), 1)
                                        this.damage += ((Math.abs(boys[t].righthand.xmom) + Math.abs(boys[t].righthand.ymom)) / 7) * Math.max((1 + (boys[t].blasting / 40)), 1)
                                        this.breaktimer = 0
                                    }
                                    boys[t].righthand.fired = 14

                                    if (this.righthand.anchored == 1 || this.lefthand.anchored == 1) {
                                        this.lefthand.anchored = -40
                                        this.righthand.anchored = -40
                                    }
                                    if (this.body.ymom < -vsmashlimit) {
                                        this.body.ymom = -vsmashlimit
                                    }
                                    if (this.body.ymom > vsmashlimit) {
                                        this.body.ymom = vsmashlimit
                                    }
                                    this.body.move()
                                    this.fixupshoulder()

                                }
                            } else if (boys[t].lefthands.doesPerimeterTouch(this.body) || boys[t].lefthand.doesPerimeterTouch(this.body)) {
                                if (boys[t].lefthand.fired > 14) {

                                    if (this.shield == 1) {
                                        this.shieldpower -= (Math.abs(boys[t].lefthand.xmom) + Math.abs(boys[t].lefthand.ymom)) / 11
                                    } else {
                                        this.body.xmom = (boys[t].lefthand.xmom * (this.damage / 200)) + (boys[t].lefthand.xmom * baselaunch)
                                        this.body.ymom = (((boys[t].lefthand.ymom * (this.damage / 200)) + (boys[t].lefthand.ymom * baselaunch)) * 1)
                                        this.damage += (Math.abs(boys[t].lefthand.xmom) + Math.abs(boys[t].lefthand.ymom)) / 11
                                        this.breaktimer = 0
                                    }
                                    boys[t].lefthand.fired = 14
                                    if (this.righthand.anchored == 1 || this.lefthand.anchored == 1) {
                                        this.lefthand.anchored = -40
                                        this.righthand.anchored = -40
                                    }
                                    if (this.body.ymom < -vsmashlimit) {
                                        this.body.ymom = -vsmashlimit
                                    }
                                    if (this.body.ymom > vsmashlimit) {
                                        this.body.ymom = vsmashlimit
                                    }
                                    this.body.move()
                                    this.fixupshoulder()
                                }
                            }
                            if (boys[t].screwangle != 0 && boys[t].body.doesPerimeterTouch(this.body)) {
                                if (boys[t].body.fired > 14) {
                                    if (this.shield == 1) {
                                        this.shieldpower -= (Math.abs(boys[t].body.xmom) + Math.max(20, Math.abs(boys[t].body.ymom))) / 3
                                    } else {
                                        this.body.xmom = (boys[t].body.xmom * (this.damage / 200)) + (boys[t].body.xmom * baselaunch) * 2
                                        this.body.ymom = (((boys[t].body.ymom * (this.damage / 200)) + (boys[t].body.ymom * baselaunch)) * 2)
                                        this.damage += (Math.abs(boys[t].body.xmom) + Math.max(20, Math.abs(boys[t].body.ymom))) / 2
                                        this.breaktimer = 0
                                    }
                                    boys[t].body.fired = 14
                                    if (this.righthand.anchored == 1 || this.lefthand.anchored == 1) {
                                        this.lefthand.anchored = -40
                                        this.righthand.anchored = -40
                                    }
                                    if (this.body.ymom < -vsmashlimit) {
                                        this.body.ymom = -vsmashlimit
                                    }
                                    if (this.body.ymom > vsmashlimit) {
                                        this.body.ymom = vsmashlimit
                                    }
                                    this.body.move()
                                    this.fixupshoulder()
                                }
                            }
                        }
                    }


                    while (boys[f].body.doesPerimeterTouch(this.body)) {
                        if (this.body.x > boys[f].body.x) {
                            this.body.x += .5
                            boys[f].body.x -= .5
                            this.fixupshoulder()
                            boys[f].fixupshoulder()
                            this.body.ymom *= .99
                        } else {
                            this.body.x -= .5
                            boys[f].body.x += .5
                            this.fixupshoulder()
                            boys[f].fixupshoulder()
                            this.body.ymom *= .99
                        }

                    }


                    // while (boys[t].rightshoulder.reversePointinside(this.leftshoulder) || boys[t].rightshoulder.reversePointinside(this.body)) {
                    //     this.body.x += .5
                    //     boys[t].body.x -= .5
                    //     this.fixupshoulder()
                    //     boys[t].fixupshoulder()
                    //     this.righthand.x += .5
                    //     this.lefthand.x += .5
                    //     boys[t].lefthand.x -= .5
                    //     boys[t].righthand.x -= .5
                    // }
                    // while (boys[t].leftshoulder.reversePointinside(this.rightshoulder) || boys[t].leftshoulder.reversePointinside(this.body)) {
                    //     this.body.x -= .5
                    //     boys[t].body.x += .5
                    //     this.fixupshoulder()
                    //     boys[t].fixupshoulder()
                    //     this.righthand.x -= .5
                    //     this.lefthand.x -= .5
                    //     boys[t].lefthand.x += .5
                    //     boys[t].righthand.x += .5
                    // }
                }
            }

        }
        AIarmControl() {
            if (this.wmove == 1) {
                this.jumping = 1
                this.body.ymom = -this.speed * 2
                this.lefthand.ymom = -this.speed * 2
                this.righthand.ymom = -this.speed * 2
                this.jumpcount = 100

            }
        }
        doubleJump() {
            this.jumpcount--
            if (this.jumpcount <= -20) {
                if (this == boys[0]) {
                    gamepad_control_controller_proto_dj(this.body, this.speed, this.controller)
                } else {
                    this.AIarmControl()
                }
            }
        }
        breaks() {

            if (this.shield == 1) {
                if (this.shieldpower <= 0) {
                    this.breaktimer = 200
                    this.shieldpower = 1
                    this.shield = 0
                }
            }
        }

        AImove(object, speed, controller) {
            if (object == this.body) {
                this.amom--
                this.dmom--
                this.dmomu--
                this.amomu--
            }
            this.wmove = 0
            this.amove = 0
            this.dmove = 0
            if (Math.random() < .0015) {
                this.fleeing = 1
            }
            if (this.charge > 90) {
                this.fleeing = 0
            }
            if (Math.random() < .05) {
                this.fleeing = 0
            }

            this.safe = 0
            for (let t = 0; t < stage.bricks.length; t++) {
                if (stage.bricks[t].edgeleft.x < this.body.x && stage.bricks[t].edgeright.x > this.body.x) {
                    if (Math.max(stage.bricks[t].edgeright.y, stage.bricks[t].edgeleft.y) > this.body.y) {
                        this.safe = 1
                        break
                    }
                }
            }
            if (this.safe == 0) {
                if (Math.random() < .5) {
                    if (this.dmove == 1) {
                        this.amove = 1
                        this.dmove = 0
                    } else if (this.amove == 1) {
                        this.amove = 0
                        this.dmove = 1
                    }
                } else {
                    if (this.amove == 1) {
                        this.amove = 0
                        this.dmove = 1
                    } else if (this.dmove == 1) {
                        this.amove = 1
                        this.dmove = 0
                    }
                }
                this.fleeing = 0
            } else {

            }

            for (let t = 0; t < boys.length; t++) {
                if (this != boys[t]) {
                    if (Math.abs(this.body.x - boys[t].body.x) > 1 && this.body.y > (boys[t].body.y + 15)) {
                        this.wmove = 1
                    }

                    if (this.fleeing == 0) {
                        if (Math.abs(this.body.x - boys[t].body.x) > (this.body.radius * 5) && this.body.x > (boys[t].body.x + 5)) {
                            this.amove = 1
                        } else if (Math.abs(this.body.x - boys[t].body.x) > (this.body.radius * 5) && this.body.x < (boys[t].body.x + 5)) {
                            this.dmove = 1
                        }
                    } else {
                        if (Math.abs(this.body.x - boys[t].body.x) > (this.body.radius * 5) && this.body.x > (boys[t].body.x + 5)) {
                            this.dmove = 1
                        } else if (Math.abs(this.body.x - boys[t].body.x) > (this.body.radius * 5) && this.body.x < (boys[t].body.x + 5)) {
                            this.amove = 1
                        }
                    }


                    if (this.righthand.anchored == 1 || this.lefthand.anchored == 1) {
                        if (Math.random() < .2) {
                            this.wmove = 1
                        }
                        if (Math.random() < .1) {
                            this.dmove = 1
                        }
                        if (Math.random() < .1) {
                            this.amove = 1
                        }
                    }
                }
            }

            this.safe = 0
            for (let t = 0; t < stage.bricks.length; t++) {
                if (stage.bricks[t].edgeleft.x < (this.body.x + this.body.radius) && stage.bricks[t].edgeright.x > (this.body.x - this.body.radius)) {
                    if (Math.max(stage.bricks[t].edgeright.y, stage.bricks[t].edgeleft.y) > this.body.y) {
                        this.safe = 1
                        break
                    }
                }
            }

            this.under = 0
            for (let k = 0; k < boys.length; k++) {
                if (this != boys[k]) {
                    for (let t = 0; t < stage.bricks.length; t++) {
                        if (stage.bricks[t].edgeleft.x < (this.body.x + (this.body.radius * 1.6)) && stage.bricks[t].edgeright.x > (this.body.x - (this.body.radius * 1.6))) {
                            if (Math.max(stage.bricks[t].edgeright.y, stage.bricks[t].edgeleft.y) < this.body.y) {
                                if (boys[k].brick == stage.bricks[t]) {
                                    this.under = 1
                                } else {
                                    if (Math.abs(Math.max(stage.bricks[t].edgeright.y, stage.bricks[t].edgeleft.y) - this.body.y) < 300) {
                                        this.under = 4
                                    }
                                }
                                if (Math.abs(this.body.x - Math.max(stage.bricks[t].edgeright.x)) < Math.abs(this.body.x - Math.max(stage.bricks[t].edgeleft.x))) {
                                    if (boys[k].body.x < this.body.x) {
                                        if ((boys[k].body.y - (boys[k].body.radius * 1.5)) < Math.max(stage.bricks[t].edgeright.y, stage.bricks[t].edgeleft.y)) {
                                            if (this.body.x - (this.body.radius * 1.2) <= stage.bricks[t].edgeright.x) {
                                                if (this.grounded == 1 || this.jumping == 1) {
                                                    if (boys[k].brick == stage.bricks[t]) {
                                                        this.under = 2
                                                    }
                                                }
                                            }
                                        }
                                    }
                                } else if (Math.abs(this.body.x - Math.max(stage.bricks[t].edgeright.x)) > Math.abs(this.body.x - Math.max(stage.bricks[t].edgeleft.x))) {
                                    if (boys[k].body.x > this.body.x) {
                                        if ((boys[k].body.y - (boys[k].body.radius * 1.5)) < Math.max(stage.bricks[t].edgeright.y, stage.bricks[t].edgeleft.y)) {
                                            if (this.body.x + (this.body.radius * 1.2) >= stage.bricks[t].edgeleft.x) {
                                                if (this.grounded == 1 || this.jumping == 1) {
                                                    if (boys[k].brick == stage.bricks[t]) {
                                                        this.under = 3
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                                if (this.under !== 0) {
                                    if (this.under == 2) {
                                        this.screwshot = 0
                                        this.amove = 0
                                        this.dmom = 100
                                        this.amom = 0
                                        this.dmove = 1
                                        this.wmove = 1
                                    }
                                    if (this.under == 3) {
                                        this.screwshot = 0
                                        this.amove = 1
                                        this.amom = 100
                                        this.dmom = 0
                                        this.dmove = 0
                                        this.wmove = 1
                                    }
                                }

                                break
                            }
                        }
                    }
                }
            }

            for (let t = 0; t < boys.length; t++) {
                if (this != boys[t]) {
                    if (Math.max(boys[t].brick.edgeleft.y, boys[t].brick.edgeright.y) > Math.max(this.brick.edgeleft.y, this.brick.edgeright.y)) {
                        if (this.safe == 1) {
                            if (this.dmomu <= 0 && this.amomu <= 0) {
                                if (this.righthand.anchored != 1 && this.lefthand.anchored != 1) {
                                    if (boys[t].body.x < this.body.x) {
                                        if ((this.brick.edgeright.x > this.body.x - this.body.radius)) {
                                            this.amomu = (Math.abs(this.brick.edgeright.x - this.body.x)) / this.speed
                                            this.amomu += 25
                                        }
                                    } else {
                                        if ((this.brick.edgeleft.x < this.body.x + this.body.radius)) {
                                            this.dmomu = (Math.abs(this.brick.edgeleft.x - this.body.x)) / this.speed
                                            this.dmomu += 25
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }


            if (this.dmom > 0) {
                if (Math.random() < .003) {
                    this.screwshot = 1
                }
                this.dmove = 1
                this.wmove = 1
                this.amomu = 0
                this.dmomu = 0
            }
            if (this.amom > 0) {
                if (Math.random() < .003) {
                    this.screwshot = 1
                }
                this.amove = 1
                this.wmove = 1
                this.amomu = 0
                this.dmomu = 0
            }

            if (this.dmomu > 0) {
                this.dmove = 1
                this.amove = 0
                this.amomu = 0
                this.screwshot = 0
                this.righthand.anchored = - 5
                this.lefthand.anchored = - 5
                this.wmove = 0
            }
            if (this.amomu > 0) {
                this.amove = 1
                this.dmove = 0
                this.dmomu = 0
                this.screwshot = 0
                this.righthand.anchored = - 5
                this.lefthand.anchored = - 5
                this.wmove = 0
            }

            if (this.safe == 0) {
                if (this.under == 0) {
                    this.screwshot = 1
                }
                if (this.body.x > (1280 * (invscale * .5))) {
                    this.leftshot = 1
                    this.rightshot = 0
                    this.amove = 1
                    this.dmove = 0
                    this.wmove = 1
                    this.amomu = 0
                    this.dmomu = 0
                } else {
                    this.rightshot = 1
                    this.leftshot = 0
                    this.amove = 0
                    this.dmove = 1
                    this.wmove = 1
                    this.amomu = 0
                    this.dmomu = 0
                }
                this.fleeing = 0
            } else {

            }

            if (this.shield == 0) {

                if (this.dmove == 0 && this.amove == 0) {
                    if (Math.random() < .5) {
                        this.dmove = 1
                    } else {
                        this.amove = 1
                    }
                }
                if (this.wmove == 1) {
                    if (this.grounded == 1) {
                        this.jumping = 1
                        object.ymom -= speed
                    } else {
                        if (this.lefthand.anchored == 1) {
                            this.degripl()
                            this.jumping = 1
                            object.ymom -= speed
                        }
                        if (this.righthand.anchored == 1) {
                            this.degripr()
                            this.jumping = 1
                            object.ymom -= speed
                        }
                    }
                }
                if (this.dmove == 1) {
                    this.face = 1
                    if (object == this.body) {
                        object.x += speed
                        this.righthand.x -= speed
                        this.lefthand.x -= speed
                    }
                    if (this.righthand.anchored == 1) {
                        this.degripr()
                        this.jumping = 1
                    }
                }
                // if (keysPressed['s']) {
                //     object.y += speed
                //     this.degrip()
                // }
                if (this.amove == 1) {
                    this.face = -1
                    if (object == this.body) {
                        object.x -= speed
                        this.righthand.x -= speed
                        this.lefthand.x -= speed
                    }
                    if (this.righthand.anchored == 1 || this.lefthand.anchored == 1) {
                        this.degripl()
                        this.jumping = 1
                    }
                }


                // if (typeof (gamepadAPI[controller].axesStatus[1]) != 'undefined') {
                // if (gamepadAPI[controller].axesStatus[0] > .1) {
                //     this.face = 1
                // }

                // if (gamepadAPI[controller].axesStatus[1] < -.1) {
                //     this.face = -1
                // }
                // }

            }
            // if (this.dmomu > 0 || this.amomu > 0) {
            //     this.lefthand.anchored = 0
            //     this.righthand.anchored = 0
            // }

        }
        AI() {
            this.breaks()
            for (let t = 0; t < this.shots.length; t++) {
                if (typeof this.shots[t].gravity == "number") {
                    this.shots[t].ymom += this.shots[t].gravity
                }
                if (typeof this.shots[t].countdown == "number") {
                    this.shots[t].countdown--
                    this.shots[t].gravity = Math.cos(this.shots[t].countdown * (Math.PI / 4)) * 20
                    if (this.shots[t].countdown <= 0) {
                        this.shots[t].marked = 1
                    }
                }
                this.shots[t].move()
                this.shots[t].draw()
            }
            for (let t = 0; t < this.shots.length; t++) {
                if (this.shots[t].marked == 1) {
                    this.shots.splice(t, 1)
                }
            }

            if (this.screwtimer > 0) {
                this.screwtimer--
                if (this.screwtimer <= 15) {
                    this.body.ymom = -jumplimit
                }
                this.screwangle += this.screwmomentum
            } else {
                this.screwtimer = 0
                this.screwangle = 0
            }


            this.reflecting--
            this.blasting--
            if (this.blasting == 0) {
                this.body.xmom *= .5
            }
            this.righthand.fired--
            this.charge--
            if (this.charge <= 0) {
                this.charge = 0
            }
            this.body.fired -= 1
            this.lefthand.fired--

            this.breaktimer--
            // if (gamepadAPI[this.controller].buttonsStatus.includes('RB') || keysPressed['o']) {

            if (Math.random() < .1) {
                this.storeshield = 0
            }
            if (Math.random() < .5) {
                this.screwshot = 0
            }
            if (Math.random() < .01) {
                this.rightshot = 0
            }
            if (Math.random() < .01) {
                this.leftshot = 0
            }
            if (Math.random() < .1) {
                this.downspike = 0
            }
            if (Math.random() < .1) {
                this.hortsmash = 0
            }
            for (let t = 0; t < boys.length; t++) {
                if (this != boys[t]) {

                    for (let g = 0; g < boys[t].shots.length; g++) {
                        let link = new LineOP(this.body, boys[t].shots[g])
                        if (link.hypotenuse() / (Math.abs(boys[t].shots[g].xmom) + Math.abs(boys[t].shots[g].ymom)) < 20) {
                            this.hortsmash = 1
                        }
                    }

                    if (Math.abs(this.body.x - boys[t].body.x) < 50 && this.body.y < boys[t].body.y) {
                        this.downspike = 1
                    } else if (Math.abs(this.body.x - boys[t].body.x) < 150 && this.body.y <= boys[t].body.y && (boys[t].righthand.anchored == 1 || boys[t].lefthand.anchored == 1)) {
                        this.downspike = 1
                    }
                    if (Math.abs(this.body.x - boys[t].body.x) < 70 && (this.body.y - boys[t].body.y) > 100) {
                        this.screwshot = 1
                    }




                    if (Math.abs(this.body.x - boys[t].body.x) < 240) {
                        if (this.body.x > boys[t].body.x) {
                            if (this.face == 1) {
                                this.hortsmash = 1
                            }
                        }
                        if (this.body.x < boys[t].body.x) {
                            if (this.face == -1) {
                                this.hortsmash = 1
                            }
                        }
                    }

                    if (boys[t].righthand.fired > 14) {
                        if (this.body.x > boys[t].body.x) {
                            if (Math.random() < .09) {
                                this.storeshield = 1
                            }
                        }
                    }
                    if (this.screwshot + this.hortsmash + this.downspike + this.storeshield == 0) {
                        if (Math.abs(this.body.y - boys[t].body.y) < 30 && this.body.x > boys[t].body.x) {
                            if (this.face == -1) {
                                if (Math.abs(this.body.x - boys[t].body.x) > 100) {
                                    this.leftshot = 1
                                }
                            }
                        }
                        if (Math.abs(this.body.y - boys[t].body.y) < 30 && this.body.x < boys[t].body.x) {
                            if (this.face == 1) {
                                if (Math.abs(this.body.x - boys[t].body.x) > 100) {
                                    this.rightshot = 1
                                }
                            }
                        }
                    }


                    if (Math.abs(this.body.y - boys[t].body.y) < 50 && Math.abs(this.body.x - boys[t].body.x) < 200) {
                        if (boys[t].lefthand.fired > 14 || boys[t].righthand.fired > 14) {
                            if (this.body.x < boys[t].body.x) {
                                if (Math.random() < .4) {
                                    this.storeshield = 1
                                }
                            }
                        }
                    }
                }
            }

            this.safe = 0
            for (let t = 0; t < stage.bricks.length; t++) {
                if (stage.bricks[t].edgeleft.x < (this.body.x + (this.body.radius * 2.5)) && stage.bricks[t].edgeright.x > (this.body.x - (this.body.radius * 2.5))) {
                    if (Math.max(stage.bricks[t].edgeright.y, stage.bricks[t].edgeleft.y) > this.body.y) {
                        this.safe = 1
                        break
                    }
                }
            }

            if (this.safe == 0) {
                this.screwshot = 1
                if (this.under == 0) {
                    this.screwshot = 1
                } else {
                    this.wmove = 1
                }
            }

            if (this.shieldpower < 10) {
                if (Math.random() < .95) {
                    this.storeshield = 0
                }
            }
            if (this.storeshield == 1) {
                if (this.breaktimer < 0) {
                    if (this.grounded == 1) {
                        this.shieldpower -= .63
                        this.shield = 1
                        let shild = new Circle(this.body.x, this.body.y, (Math.max((new LineOP(this.body, this.lefthand)).hypotenuse(), (new LineOP(this.body, this.righthand)).hypotenuse())) + this.lefthand.radius, this.body.color + Math.min(Math.round(this.shieldpower + 10), 99))
                        shild.draw()
                    }
                }
            } else {
                this.shield = 0
                this.shieldpower += .2
                if (this.shieldpower > 100) {
                    this.shieldpower = 100
                }
            }

            if (this.breaktimer <= 0 && this.shield == 0) {
                if (this.screwshot == 1) {
                    if (this.body.fired <= 0) {
                        this.jumping = 1
                        this.screwangle = Math.PI * 1.5
                        this.screwtimer = 35
                        this.lefthand.ymom = -70
                        this.righthand.ymom = -70
                        this.lefthand.xmom = 25
                        this.righthand.xmom = -25
                        this.lefthand.fired = 40
                        this.righthand.fired = 40
                        this.body.fired = 35
                        this.lefthand.anchored = -10
                        this.righthand.anchored = -10
                        this.body.ymom = -jumplimit
                    }
                }
                if (this.downspike == 1) {
                    if (this.righthand.fired <= 0) {
                        if (this.righthand.anchored == 0) {
                            this.rightshoulder.xmom = 0
                            this.rightshoulder.ymom = 0
                            this.righthand.ymom = this.punchspeed * 12
                            this.righthand.xmom = -this.punchspeed * - 10.1
                            this.righthand.fired = 18
                        }
                    }
                    if (this.lefthand.fired <= 0) {
                        if (this.lefthand.anchored == 0) {
                            this.leftshoulder.xmom = 0
                            this.leftshoulder.ymom = 0
                            this.lefthand.ymom = this.punchspeed * 12
                            this.lefthand.xmom = this.punchspeed * - 10.1
                            this.lefthand.fired = 18
                        }
                    }
                }
                if (this.hortsmash == 1) {
                    if (this.reflecting <= -10) {
                        this.reflecting = 20
                        this.lefthand.xmom = this.punchspeed * 23.5
                        this.lefthand.fired = 21
                        this.righthand.xmom = -this.punchspeed * 23.5
                        this.righthand.fired = 21
                        this.righthand.ymom = this.punchspeed * 3
                        this.lefthand.ymom = this.punchspeed * 3
                    }
                }



                if (this.body.x < 35 * 20) {
                    this.leftshot = 0
                }
                if (this.body.x > (canvas.width * invscale) - 35 * 20) {
                    this.rightshot = 0
                }

                if (this.blasting <= -15) {
                    if (this.rightshot == 1) {
                        if (this.face == 1) {
                            if (this.righthand.anchored == 0) {
                                if (this.charge <= 0) {
                                    this.righthand.fired = 20
                                    if (this.righthand.anchored == 0) {
                                        this.charge += 40.5
                                    }
                                    this.body.xmom = 35
                                    if (this.body.ymom > 0) {
                                        this.body.ymom = -1
                                    }
                                    this.grounded = 0
                                    this.jumping = 1
                                    this.body.fired = 20
                                    this.blasting = 20
                                }
                            }
                        }
                    }
                    if (this.leftshot == 1) {
                        if (this.face == -1) {
                            if (this.lefthand.anchored == 0) {
                                if (this.charge <= 0) {
                                    this.lefthand.fired = 20
                                    if (this.lefthand.anchored == 0) {
                                        this.charge += 40.5
                                    }
                                    this.body.xmom = -35
                                    if (this.body.ymom > 0) {
                                        this.body.ymom = -1
                                    }
                                    this.grounded = 0
                                    this.jumping = 1
                                    this.body.fired = 20
                                    this.blasting = 20
                                }
                            }
                        }
                    }
                }

            }

        }
        fightcontrol() {
            this.breaks()


            for (let t = 0; t < this.shots.length; t++) {
                if (typeof this.shots[t].gravity == "number") {
                    this.shots[t].ymom += this.shots[t].gravity
                }
                if (typeof this.shots[t].countdown == "number") {
                    this.shots[t].countdown--
                    this.shots[t].gravity = Math.cos(this.shots[t].countdown * (Math.PI / 4)) * 20
                    if (this.shots[t].countdown <= 0) {
                        this.shots[t].marked = 1
                    }
                }
                this.shots[t].move()
                this.shots[t].draw()
            }
            for (let t = 0; t < this.shots.length; t++) {
                if (this.shots[t].marked == 1) {
                    this.shots.splice(t, 1)
                }
            }

            if (this.screwtimer > 0) {
                this.screwtimer--
                if (this.screwtimer <= 15) {
                    this.body.ymom = -jumplimit
                }
                this.screwangle += this.screwmomentum
            } else {
                this.screwtimer = 0
                this.screwangle = 0
            }


            this.reflecting--
            this.blasting--
            if (this.blasting == 0) {
                this.body.xmom *= .5
            }
            this.righthand.fired--
            this.charge--
            if (this.charge <= 0) {
                this.charge = 0
            }
            this.body.fired -= .25
            this.lefthand.fired--

            this.breaktimer--
            if (gamepadAPI[this.controller].buttonsStatus.includes('RB') || keysPressed['o']) {
                if (this.breaktimer < 0) {
                    if (this.grounded !== 0) {
                        // if(this.wasfalse.includes(0)){
                        // }else{
                        this.shieldpower -= .63
                        this.shield = 1
                        let shild = new Circle(this.body.x, this.body.y, (Math.max((new LineOP(this.body, this.lefthand)).hypotenuse(), (new LineOP(this.body, this.righthand)).hypotenuse())) + this.lefthand.radius, this.body.color + Math.min(Math.round(this.shieldpower + 10), 99))
                        shild.draw()
                        // }
                    }
                }
            } else {
                this.shield = 0
                this.shieldpower += .2
                if (this.shieldpower > 100) {
                    this.shieldpower = 100
                }
            }


            if (this.breaktimer <= 0 && this.shield == 0) {


                if (this.blasting <= -15) {
                    if (gamepadAPI[this.controller].buttonsStatus.includes('B') || keysPressed['l']) {
                        if (this.face == 1) {
                            if (this.righthand.anchored == 0) {
                                if (this.charge <= 0) {
                                    this.righthand.fired = 20
                                    if (this.righthand.anchored == 0) {
                                        this.charge += 40.5
                                    }
                                    this.body.xmom = 35
                                    if (this.body.ymom > 0) {
                                        this.body.ymom = -1
                                    }
                                    this.grounded = 0
                                    this.jumping = 1
                                    this.body.fired = 20
                                    this.blasting = 20
                                }
                            }
                        }
                        if (this.face == -1) {
                            if (this.lefthand.anchored == 0) {
                                if (this.charge <= 0) {
                                    this.lefthand.fired = 20
                                    if (this.lefthand.anchored == 0) {
                                        this.charge += 40.5
                                    }
                                    this.body.xmom = -35
                                    if (this.body.ymom > 0) {
                                        this.body.ymom = -1
                                    }
                                    this.grounded = 0
                                    this.jumping = 1
                                    this.body.fired = 20
                                    this.blasting = 20
                                }
                            }
                        }
                    }
                }

                if (gamepadAPI[this.controller].buttonsStatus.includes('Y') || keysPressed['i']) {

                    if (this.body.fired <= 0) {
                        this.jumping = 1
                        this.screwangle = Math.PI * 1.5
                        this.screwtimer = 35
                        this.lefthand.fired = 40
                        this.righthand.fired = 40
                        this.lefthand.ymom = -70
                        this.righthand.ymom = -70
                        this.lefthand.xmom = 25
                        this.righthand.xmom = -25
                        this.body.fired = 35
                        this.lefthand.anchored = -10
                        this.righthand.anchored = -10
                        this.body.ymom = -jumplimit
                    }
                }
                if (gamepadAPI[this.controller].buttonsStatus.includes('A') || keysPressed['k']) {
                    if (this.righthand.fired <= 0) {
                        if (this.righthand.anchored == 0) {
                            this.rightshoulder.xmom = 0
                            this.rightshoulder.ymom = 0
                            this.righthand.ymom = this.punchspeed * 12
                            this.righthand.xmom = -this.punchspeed * - 10.1
                            this.righthand.fired = 18
                        }
                    }
                    if (this.lefthand.fired <= 0) {
                        if (this.lefthand.anchored == 0) {
                            this.leftshoulder.xmom = 0
                            this.leftshoulder.ymom = 0
                            this.lefthand.ymom = this.punchspeed * 12
                            this.lefthand.xmom = this.punchspeed * - 10.1
                            this.lefthand.fired = 18
                        }
                    }
                }

                if (gamepadAPI[this.controller].buttonsStatus.includes('X') || keysPressed['j']) {
                    if (this.reflecting <= -10) {
                        this.reflecting = 20
                        this.lefthand.xmom = this.punchspeed * 23.5
                        this.lefthand.fired = 21
                        this.righthand.xmom = -this.punchspeed * 23.5
                        this.righthand.ymom = this.punchspeed * 3
                        this.lefthand.ymom = this.punchspeed * 3
                        this.righthand.fired = 21
                    }
                }
            }

        }
        degripl() {
            this.body.sxmom = 0
            this.body.symom = 0

            if (this.lefthand.anchored == 1) {

                if (this.body.ymom > 0) {
                    this.body.ymom = 0
                }
                this.body.ymom -= this.speed
                this.lefthand.anchored = -10
                this.righthand.anchored = -10
                for (let t = 0; t < this.springs.length; t++) {
                    this.springs[t].balance()
                }
                for (let t = 0; t < this.nodes.length; t++) {
                    this.nodes[t].move()
                }
            }


        }
        degripr() {
            this.body.sxmom = 0
            this.body.symom = 0

            if (this.righthand.anchored == 1) {

                if (this.body.ymom > 0) {
                    this.body.ymom = 0
                }
                this.body.ymom -= this.speed
                this.lefthand.anchored = -10
                this.righthand.anchored = -10
                for (let t = 0; t < this.springs.length; t++) {
                    this.springs[t].balance()
                }
                for (let t = 0; t < this.nodes.length; t++) {
                    this.nodes[t].move()
                }
            }


        }
        collideStage() {
            for (let t = 0; t < stage.bricks.length; t++) {
                for (let k = 0; k < this.nodes.length; k++) {
                    stage.bricks[t].doesPerimeterTouch(this.nodes[k])
                }
            }
            this.fixupshoulder()
            //this.enemycollide()
        }
        draw() {

            if (this.righthand.anchored == 1) {
                if (this.body.x > this.righthand.x) {
                    this.righthand.anchored = -10
                }
            }
            if (this.lefthand.anchored == 1) {
                if (this.body.x < this.lefthand.x) {
                    this.lefthand.anchored = -10
                }
            }

            if (this.lefthand.anchored != 1 && this.righthand.anchored != 1) {
                this.body.sxmom = 0
                this.body.symom = 0
            }
            // if (this.controller == 0) {
            if (this == boys[0]) {
                // if (this.breaktimer < 0) {
                //     this.AImove(this.body, this.speed, this.controller)

                //     if (this.righthand.anchored == 0) {
                //         this.AImove(this.righthand, this.speed, this.controller)
                //     }
                //     if (this.lefthand.anchored == 0) {
                //         this.AImove(this.lefthand, this.speed, this.controller)
                //     }
                //     this.doubleJump()
                // }
                if (this.breaktimer < 0) {
                    gamepad_control_controller_proto(this.body, this.speed, this.controller)

                    if (this.righthand.anchored == 0) {
                        gamepad_control_controller_proto(this.righthand, this.speed, this.controller)
                    }
                    if (this.lefthand.anchored == 0) {
                        gamepad_control_controller_proto(this.lefthand, this.speed, this.controller)
                    }
                    this.doubleJump()
                }
            } else {
                if (this.breaktimer < 0) {
                    this.AImove(this.body, this.speed, this.controller)

                    if (this.righthand.anchored == 0) {
                        this.AImove(this.righthand, this.speed, this.controller)
                    }
                    if (this.lefthand.anchored == 0) {
                        this.AImove(this.lefthand, this.speed, this.controller)
                    }
                    this.doubleJump()
                }
            }
            // }
            if (this.lefthand.anchored == 1 || this.righthand.anchored == 1) {
                this.body.xmom *= .2
            }
            if (this.jumping == 1) {
                if (this.blasting <= 0) {
                    this.body.xmom *= .95
                }
            }

            if (this.grounded == 0) {

                if (this.lefthand.anchored == 1) {
                    this.body.ymom *= .1
                    this.body.symom = this.leftshoulder.ymom * .99
                    this.body.sxmom = this.leftshoulder.xmom * .99
                } else if (this.righthand.anchored == 1) {
                    this.body.ymom *= .1
                    this.body.symom = this.rightshoulder.ymom * .99
                    this.body.sxmom = this.rightshoulder.xmom * .99
                } else {
                    // if (Math.abs(this.body.sxmom) < 5) {
                    //     // this.body.sxmom *= 0
                    //     this.body.xmom *= .5
                    // }
                }
                this.body.ymom += this.gravity
            } else {

                this.jumpcount = 0
                this.jumping -= .5

                if (this.blasting <= 0) {
                    this.body.xmom *= .7
                }

                if (this.body.ymom > 0) {
                    this.body.ymom = 0
                }
            }
            if (this.jumping < 0) {
                this.jumping = 0
            }
            this.grounded = 0
            if (this.lefthand.anchored <= -1) {
                this.lefthand.anchored++
            } else {
                // //this.collideStage()
            }
            if (this.righthand.anchored <= -1) {
                this.righthand.anchored++
            } else {
                // //this.collideStage()
            }
            this.righthand.ymom += this.gravity
            this.lefthand.ymom += this.gravity


            if (this.body.ymom < -vsmashlimit) {
                this.body.ymom = -vsmashlimit
            }
            if (this.body.ymom > vsmashlimit) {
                this.body.ymom = vsmashlimit
            }

            this.body.xmom *= .99
            this.body.ymom *= .99

            for (let t = 0; t < this.nodes.length; t++) {
                this.nodes[t].frictiveMove()
            }
            for (let t = 0; t < this.nodes.length; t++) {
                this.nodes[t].smove()
            }

            this.lefthand.xmom += (this.lefthand.x - this.body.x) / 80
            this.righthand.xmom += (this.righthand.x - this.body.x) / 80
            this.leftshoulder.xmom -= (this.leftshoulder.x - this.body.x) / 40
            this.rightshoulder.xmom -= (this.rightshoulder.x - this.body.x) / 40
            this.fixupshoulder()

            // this.leftshoulder.x = this.body.x - (this.body.radius + this.shoulderwidth)
            // this.leftshoulder.y = this.body.y

            // this.rightshoulder.x = this.body.x + (this.body.radius + this.shoulderwidth)
            // this.rightshoulder.y = this.body.y

            // this.leftshoulder.xmom *= 0
            // this.leftshoulder.ymom *= 0

            // this.rightshoulder.xmom *= 0
            // this.rightshoulder.ymom *= 0


            this.leftarm = new LineOP(this.leftshoulder, this.lefthand, invertColor(this.body.color), 8)
            this.rightarm = new LineOP(this.rightshoulder, this.righthand, invertColor(this.body.color), 8)



            //this.collideStage()
            this.collideStage()
            for (let t = 0; t < this.links.length; t++) {
                // //this.collideStage()
                this.links[t].color = invertColor(this.body.color)
                this.links[t].draw()
            }
            for (let t = 0; t < this.nodes.length; t++) {
                this.nodes[t].draw()
            }
            for (let t = 0; t < this.springs.length; t++) {
                this.springs[t].beam.color = invertColor(this.body.color)
                this.springs[t].balance()
            }
            for (let t = 0; t < this.hitboxes.length; t++) {

            }
            // if (this.controller == 0) {

            let link = new Line(this.body.x, this.body.y, this.body.x + (((this.body.radius * .8) * this.face)), this.body.y + Math.sin(this.screwangle), invertColor(this.body.color), this.body.radius * .2)

            canvas_context.lineWidth = this.strokeWidth
            canvas_context.strokeStyle = invertColorx(this.body.color)
            canvas_context.fillStyle = invertColorx(this.body.color)
            canvas_context.beginPath();
            canvas_context.fillRect(((this.body.x - (this.body.radius * .4 * (-this.face)))) - ((this.body.radius * .4)), this.body.y - (this.body.radius * .4), (this.body.radius * .8), (this.body.radius * .8))
            canvas_context.fill()
            canvas_context.strokeStyle = invertColorx(this.body.color)
            canvas_context.fillStyle = invertColor(this.body.color)
            canvas_context.beginPath();
            canvas_context.fillRect(((this.body.x - (this.body.radius * .2 * (-this.face)))) - ((this.body.radius * .2)), this.body.y - (this.body.radius * .2), (this.body.radius * .4), (this.body.radius * .4))
            canvas_context.fill()
            canvas_context.stroke();
            // if (this.screwangle == 0) {
            //     link.draw()
            // }

            if (this == boys[0]) {

                // this.AI()
                this.fightcontrol()
            } else {
                this.AI()
            }
            // }
            if (this.breaktimer > 0) {
                for (let t = 0; t < 5; t++) {
                    let spot = new Circle(this.body.x + ((Math.random() - .5) * this.body.radius * 2), this.body.y - (this.body.radius + 4), 3, "yellow")
                    spot.draw()
                }
            }
            // if (this.screwangle != 0) {
            //         let link1 = new Line(this.rightshoulder.x, this.rightshoulder.y, this.rightshoulder.x+50, this.rightshoulder.y+50,  invertColor(this.body.color), 8)
            //         let link2 = new Line(this.leftshoulder.x, this.leftshoulder.y, this.leftshoulder.x-50, this.leftshoulder.y+50,  invertColor(this.body.color), 8)
            //         link1.draw()
            //         link2.draw()
            // }

            canvas_context.font = "32px arial"
            canvas_context.fillStyle = `rgb(${255 - (this.damage / 10)},${255 - this.damage},${255 - this.damage})`
            canvas_context.fillText(`${Math.round(this.damage)}%`, this.body.x - 20, this.body.y - 60)
            // if (this != boys[0]) {
            //     canvas_context.fillText(`${Math.round(this.dmomu)},${Math.round(this.amomu)}`, this.body.x - 20, this.body.y - 150)
            //     canvas_context.fillText(`Under:${Math.round(this.under)},Safe:${Math.round(this.safe)}`, this.body.x - 20, this.body.y - 200)
            //     canvas_context.fillText(`Height:${Math.round(this.brick.edgeright.y)}`, this.body.x - 20, this.body.y - 250)
            //     if (this.fleeing == 1) {
            //         canvas_context.fillText(`fleeing`, this.body.x - 20, this.body.y - 100)
            //     }
            // }

            if (this.reflecting > 0) {
                let polygot = new Polygon(this.body.x, this.body.y, (Math.max((new LineOP(this.body, this.lefthand)).hypotenuse(), (new LineOP(this.body, this.righthand)).hypotenuse())) + this.lefthand.radius, getRandomLightColor(), 7, 0, 0, (Math.PI / 2))
                polygot.draw()
            }

        }
    }


    let go = 0
    let boom = []// [new Circle(0, 0, 1, "transparent"), new Circle(0, 0, 1, "transparent")]

    for (let t = 0; t < 8; t++) {

    let selector = new Selector()
    if (t == 0) {
        selector.body.color = "#FF0000"
    }
    if (t == 1) {
        selector.body.color = "#00FF00"
    }
    if (t == 2) {
        selector.body.color = "#0000FF"
    }
    if (t == 3) {
        selector.body.color = "#FFFF00"
    }
    if (t == 4) {
        selector.body.color = "#FFAA00"
    }
    if (t == 5) {
        selector.body.color = "#00FFFF"
    }
    if (t == 6) {
        selector.body.color = "#FF00FF"
    }
    if (t == 7) {
        selector.body.color = "#bbbbbb"
    }
    selectors.push(selector)

}

// object instantiation and creation happens here 

//, new Circle(0, 0, 1, "transparent"), new Circle(0, 0, 1, "transparent")]
let counter = 0

// if (keysPressed['v']) {
//     if (keysPressed['q']) {
//         if (Math.random() < .01) {

//             canvas_context.clearRect(0, 0, canvas.width * 4, canvas.height * 4)  // refreshes the image
//             gamepadAPI[0].update()
//             gamepadAPI[1].update()
//             gamepadAPI[2].update()
//             gamepadAPI[3].update() //checks for button presses/stick movement on the connected controller)
//             // game code goes here
//             stage.draw()
//             for (let t = 0; t < boys.length; t++) {
//                 boys[t].draw()
//             }
//             for (let t = 0; t < boom.length; t++) {
//                 if (boys[t].body.y > 1440 || boys[t].body.x < 0 || boys[t].body.x > 2560) {
//                     scores[t]++
//                     if (boys[t].go !== 1) {
//                         boys[t].go = 1
//                         boom[t] = new Explosion(boys[t].body.x)
//                         // if (Math.random() < .5) {
//                         //     boys[t] = new Mass(t)
//                         //     boys[t].body.color = getRandomColor()
//                         // } else {
//                         boys[t] = new Mass(t)
//                         boys[t].body.color = getRandomColor()
//                         if (t == 0) {
//                             boys[t].body.color = "#ffAA00"
//                         }
//                         if (t == 1) {
//                             boys[t].body.color = "#ff0000"
//                         }
//                         // }
//                     }
//                 }
//                 boom[t].draw()
//             }
//             canvas_context.font = "50px arial"
//             canvas_context.fillStyle = "white"
//             canvas_context.fillText(`Score: Human ${scores[1]}, Robot ${scores[0]}`, 1000, 100)

//         }
//     }

// } else {

// canvas_context.clearRect(0, 0, canvas.width * 4, canvas.height * 4)  // refreshes the image

// stage.draw()
// for (let t = 0; t < boys.length; t++) {
//     boys[t].draw()
// }
// canvas_context.font = "50px arial"
// canvas_context.fillStyle = "white"



let massSelector = new Circle(700, 700, 200, "White")

let boySelector = new Circle(1200, 700, 200, "White")
let blastSelector = new Circle(1700, 700, 200, "White")
let joxSelector = new Circle(2200, 700, 200, "White")
characterbuttons.push(massSelector)
characterbuttons.push(boySelector)
characterbuttons.push(blastSelector)
characterbuttons.push(joxSelector)


// canvas_context.fillText(`Score: Human ${scores[1]}, Robot ${scores[0]}`, 1000, 100)
// }
function main() {
    if (counter == 1) {

        canvas_context.clearRect(0, 0, canvas.width * 4, canvas.height * 4)  // refreshes the image
        gamepadAPI[0].update()
        gamepadAPI[1].update()
        gamepadAPI[2].update()
        gamepadAPI[3].update() //checks for button presses/stick movement on the connected controller)
        // game code goes here
        stage.draw()
        for (let t = 0; t < boys.length; t++) {
            boys[t].draw()
        }
        for (let t = 0; t < boys.length; t++) {
            boys[t].enemycollide()
        }
        for (let t = 0; t < boom.length; t++) {
            if (boys[t].body.y > (1440 * (invscale * .5)) || boys[t].body.x < 0 || boys[t].body.x > (2560 * (invscale * .5))) {
                scores[t]++
                if (boys[t].go !== 1) {
                    boys[t].go = 1
                    boom[t] = new Explosion(boys[t].body.x)
                    // if (Math.random() < .5) {
                    //     boys[t] = new Mass(t)
                    //     boys[t].body.color = getRandomColor()
                    // } else {

                    if (t == 0) {
                        if (Math.random() < .5) {
                            boys[t] = boys[t].copy()
                        } else {
                            boys[t] = boys[t].copy()
                        }

                    } else {
                        if (Math.random() < .5) {
                            boys[t] = boys[t].copy()
                        } else {
                            boys[t] = boys[t].copy()
                        }
                    }

                    // }
                }
            }
            boom[t].draw()
        }
        canvas_context.font = "50px arial"
        canvas_context.fillStyle = "white"
        if (boys.length == 2) {
            canvas_context.fillText(`Score: Human ${scores[1]}, Robot ${scores[0]}`, 1000, 100)
        }
        // canvas_context.fillText(`Falls: `, 200, 100)
        // canvas_context.fillText(`Red ${scores[0]}`, 200, 150)
        // canvas_context.fillText(`Green ${scores[1]}`, 200, 200)
        // canvas_context.fillText(`Blue ${scores[2]} `, 200, 250)
        // canvas_context.fillText(`Yellow ${scores[3]} `, 200, 300)
        // }
    } else {
        canvas_context.clearRect(0, 0, canvas.width * 4, canvas.height * 4)


        massSelector.draw()
        boySelector.draw()
        blastSelector.draw()
        joxSelector.draw()

        canvas_context.font = "60px arial"
        canvas_context.fillStyle = "black"
        canvas_context.fillText(`Mass`, massSelector.x - (massSelector.radius * .4), massSelector.y - (massSelector.radius * .5))

        canvas_context.font = "60px arial"
        canvas_context.fillStyle = "black"
        canvas_context.fillText(`Coreboy`, boySelector.x - (boySelector.radius * .6), boySelector.y - (boySelector.radius * .5))

        canvas_context.font = "60px arial"
        canvas_context.fillStyle = "black"
        canvas_context.fillText(`Blastgirl`, blastSelector.x - (blastSelector.radius * .6), blastSelector.y - (blastSelector.radius * .5))

        canvas_context.font = "60px arial"
        canvas_context.fillStyle = "black"
        canvas_context.fillText(`Jox`, joxSelector.x - (joxSelector.radius * .2), joxSelector.y - (joxSelector.radius * .5))


        for (let t = 0; t < selectors.length; t++) {
            selectors[t].draw()
        }

        canvas_context.font = "60px arial"
        canvas_context.fillStyle = "white"
        canvas_context.fillText(`Press Space to Start`, 1000, 300)
        if (keysPressed[' ']) {
            let wet = boys.length
            for (let t = 0; t < selectors.length; t++) {
                for (let k = 0; k < characterbuttons.length; k++) {
                    if (characterbuttons[k].isPointInside(selectors[t].body)) {
                        let coreboy
                        if (k == 0) {
                            coreboy = new Mass(boys.length)
                            coreboy.body.color = selectors[t].body.color
                        } else if (k == 1) {
                            coreboy = new Boy(boys.length)
                            coreboy.body.color = selectors[t].body.color
                        } else if (k == 2) {
                            coreboy = new Blastgirl(boys.length)
                            coreboy.body.color = selectors[t].body.color
                        } else if (k == 3) {
                            coreboy = new Jox(boys.length)
                            coreboy.body.color = invertColor(selectors[t].body.color)
                        }

                        boys.push(coreboy)
                        boom.push(new Circle(0, 0, 1, "transparent"))
                        scores.push(0)
                        wet--
                    }
                }
            }

            if (wet == 0) {
                counter = 1
            }
            counter = 1
        }
    }
}
})
