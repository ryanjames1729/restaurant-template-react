import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import Starters from '../components/Starters'
import Mains from '../components/Mains'
import Desserts from '../components/Desserts'
import Drinks from '../components/Drinks'
import Link from 'next/link'
import { SocialIcon } from 'react-social-icons'
// import styles from '../styles/Home.module.css'

export default function Home( {starterItems, mainItems, dessertItems, drinkItems} ) {
  return (


    <div>
      <Head>
        <title>The Hap-pea Plate</title>
      </Head>
      
      <section id="showcase">

      </section>
      
      <Starters items={starterItems} />
      <Mains items={mainItems} />
      <Desserts items={dessertItems}/>
      <Drinks items={drinkItems}/>

      <div className="contact" id="contactMe">
        <div className="container">
          <h1>Contact Us</h1>
          <p>Anywhere, USA</p>
          <p>Phone: (555) 555-5555</p>
          <p>Email: <Link href="mailto:hap-pea_plate@eating.org">hap-pea_plate@eating.org</Link></p>
          <div>
            <ul>
              <li><SocialIcon url="https://www.facebook.com/" /></li>
              <li><SocialIcon url="https://www.instagram.com/" /></li>
              <li><SocialIcon url="https://www.twitter.com/" /></li>
            </ul>
          </div>
        </div>
      </div>
      
      <footer id="mainFooter">
        <p>Copyright &copy; 2022 Ryan James Writes Code</p>
        <h5><Link href="https://github.com/ryanjames1729">Github Profile</Link></h5>
      </footer>

    </div>


  )
}

export async function getStaticProps(context) {
  return {
      props: { 
        starterItems: [
          {id: 1, name: 'Potato Fritters', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'},
          {id: 2, name: 'Naan-Dairy Bread', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'},
          {id: 3, name: 'There\'s Hummus Among Us', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'},
          {id: 4, name: 'Chips For You', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'}
        ],
        mainItems: [
          {id: 1, name: 'Moo-free Mood Burger', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'},
          {id: 2, name: 'Your Favorite Bowl', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'},
          {id: 3, name: 'Rotisserie Tofu', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'},
          {id: 4, name: 'Tempeh the Bill Please', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'}
        ],
        dessertItems: [
          {id: 1, name: 'Icey Oats', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'},
          {id: 2, name: 'ChocoChoco Train', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'},
          {id: 3, name: 'Not All Superheros Wear Crepes', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'},
          {id: 4, name: 'The Forage', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'}
        ],
        drinkItems: [
          {id: 1, name: 'The New Fashioned', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'},
          {id: 2, name: 'Cotton Candy Trip', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'},
          {id: 3, name: 'This Can\'t Be Legal', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'},
          {id: 4, name: 'Your Dad\'s Cold Beer', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'}
        ]
      }
  }
}
