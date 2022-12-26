import React from 'react'
import Edit from '../img/edit.png'
import Delete from '../img/delete.png'
import { Link } from 'react-router-dom'
import Menu from '../components/Menu'

const Single = () => {
  return (
    <div className='single'>
      <div className='content'>
        <img 
          src="https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="post cover"
        />
        <div className="user">
          <img 
            src="https://images.pexels.com/photos/6964334/pexels-photo-6964334.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="profile portrait" 
          />
          <div className="info">
            <span>John</span>
            <p>Posted 2 days ago</p>
          </div>
          <div className="edit">
            <Link to={`/write?edit=2`}>
              <img src={Edit} alt="" />
            </Link>
            <img src={Delete} alt="" />
          </div>
        </div>
        <h1>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, rerum?</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos ducimus, eos inventore consequatur, facere cumque ipsa sed labore velit perspiciatis excepturi tempora est quidem quae quo? Amet molestiae esse est sint sequi ea dignissimos aperiam odit dolorum placeat deserunt laboriosam quam veniam alias, ullam ad. Modi dolore tempora ratione impedit!</p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae eveniet quo debitis, obcaecati nihil voluptas asperiores quidem sunt laboriosam? Alias obcaecati id atque amet odit, autem cum doloremque nobis laboriosam voluptatem quaerat. Architecto blanditiis est odit nisi esse neque possimus aut hic accusamus quod odio in error, exercitationem explicabo mollitia.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates voluptatem commodi nisi, nostrum debitis quaerat nihil dolor quasi excepturi fugiat consequatur fuga facere eveniet atque, maxime quidem iusto. Asperiores, sapiente provident? At vel quod ex nisi velit eos, a voluptate nemo, sint ratione rerum assumenda autem eum exercitationem nihil officia?</p>
      </div>
      <Menu />
    </div>
  )
}

export default Single