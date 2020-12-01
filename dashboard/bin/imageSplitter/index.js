const yargs = require("yargs")
const sharp = require("sharp")
const fs = require("fs")
const path = require("path")
const crypto = require("crypto")

const imageDir = "D:/Dropbox/Dropbox/Fine By Me/ProcessedPhotos/NoMetaData"
const outputDir = "D:/temp/output"

main()

async function main() {
    // get all jpgs in imageDir
    const images = getJPGs(imageDir)

    console.log(images)

    for (let image of images) {
        console.log(`Processing ${image}`)
        //      generate image name
        let outputName = createImageName()

        //      split image into 4 sizes
        await resizeImage(path.join(imageDir, image), outputDir, outputName)
    }
}

function getJPGs(dir) {
    let jpgs = []

    const files = fs.readdirSync(dir)

    files.forEach(function(file) {
        if (file.includes(".jpg")) {
            jpgs.push(file)
        }
    })

    return jpgs
}

function createImageName() {
    return crypto.randomBytes(3).toString("hex")
}

function resizeImage(imagePath, outputDir, outputName) {
    const promises = []

    console.log("Resizing Image")

    // save 3 versions of the image
    promises.push(
        createResizedImage(
            imagePath,
            100,
            generateTempImagePath(outputDir, outputName, "tn")
        )
    )
    promises.push(
        createResizedImage(
            imagePath,
            300,
            generateTempImagePath(outputDir, outputName, "sm")
        )
    )
    promises.push(
        createResizedImage(
            imagePath,
            500,
            generateTempImagePath(outputDir, outputName, "md")
        )
    )
    promises.push(
        createResizedImage(
            imagePath,
            700,
            generateTempImagePath(outputDir, outputName, "lg")
        )
    )

    return Promise.all(promises)
}

function createResizedImage(imagePath, width, outputFilePath) {
    return sharp(imagePath)
        .resize({ width: width })
        .toFile(outputFilePath)
        .then(() => {
            return outputFilePath
        })
}

function generateTempImagePath(dir, name, postfix) {
    return path.join(dir, `${name}_${postfix}.jpg`)
}
