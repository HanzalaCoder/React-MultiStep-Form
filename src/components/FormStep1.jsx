

const FormStep1 = ({register,errors}) => {
  return (
   <section className="bg-white shadow-2xl rounded-2xl max-w-2xl w-[90%] mx-auto p-6 flex flex-col gap-4 lg:shadow-none lg:bg-none lg:w-[100%] " >
        <h1 className="font font-Ubuntu800 text-3xl text-MarineBlue">
          Personal Info
        </h1>
        <p className="text-CoolGray font-Ubuntu400" >Please Provide your name, email address, and phone number</p>
         <div>
          <div className="flex justify-between">
            <label htmlFor="name" className=" text-MarineBlue text font-Ubuntu400">Name</label>
             {errors.name && (
                 <small className=" text-StrawerryRed font-Ubuntu800 pr-2">{errors.name.message}</small>
             )}
          </div>
           <input type="text" id="name" {...register("name" ,{required:"This field is required"} )} className={`w-full py-2 sm:py-3 mt-2 border-2 border-CoolGray/50 outline-none rounded-lg focus:border-MarineBlue/80 px-4  placeholder:font-Ubuntu600 font-Ubuntu600 ${errors.name ? " border-1 border-StrawerryRed/50": ""} text-MarineBlue`}  placeholder="e.g:Stephen King" />
         </div>
         <div>
          <div className="flex justify-between">
            <label htmlFor="email" className=" text-MarineBlue text font-Ubuntu400">Email Address</label>
             {errors.email && (
                 <small className=" text-StrawerryRed font-Ubuntu800 pr-2">{errors.email.message}</small>
             )}
          </div>
           <input type="email" id="email" {...register("email" ,{required:"This field is required" , pattern: {value:/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,message : "Enter correct Email Address"}} )} className={`w-full py-2 sm:py-3  mt-2 border-2 border-CoolGray/50 outline-none rounded-lg focus:border-MarineBlue/80 px-4  placeholder:font-Ubuntu600 font-Ubuntu600 ${errors.name ? " border-1 border-StrawerryRed/50": ""} text-MarineBlue font-Ubuntu400`}  placeholder="e.g:Stephenking@gmail.com" />
         </div>
          <div>
            <div className="flex justify-between">
              <label htmlFor="number" className="text-MarineBlue text font-Ubuntu400">Phone Number</label>
              {errors.number && (
                <small className="text-StrawerryRed font-Ubuntu800 pr-2">{errors.number.message}</small>
              )}
            </div>
            <input type="text" id="number" {...register("number", {
                required: "This field is required",
                pattern: {
                  value: /^\d+$/, // Regular expression to match only numbers
                  message: "Only numbers are allowed",
                },
              })}
              className={`w-full py-2 sm:py-3  mt-2 border-2 border-CoolGray/50 outline-none rounded-lg focus:border-MarineBlue/80 px-4 placeholder:font-Ubuntu600 font-Ubuntu600 ${
                errors.number ? "border-1 border-StrawerryRed/50" : ""
              } text-MarineBlue font-Ubuntu400`}
              placeholder="e.g:03867539874" />
          </div>

   </section>
  )
}

export default FormStep1