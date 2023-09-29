import { useEffect, useState } from "react"

const FormStep4 = ({step, setStep, getValues }) => {
  const state = getValues()
  const [packagePrice,setPackagePrice] = useState(0)
  const [onlineService,setSetOnlineService] = useState(0)
  const [storage,setStorage] = useState(0)
  const [customize,setCustomize] = useState(0)

  useEffect(()=> {
    if (state.plan === "arcade") {
      if(state.duration) setPackagePrice(90)
       else  setPackagePrice(9)
    } else if (state.plan === "advanced") {
      if (state.duration) setPackagePrice(120)
       else setPackagePrice(12)
    }  else if (state.plan === "pro") {
        if (state.duration) setPackagePrice(150)
         else setPackagePrice(15)} 
    state.onlineService ? setSetOnlineService(state.duration ? 10:1):setSetOnlineService(0)
    state.largerstorage ? setStorage(state.duration ? 20:1):setStorage(0)
    state.customize ? setCustomize(state.duration ? 20:2):setCustomize(0)
  },[state])


  
  return (
    <section className="bg-white shadow-2xl rounded-2xl max-w-2xl w-[90%] mx-auto p-6 flex flex-col gap-4 lg:shadow-none lg:bg-none lg:w-[100%]">
        <h1 className="text text-MarineBlue font-Ubuntu800 text-3xl lg:text-4xl">Finishing up</h1>
             <p className="font-Ubuntu600 text-CoolGray" >Double-check everythinglooks Ok before confirming. </p>
             <div className="b bg-Magnolia p-4 rounded-xl">
                <div className="flex items-center mb-4">
                  <div>
                    <h3 className="t text-MarineBlue font-Ubuntu600 capitalize">{state.plan} <span>{state.duration ? "(Yearly)": "(Monthly)"}</span></h3>
                    <h5 className="te text-CoolGray font-Ubuntu600 underline cursor-pointer" onClick={() => {
                      setStep(2)
                    }}>change </h5>
                  </div>
                   <h4 className=" text-MarineBlue font-Ubuntu600 text-lg ml-auto">${packagePrice} {state.duration ? "/yr":"/mo"}</h4>
                </div>
                <hr />
               { state.onlineService && <div className="mt-6 mb-4 flex justify-between">
                  <h3 className="text-CoolGray font-Ubuntu600">Online service</h3>
                  <h4 className="t text-MarineBlue font-Ubuntu600">+${onlineService}{state.duration?"/yr":"/mo"}</h4>
                </div>}
               { state.largerstorage && <div className="mt-6 mb-4 flex justify-between">
                  <h3 className="text-CoolGray font-Ubuntu600">Larger storage</h3>
                  <h4 className="t text-MarineBlue font-Ubuntu600">+${storage}{state.duration?"/yr":"/mo"}</h4>
                </div>}
               { state.customize && <div className="mt-6 mb-4 flex justify-between">
                  <h3 className="text-CoolGray font-Ubuntu600">Customize</h3>
                  <h4 className="t text-MarineBlue font-Ubuntu600">+${customize}{state.duration?"/yr":"/mo"}</h4>
                </div>}
             </div>
             <div className="flex justify-between p-4">
               <h3 className="text-CoolGray font-Ubuntu600">Total ({state.duration ?"per year": "per month" })</h3>
               <h4 className=" text-PurplishBlue font-Ubuntu800 text-2xl">+${packagePrice+onlineService+storage+customize}/{state.duration ?"yr":"mo"}</h4>
             </div>

    </section>
    
  
  )
}

export default FormStep4