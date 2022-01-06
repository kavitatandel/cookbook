import * as contentful from 'contentful'

//create contentful client
export const Client = contentful.createClient({
    space: process.env.REACT_APP_SPACE,
    accessToken: process.env.REACT_APP_TOKEN

    // space: "muz2113dk9y2",
    // accessToken: "ng3MtA1yc1sXOmljgbbr-Ge7AmxrVZKtDwYu-ywRpes"
})