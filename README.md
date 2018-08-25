- **NYT article Link Preview**
- deployed to heroku
- for NYT article link preview use '/article' route
- try it: https://boiling-shelf-59019.herokuapp.com/

 _example_

```axios.get('https://boiling-shelf-59019.herokuapp.com/article', {
   headers: {
     url: url  //url of an article
    }
   })
   .then(function (response) {
   console.log(response.data);
   console.log(response.data.description);
   self.setState({data: response.data});
   })
   .catch(function (error) {
      console.log(error);
   })
   .then(function () {
   // always executed
 });


