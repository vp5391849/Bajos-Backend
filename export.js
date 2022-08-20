const XLSX = require('xlsx')

const EndProduct = require ('./models/endProduct')


     const dataValue =  EndProduct.find((err,data)=>{
            if (err) return err
            if(!data.length) return res.status(404).send()
       let exceldata =value (data)
            return exceldata
        })
        
        
        
        // const convertJSONtoExcel= () =>{
        //     const workSheet = XLSX.utils.json_to_sheet()
        //     const workbook = XLSX.utils.book_new()
        
        
        //     XLSX.utils.book_append_sheet(workbook, workSheet, "Products")
        
        
        //     //generate buffer
        //      XLSX.write (workbook, {bookType : "xlsx", type : "buffer"})
        
        
        //      //into binary string
        //      XLSX.write(workbook, {bookType: "xlsx", type: "binary"})
        
        //      XLSX.writeFile(workbook, "Products.xlsx")
        // }
        
        // convertJSONtoExcel()


        function value (arr){
            let values = arr.map(item => item)
            return values
        }


        
        