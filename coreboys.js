
let boys = []
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
            canvas_context.fill()
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
                    if (this.anchor.fired < 6) {
                        this.anchor.xmom *= .1
                        this.anchor.ymom *= .1
                        this.body.xmom *= .1
                        this.body.ymom *= .1
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
                if (this.anchor.fired < 8 && this.anchor.fired > 0) {
                    this.anchor.xmom += ((this.body.x - this.anchor.x) / (this.length)) * 7.66
                    this.anchor.ymom += ((this.body.y - this.anchor.y) / (this.length)) * 7.66
                    if (this.anchor.fired < 6) {
                        this.anchor.xmom *= .1
                        this.anchor.ymom *= .1
                        this.body.xmom *= .1
                        this.body.ymom *= .1
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
                if (this.anchor.fired < 8 && this.anchor.fired > 0) {
                    this.anchor.xmom += ((this.body.x - this.anchor.x) / (this.length)) * 5.66
                    this.anchor.ymom += ((this.body.y - this.anchor.y) / (this.length)) * 5.66
                    if (this.anchor.fired < 6) {
                        this.anchor.xmom *= .1
                        this.anchor.ymom *= .1
                        this.body.xmom *= .1
                        this.body.ymom *= .1
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
        canvas_context.scale(.5, .5)
        window.setInterval(function () {
            main()
        }, 20)
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
            TIP_engine.x = XS_engine
            TIP_engine.y = YS_engine
            TIP_engine.body = TIP_engine
            // example usage: if(object.isPointInside(TIP_engine)){ take action }
            window.addEventListener('pointermove', continued_stimuli);
        });
        window.addEventListener('pointerup', e => {
            window.removeEventListener("pointermove", continued_stimuli);
        })
        function continued_stimuli(e) {
            FLEX_engine = canvas.getBoundingClientRect();
            XS_engine = e.clientX - FLEX_engine.left;
            YS_engine = e.clientY - FLEX_engine.top;
            TIP_engine.x = XS_engine
            TIP_engine.y = YS_engine
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
                object.x -= speed
                if (object.self.righthand.anchored == 1 || object.self.lefthand.anchored == 1) {
                    object.self.degripl()
                    object.self.jumping = 1
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
                                if (object.self.righthand.anchored == 1) {
                                    object.self.degripr()
                                    object.self.jumping = 1
                                    object.ymom -= speed
                                } else {
                                    object.x += (gamepadAPI[controller].axesStatus[0] * speed)
                                }
                            }


                            if (gamepadAPI[controller].axesStatus[1] < -.5) {
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
            this.bricks = [new Brick(1200, 1400), new Brick(2000, 1100), new Brick(200, 600), new Brick(1230, 900, 150)]
        }
        draw() {
            for (let t = 0; t < this.bricks.length; t++) {
                this.bricks[t].draw()
            }
        }
    }

    class Brick {
        constructor(x, y, width = 900, height = 72) {
            this.center = new Point(x, y)
            this.height = height
            this.edgeleft = new Circle(x - (width * .5), y, 4, "cyan")
            this.edgeright = new Circle(x + (width * .5), y, 4, "blue")
            this.link = new Line(this.edgeleft.x, this.edgeleft.y, this.edgeright.x, this.edgeright.y, getRandomColor(), height * 2)
            this.shape = castBetween(this.edgeleft, this.edgeright, 60, height)
            this.edgeleft = new Circle(x - (width * .5), y - (height * 1), 8, "cyan")
            this.edgeright = new Circle(x + (width * .5), y - (height * 1), 8, "blue")
        }
        doesPerimeterTouch(circle) {

            // for(let t = 0;t<circle.self.shots.length;t++){
            //     if(this.shape.doesPerimeterTouch(circle.self.shots[t])){
            //         // circle.self.shots[t].marked = 1
            //     }
            // }
            if (circle.doesPerimeterTouch(this.edgeleft)) {
                if (circle == circle.self.righthand) {
                    if (circle.anchored >= -1) {
                        circle.anchored = 1
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
                                // circle.sxmom = 0
                                // circle.symom = 0
                                if (circle.y < this.center.y + (this.height)) {
                                    circle.self.grounded = 1
                                }
                            }
                            if (circle.ymom > 10) {
                                if (circle.ymom > 1) {
                                    if (circle.self.jumping == 0) {
                                        circle.ymom *= -.6
                                    } else {

                                        circle.ymom = 0
                                    }
                                } else {
                                    circle.ymom = 0
                                }
                            }
                            if (circle.y > this.center.y + (this.height)) {
                                if (circle.ymom < 0) {
                                    circle.ymom *= -1
                                    circle.frictiveMove()
                                }
                                while (this.shape.doesPerimeterTouch(circle)) {
                                    circle.y += .1
                                }
                                // circle.y -= .1
                            } else {
                                while (this.shape.doesPerimeterTouch(circle)) {
                                    circle.y -= .1
                                }
                                circle.y += .1
                            }
                        }
                    }
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
            this.shots = []
            this.wasfalse = []
            this.controller = controller
            this.armlength = 35
            this.shoulderwidth = 8
            this.damage = 0
            this.nodes = []
            this.springs = []
            this.hitboxes = []
            this.links = []
            this.speed = 11.5
            this.punchspeed = 5
            this.grounded = 0
            this.jumping = 1
            this.body = new Circle(900 + boys.length * 550, 500, 35, "pink")
            this.nodes.push(this.body)
            this.leftshoulder = new Circle(this.body.x - (this.body.radius + this.shoulderwidth), 350, 10, "magenta", 0, 0, .999)
            this.rightshoulder = new Circle(this.body.x + (this.body.radius + this.shoulderwidth), 350, 10, "red", 0, 0, .999)
            this.lefthand = new Circle(this.leftshoulder.x, (this.leftshoulder.y + this.armlength), 16, "magenta", 0, 0, .85)
            this.righthand = new Circle(this.rightshoulder.x, (this.rightshoulder.y + this.armlength), 16, "red", 0, 0, .85)
            this.nodes.push(this.leftshoulder)
            this.nodes.push(this.rightshoulder)
            this.nodes.push(this.righthand)
            this.nodes.push(this.lefthand)
            this.leftcollar = new LineOP(this.leftshoulder, this.body, "pink", 8)
            this.rightcollar = new LineOP(this.rightshoulder, this.body, "pink", 8)
            this.links.push(this.leftcollar)
            this.links.push(this.rightcollar)
            this.leftarm = new LineOP(this.leftshoulder, this.lefthand, "pink", 8)
            this.rightarm = new LineOP(this.rightshoulder, this.righthand, "pink", 8)
            this.links.push(this.leftarm)
            this.links.push(this.rightarm)
            this.leftarm = new SpringOP(this.leftshoulder, this.lefthand, this.armlength, 8)
            this.rightarm = new SpringOP(this.rightshoulder, this.righthand, this.armlength, 8)
            this.springs.push(this.leftarm)
            this.springs.push(this.rightarm)
            this.gravity = 1.1
            this.righthand.fired = 0
            this.lefthand.fired = 0
            this.shield = 0
            this.shieldpower = 100
            this.breaktimer = 0
            for (let t = 0; t < this.nodes.length; t++) {
                this.nodes[t].self = this // lmao
            }
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

            if (this.body.ymom < -20) {
                this.body.ymom = -20
            }



            // this.leftshoulder.x = this.body.x - (this.body.radius + this.shoulderwidth)
            // this.leftshoulder.y = this.body.y

            // this.rightshoulder.x = this.body.x + (this.body.radius + this.shoulderwidth)
            // this.rightshoulder.y = this.body.y

        }
        enemycollide() {

            for (let t = 0; t < boys.length; t++) {
                if (this != boys[t]) {

                    for (let k = 0; k < boys[t].shots.length; k++) {
                        if (boys[t].shots[k].doesPerimeterTouch(this.body)) {
                            if (this.shield == 1) {
                                this.shieldpower -= (Math.abs(boys[t].shots[k].xmom) + Math.abs(boys[t].shots[k].ymom)) / 11
                            } else {
                                this.body.xmom = ((boys[t].shots[k].xmom * (this.damage / 200)) + (boys[t].shots[k].xmom * .3)) * 2
                                this.body.ymom = (((boys[t].shots[k].ymom * (this.damage / 200)) + (boys[t].shots[k].ymom * .3)) * 2) - (10 * (this.damage / 200))
                                this.damage += (Math.abs(boys[t].shots[k].xmom) + Math.abs(boys[t].shots[k].ymom)) / 7
                                this.breaktimer = 0
                            }
                            boys[t].shots[k].marked = 1
                        }
                    }
                    boys[t].righthands = castBetween(boys[t].rightshoulder, boys[t].righthand, 20, boys[t].rightshoulder.radius)
                    boys[t].lefthands = castBetween(boys[t].leftshoulder, boys[t].lefthand, 20, boys[t].leftshoulder.radius)
                    if (boys[t].righthands.doesPerimeterTouch(this.body) || boys[t].righthand.doesPerimeterTouch(this.body)) {
                        if (boys[t].righthand.fired > 6) {
                            if (this.shield == 1) {
                                this.shieldpower -= (Math.abs(boys[t].righthand.xmom) + Math.abs(boys[t].righthand.ymom)) / 11
                            } else {
                                this.body.xmom = (boys[t].righthand.xmom * (this.damage / 200)) + (boys[t].righthand.xmom * .3)
                                this.body.ymom = (((boys[t].righthand.ymom * (this.damage / 200)) + (boys[t].righthand.ymom * .3)) * 1)
                                this.damage += (Math.abs(boys[t].righthand.xmom) + Math.abs(boys[t].righthand.ymom)) / 7
                                this.breaktimer = 0
                            }
                            boys[t].righthand.fired = 6

                            if (this.righthand.anchored == 1 || this.lefthand.anchored == 1) {
                                this.lefthand.anchored = -40
                                this.righthand.anchored = -40
                            }
                            this.body.move()
                            this.fixupshoulder()

                        }
                    } else if (boys[t].lefthands.doesPerimeterTouch(this.body) || boys[t].lefthand.doesPerimeterTouch(this.body)) {
                        if (boys[t].lefthand.fired > 6) {

                            if (this.shield == 1) {
                                this.shieldpower -= (Math.abs(boys[t].lefthand.xmom) + Math.abs(boys[t].lefthand.ymom)) / 11
                            } else {
                                this.body.xmom = (boys[t].lefthand.xmom * (this.damage / 200)) + (boys[t].lefthand.xmom * .3)
                                this.body.ymom = (((boys[t].lefthand.ymom * (this.damage / 200)) + (boys[t].lefthand.ymom * .3)) * 1)
                                this.damage += (Math.abs(boys[t].lefthand.xmom) + Math.abs(boys[t].lefthand.ymom)) / 7
                                this.breaktimer = 0
                            }
                            boys[t].lefthand.fired = 6
                            if (this.righthand.anchored == 1 || this.lefthand.anchored == 1) {
                                this.lefthand.anchored = -40
                                this.righthand.anchored = -40
                            }
                            this.body.move()
                            this.fixupshoulder()
                        }
                    } else if (boys[t].screwangle != 0 && boys[t].body.doesPerimeterTouch(this.body)) {
                        if (boys[t].body.fired > 6) {
                            if (this.shield == 1) {
                                this.shieldpower -= (Math.abs(boys[t].body.xmom) + Math.abs(boys[t].body.ymom)) / 3
                            } else {
                                this.body.xmom = (boys[t].body.xmom * (this.damage / 200)) + (boys[t].body.xmom * .3) * 2
                                this.body.ymom = (((boys[t].body.ymom * (this.damage / 200)) + (boys[t].body.ymom * .3)) * 2)
                                this.damage += (Math.abs(boys[t].body.xmom) + Math.abs(boys[t].body.ymom)) / 2
                            }
                            boys[t].body.fired = 6
                            if (this.righthand.anchored == 1 || this.lefthand.anchored == 1) {
                                this.lefthand.anchored = -40
                                this.righthand.anchored = -40
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
                gamepad_control_controller_proto_dj(this.body, this.speed, this.controller)
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
                        this.shieldpower -= .33
                        this.shield = 1
                        let shild = new Circle(this.body.x, this.body.y, (Math.max((new LineOP(this.body, this.lefthand)).hypotenuse(), (new LineOP(this.body, this.righthand)).hypotenuse())) + this.lefthand.radius, this.body.color + Math.min(Math.round(this.shieldpower + 10), 99))
                        shild.draw()
                    }
                }
            } else {
                this.shield = 0
                this.shieldpower += .5
                if (this.shieldpower > 100) {
                    this.shieldpower = 100
                }
            }


            if (this.breaktimer <= 0 && this.shield == 0) {

                if (this.righthand.fired <= 0) {
                    if (gamepadAPI[this.controller].buttonsStatus.includes('B') || keysPressed['l']) {
                        if (this.righthand.anchored == 0) {
                            this.righthand.ymom = 0
                            this.righthand.xmom = this.punchspeed * 14
                            this.righthand.fired = 13
                        }
                    }
                }
                if (this.lefthand.fired <= 0) {
                    if (gamepadAPI[this.controller].buttonsStatus.includes('X') || keysPressed['j']) {
                        if (this.lefthand.anchored == 0) {
                            this.lefthand.ymom = 0
                            this.lefthand.xmom = -this.punchspeed * 14
                            this.lefthand.fired = 13
                        }
                    }
                }

                if (gamepadAPI[this.controller].buttonsStatus.includes('Y') || keysPressed['i']) {
                    if (this.righthand.fired <= 0) {
                        if (this.righthand.anchored == 0) {
                            this.righthand.ymom = -this.punchspeed * 14
                            this.righthand.xmom = this.punchspeed * 1
                            this.righthand.fired = 15
                        }
                    }
                    if (this.lefthand.fired <= 0) {
                        if (this.lefthand.anchored == 0) {
                            this.lefthand.ymom = -this.punchspeed * 14
                            this.lefthand.xmom = -this.punchspeed * 1
                            this.lefthand.fired = 15
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
                            this.righthand.fired = 13
                        }
                    }
                    if (this.lefthand.fired <= 0) {
                        if (this.lefthand.anchored == 0) {
                            this.leftshoulder.xmom = 0
                            this.leftshoulder.ymom = 0
                            this.lefthand.ymom = this.punchspeed * 14
                            this.lefthand.xmom = -this.punchspeed * 9
                            this.lefthand.fired = 13
                        }
                    }
                }


                if (gamepadAPI[this.controller].buttonsStatus.includes('LB') || keysPressed['u']) {
                    if (this.lefthand.fired <= 0) {
                        if (this.righthand.fired <= 0) {
                            let shot = new Shot(this.body.x, this.body.y, 20, "#FFFFFF", 0, (this.speed * 1.9))
                            this.shots.push(shot)
                            this.body.ymom -=8
                            this.lefthand.fired = 18
                            this.righthand.fired = 18
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
                this.enemycollide()
            }
            draw() {

            for (let t = 0; t < this.shots.length; t++) {
                this.shots[t].radius*=1.02
                this.shots[t].ymom*=1.02
                this.shots[t].move()
                this.shots[t].draw()
                if(this.shots[t].radius > 30){
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
                // }

                if (this.lefthand.anchored == 1 || this.righthand.anchored == 1) {
                    this.body.xmom *= .2
                }
                if(this.jumping == 1){
                    this.body.xmom *= .2
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

                    this.body.xmom *= .2

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
                    this.collideStage()
                }
                if (this.righthand.anchored <= -1) {
                    this.righthand.anchored++
                } else {
                    this.collideStage()
                }
                this.righthand.ymom += this.gravity
                this.lefthand.ymom += this.gravity

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




                for (let t = 0; t < this.links.length; t++) {
                    this.collideStage()
                    this.links[t].draw()
                }
                for (let t = 0; t < this.nodes.length; t++) {
                    this.collideStage()
                    this.nodes[t].draw()
                }
                for (let t = 0; t < this.springs.length; t++) {
                    this.springs[t].balance()
                }
                for (let t = 0; t < this.hitboxes.length; t++) {

                }
                // if (this.controller == 0) {
                this.fightcontrol()
                // }
                if (this.breaktimer > 0) {
                    for (let t = 0; t < 5; t++) {
                        let spot = new Circle(this.body.x + ((Math.random() - .5) * this.body.radius * 2), this.body.y - (this.body.radius + 4), 3, "yellow")
                        spot.draw()
                    }
                }

                canvas_context.font = "30px arial"
                canvas_context.fillStyle = `rgb(${255 - (this.damage / 10)},${255 - this.damage},${255 - this.damage})`
                canvas_context.fillText(`${Math.round(this.damage)}%`, this.body.x - 20, this.body.y - 50)


            }
        }


    class Mass {
        constructor(controller) {
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
            this.armlength = 40
            this.shoulderwidth = 18
            this.damage = 0
            this.nodes = []
            this.springs = []
            this.hitboxes = []
            this.links = []
            this.speed = 11.5
            this.punchspeed = 5
            this.grounded = 0
            this.jumping = 1
            this.body = new Circle(900 + boys.length * 550, 500, 35, "pink")
            this.nodes.push(this.body)
            this.leftshoulder = new Circle(this.body.x - (this.body.radius + this.shoulderwidth), 350, 10, "magenta", 0, 0, .999)
            this.rightshoulder = new Circle(this.body.x + (this.body.radius + this.shoulderwidth), 350, 10, "red", 0, 0, .999)
            this.lefthand = new Circle(this.leftshoulder.x, (this.leftshoulder.y + this.armlength), 19, "magenta", 0, 0, .85)
            this.righthand = new Circle(this.rightshoulder.x, (this.rightshoulder.y + this.armlength), 19, "red", 0, 0, .85)
            this.nodes.push(this.leftshoulder)
            this.nodes.push(this.rightshoulder)
            this.nodes.push(this.righthand)
            this.nodes.push(this.lefthand)
            this.leftcollar = new LineOP(this.leftshoulder, this.body, "pink", 8)
            this.rightcollar = new LineOP(this.rightshoulder, this.body, "pink", 8)
            this.links.push(this.leftcollar)
            this.links.push(this.rightcollar)
            this.leftarm = new LineOP(this.leftshoulder, this.lefthand, "pink", 8)
            this.rightarm = new LineOP(this.rightshoulder, this.righthand, "pink", 8)
            this.links.push(this.leftarm)
            this.links.push(this.rightarm)
            this.leftarm = new SpringOP(this.leftshoulder, this.lefthand, this.armlength, 8)
            this.rightarm = new SpringOP(this.rightshoulder, this.righthand, this.armlength, 8)
            this.springs.push(this.leftarm)
            this.springs.push(this.rightarm)
            this.gravity = 1.1
            this.righthand.fired = 0
            this.lefthand.fired = 0
            this.body.fired = 0
            this.screwmomentum = 0
            this.screwtimer = 0
            for (let t = 0; t < this.nodes.length; t++) {
                this.nodes[t].self = this // lmao
            }
        }
        control() {
            gamepad_control_controller_proto(this.center, this.speed + (this.speed * (this.grounded * .5)), this.controller)
        }
        fixupshoulder() {

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

                if (this.body.ymom < -20) {
                    this.body.ymom = -20
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

                if (this.body.ymom < -20) {
                    this.body.ymom = -20
                }



            }


            // this.leftshoulder.x = this.body.x - (this.body.radius + this.shoulderwidth)
            // this.leftshoulder.y = this.body.y

            // this.rightshoulder.x = this.body.x + (this.body.radius + this.shoulderwidth)
            // this.rightshoulder.y = this.body.y

        }
        enemycollide() {


            for (let t = 0; t < boys.length; t++) {
                if (this != boys[t]) {

            for (let t = 0; t < boys.length; t++) {
                if (this != boys[t]) {
                    for (let k = 0; k < boys[t].shots.length; k++) {
                        if (boys[t].shots[k].doesPerimeterTouch(this.body)) {
                            if (this.shield == 1) {
                                this.shieldpower -= (Math.abs(boys[t].shots[k].xmom) + Math.abs(boys[t].shots[k].ymom)) / 11
                            } else {
                                this.body.xmom = ((boys[t].shots[k].xmom * (this.damage / 200)) + (boys[t].shots[k].xmom * .3)) * 2
                                this.body.ymom = (((boys[t].shots[k].ymom * (this.damage / 200)) + (boys[t].shots[k].ymom * .3)) * 2) - (10 * (this.damage / 200))
                                this.damage += (Math.abs(boys[t].shots[k].xmom) + Math.abs(boys[t].shots[k].ymom)) / 7
                                this.breaktimer = 0
                            }
                            boys[t].shots[k].marked = 1
                        }
                    }
                    boys[t].lefthands = castBetween(boys[t].leftshoulder, boys[t].lefthand, 20, boys[t].leftshoulder.radius)
                    boys[t].righthands = castBetween(boys[t].rightshoulder, boys[t].righthand, 20, boys[t].rightshoulder.radius)
                    if (boys[t].righthands.doesPerimeterTouch(this.body) || boys[t].righthand.doesPerimeterTouch(this.body)) {
                        if (boys[t].righthand.fired > 6) {
                            if (this.shield == 1) {
                                this.shieldpower -= (Math.abs(boys[t].righthand.xmom) + Math.abs(boys[t].righthand.ymom)) / 11
                            } else {
                                this.body.xmom = (boys[t].righthand.xmom * (this.damage / 200)) + (boys[t].righthand.xmom * .3)
                                this.body.ymom = (((boys[t].righthand.ymom * (this.damage / 200)) + (boys[t].righthand.ymom * .3)) * 1)
                                this.damage += (Math.abs(boys[t].righthand.xmom) + Math.abs(boys[t].righthand.ymom)) / 7
                                this.breaktimer = 0
                            }
                            boys[t].righthand.fired = 6

                            if (this.righthand.anchored == 1 || this.lefthand.anchored == 1) {
                                this.lefthand.anchored = -40
                                this.righthand.anchored = -40
                            }
                            this.body.move()
                            this.fixupshoulder()

                        }
                    } else if (boys[t].lefthands.doesPerimeterTouch(this.body) || boys[t].lefthand.doesPerimeterTouch(this.body)) {
                        if (boys[t].lefthand.fired > 6) {

                            if (this.shield == 1) {
                                this.shieldpower -= (Math.abs(boys[t].lefthand.xmom) + Math.abs(boys[t].lefthand.ymom)) / 11
                            } else {
                                this.body.xmom = (boys[t].lefthand.xmom * (this.damage / 200)) + (boys[t].lefthand.xmom * .3)
                                this.body.ymom = (((boys[t].lefthand.ymom * (this.damage / 200)) + (boys[t].lefthand.ymom * .3)) * 1)
                                this.damage += (Math.abs(boys[t].lefthand.xmom) + Math.abs(boys[t].lefthand.ymom)) / 11
                                this.breaktimer = 0
                            }
                            boys[t].lefthand.fired = 6
                            if (this.righthand.anchored == 1 || this.lefthand.anchored == 1) {
                                this.lefthand.anchored = -40
                                this.righthand.anchored = -40
                            }
                            this.body.move()
                            this.fixupshoulder()
                        }
                    } else if (boys[t].screwangle != 0 && boys[t].body.doesPerimeterTouch(this.body)) {
                        if (boys[t].body.fired > 6) {
                            if (this.shield == 1) {
                                this.shieldpower -= (Math.abs(boys[t].body.xmom) + Math.abs(boys[t].body.ymom)) / 3
                            } else {
                                this.body.xmom = (boys[t].body.xmom * (this.damage / 200)) + (boys[t].body.xmom * .3) * 2
                                this.body.ymom = (((boys[t].body.ymom * (this.damage / 200)) + (boys[t].body.ymom * .3)) * 2)
                                this.damage += (Math.abs(boys[t].body.xmom) + Math.abs(boys[t].body.ymom)) / 2
                                this.breaktimer = 0
                            }
                            boys[t].body.fired = 6
                            if (this.righthand.anchored == 1 || this.lefthand.anchored == 1) {
                                this.lefthand.anchored = -40
                                this.righthand.anchored = -40
                            }
                            this.body.move()
                            this.fixupshoulder()
                        }
                    }
                }
            }


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
                gamepad_control_controller_proto_dj(this.body, this.speed, this.controller)
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
                        this.shieldpower -= .33
                        this.shield = 1
                        let shild = new Circle(this.body.x, this.body.y, (Math.max((new LineOP(this.body, this.lefthand)).hypotenuse(), (new LineOP(this.body, this.righthand)).hypotenuse())) + this.lefthand.radius, this.body.color + Math.min(Math.round(this.shieldpower + 10), 99))
                        shild.draw()
                        // }
                    }
                }
            } else {
                this.shield = 0
                this.shieldpower += .5
                if (this.shieldpower > 100) {
                    this.shieldpower = 100
                }
            }



            if (this.breaktimer <= 0 && this.shield == 0) {

                if (this.righthand.fired <= 0) {
                    if (gamepadAPI[this.controller].buttonsStatus.includes('B') || keysPressed['l']) {
                        if (this.righthand.anchored == 0) {
                            let shot = new Shot(this.righthand.x, this.righthand.y, this.charge * .66, "#00FFFF", this.speed + 1, 0)
                            if (this.charge > 90) {
                                shot.color = "#88FFFF"
                            }
                            // if(this.wasfalse[1] == 0){
                            if (this.charge == 100) {
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
                                this.charge++
                            }
                            shot.draw()
                        }
                    }
                }
                 if (this.lefthand.fired <= 0) {
                    if (gamepadAPI[this.controller].buttonsStatus.includes('X') || keysPressed['j']) {
                        if (this.lefthand.anchored == 0) {
                            let shot = new Shot(this.lefthand.x, this.lefthand.y, this.charge * .66, "#00FFFF", -this.speed - 1, 0)
                            if (this.charge > 90) {
                                shot.color = "#88FFFF"
                            }
                            if (this.charge == 100) {
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
                                this.charge++
                            }
                            shot.draw()

                        }
                    }
                }

                if (gamepadAPI[this.controller].buttonsStatus.includes('Y') || keysPressed['i']) {
                    if (this.righthand.fired <= 0) {
                        if (this.lefthand.fired <= 0) {
                            this.screwmomentum = Math.PI / 5
                            this.screwtimer = 30
                            this.jumping = 1
                            this.lefthand.fired = 30
                            this.righthand.fired = 30
                            // this.degripr()
                            // this.degripl()
                            this.body.fired = 30
                            this.lefthand.anchored = -10
                            this.righthand.anchored = -10
                            this.body.ymom = -this.speed * 3
                        }
                    }
                }
                if (gamepadAPI[this.controller].buttonsStatus.includes('A') || keysPressed['k']) {
                    if (this.righthand.fired <= 0) {
                        if (this.righthand.anchored == 0) {
                            this.rightshoulder.xmom = 0
                            this.rightshoulder.ymom = 0
                            this.righthand.ymom = this.punchspeed * 12
                            this.righthand.xmom = -this.punchspeed * 2.1
                            this.righthand.fired = 13
                        }
                    }
                    if (this.lefthand.fired <= 0) {
                        if (this.lefthand.anchored == 0) {
                            this.leftshoulder.xmom = 0
                            this.leftshoulder.ymom = 0
                            this.lefthand.ymom = this.punchspeed * 12
                            this.lefthand.xmom = this.punchspeed * 2.1
                            this.lefthand.fired = 13
                        }
                    }
                }
            }
            if (gamepadAPI[this.controller].buttonsStatus.includes('LB') || keysPressed['u']) {
                if (this.righthand.fired <= 0) {
                    if (this.righthand.anchored == 0) {
                        this.rightshoulder.xmom = 0
                        this.rightshoulder.ymom = 0
                        this.righthand.ymom = this.punchspeed * 5
                        this.righthand.xmom = this.punchspeed * 9.1
                        this.righthand.fired = 16
                    }
                }
                if (this.lefthand.fired <= 0) {
                    if (this.lefthand.anchored == 0) {
                        this.leftshoulder.xmom = 0
                        this.leftshoulder.ymom = 0
                        this.lefthand.ymom = this.punchspeed * 5
                        this.lefthand.xmom = -this.punchspeed * 9.1
                        this.lefthand.fired = 16
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
            this.enemycollide()
        }
        draw() {

            if (this.lefthand.anchored != 1 && this.righthand.anchored != 1) {
                this.body.sxmom = 0
                this.body.symom = 0
            }
            // if (this.controller == 0) {
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
            // }
            if (this.lefthand.anchored == 1 || this.righthand.anchored == 1) {
                this.body.xmom *= .2
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

                this.body.xmom *= .2

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
                this.collideStage()
            }
            if (this.righthand.anchored <= -1) {
                this.righthand.anchored++
            } else {
                this.collideStage()
            }
            this.righthand.ymom += this.gravity
            this.lefthand.ymom += this.gravity

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




            for (let t = 0; t < this.links.length; t++) {
                this.collideStage()
                this.links[t].draw()
            }
            for (let t = 0; t < this.nodes.length; t++) {
                this.collideStage()
                this.nodes[t].draw()
            }
            for (let t = 0; t < this.springs.length; t++) {
                this.springs[t].balance()
            }
            for (let t = 0; t < this.hitboxes.length; t++) {

            }
            // if (this.controller == 0) {
            this.fightcontrol()
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
                    if(spot.doesPerimeterTouch(this.body)){
                        spot.draw()
                    }
                }
            }

            canvas_context.font = "30px arial"
            canvas_context.fillStyle = `rgb(${255 - (this.damage / 10)},${255 - this.damage},${255 - this.damage})`
            canvas_context.fillText(`${Math.round(this.damage)}%`, this.body.x - 20, this.body.y - 50)

        }
    }




    for (let t = 0; t < 2; t++) {
        let coreboy
        if (Math.random() < .5) {
            coreboy = new Mass(t)
        } else {
            coreboy = new Boy(t)
        }
        coreboy.body.color = `rgb(${t * 64}, ${255 - (t * 264)}, ${Math.random() * 255})`
        if (t == 0) {
            coreboy.body.color = "#ffAA00"
        }
        if (t == 1) {
            coreboy.body.color = "#ff0000"
        }
        boys.push(coreboy)
    }

    // object instantiation and creation happens here 


    let go = 0
    let boom = [new Circle(0, 0, 1, "transparent"), new Circle(0, 0, 1, "transparent")]//, new Circle(0, 0, 1, "transparent"), new Circle(0, 0, 1, "transparent")]

    function main() {
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
        for (let t = 0; t < boom.length; t++) {
            if (boys[t].body.y > 1440) {
                if (boys[t].go !== 1) {
                    boys[t].go = 1
                    boom[t] = new Explosion(boys[t].body.x)
                    if (Math.random() < .5) {
                        boys[t] = new Mass(t)
                        boys[t].body.color = getRandomColor()
                    } else {
                        boys[t] = new Boy(t)
                        boys[t].body.color = getRandomColor()
                    }
                }
            }
            boom[t].draw()
        }
    }
})
