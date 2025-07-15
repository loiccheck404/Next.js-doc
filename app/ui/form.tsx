//import { createPost } from '@/app/actions'

////export function Form() {
//return (
// <form action={createPost}>
//  <input type="text" name="title" />
//<input type="text" name="content" />
<button type="submit">Create</button>;
//</form>
//)
//}

//passed your action to the useActionState hook and use the returned state to display an error message.
("use client");

/*import { useActionState } from 'react'
import { createPost } from '@/app/actions'
 
const initialState = {
  message: '',
}
 
export function Form() {
  const [state, formAction, pending] = useActionState(createPost, initialState)
 
  return (
    <form action={formAction}>
      <label htmlFor="title">Title</label>
      <input type="text" id="title" name="title" required />
      <label htmlFor="content">Content</label>
      <textarea id="content" name="content" required />
      {state?.message && <p aria-live="polite">{state.message}</p>}
      <button disabled={pending}>Create Post</button>
    </form>
  )
}*/
