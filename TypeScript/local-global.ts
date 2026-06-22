function someFun(){
    if(true){
        var localvar = 1000
        console.log(localvar)
    }

    console.log(localvar)

    function nested(){
        console.log(localvar)
    }

    nested()
}

someFun()