function getMessage(){
    const year = new Data().getFullYear();

    return "今年は"+year+"年です"
}

// getMessage();

function getMessage(){
    const year = new Date().getFullYear();

    return "今年は" + year + "年です";
}

console.log(getMessage());
