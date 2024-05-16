# Spotify-Clone - Enter the Musical Wonderland 🚀🎧

Step into a world where music knows no boundaries! With the power of ReactJS and Redux, "Spotify Clone" offers a seamless and immersive music streaming experience that will elevate the way you listen to your favorite tunes.
Check out what's in store:

For a live demonstration, explore [Spotify Clone Demo](https://spotifybyvaishali.web.app/).

## Table of Contents

- [Overview](#overview)
- [Pages](#pages)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [API](#api)
- [Dependencies](#dependencies)

## Overview

The Spotify Clone project provides users with a seamless music streaming experience similar to the popular Spotify platform. With a clean and intuitive interface, users can discover new music, create playlists, and enjoy their favorite tracks anywhere, anytime.

<div>
   <img src='https://github.com/Vaishali785/Spotify-Clone/blob/main/src/assets/screenshots/loginPage.png' alt='Login Page' width='250px'/> &nbsp;&nbsp;&nbsp;&nbsp;
   <img src='https://github.com/Vaishali785/Spotify-Clone/blob/main/src/assets/screenshots/HomePage.png' alt='Home Page' width='250px'  /> &nbsp;&nbsp;&nbsp;&nbsp;
   <img src='https://github.com/Vaishali785/Spotify-Clone/blob/main/src/assets/screenshots/DetailsPage.png' alt='Details Page' width='250px' />    
   <img src='https://github.com/Vaishali785/Spotify-Clone/blob/main/src/assets/screenshots/Search.png' alt='Search Page' width='250px' />    
   <img src='https://github.com/Vaishali785/Spotify-Clone/blob/main/src/assets/screenshots/SearchResult.png' alt='Search Result Page' width='250px' />    
</div>

## Pages

- **Home Page**: Discover a variety of Spotify-generated playlists, right at your fingertips.
- **Playlists Page**: Explore curated playlists with ease and discover new releases.
- **Albums Page**: Dive deep into your favorite albums and explore tracklists.
- **Artists Page**: Celebrate your favorite artists and explore their discography.
- **Liked Songs Page**: Curate your musical sanctuary with all your liked songs neatly organized in one place.
- **Search Page**: Explore endless genres: Hindi, Punjabi, Ghazals, Love, Trending, Mood, Telugu, and more!
- **Search Results Page**: Instantly find tracks, playlists, albums, and artists tailored to your taste with every query.

## Features

- 🎵 **Song Playing**: Immerse yourself in the melodies with seamless song playback. Please note that the app currently supports 30-second song previews.
- ❤️ **Liking Songs**: Express your musical appreciation by liking songs and curating your personal favorites library.
- ➕ **Adding Songs to Playlist**: Create customized playlists effortlessly, adding your favorite tracks with just a click.
- 🚫 **Removing Liked Songs**: Fine-tune your liked songs library by removing songs that no longer resonate with you.
- 🌈 **Endless Possibilities**: From chart-topping hits to hidden gems, uncover the music that moves you like never before.
- 🔊 **Volume Controls**: Adjust the volume to your liking for the perfect listening experience.
- 🔒 **Authentication**: Implemented a seamless sign-in process to verify user identities and ensure a secure experience for all. Say hello to hassle-free access to your favorite tunes! (Please note: As the app is in development, authentication with Spotify API is currently restricted to project owner permissions.)
- 🔑 **Authorization**: Grant users various scopes and permissions, empowering them to tailor their music journey .
- 🎨 **Customized Background Colors**: Customized background colors generated from the cover image, enhancing the visual experience and creating a unique atmosphere for your music exploration journey
- 👻 **Skeleton Screens**: Enjoy lightning-fast loading times and a smooth user experience with skeleton screens that seamlessly fill content areas while data loads in the background.

## Tech Stack

<p align="left"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/react-colored.svg" width="50" height="50" alt="React" />
<img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/redux-colored.svg" width="50" height="50" alt="Redux" />
<img alt='React-Router' height="50" width="100" src='https://reactrouter.com/_brand/react-router-stacked-color-inverted.png'>
<img alt="Spotify" src="https://cdn.iconscout.com/icon/free/png-512/free-spotify-1682937-1440796.png?f=webp&w=512" width="50" height="50"   />
<img alt='MUI' height="50" width="50" src='https://github.com/danielcranney/profileme-dev/blob/main/public/icons/skills/materialui-colored.svg'>
<img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/firebase-colored.svg" width="50" height="50" alt="Firebase" />

- **Frontend**: ReactJS
- **Styling**: CSS modules
- **Icons**: MUI Icons
- **Navigation**: React Router
- **State Management**: Redux Toolkit
- **Data Fetching**: Spotify Web API
- **Hosting**: Firebase

## API

This project fetches data from Spotify Web API. To set up the necessary API key, follow these steps:

1. Create a `.env` file in the root of your project.
2. Add the following line to the `.env` file:
   ```env
   REACT_APP_CLIENT_ID = your_spotify_api_key_here
   REACT_APP_CLIENT_SECRET = your_spotify_secret_here
   ```
   Replace `your_spotify_api_key_here` and `your_spotify_secret_here` with your actual Spotify API key.

## Dependencies

- [React](https://reactjs.org/)
- [MUI Icons](https://mui.com/material-ui/material-icons/)
- [React Router](https://reactrouter.com/en/main/start/overview)
- [Redux Toolkit](https://redux-toolkit.js.org/introduction/getting-started)
- [Spotify Web Api](https://developer.spotify.com/documentation/web-api)
- [Firebase](https://firebase.google.com/)

For a complete list of dependencies, refer to the `package.json` file.
