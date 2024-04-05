export const getFeaturedPlaylist = (country, limit, offset) => { return `https://api.spotify.com/v1/browse/featured-playlists?${country ? "country=" + country + "&" : ''}${limit ? "limit=" + limit + "&" : ''}${offset ? "offset=" + offset : ''}` }
export const getNewReleases = (country, limit, offset) => { return `https://api.spotify.com/v1/browse/new-releases?${country ? "country=" + country + "&" : ''}${limit ? "limit=" + limit + "&" : ''}${offset ? "offset=" + offset : ''}` }
export const getPlaylist = (id, fields) => { return `https://api.spotify.com/v1/playlists/${id}?${fields ? "fields=" + fields.join("%2C") : ''}`; }   //pass fields as array
export const getPlaylistItems = (id, limit, offset) => { return `https://api.spotify.com/v1/playlists/${id}/tracks?${limit ? "limit=" + limit + "&" : ''}${offset ? "offset=" + offset : ''}`; }
export const getUserPlaylist = (limit, offset) => { return `https://api.spotify.com/v1/me/playlists?${limit ? "limit=" + limit + "&" : ''}${offset ? "offset=" + offset : ''}` }
export const getUserAllPlaylist = (userId, limit, offset) => { return `https://api.spotify.com/v1/users/${userId}/playlists?${limit ? "limit=" + limit + "&" : ''}${offset ? "offset=" + offset : ''}` }
export const getUserTopArtist = (limit, offset, time_range) => { return `https://api.spotify.com/v1/me/top/artists?${limit ? "limit=" + limit + "&" : ''}${offset ? "offset=" + offset : ''}` }
export const getUserTopTracks = (limit, offset) => { return `https://api.spotify.com/v1/me/top/tracks?${limit ? "limit=" + limit + "&" : ''}${offset ? "offset=" + offset : ''}` }
export const getUserLikedTracks = (limit, offset) => { return `https://api.spotify.com/v1/me/tracks?${limit ? "limit=" + limit + "&" : ''}${offset ? "offset=" + offset : ''}` }
export const getUserRecentlyPlayed = (limit, timestamp) => { return `https://api.spotify.com/v1/me/player/recently-played?before=${timestamp}${limit ? "&limit=" + limit : ''}` }
export const getUserCurrentPlaying = () => { return `https://api.spotify.com/v1/me/player/currently-playing` }
export const getUserSavedAlbums = (limit, offset) => { return `https://api.spotify.com/v1/me/albums?${limit ? "limit=" + limit : ''}${offset ? "offset=" + offset : ''}` }
export const getUser = () => { return `https://api.spotify.com/v1/me ` }


export const getAlbum = (id) => { return `https://api.spotify.com/v1/albums/${id}` }
export const getAlbumItems = (id, limit, offset) => { return `https://api.spotify.com/v1/albums/${id}/tracks?${limit ? "limit=" + limit : ''}${offset ? "offset=" + offset : ''}` }
export const getSongDetails = (id) => { return `https://api.spotify.com/v1/tracks/${id}` }

export const checkUserLikedSong = (id) => { return `https://api.spotify.com/v1/me/tracks/contains?ids=${id}` }
export const addUserLikedSong = (id) => { return `https://api.spotify.com/v1/me/tracks?ids=${id}` }  //PUT request 
export const removeUserLikedSong = (id) => { return `https://api.spotify.com/v1/me/tracks?ids=${id}` }  //PUT request 
export const addSongToUserPlaylist = (id, trackId) => { return `https://api.spotify.com/v1/playlists/${id}/tracks?position=0&uris=${trackId}` }  //POST request , uris=spotify:track:track_id

export const getArtist = (id) => { return `https://api.spotify.com/v1/artists/${id}` }
export const getArtistTopTracks = (id) => { return `https://api.spotify.com/v1/artists/${id}/top-tracks?market=IN` }
export const getArtistAlbums = (id, limit, offset) => { return `https://api.spotify.com/v1/artists/${id}/albums?${limit ? "limit=" + limit + "&" : ''}${offset ? "offset=" + offset : ''}` }
export const getArtistRelatedArtist = (id) => { return `https://api.spotify.com/v1/artists/${id}/related-artists` }


export const getSearchCategories = (limit, offset) => { return `https://api.spotify.com/v1/browse/categories?${limit ? "limit=" + limit + "&" : ''}${offset ? "offset=" + offset : ''}` }
export const getSearchSingleCategory = (id) => { return `https://api.spotify.com/v1/browse/categories/${id}` }
export const getSearchCategoriesPlaylists = (category_id, limit, offset) => { return `https://api.spotify.com/v1/browse/categories/${category_id}/playlists?${limit ? "limit=" + limit + "&" : ''}${offset ? "offset=" + offset : ''}` }
export const getSearchResult = (searchQuery, limit, offset) => { return `https://api.spotify.com/v1/search?q=${searchQuery}&type=album,playlist,artist,track&${limit ? "limit=" + limit + "&" : ''}${offset ? "offset=" + offset : ''}` }
