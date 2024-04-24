import styles from './postPage.module.css';
import ViewUserButton from '../components/Posts/ViewUserButton';
import CardList from '../components/Posts/CardList';

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const base_url = 'https://jsonplaceholder.typicode.com/posts';
const Posts = async() => {
  const response = await fetch(base_url, {
    cache: 'no-store',
    next: {revalidate: 3600}
  });
  const posts: Post[] = await response.json();
  return (
    <>
    <p>{new Date().toLocaleTimeString()}</p>
    <h1 className="text-fuchsia-400">
      POSTINGAN PAGE
    </h1>
    {posts.map((post) => {
      return (
        <CardList key={post.id}>
          <h2 className={styles.title}>{post.id}</h2>
          <p>{post.title}</p>
          <p>{post.body}</p>
          <ViewUserButton userId={post.userId}/>
        </CardList>
      );
    })}
    </>
  );
}

export default Posts;