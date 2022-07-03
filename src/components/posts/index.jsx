import { PostCard } from "../postcard";
import './styles.css'

export const Post = ({posts}) =>(
<section className="container">
<div className="posts">
    {posts.map(post=>(
      <PostCard post={post}/>
     
  ))}
</div>
</section>
)