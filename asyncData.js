const axios = require('axios');

async function getCountryName(code) {
    // write your code here
    // API endpoint: https://jsonmock.hackerrank.com/api/countries?page=<PAGE_NUMBER>
    var obj;
    let pageNum = 1;
    let cont = true;
    let max_page_num = Infinity;
    let error_flg = false;

    while(pageNum <= max_page_num){
        
        error_flg = await axios.get(`https://jsonmock.hackerrank.com/api/countries?page=${pageNum}`).
        then(response => {
            max_page_num = response.data.total_pages; 
            obj = response.data.data.filter(cont => cont.alpha2Code == code)
            return false;
        }).
        catch(error => {
            console.log('\nAPI connection failed.\n')
            return true;
        });

        if(error_flg) break;

        if(obj[0]){
            obj = obj[0].name;
            console.log(`\nFound at page ${pageNum}: ${obj}\n`);
            pageNum = max_page_num+1;
        }
        else{
            console.log(`\nNot found at page ${pageNum}`);
            pageNum+=1;
        } 
    }
}

getCountryName('IN');