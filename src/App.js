import AddPet from "./AddPet";
import ListPets from "./ListPets";
import "./index.css";

function App() {
  const pets = [
    {
      id: 1,
      petName: "Fluffy",
      profilePicture:
        "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=2886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      species: "dog",
      isFriendly: false,
    },
    {
      id: 2,
      petName: "Rex",
      profilePicture:
        " https://images.unsplash.com/photo-1537151625747-768eb6cf92b2?q=80&w=2568&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      species: "cat",
      isFriendly: true,
    },
    {
      id: 3,
      petName: "Screaming Jean",
      profilePicture:
        "https://images.unsplash.com/photo-1608374398721-38b323502c5c?q=80&w=2118&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      species: "bird",
      isFriendly: false,
    },
  ];
  return (
    <div className="">
      <h1>Pet Tracker</h1>
      <AddPet />
      <h2>Pet List</h2>
      <ListPets pets={pets} />
    </div>
  );
}

export default App;
