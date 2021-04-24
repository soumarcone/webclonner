import websiteScraper from "website-scraper";
const PuppeteerPlugin = require('website-scraper-puppeteer');
import path from 'path';

websiteScraper({
    // Provide the URL(s) of the website(s) that you want to clone
    // In this example, you can clone the Our Code World website
    urls: ['https://maniareceitas.com/marmita-delivery'],
    // Specify the path where the content should be saved
    // In this case, in the current directory inside the ourcodeworld dir
    directory: path.resolve(__dirname, 'downloads/marmitas'),
    // Load the Puppeteer plugin
    plugins: [ 
        new PuppeteerPlugin({
            launchOptions: { 
                // If you set  this to true, the headless browser will show up on screen
                headless: true
            }, /* optional */
            scrollToBottom: {
                timeout: 999910000000000, 
                viewportN: 10 
            } /* optional */
        })
    ]
}).catch( e => {
    console.log("ERROR:", e );
})