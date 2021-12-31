import React, { useRef, useState, useEffect } from 'react'
import { useSpring, animated, to } from 'react-spring'
import { useGesture } from '@use-gesture/react'

function Blog() {
  const [posts, setPosts] = useState([])
  const getPosts = () => {
    fetch('https://api.hashnode.com/', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        query: `{
  user(username: "lakira") {
    publication{
      posts(page : 0) {
        title
        brief
        coverImage
        slug
        _id
      }
    }
  }
}`
      })
    })
      .then(res => res.json())
      .then(data => {
        setPosts(data.data.user.publication.posts)
      })
  }

  useEffect(() => {
    getPosts()
    posts.forEach(post => {
      fetch(post.coverImage).then(res => res.blob()).then(img => { post.coverImage = URL.createObjectURL(img) })
    });
    console.log(posts);
  }, []);

  return (
    <div className='blog' id='blog'>
      <h1 className='header'>My Recent Blog Posts</h1>
      <div className='posts-grid' >
        {
          posts.map((post) => (
            <BlogPost header={post.title} brief={post.brief} img={post.coverImage} slug={post.slug} key={post._id}/>
          ))
        }
      </div>
    </div>
  )
}

export default Blog



const BlogPost = (props) => {

  const calcX = (y, ly) => -(y - ly - window.innerHeight / 2) / 30
  const calcY = (x, lx) => (x - lx - window.innerWidth / 2) / 30


  useEffect(() => {
    const preventDefault = (e) => e.preventDefault()
    document.addEventListener('gesturestart', preventDefault)
    document.addEventListener('gesturechange', preventDefault)

    return () => {
      document.removeEventListener('gesturestart', preventDefault)
      document.removeEventListener('gesturechange', preventDefault)
    }
  }, [])

  const target = useRef(null)
  const [{ x, y, rotateX, rotateY, rotateZ, zoom, scale }, api] = useSpring(
    () => ({
      rotateX: 0,
      rotateY: 0,
      rotateZ: 0,
      scale: 1,
      zoom: 0,
      x: 0,
      y: 0,
      config: { mass: 10, tension: 360, friction: 50 },
    })
  )


  useGesture(
    {
      onMove: ({ xy: [px, py], dragging }) =>
      !dragging &&
      api({
        rotateX: calcX(py, y.get()),
        rotateY: calcY(px, x.get()),
        scale: 1.1,
      }),
      onHover: ({ hovering }) =>
      !hovering && api({ rotateX: 0, rotateY: 0, scale: 1 }),
      onPinch: ({ offset: [d, a] }) => api({ zoom: d / 200, rotateZ: a }),
    },
    { target, eventOptions: { passive: false } }
  )
  return (
    <a href={`https://blog.lakiramd.com/${props.slug}`} target="_blank" rel="noreferrer" key={props._id}>
      <animated.div className='blog-post' ref={target}
        style={{
          transform: 'perspective(600px)',
          x,
          y,
          scale: to([scale, zoom], (s, z) => s + z),
          rotateX,
          rotateY,
          rotateZ,
        }}>
        <img src={props.img} alt={props.header} />
        <h3 className='title'>{props.header}</h3>
        <p className='brief'>{`${props.brief.slice(0, 120)}...`}</p>
      </animated.div>
    </a>
  )
}

