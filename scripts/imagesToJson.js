const apiPath = 'src/api/cantieri.json'
const imagesPath = 'src/media/cantieri/**/*'

const glob = require('glob')
const fs = require('fs')

const toPublicPath = path => path.replace('src', '')
const collectImages = () => glob.sync(imagesPath)
const getImages = () => collectImages().map(item => toPublicPath(item))

try {
    fs.writeFileSync(apiPath, JSON.stringify({ data: getImages() }))
    process.exit(0)
}
catch (error) {
    throw error
}


