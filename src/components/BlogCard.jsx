import {Card} from "react-bootstrap"

const BlogCard = ({title, body}) => {
    const styles = {
        Card: {
            width: "18rem",
            height: "18rem",
            margin: "1rem",
            borderRadius: "20px",
            color: "blue",
            border: "1px solid green"
        }
    }

  
  
   
    return (
    <div>
        
        <Card style={styles.Card}>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {body}
                </Card.Text>
            </Card.Body>
        </Card>
        

    </div>
  )
}

export default BlogCard