function checkPlaindromes(words){
    for(var i=0; i<words.length; i++){
        if(words[i] === words[i].split('').reverse().join('')){
            console.log("YES");
        }
        else{
            console.log("NO");
        }
    }
}
checkPlaindromes(["kimik","level","module"]);