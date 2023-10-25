
const Headeer = ({step}) => {
  return (
    <header className="bg-[url('./assets/images/bg-sidebar-mobile.svg')] lg:bg-[url('./assets/images/bg-sidebar-desktop.svg')]  h-[20vh] bg-no-repeat bg-cover  lg:h-[38rem] lg:bg-bottom  relative lg:w-[30%] lg:rounded-2xl  " >
        <ul className="absolute inset-0 -top-8 flex  justify-center gap-6 sm:gap-10 lg:flex-col lg:left-[20%] lg:top-12 lg:justify-start" >
            <li className="flex  items-center gap-4" > 
                <div className={`grid place-items-center w-[40px] h-[40px] border-2 border-white rounded-full text-white font-semibold ${step === 1 ? "bg-LightBlue text-gray-950 border-none": ""} `} >
                    1
                </div>
                <div className="hidden lg:block">
                    <h6 className="text-CoolGray font-Ubuntu400">Step 1</h6>
                    <h2 className="text-white font-Ubuntu800 uppercase">Your info</h2>
                </div>
            </li>
            <li className="flex  items-center gap-4" > 
                <div className={`grid place-items-center w-[40px] h-[40px] border-2 border-white rounded-full text-white font-semibold ${step === 2 ? "bg-LightBlue text-gray-950 border-none": ""} `} >
                    2
                </div>
                <div className="hidden lg:block">
                    <h6 className="text-CoolGray font-Ubuntu400">Step 2</h6>
                    <h2 className="text-white font-Ubuntu800 uppercase">select plan</h2>
                </div>
            </li>
            <li className="flex  items-center gap-4" > 
                <div className={`grid place-items-center w-[40px] h-[40px] border-2 border-white rounded-full text-white font-semibold ${step === 3 ? "bg-LightBlue text-gray-950 border-none": ""} `} >
                    3
                </div>
                <div className="hidden lg:block">
                    <h6 className="text-CoolGray font-Ubuntu400">Step 3</h6>
                    <h2 className="text-white font-Ubuntu800 uppercase">add-ons</h2>
                </div>
            </li>
            <li className="flex  items-center gap-4" > 
                <div className={`grid place-items-center w-[40px] h-[40px] border-2 border-white rounded-full text-white font-semibold ${step === 4 ? "bg-LightBlue text-gray-950 border-none": ""} `} >
                    4
                </div>
                <div className="hidden lg:block">
                    <h6 className="text-CoolGray font-Ubuntu400">Step 4</h6>
                    <h2 className="text-white font-Ubuntu800 uppercase">Summary</h2>
                </div>
            </li>
            
        </ul>


        
    </header>
  )
}

export default Headeer