const Moralis = require("moralis/node")
require("dotenv").config()
const contactAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3" //hardcoding due to issue will updated soon
let chainId = process.env.chainId || 31337
const address = address[chainId]["NFTmarketplace"][0]
const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL
const appId = process.env.NEXT_PUBLIC_APP_ID
const masterkey = process.env.masterkey
async function main() {
    await Moralis.start({ serverUrl, appId, masterkey })
    console.log(`Working with Contract address: ${contactAddress}`)
}
main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error)
        process.exit(1)
    })