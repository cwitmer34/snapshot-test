import { Card } from "react-bootstrap"

const GithubCard = () => {
  return (
    <Card style={{scale: "2", width: "200px", margin: "auto", marginTop: "300px", border: "1px solid black", padding: "1rem", borderRadius: "10px", backgroundColor: "#5A5A5A", color: "white"}}>
      <Card.Img src="https://placekitten.com/50/50" style={{borderRadius: "50%"}}/>
      <Card.Header>Connor Witmer</Card.Header>
      <Card.Body style={{fontSize: ".65em"}}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda unde quidem aperiam voluptatem nemo consectetur quibusdam quo magni ducimus iusto, vel soluta maiores amet! Eius!</Card.Body>
    </Card>
  )
}

export default GithubCard