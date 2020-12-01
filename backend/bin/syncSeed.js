const { exec } = require("child_process")

async function run() {
    const db = require("../models")
    await db.sequelize.sync({ force: true })

    const child = exec("npx sequelize db:seed:all", (error, stdout, stderr) => {
        if (error) {
            console.error(`exec error: ${error}`)
            return
        }
        console.log(`\n\n${stdout}`)
        console.error(`${stderr}`)

        process.exit()
    })
}

run()
