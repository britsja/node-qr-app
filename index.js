import inquirer from 'inquirer';
import qr from 'qr-image';
import fs, { writeFile } from 'fs';

const userUrl = '';

const prompt = inquirer.prompt([
    {message: "Type in your URL: ",
        name: "URL",
    },
])
.then((answer) => {
    const url = answer.URL;    
    const qrImage = qr.image(url);
    qrImage.pipe(fs.createWriteStream('qrimage.png'));
    fs.writeFile('URL.txt', url, (err) => {
        if (err) throw err;
        console.log('The file has been saved')
    })
    
})
.catch((error) => {
    if (error.isTtyError) {
        console.log("Prompt couldn't be rendered")
    } else {
        console.log("Something else went wrong")
    }
})

