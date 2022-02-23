const Bot = require("../Bot/Bot")


class OnuHunter extends Bot{

    async title(){
        const log = await this.page.evaluate(async() =>{
            return {
                
                title: document.querySelector('title').innerHTML, 
                
                }
            }
        );
        return log
    }

    async login(){

    }




}
module.exports = OnuHunter