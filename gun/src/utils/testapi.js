const axios = require('axios');

axios
  .get('http://localhost:8080/pokemon/score/all', {
    headers: {
      Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiYzQyYTE4Zjg4OGY1MTdmYWI1YTdiY2Q5ZjhhODllYmMiLCJpYXQiOjE2ODEwMTc1MDQsImV4cCI6MTY4MTAyMTEwNH0.WcsSxi3sdaY1l_t30NaT8a0zWk2wDhgKQNrIdBW9NpU`
    }
  })
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    console.error(error);
  });
