# Front-end Style Guide

## Layout

The designs were created to the following widths:

- Mobile: 375px
- Desktop: 1440px

## Colors

### Primary

- Marine blue: hsl(213, 96%, 18%)
- Purplish blue: hsl(243, 100%, 62%)
- Pastel blue: hsl(228, 100%, 84%)
- Light blue: hsl(206, 94%, 87%)
- Strawberry red: hsl(354, 84%, 57%)

### Neutral

- Cool gray: hsl(231, 11%, 63%)
- Light gray: hsl(229, 24%, 87%)
- Magnolia: hsl(217, 100%, 97%)
- Alabaster: hsl(231, 100%, 99%)
- White: hsl(0, 0%, 100%)

## Typography

### Body Copy

- Font size (paragraph): 16px

### Font

- Family: [Ubuntu](https://fonts.google.com/specimen/Ubuntu)
- Weights: 400, 500, 700
  const {register,handleSubmit,watch,getValues,trigger,setValue,reset,formState: {errors,isDirty,dirtyFields},} = useForm({
    defaultValues :{
      firstname: "",
      lastname: "",
      age : 9,
      email : ""
    }
})
   const onSubmit = (data, e) => console.log(data)
   const onError = (errors, e) => console.log(errors)
   function hjghj() {
    console.log(isDirty,dirtyFields)
   }
   
  return (
    <form onSubmit={handleSubmit(onSubmit,onError)} className="flex justify-center w-[80%] mx-auto  mt-20 gap-8 flex-col">
    
    <div className="flex gap-4">
        <label htmlFor="firstname" className="capitalize">
         firstname
        </label>
        <input type="text" {...register("firstname",{required:"this input is important",maxLength : {value:5,message:"too "}})} id="firstname" />
        {errors.firstname && (
        <p>{errors.firstname.message}</p>
      )}

    </div>
    <div className="flex gap-4">
        <label htmlFor="lastname" className="capitalize">
        lastname
        </label>
        <input type="text" {...register("lastname" ,{ minLength: {value:2,message:"too short"},required:true,validate: (text) => {
          console.log(text)
          return text === "khan" || "not equal to khan"
        }}  )} id="lastname" />
        <p>{errors.lastname?.message}</p>
    </div>
    <div  className="flex gap-4" >
      <label htmlFor="age">age</label>
      <input type="number" {...register("age",{required:"important",min:{value:10,message:"greater than 10"},max:{value:25,message:"smaller than 25"},valueAsNumber:true })} />
      {errors.age && (
        <p>{errors.age.message}</p>
      )}
       <button type="button" onClick={() => {
        setValue("age",24,{shouldValidate:true})
        setValue("email","hanzla@gmail.com")
        console.log(getValues())
        hjghj()
      }}>set value</button>
    </div >
    <div  className="flex gap-4" >
      <label htmlFor="email">Age</label>
      <input type="email" {...register("email",{required:"important",pattern : {value:/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,message:"enter correct email"}})} />
      {errors.email && (
        <p>{errors.email.message}</p>
      )}
     
    </div >
    <div className="flex gap-4" >
      <label htmlFor="gender">Gender</label>
      <select {...register("gender")}>
        <option value="female" >Female</option>
        <option value="male" >male</option>
        <option value="both" >both</option>
    </select>

    </div >
    <button type="button" className="bg-green-300 py-2 rounded-xl" onClick={() => {
      reset({
        ...getValues(),
        email : ""
      }
        )
    }}>reset</button>
   
    <button type="button" className="bg-green-700 py-2 rounded-xl" onClick={ async () => {
      const output = await trigger(["email","age"])
      console.log(output)
    }}>trigger</button>
   

    <button type="submit" className="bg-red-600 py-2 px-4 rounded-xl">
      submit

    </button>
    {errors.exampleRequired && <span>This field is required</span>}
    
    </form> )