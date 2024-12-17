import supabase, { supabaseUrl } from "./supabase";
export async function signup ({email, password,fullName}) {
  const {data,error}= await supabase.auth.signUp({
    email,password,
    option:{
      data:{
        fullName,
        avatar:"",
      }
    }
  })
  if(error) {
    throw new Error(error.message)
  }
  return data
}
export async function login ({email, password}) {

    let { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
      })
      if(error) {
        throw new Error(error.message)
      }
    console.log(data);
    return data
}


export async function getCurrentUser(){

  const { data:session} = await supabase.auth.getSession();
  if(!session.session) return null;

  const { data, error } = await supabase.auth.getUser();
  if(error) {
    throw new Error(error.message)
  }
  return data?.user;
}

export async function logout(){

  const { error } = await supabase.auth.signOut();
  if(error) {
    throw new Error(error.message)
  }
}

export async function updateCurrentUser({fullName,avatar,password}){
  let updateData;

  if(password) updateData= {password};
  if(fullName) updateData={
    data:{
      fullName,
    }
  }
  if(!avatar) return data;
  const { data, error } = await supabase.auth.updateUser(updateData);
  if(error) {
    throw new Error(error.message)
  }

  const fileName= `avatar-${data.user.id}-${Math.random()}`;

  const {error:StorageErrorr}= await supabase.storage.from('avatar').upload(fileName,avatar);
  if(StorageErrorr) {
    throw new Error(StorageErrorr.message)
  }

  const {data:updatedData,error:error2}= await supabase.auth.updateUser({
    data:{
      avatar:`${supabaseUrl}/storage/v1/object/public/avatar/${fileName}`,
    }
  });
  if(error2) { throw new Error(error2.message) }
  return updatedData;

}