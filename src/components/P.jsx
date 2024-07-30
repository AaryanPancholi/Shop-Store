  import { useForm } from "react-hook-form";

export default function p() {
  const { register, handleSubmit,formState:{errors} } = useForm();
  const onSubmit = (data )=> console.log(data);
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("firstName",{require:{value:true,message:'Field is required'},minLength:{value:9,message:"Line9"}})} />
     {errors.firstName&&<p style={{color:'red'}}>{errors.firstName?.message}</p>}
     {console.log(errors.firstName?.message)}
      <select {...register("gender")}>
        <option value="female">female</option>
        <option value="male">male</option>
        <option value="other">other</option>
      </select>
      <input type="submit" />
    </form>
  );
}