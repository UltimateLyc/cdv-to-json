const CSVToJSON = require("csvtojson");
const JSONToCSV = require ("json2csv");
const FileSystem = require ("fs");

const fileName = "./test.csv";
console.log("🚀 ~ fileName", fileName)

CSVToJSON().fromFile("./test.csv").then(source => {
    //console.log(source);
    source.push({
        "id": "0",
        "name": "hub",
        "description": "controler",
        "stock": 1
    }); 
    const jsonText = JSON.stringify(source);
    console.log("🚀 ~ jsonText", jsonText)
    const outputFileName = fileName.replace(".csv", ".json")
    FileSystem.writeFileSync(outputFileName, jsonText)
})
