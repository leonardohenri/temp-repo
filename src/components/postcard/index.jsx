export const PostCard = ({post}) =>{
return(
<div className="post">
        <img src={post.cover} alt={post.title}></img>
        <div key={post.id} 
          
        className="post-card">
        <h1>{post.title} {post.id}</h1>
        <p>{post.body}</p>
        </div>
        </div>
);
}