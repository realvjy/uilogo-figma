
figma.showUI(__html__, { width: 275, height: 340 })


figma.ui.onmessage = msg => {
    const uiLogosUrl = "https://uilogos.co/uilogos/uilogos.json";

    // const getAllLogos = async () => {
    //     const response = await fetch(uiLogosUrl);
    //     const jsonData = await response.json();
    //     return jsonData;
    // };
    
    console.log('message here');
    
    
    async function getData(url: string) {
        let data = await (await fetch(url)).json();
        console.log('inside');
        
        if (!data) {
            console.log('no date');
            
        } else {
            console.log(data);
            
        }
    }
    
    console.log(getData(uiLogosUrl),'end');
    
    getData(uiLogosUrl)



    //   figma.closePlugin()
}
