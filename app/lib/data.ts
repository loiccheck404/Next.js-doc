//revalidateTag is used to revalidate cache entries based on a tag and following an event. To use it with fetch, start by tagging the function with the next.tags option:

export async function getUserById(id: string) {
  const data = await fetch(`https://...`, {
    next: {
      tags: ["user"],
    },
  });
}

//or
/** export const getUserById = unstable_cache(
  async (id: string) => {
    return db.query.users.findFirst({ where: eq(users.id, id) })
  },
  ['user'], // Needed if variables are not passed as parameters
  {
    tags: ['user'],
  }
)*/
