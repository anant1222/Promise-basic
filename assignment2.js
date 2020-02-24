const fs = require('fs');
const os = require('os');

var standard_input = process.stdin;

standard_input.setEncoding('utf-8');

var input = "";
standard_input.on('data', (data) => {

    if (data == 'exit\n') {
        // console.log(input);

        let sorted = input.split(os.EOL)
            .sort((a, b) => a - b)
            .join(os.EOL);

        fs.writeFile(__dirname + '/output1.txt', sorted, (err) => {
    
            if(err){
                console.error(err);
            } 
            console.log('success');
        })
        console.log(sorted);
        process.exit();
    }
    else {
        input += data;
    }
})