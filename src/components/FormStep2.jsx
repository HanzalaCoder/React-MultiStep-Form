

const FormStep2 = ({register,getValues}) => {
  let {plan,duration} = getValues()


  return (
      <section className="bg-white shadow-2xl rounded-2xl max-w-2xl w-[90%] mx-auto p-6 flex flex-col gap-4 lg:shadow-none lg:bg-none lg:w-[100%]">
            <h1 className="text text-MarineBlue font-Ubuntu800 text-3xl lg:text-4xl">Select your plan</h1>
             <p className="font-Ubuntu600 text-CoolGray" >You have the option of monthly or yearlyy billing.</p>
             <div className="flex flex-col gap-4 lg:flex-row my-8 ">
                <label htmlFor="checkboxArcade" className={`flex gap-4 lg:flex-col lg:gap-10 lg:w-[40%]  border-2 border-CoolGray/50 p-5  rounded-lg ${plan=== "arcade"? " border-PurplishBlue/70":""} lg:h-48  `} >
                    <input type="radio" className="hidden" id="checkboxArcade" {...register("plan")} value="arcade" />
                    <div>
                      <img src="assets/images/icon-arcade.svg" alt="" />
                    </div>
                    <div>
                      <h3 className=" text-MarineBlue font-Ubuntu600">Arcade</h3>
                      <h5 className=" text-CoolGray font-Ubuntu600">{!duration?"$9/mo":"$90/yr" }</h5>
                     { duration && <h6 className=" text-MarineBlue font-Ubuntu400">2 month free</h6>}
                    </div>
                  </label>
                <label htmlFor="checkboxAdvanced" className={`flex gap-4  lg:flex-col lg:gap-10 lg:w-[40%]  border-2 border-CoolGray/50 p-5 focus:border-MarineBlue rounded-lg ${plan=== "advanced"? " border-PurplishBlue/70":""} lg:h-48 `} >
                    <input type="radio" className="hidden" id="checkboxAdvanced" {...register("plan")} value="advanced" />
                    <div>
                      <img src="assets/images/icon-advanced.svg" alt="" />
                    </div>
                    <div>
                      <h3 className=" text-MarineBlue font-Ubuntu600">Advanced</h3>
                      <h5 className=" text-CoolGray font-Ubuntu600">{!duration?"$12/mo":"$120/yr" }</h5>
                      { duration &&  <h6 className=" text-MarineBlue font-Ubuntu400">2 month free</h6>}
                    </div>
                  </label>
                <label htmlFor="checkboxpro" className={`flex gap-4  lg:flex-col lg:gap-10 lg:w-[40%]  border-2 border-CoolGray/50 p-5 focus:border-MarineBlue rounded-lg ${plan=== "pro"? " border-PurplishBlue/70":""} lg:h-48 `} >
                    <input type="radio" className="hidden" id="checkboxpro" {...register("plan")} value="pro" />
                    <div>
                      <img src="assets/images/icon-pro.svg" alt="" />
                    </div>
                    <div>
                      <h3 className=" text-MarineBlue font-Ubuntu600">Pro</h3>
                      <h5 className=" text-CoolGray font-Ubuntu600">{!duration?"$15/mo":"$150/yr" }</h5>
                     { duration && <h6 className=" text-MarineBlue font-Ubuntu400">2 month free</h6>}
                    </div>
                  </label>
             </div>
             <div className=" bg-Magnolia flex justify-center py-4 gap-6 rounded-lg">
               <h1 className={`font-Ubuntu600 capitalize text-lg text-CoolGray  ${!duration ? "text-PurplishBlue/80": ""} ` }>Monthly</h1>
               <div>
                    <label htmlFor="toggle" className="flex items-center cursor-pointer">
                      <div className="relative">
                        {/* Input */}
                        <input
                          type="checkbox"
                          id="toggle"
                          className="sr-only"
                          {...register("duration")}
                        />
                        {/* Line */}
                        <div className="w-16 h-7 bg-MarineBlue rounded-full shadow-inner"></div>
                        {/* Dot */}
                        <div
                          className={` absolute left-1  top-[4px] w-5 h-5 bg-white rounded-full transition ${
                            duration ? 'transform translate-x-8' : ''
                          }`}
                        ></div>
                      </div>
                    </label>
              </div>
                <h1  className={`font-Ubuntu600 capitalize text-lg text-CoolGray  ${duration ? "text-PurplishBlue/80": ""} ` }>Yearly</h1>
             </div>
      </section>
  )
}

export default FormStep2