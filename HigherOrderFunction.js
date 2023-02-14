function greet(name){
    return 'Hallo!' + '' + name; 
}

function greet_name(greeting,message,name){
    console.log(`${greeting(name)} ${message}`);
}

greet_name(greet, 'Nice try', 'Park Chanyeoll');