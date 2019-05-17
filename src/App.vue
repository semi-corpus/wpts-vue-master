<template>
  <div id="app">
    <header>
      <div id="nav">
        <router-link to="/"><span>Home</span></router-link>
        <h1>Tournament Creator</h1>
        <router-link to="/draw"><span>Draw</span></router-link>
      </div>
    </header>
    <router-view/>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css?family=Montserrat:300,400,700,900&display=swap');

* {margin:0;padding:0;text-decoration:none;text-transform:none;}

html{
  background: url('assets/bg.jpg');
  background-size: 100% 100%;
  background-position: center;  
  background-repeat: no-repeat;
  height: 100%;
}
body{
  background: rgba( 21, 28, 30 , .8);
  min-height: 100%;
}
#app {
  background: rgb(71,66,185);
  background: -moz-linear-gradient(330deg, rgba(71,66,185,0.5) 0%, rgba(66,185,131,0.5) 100%);
  background: -webkit-linear-gradient(330deg, rgba(71,66,185,0.5) 0%, rgba(66,185,131,0.5) 100%);
  background: linear-gradient(330deg, rgba(71,66,185,0.5) 0%, rgba(66,185,131,0.5) 100%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#4742b9",endColorstr="#42b983",GradientType=1); 
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  font-size: 16px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100vh;
  text-align: center;
  color: #FCFEFF;
}
header{
  background: #081012;
  font-family: 'Montserrat', sans-serif;
}
header h1{
  color: #FCFEFF;
  font-weight: 900;
  text-transform: uppercase;
  word-spacing: 1.2em;
}
#nav {
  background: rgba(39, 46, 48, .4);
  display:flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
  padding: 35px 40px;
}
#nav span{
  border: 2px solid #42b983;
  border-radius:4px;
  padding: 8px 12px;
}
#nav a {
  font-size: 1.1em;
  font-weight: 300;
  color: #FCFEFF;
}
#nav a:hover span{
  background: #42b983;
  color: #FCFEFF;
  text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.4);
}
#nav a.router-link-exact-active span{
  background: #42b983;
  color: #FCFEFF;
  cursor: initial;
}
</style>