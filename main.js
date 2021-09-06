let f1 = document.forms[`f1`]
let f2 = document.forms[`f2`]
let button = document.querySelector(`.but`)
const regName = /^[a-zA-Z]{1,20}$/
const regEmail = /[a-z]*@+[a-z]*/
const regPass = /\S{8,15}/
let arr = [...f1.children]
let arr2 = [...f2.children]
getSel = x => document.querySelector(x)
arr.forEach(e => {

    f1.addEventListener(`input`, e => {
        changer(f1.nameT, regName)
        changer(f1.lastName, regName)  
        changer(f1.email, regEmail)  
        changer(f1.password, regPass)  
    })
})
function changer(name , reg){
    if (reg.test(name.value)) {
        console.log(`yes`);
        name.style.border = `3px solid green`
    }
    else{
        name.style.border = `3px solid red`
    }
}

function togg(name, par1, par2 , f){
    getSel(name).addEventListener('click', e=>{
        getSel(par1).classList.add(`dispNone`)
        getSel(par2).classList.remove(`dispNone`)
        f.reset()
})
}
togg(`.toggle`,`.par`, `.par1`, f1 )
togg(`.toggle1`, `.par1`, `.par`, f2)




