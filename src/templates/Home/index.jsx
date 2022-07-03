import './styles.css';
import { Component } from 'react';

import { loadPosts } from '../../utils/loadPost';
import { Post } from '../../components/posts';
import { Button } from '../../components/Button/button';
import { Input } from '../../components/input';


export class Home extends Component {
  constructor(props){
    super(props);
    this.state={
      posts:[],
      allPosts:[],
      page:0,
      postPerPage:3,
      searchValue:''


    }
   
  }
  async componentDidMount(){
  await this.loadPosts();
  }
  loadPosts = async () => {
    const postsAndPhotos = await loadPosts();
    const {page,postPerPage} = this.state;
    this.setState({
      posts:postsAndPhotos.slice(page, postPerPage) ,
      allPosts:postsAndPhotos,
    });
  }
  loadMorePosts = () =>{
    const {page, postPerPage , allPosts , posts} = this.state;

    const nextPage =  page + postPerPage;
    const nextPosts =  allPosts.slice(nextPage,nextPage + postPerPage);
    posts.push(...nextPosts);
    this.setState({posts, page: nextPage});

  }
  handleChange = (e) =>{
const {value} = e.target;
this.setState({searchValue:value})
  }
 render(){
  const {posts, page , postPerPage , allPosts, searchValue} = this.state;

  const noMorePosts = page + postPerPage >=allPosts.length

  const filteredPosts = !!searchValue ?  
  allPosts.filter(post =>{
    return post.title.toLowerCase().includes(searchValue.toLowerCase());
  })
  : posts; 
  // operador ternario
  return (
    <section className='container'>
      <div className='search-container'>
      {!!searchValue && (<h1>search: {searchValue}</h1>)} 
      {/*Short-circuit operators */}
      {/* !!searchValue: esta transformando em booleano se o searchvalue tiver valor ele vai ser verdadeiro se nao falso && e a operação se o searchValuefor verdadeiro vai fazer oq esta entre () */}


      <Input handleChange = {this.handleChange} searchValue={searchValue}/>
      </div>

      {filteredPosts.length > 0 ? <Post posts = {filteredPosts}/>: <p>não existe posts</p>}
   <Post posts={filteredPosts}></Post>
    <div className='button-container'>
     {!searchValue && (<Button
      disabled={noMorePosts} onClick={this.loadMorePosts}/>)}
      </div>
    </section>
  );
}
}


