
    const header1=React.createElement("h1",{id : "heading"},"Hello world from react!");
    
    // header---here header is a react element nothing but java script object 
    // {}---we can place here attribute like id, class
    // third parameter is props nothing but children
    
   // creating div and siblings with h1 tag

   const header=React.createElement("div",{id : "parent"},React.createElement("div",{id : "child"},
   [ React.createElement("h1",{id : "heading"},"i amin h1 tag"),
    React.createElement("h2",{id : "heading1"},"i amin h2 tag")]
));
   const root=ReactDOM.createRoot(document.getElementById("root"));
    root.render(header);

    // const he=  document.createElement("h1");
    // he.innerHTML="hello world from java script !";
    // const root=document.getElementById("root");
    // root.appendChild(he);
