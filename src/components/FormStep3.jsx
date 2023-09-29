

const FormStep3 = ({register,getValues}) => {
  const {onlineService,largerstorage ,customize,duration} = getValues()
  return (
    <section className="bg-white shadow-2xl rounded-2xl max-w-2xl w-[90%] mx-auto p-6 flex flex-col gap-4 lg:shadow-none lg:bg-none lg:w-[100%]" >
        <h1 className="text text-MarineBlue font-Ubuntu800 text-3xl lg:text-4xl">Pick add-ons</h1>
        <p className="font-Ubuntu600 text-CoolGray" >Add-ons help enchasnce your gaming experience</p>
        <div className="flex flex-col gap-6">
          <label htmlFor="onlineservice" className=  {`flex gap-6 border-2 border-CoolGray/50 p-4 rounded-lg  ${onlineService?"border-PurplishBlue/60":"" }`}>
            <input type="checkbox" id="onlineservice" className="w-[20px]" {...register("onlineService")} />
            <div>
              <h3 className="t text-MarineBlue font-Ubuntu600">Online service</h3>
              <p className="t text-CoolGray font-Ubuntu600" >Access to multiplayer games</p>
            </div>
            <h4 className=" ml-auto text-PastelBlue font-Ubuntu600 self-center">{duration ?"+$10/yr":"+$1/mo"}</h4>
          </label>

          <label htmlFor="largerstorage" className=  {`flex gap-6 border-2 border-CoolGray/50 p-4 rounded-lg  ${largerstorage?"border-PurplishBlue/60":"" }`}>
            <input type="checkbox" id="largerstorage" className="w-[20px]" {...register("largerstorage")} />
            <div>
              <h3 className="t text-MarineBlue font-Ubuntu600">Larger storage</h3>
              <p className="t text-CoolGray font-Ubuntu600" >Extra 1TB of cloud space</p>
            </div>
            <h4 className=" ml-auto text-PastelBlue font-Ubuntu600 self-center">{duration ?"+$20/yr":"+$2/mo"}</h4>
          </label>

          <label htmlFor="customize" className=  {`flex gap-6 border-2 border-CoolGray/50 p-4 rounded-lg  ${customize?"border-PurplishBlue/60":"" }`}>
            <input type="checkbox" id="customize" className="w-[20px]" {...register("customize")} />
            <div>
              <h3 className="t text-MarineBlue font-Ubuntu600">Customizable profile</h3>
              <p className="t text-CoolGray font-Ubuntu600" >Custom theme on your profile</p>
            </div>
            <h4 className=" ml-auto text-PastelBlue font-Ubuntu600 self-center">{duration ?"+$20/yr":"+$2/mo"}</h4>
          </label>

        </div>
    </section>
  )
}

export default FormStep3