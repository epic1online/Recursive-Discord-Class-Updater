/**
 * Recursive Discord Class Updater
 * 
 * WARNING: This utility modifies files in place. Always create a backup before running.
 * 
 * Purpose:
 * Updates Discord classes across multiple source files in modular themes (e.g., https://github.com/zerebos/Nox)
 * Unlike single-file update utilities, this recursively processes all files in a theme's root directory.
 * 
 * Usage:
 * node RDCU.js <MAPPING_FILE PATH> <THEME_ROOT_FOLDER PATH>
 *  - Example mapping file: https://github.com/SyndiShanX/Update-Classes/blob/main/Changes.txt
 * 
 * Change list format:
 * The file should contain pairs of lines, the old class on one line, followed by the new class on the next line.
 * 
 * DISCLAIMER: Use at your own risk. Review the code to understand what it does before running.
 */

const fs = require('fs');
const path = require('path');

const CLASS_MAP = process.argv[2] ?? 'Changes.txt'
const THEME_ROOT_DIRECTORY = process.argv[3] ?? './src';

const classChangeList = fs.readFileSync(CLASS_MAP, 'utf8');
const lines = classChangeList.split(/\r?\n/).map(line => line.trim()).filter(Boolean);

const classes = {};
while (lines.length > 0) {
    classes[lines.shift()] = lines.shift();
}

function getAllFiles(dirPath, fileList = []) {
    fs.readdirSync(dirPath, { withFileTypes: true }).forEach(file => {
        const filePath = path.join(dirPath, file.name);
        if (file.isDirectory()) {
            getAllFiles(filePath, fileList);
        } else {
            fileList.push(filePath);
        }
    });
    return fileList;
}

const fileArray = getAllFiles(THEME_ROOT_DIRECTORY);

for (const file of fileArray) {
    fs.readFile(file, 'utf8', function (err, data) {
        if (err) return console.error(`Error reading ${file}:`, err.message);
        console.log("starting " + file);

        let result = data;
        for (const [oldClass, newClass] of Object.entries(classes)) {
            result = result.replaceAll(oldClass, newClass);
        }
        
        fs.writeFile(file, result, 'utf8', function (err) {
            if (err) return console.error(`Error writing ${file}:`, err.message);
            console.log(`Wrote to ${file}`);
        });
    });
}