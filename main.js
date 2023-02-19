class Scroll{
    constructor({ element, top, unit }) {
        if(typeof element == 'string') {
            this.el = document.querySelector(element)
        }else if(element instanceof HTMLElement) { // instanceof - принадлежит ли HTML этот элемент
            this.el = element
        }
        this.el.style.position = 'fixed'
        this.range = top 
        this.unit = unit
        this.el.style.top = this.checkUnit() + 'px'
        
        window.addEventListener('scroll', () => this.move())
    }
    
    move() {
        //scrollY - берет расстояние, проскроленное сверху
        
        this.pxOrPercentage = this.checkUnit()
        
        if(this.pxOrPercentage - scrollY > 0) {
            this.el.style.top = this.pxOrPercentage - scrollY + 'px'
        }else {
            this.el.style.top = 0
        }
    }
    
    checkUnit() {
        if(this.unit == 'px') {
           return  this.range >= 0 ? this.range : 0
        }else if(this.unit == '%' || this.unit == undefined) {
            return window.innerHeight / 100 * this.range - this.el.clientHeight  // clientHeight -высота элемента
        }
    }
    
}

//let nav = document.querySelector('.header__nav') - тогда в    element: nav

let myScroll = new Scroll({
    element: '.header__nav',
    top: 100, 
})
console.log(myScroll);




class Hover{
    constructor(el) {
        this.element = document.querySelector(el)
        this.element.addEventListener('mouseover', () => this.move())
    }
    move() {
        this.element.style = 'position: absolute'
        this.element.style.left = random(0, window.innerWidth - this.element.clientWidth) + 'px'
        this.element.style.top = random(0, window.innerHeight - this.element.clientHeight) + 'px'
    }
    
    
}

let block = new Hover('.header__content')

function random(min, max) {
    return Math.round(Math.random() * (max - min ) + min)
}

