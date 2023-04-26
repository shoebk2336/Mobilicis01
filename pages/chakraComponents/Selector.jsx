import { Select } from '@chakra-ui/react'


const ChakraSelector=({FilterData})=>{

    const Options=[

        {sort:'Income < $5 USD & car brand “BMW” or "Mercedes"',rank:1},
        {sort:' Male Users & have phone price greater than 10,000 ',rank:2},
        {sort:" Users last name starts with “M”   & a quote character length greater, than 15 & email includes his/her last name ",rank:3},
       { sort:'car of brand “BMW” or “Mercedes” or “Audi” and  email does not include any digit.',rank:4},
        {sort:'top 10 cities with the highest number of users and their average income.',rank:5}
        
    ]
const Handleselect=(e)=>{
    
    FilterData(e.target.value)
}

    return(<>
        <Select onChange={Handleselect} placeholder='Select option'>
        
        {Options.map((el)=>
            <option key={el.rank+2*22} value={el.rank}>{el.sort}</option>
            )}
  
</Select>
        
        </>)
}
export default ChakraSelector