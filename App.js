 import React from "react";
import ReactDOM from "react-dom/client"

const Header=()=>{
    return(
<div className="header">

<div className="logo-container">
    <img className ="logo" src="https://t3.ftcdn.net/jpg/03/74/73/78/360_F_374737839_VsxlmnN7soqOOOFFzy5kfE9H6PFMCkPX.jpg"></img>
</div>
<div className="nav-items">
    <ul>
    <li>
           Home
        </li>
        <li>
            About us
        </li>
        <li>
            Contact Us
        </li>
        <li>
        Cart
        </li>
    </ul>
</div>
</div>);
}
const RestroCards=(props)=>{
    return(
        <div className="Restocards">
            <img width ={props.widthOfCard} height ={props.heightOfCard} src ={props.imageurl}></img>
<h3>{props.restroName} <span>{props.rating}</span></h3>
<h4>{props.cusine}</h4>
        </div>
    );
}
const Bodycomponent =()=>{
    return(
        <div className="body">
            <div className="serachBar">
            <form>
                <input type="text"/>
                <input type="submit"/>
                </form>  
            </div>
            <div className="restro-containers">
                <div className="resto-cards">
<RestroCards widthOfCard="100%" heightOfCard="70%" imageurl="https://img.freepik.com/premium-photo/biryani-is-mixed-rice-dish_891336-909.jpg?w=360" restroName="Veda Foods" rating="4.3" cusine="Biryani,Telangana Warangal"/>
<RestroCards widthOfCard="100%" heightOfCard="70%" imageurl="https://www.cubesnjuliennes.com/wp-content/uploads/2020/07/Chicken-Biryani-Recipe.jpg" restroName="Badithala's foods" rating="4.3" cusine="Biryani,Telangana Warangal"/>
<RestroCards widthOfCard="100%" heightOfCard="65%" imageurl="https://www.foodiesfeed.com/wp-content/uploads/2023/04/strawberry-milk-splash.jpg" restroName="Pranitha Foods" rating="4.3" cusine="milk shake,Telangana Warangal"/>
<RestroCards widthOfCard="100%" heightOfCard="70%" imageurl="https://img.freepik.com/premium-photo/large-bowl-food-with-fish-vegetables_197463-2405.jpg" restroName="Prathyu Food" rating="4.3" cusine="Biryani,Telangana Warangal"/>
<RestroCards widthOfCard="100%" heightOfCard="70%" imageurl="https://static.vecteezy.com/system/resources/thumbnails/025/348/077/small/professional-foodgraphy-instant-noodles-ai-generated-photo.jpg" restroName="sai Food" rating="4.3" cusine="Biryani,Telangana Warangal"/>
<RestroCards widthOfCard="100%" heightOfCard="70%" imageurl="https://imgmedia.lbb.in/media/2019/09/5d7325c706af943d00891bb5_1567827399037.jpg" restroName="Amma Food" rating="4.3" cusine="Meals,Telangana Warangal"/>
<RestroCards widthOfCard="100%" heightOfCard="70%" imageurl="https://img.freepik.com/free-photo/chicken-wings-barbecue-sweetly-sour-sauce-picnic-summer-menu-tasty-food-top-view-flat-lay_2829-6471.jpg" restroName="Siri Foods" rating="4.3" cusine="Biryani,Telangana Warangal"/>
<RestroCards widthOfCard="100%" heightOfCard="70%" imageurl="https://imgmedia.lbb.in/media/2019/09/5d7325c706af943d00891bb5_1567827399037.jpg" restroName="Amma Food" rating="4.3" cusine="Meals,Telangana Warangal"/>



                </div>
            </div>
        </div>
    );
}

const AppLevel=()=>{
  return(<div className="app">
<Header/>
<Bodycomponent/>
  </div>);  
}


// const jsxHeading=<h1 className="head">Hello world from jsx </h1>
//  const span =<span id="span">I am inside span</span>

// const HeadingComponent=()=>{
//     const object={
//         Name:"Prathyusha",
//         age : "25"
//     }
//     return(
//         <div>
//         <FooterComponent Name="sravan badithala" age="30 years"/>
//         <FooterComponent Name="Vedanshi badithala" age ="6 months"/>
//         {FooterComponent(object)}
//         <h1>Hell Sravan from Heading Components</h1>
//         </div>
//     );
// }

// const FooterComponent=(props)=>{
//     return(
        
//         <h1>{span}Hello {props.Name} from FooterComponent your age is {props.age}</h1>
//     )
// }


 //   const header1=React.createElement("h1",{id : "heading"},"Hello world from react!");
    
    // header---here header is a react element nothing but java script object 
    // {}---we can place here attribute like id, class
    // third parameter is props nothing but children
    
   // creating div and siblings with h1 tag

//    const header=React.createElement("div",{id : "parent"},React.createElement("div",{id : "child"},
//    [ React.createElement("h1",{id : "heading"},"i amin h1 tag"),
//     React.createElement("h2",{id : "heading1"},"i amin h2 tag world")]
// ));
   const root=ReactDOM.createRoot(document.getElementById("root"));
    root.render(<AppLevel/>);

    // const he=  document.createElement("h1");
    // he.innerHTML="hello world from java script !";
    // const root=document.getElementById("root");
    // root.appendChild(he);
