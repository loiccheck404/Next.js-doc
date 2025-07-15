import { revalidatePath } from "next/cache";
//import { redirect } from 'next/navigation'

export async function createPost(formData: FormData) {
  "use server";
  // Update data
  // ...

  revalidatePath("/posts");
  //redirect('/posts')
}

/** import { revalidateTag } from 'next/cache'
 
export async function updateUser(id: string) {
  // Mutate data
  revalidateTag('user')
}*/
