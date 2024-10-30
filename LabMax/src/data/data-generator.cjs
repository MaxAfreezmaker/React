const fs = require('fs');


let names = [];                        
let birth = [];                        
let eyesColors = ["niebieski", "zielony", "brązowy", "szary", "czarny"];  


fs.readFile('./names.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    names = data.split("\n").map(s => s.trim()).filter(n => n.length != 0);

    
    fs.readFile('./birth.txt', 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            return;
        }
        birth = data.split("\n").map(s => s.trim()).filter(n => n.length != 0);

        let content = "export const data = [\n";

        for (let i = 0; i < names.length; i++) {
            const randomName = names[~~(Math.random() * names.length)];
            const randomBirth = birth[~~(Math.random() * birth.length)];
            const randomEyeColor = eyesColors[~~(Math.random() * eyesColors.length)];
            
            content += `  {\n    id: ${i + 1},\n    name: "${names[i]}",\n    birth: "${randomBirth}",\n    eyes: "${randomEyeColor}"\n  },\n`;
        }

        content += "];";

      
        fs.writeFile('src/components/module-data.js', content, (err) => {
            if (err) {
                console.error(err);
            }
            console.log("src/components/module-data.js generated");
        });
    });
});
