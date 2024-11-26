import { Navbar } from "../Components/Navbar"
import { Fruitlist } from "../Components/Fruitlist"
import { Footer } from "../Components/Footer"

export const Home = ()=>{

    const userName = "Patrick"
    const fruits =[{name:"Apple"}, {name:"Oranges"}, {name:"Cherries"}, {name:"Strawberries"}]

    return(
        <>
        <Navbar userName={userName}/>
        
        <Fruitlist fruits={fruits}/>
        <Footer siteName={"Prop-Test Website"} />
        </>
    )
}