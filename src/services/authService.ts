export async function registerUser(
  name: string,
  email: string,
  password: string,
  role: string = 'user'
) {
  await new Promise(resolve => setTimeout(resolve, 500));
  const token = btoa(`${email}:${password}`);
  return { token, email, role };
}

export async function loginUser(email: string, password: string){
  await new Promise(resolve => setTimeout(resolve, 500));
  const token = btoa(`${email}:${password}`);
  const role = email.includes('admin') ? 'admin' : 'user';
  return { token, email, role };
}