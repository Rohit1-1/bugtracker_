export const getData = (key) => {
    if(key){
     const data = (localStorage.getItem(key));
     return data;
   }
   };
   export const saveData = (key, value) => {
      if (key && value) {
       localStorage.setItem(key, value);
     }
   };
  
   