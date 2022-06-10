function stringToMass(string) {
    let resu = []
    let result = []
    let counter = 0 
    for(let i = 0; i < string.length; i++){
        if(counter === 9){
            resu.push(result)
            counter = 0
            result = []
            }
        counter++
        result.push(string[i])
        }
        resu.push(result)
    
    return resu
    }
    let kek = '---6891--8------2915------84-3----5-2----5----9-24-8-1-847--91-5------6--6-41----'
    console.log(stringToMass(kek))