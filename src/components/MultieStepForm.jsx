import FormStep1 from "./FormStep1"
import FormStep2 from "./FormStep2"
import FormStep3 from "./FormStep3"
import FormStep4 from "./FormStep4"
import FormStep5 from "./FormStep5"
import Header from "./Headeer"
import { useState } from "react"
import { useForm } from "react-hook-form"



const MultieStepForm = () => {
   const [step,setStep] = useState(1)
   const {register,handleSubmit,watch, formState: {errors},trigger,getValues} = useForm({
    defaultValues: {
      name : "",
      email: "",
      number : "",
      plan : "arcade",
      duration: false,
      onlineService: false,
      largerstorage : false,
      customize : false
    }
   })

   function prevStep() {
        setStep(prev => {
          return prev = prev - 1

        })
   }
    watch(["plan","duration","onlineService","largerstorage","customize"])
   async function nextStep() {
        if (step === 1) {
          const output = await  trigger(["name","email","number"])
          if (!output) {
            return
          }
        }
        setStep(prev => {
          return prev = prev + 1

        })
   }
   const renderStep = () => {
    switch (step) {
      case 1:
        return <FormStep1 register = {register} errors = {errors}   />;
      case 2:
        return <FormStep2 register = {register} getValues = {getValues}  />;
      case 3:
        return <FormStep3 register = {register} getValues = {getValues} />;
      case 4:
        return <FormStep4 step= {step} setStep={setStep} getValues = {getValues}  />;
      case 5:
        return <FormStep5  />;
      default:
        return null;
    }
  };
  function submitData(data) {
    setStep(step => {
     return step  = 5

    })
    console.log(data)

  }

  return (
    <div className="lg:pt-[3%] bg-Magnolia h-[100vh]">
        <section className=" lg:max-w-4xl xl:max-w-5xl lg:mx-auto lg:flex    lg:bg-white shadow-2xl rounded-2xl lg:relative">
          <Header step={step} />
          <form onSubmit={handleSubmit(submitData)} className="lg:w-[50%] mx-auto flex flex-col justify-between gap-8">
            <div className="mt-10 ">
                {renderStep()}

            </div>
            <div className={`flex w-full  lg:absolute lg:bottom-0 ${step===5 ?"":"shadow-2xl bg-white"} rounded-2xl justify-between py-4 px-10 lg:w-[70%] lg:mt-0 lg:left-[30%]`} >
                <button type="button" onClick={prevStep} className={`${step === 1 || step === 5 ? "hidden" : "block"} text-CoolGray font-Ubuntu600`} >Go Back</button>
                <button type="button" onClick={nextStep} className={`${step < 4 ? "block": "hidden" } py-2 bg-MarineBlue text-white font-Ubuntu600 px-6 rounded-md  ml-auto` } >Next Step </button>
                <button type="submit" className={`${step === 4 ? "block": "hidden" } bg-PurplishBlue hover:bg-PurplishBlue/70 py-2 text-white font-Ubuntu600 px-6 rounded-md `} >Confirm</button>
            </div>
          </form>
        </section>
    </div>
    
   
   
  )
}
export default MultieStepForm