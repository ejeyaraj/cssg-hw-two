'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from '@/app/styles/styles.module.css';

export default function Home() {
  const [linkedinClicked, setLinkedinClicked] = useState(false);

  const handleClick = () => {
    setLinkedinClicked(true);
    window.location.href = 'https://www.linkedin.com/in/ejeyaraj/';
  };

  return (
    <div className = 'container'>
      <div>
        <h1 className = 'title'>All About Me: Edlyn Jeyaraj</h1>
        <h2 className = 'subtitle'>Education</h2>
        <p className = 'paragraph'>University of North Carolina Chapel Hill</p>
        <p className = 'paragraph'>Business B.S.B.A., Pre-Computer Science B.A.</p>
        <p className = 'paragraph'>2022 - 2026</p>
      </div>

      <div className = 'flex-container3'>
        <div className = 'flex-item'>
          <Image src='/image.jpeg' width={300} height={500}/>
        </div>
      </div>
      
      
      <h2 className = 'subtitle'>What Do I Like to Do?</h2>
      <div className='flex-container1'>
        <Link href='https://www.maxpreps.com/nc/cary/panther-creek-catamounts/athletes/edlyn-jeyaraj/?careerid=956irnmmovt55'>
            <Image src='/tennis.jpeg' width={200} height={300} className='small-image' />
        </Link>
        <Link href='https://www.icloud.com/notes/00WPk99S1Uv2mdTYDC6ZBJ6oA'>
            <Image src='/kdrama.jpg' width={200} height={100} className='small-image' />
        </Link>
        <Link href='https://www.keshimusic.com/#/'>
            <Image src='/keshi.jpg' width={200} height={200} className='small-image' />
        </Link>
      </div>

      <div className='flex-container2'>
        <div className='flex-item'>Play tennis</div>
        <div className='flex-item'>Watch too many Korean dramas</div>
        <div className='flex-item'>Listen to Keshi</div>
      </div>

      <button onClick={handleClick} className='button'>
        Click Here for my LinkedIn
      </button>
      {linkedinClicked && <p>You clicked the LinkedIn button!</p>}
    </div>
  );
}

