import axios from 'axios';
import { join } from 'node:path';

const db_url = process.env.DB_URL as string

export async function getPosts(){
  // TODO: Use config instead of using process.env directly

  const request = await axios.get(db_url + '/posts')

  return request.data
}

export async function getPost(id: number | string){
  const  request = await axios.get(db_url + `/posts?id=${id}`)

  return request.data
}

export async function createPost(title: string, content: string){
  const encodedContent = btoa(content)
  const request = await axios.post(db_url + "/posts", { title, content: encodedContent, date: Date.now() })

  return request.data
}