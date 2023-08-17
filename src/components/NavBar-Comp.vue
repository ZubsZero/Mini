<template>
  <nav class="Navbar">
    <i><h4 class="heading">Something</h4></i>
    <ul class="ul">
      <a href="#"><li class="list-item">Home</li></a>
      <a href="#"><li class="list-item">About</li></a>
      <a href="#"><li class="list-item">Products</li></a>
      
    </ul>
  </nav>
</template>
<script>
export default {};
</script>
<style scoped>
.Navbar {
  background-color: white;
  padding: 1.2rem;
  display: flex;
}
.ul {
  list-style-type: none;
  display: flex;
  margin-left: 15rem;
}

.list-item {
  margin-left: 80px;
  font-size: 16px;
}

a{
    position: relative;
    text-decoration: none;
    font-family: 'Poppins',sans-serif;
    color: #000000;
    font-size: 18px;
}
a:after{
    content: "";
    position: absolute;
    background-color: #ff3c78;
    height: 3px;
    width: 0;
    left: 40px;
    bottom: -10px;
    transition: 0.3s;
}
a:hover{
    color: #000000;
}
a:hover:after{
    width: 100%;
}



.heading{
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 45.9rem;
    font-size: 1.2rem;
}
</style>
