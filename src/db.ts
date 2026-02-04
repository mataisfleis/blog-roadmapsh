import axios from 'axios';
import { join } from 'node:path';
import type { Post } from './types/post.js';

const db_url = process.env.DB_URL as string

export async function getPosts(){
  // TODO: Use config instead of using process.env directly

  const request = await axios.get(db_url + '/posts')

  return request.data
}

export async function getPost(id: string){
  const  request = await axios.get(db_url + `/posts?id=${id}`)

  return request.data
}

export async function createPost(title: string, content: string){
  const encodedContent = btoa(content)
  const request = await axios.post(db_url + "/posts", { title, content: encodedContent, date: Date.now() })

  return request.data
}

export async function deletePost(id: string){
  const request = await axios.delete(`/posts?id=${id}`)

  return request.data
}

export async function updatePost(id: string, title: string | undefined, content: string | undefined){
  let newData: Partial<Post> = {}
  if(title !== undefined) newData["title"] = title
  if(content !== undefined) newData["content"] = btoa(content)
  const request = await axios.patch(db_url + `/posts?id=${id}`, newData)

  return request.data
}