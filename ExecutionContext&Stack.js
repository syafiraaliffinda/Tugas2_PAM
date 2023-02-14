function A () { 
    console.log('Ada pada fungsi A')

    function B () {
        console.log('Ada pada fungsi B')

        function C (){
            console.log('Ada pada fungsi C')
        }

        C();
    }

    B();

}

A();