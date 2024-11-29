import supabase, { supabaseUrl } from "./supabase";

export async function getCabins() {
  const { data, error } = await supabase.from("cabins").select("*");

  if (error) {
    console.error(error);
    throw new Error("Cabins could not be loaded");
  }
  return data;
}

export async function createCabin(newData) {
  const imageName = `${Math.random()}-${newData.image.name}`.replaceAll(
    "/",
    ""
  );
  console.log(imageName);
  const imagePath = `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;

  //first upload the Data
  const { data, error } = await supabase
    .from("cabins")
    .insert([{ ...newData, image: imagePath }])
    .select();

  if (error) {
    console.error(error);
    throw new Error("Cabin could not be created");
  }
  //Then upload the image
  const { error: storageError } = await supabase.storage
    .from("cabin-images")
    .upload(imageName, newData.image);

  if (storageError) {
    await supabase.from("cabins").delete().eq("id", data.id);
    console.error(error);
    throw new Error("Cabin could not be uloaded and cabin is deleted ");
  }
  return data;
}
export async function deleteCabin(id) {
  const { data, error } = await supabase.from("cabins").delete().eq("id", id);
  if (error) {
    console.error(error);
    throw new Error("Cabin could not be deleted");
  }
  return data;
}
