import { useState, useEffect } from "react";

function Loader () {

    const [loading, setLoading] = useState("visible");

    useEffect(() => {

      const timer = setTimeout(() => {
        setLoading("hidden");
      }, 3000);

      const handleLoad = () => {
        setLoading("hidden");
      };
  
      window.addEventListener('load', handleLoad);
  
      // Rimuovere l'evento listener quando il componente viene smontato
      return () => {
        window.removeEventListener('load', handleLoad);
      };
    }, []);
  
   

return(

<>


<div className={` grid grid-cols-5 w-[100vw] h-[700vw] bg-[#faf5eb] z-40 fixed ml-[-33px] mt-[-100px] min-[414px]:ml-[-52px] min-[390px]:ml-[-40px] min-[430px]:ml-[-60px] 
min-[412px]:ml-[-51px] min-[1400px]:w-[110%] min-[1400px]:left-0 xl:w-[110%] xl:left-0 min-[768px]:left-0 min-[768px]:w-[120%] ${loading} `} >

<div className=" w-20 h-20 bg-[#80c6cf] ml-[153px] mt-[250px] min-[1400px]:ml-[228%] rotate-45 min-[1400px]:mt-[450px] min-[390px]:ml-[160px]  min-[414px]:ml-[170px] animate-Loaderr 
min-[430px]:ml-[178px] min-[412px]:ml-[164px] xl:ml-[760px] xl:mt-[400px] min-[768px]:ml-[410px] min-[768px]:mt-[420px]"></div>

<div className=" w-5 h-5 bg-black ml-[108px] mt-[280px] min-[1400px]:ml-[566px] min-[1400px]:mt-[480px] rotate-45 animate-Loaderr2 min-[414px]:ml-[117px] min-[390px]:ml-[112px] 
min-[430px]:ml-[122px] min-[412px]:ml-[112px] xl:mt-[430px] xl:ml-[509px] min-[768px]:ml-[257px] min-[768px]:mt-[450px] min-[820px]:ml-[400px]"></div>


</div>



</>

);

};

export default Loader;