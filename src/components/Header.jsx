function Header (){
     return (
      <div className="bg-purple-500 text-white p-4 text-center" >
        <p>Navbar</p>
        <button onClick={addgame} className="bg-green-500 text-black p-4 rounded-full mx-4">
      add game 
    </button>
    <button onClick={removegames} className="bg-red-500 text-black p-4 rounded-full ">
      clear games 
    </button>
        </div>
     )
}
export default Header