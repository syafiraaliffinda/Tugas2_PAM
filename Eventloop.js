function main(){
    console.log('a');
    setTimeout(
        function display() {console.log('b');}
    ,0);
        console.log('c');
}
main();
// Output 
// a
// c
// b