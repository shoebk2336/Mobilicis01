import { useEffect, useState } from "react"
import ChakraCard from "./chakraComponents/Card"
import ChakraSelector from "./chakraComponents/Selector"
import { SimpleGrid } from '@chakra-ui/react'
import AvgChakraCard from "./chakraComponents/AvgCard"



const Home=()=>{
    

    const [data,setData]=useState([])
    const [Filter,setFilter]=useState('')
    console.log(Filter,'hh')
    console.log(data,'selector result')

    const ApiData=async()=>{
        if(Filter===''){
            var url="http://localhost:8080/allData"
        }else var url=`http://localhost:8080/sort${Filter}`

        const Data=await fetch(url)
        const res=await Data.json()
        setData(res)
    }
const FilterData=(val)=>{
    setFilter(val)
}

    useEffect(()=>{
        ApiData()
    },[Filter])
    


    return(
        <>
        <ChakraSelector
        FilterData={FilterData}
       />
       {Filter==="5"?
        
        <SimpleGrid columns={{sm:2,base:1,md:3,lg:4}} spacing={5}>
        {data.map((el)=>
            <AvgChakraCard
        city={el._id}
        avg={el.avg}
        />
            )}
        
        </SimpleGrid>
        :
        
    
        <SimpleGrid columns={{sm:2,base:1,md:3,lg:4}} spacing={5}>
        {data.map((el)=>
         <ChakraCard key={el._id}
         car={el.car}
         city={el.city}
         email={el.email}
         first_name={el.first_name}
         last_name={el.last_name}
         gender={el.gender}
         phone_price={el.phone_price}
         quote={el.quote}
         income={el.income}
         />
         )}
        
        </SimpleGrid>}
        </>
    )
}
export default Home

// export  async function getServerSideProps(){
//     console.log(Filters)
//    if(Filters===undefined){
//     url=`http://localhost:8080/allData`
//    }else url=`http://localhost:8080/sort2`
//     const Data=await fetch(url)
//     const res=await Data.json()
//     return{
        
//             props:{res}
        
//     }

// }