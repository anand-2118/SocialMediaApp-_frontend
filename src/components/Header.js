import React from 'react'

const styles={
    container:{
        padding:'3rem',
        backgroundColor:'aliceblue'
    },
    mainHeading:{
       fontSize:'3rem'
    },
    mainParagraph:{
        fontSize:'2rem'
    }
}

export default function Header() {
  return (
    <div style={styles.container} >
        <h1 className='display-1 mainHeading' style={styles.mainHeading}>Welcome to SocialMediaApp</h1>
        <p className='mainParagraph' style={styles.mainParagraph}>Connect with like-minded friends and grow your community :)</p>
    </div>
  )
}
