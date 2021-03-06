export const fetchAlbums = () => {
  return $.ajax({
    method: "GET",
    url: "api/albums"
  });
};

export const fetchAlbum = (id) => {
  return $.ajax({
    method: "GET",
    url: `api/albums/${id}`
  });
};

export const createAlbum = (album) => {
  return $.ajax({
    method: "POST",
    url: `api/albums`,
    data: {album: album}
  });
};

export const deleteAlbum = (id) => {
  return $.ajax({
    method: "DELETE",
    url: `api/albums/${id}`
  });
};