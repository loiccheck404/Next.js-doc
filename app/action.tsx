"use server";
//import { cookies } from 'next/headers'

export async function createPost() {}

/**'use server'
 
//get, set, and delete cookies inside a server action with cookine API

export async function createPost(formData: FormData) {
  const title = formData.get('title')
  const content = formData.get('content')
 
  // Update data
  // Revalidate cache
} */

/** export async function exampleAction() {
  const cookieStore = await cookies()
 
  // Get cookie
  cookieStore.get('name')?.value
 
  // Set cookie
  cookieStore.set('name', 'Delba')
 
  // Delete cookie
  cookieStore.delete('name')
}*/

//used to revalidate a route and following an event. To use it, call it in a Route Handler or Server Action:
/**import { revalidatePath } from 'next/cache'
 
export async function updateUser(id: string) {
  // Mutate data
  revalidatePath('/profile') */

//

//You can use the useActionState hook to handle expected errors in Server Functions.
//For these errors, avoid using try/catch blocks and throw errors. Instead, model expected errors as return values.

/**'use server'
 
export async function createPost(prevState: any, formData: FormData) {
  const title = formData.get('title')
  const content = formData.get('content')
 
  const res = await fetch('https://api.vercel.app/posts', {
    method: 'POST',
    body: { title, content },
  })
  const json = await res.json()
 
  if (!res.ok) {
    return { message: 'Failed to create post' }
  }
} */
