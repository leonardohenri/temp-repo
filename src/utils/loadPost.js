export const loadPosts= async() =>{
    const postsResponse = fetch('https://jsonplaceholder.typicode.com/posts');
    const photosResponse = fetch('https://jsonplaceholder.typicode.com/photos');

    const [posts] = await Promise.all([postsResponse]);
    const [photos] = await Promise.all([photosResponse]);

    const postsJson =  await posts.json();
    const photosJson = await photos.json();
    
    const postsAndPhotos = postsJson.map((post,index)=> {return {...post, cover:photosJson[index].url}});
    return postsAndPhotos;
}