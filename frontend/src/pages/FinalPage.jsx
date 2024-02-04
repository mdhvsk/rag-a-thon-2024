import React from 'react'
import { useLocation } from 'react-router-dom'
import './FinalPage.scss'
const FinalPage = () => {

  const location = useLocation()
  const { image } = location.state || {}

  return (
    <div className='final-page'>


      <h2>Results</h2>


      <div className='content'>

        <div className='left-panel'>
          <img src={image} className='final-image' alt='final image' />
          <p><strong>Price: </strong>$100.00</p>
        </div>
        <div className='description'>
          <h4>Product Description</h4>
          <p >As they rounded a bend in the path that ran beside the river, Lara recognized the silhouette of a fig tree atop a nearby hill. The weather was hot and the days were long. The fig tree was in full leaf, but not yet bearing fruit.
Soon Lara spotted other landmarks—an outcropping of limestone beside the path that had a silhouette like a man’s face, a marshy spot beside the river where the waterfowl were easily startled, a tall tree that looked like a man with his arms upraised. They were drawing near to the place where there was an island in the river. The island was a good spot to make camp. They would sleep on the island tonight.
Lara had been back and forth along the river path many times in her short life. Her people had not created the path—it had always been there, like the river—but their deerskin-shod feet and the wooden wheels of their handcarts kept the path well worn. Lara’s people were salt traders, and their livelihood took them on a continual journey.
With their precious cargo of salt, the travelers crossed the coastal lowlands and traveled toward the mountains. But Lara’s people never reached the mountaintops; they traveled only as far as the foothills. Many people lived in the forests and grassy meadows of the foothills, gathered in small villages. In return for salt, these people would give Lara’s people dried meat, animal skins, cloth spun from wool, clay pots, needles and scraping tools carved from bone, and little toys made of wood.</p>
        </div>

      </div>

    </div>
  )
}

export default FinalPage