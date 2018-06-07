require('babel-polyfill')
const model = {
    find(){
      return fetch("https://webservice.juanpi.com/api/getIndexNavSkip?page=1&zy_ids=p8_c4_l4_128_1184_1217_1186_1220_5_106_1391_1456_18_51_1371_1406&app_name=zhe&catname=newest_zhe")
        .then(response =>response.json())   
        .then(result =>{
                var res = result.GoodsRes
                console.log(res)
                return res
            })
    }
}

module.exports = model;