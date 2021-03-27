const App = () => {
  const name = "Laura"
  const age = 32;
  const styles = {
    fontSize: 54,
    color: 'orange'
  }
  return (
    <>
      <h1 style={styles}>Escribiendo JSX</h1>
      <h2>
        <lu>
          <li>Inicio</li>
          <li>Contacto</li>
          <li>Productos</li>
          <li>Carrito</li>
        </lu> 
      </h2>
    </>  
      
    
  );
};

export default App;
