const {Builder, By, Key, until} = require('selenium-webdriver');




module.exports.find_list_youtube = function(url){


      var driver =  new Builder().forBrowser('firefox').build();
      driver.get('https://www.youtube.com/');
      
    
           var list = url; 
           var count = 0;
           var n = url.length; 

           var i = setInterval(()=>{
            

            console.log(n)
            console.log(count)
            console.log(list)

            driver.findElement(By.name('search_query')).sendKeys( list[count] ,Key.ENTER);

            setTimeout(()=>{driver.findElement(By.name('search_query')).clear(); },9000);

            setTimeout( function(){
            driver.findElement(By.xpath("//a[@id='thumbnail']")).getAttribute("href")
            .then((params) =>{    console.log(params) }) }
            ,9000);
              count++; 
                
                if(count === n ){
                    clearInterval(i)
                }


           },18000); 
           
}

