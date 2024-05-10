function intervalSam(a,b){
    if(a>b){
        return 0
    }
    return a + intervalSam(a+1,b)
}

 console.log(intervalSam(1,10))