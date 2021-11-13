import React from 'react'
import './Noon.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Nav, Navbar,  Card, Carousel, CardGroup,Row,Col,Alert,Placeholder,Table} from 'react-bootstrap'


function Noon() {
    return (
        <div>
            <>
            <Navbar bg="light"  expand="lg">
  <Container>
  <img
        src="https://cdn.freelogovectors.net/wp-content/uploads/2020/11/noon-logo.png"
        width="30"
        height="30"
        className="d-inline-block align-top" id="round"
        alt="noon"
      />
    <Navbar.Brand >  Home</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">


      <Nav >
    
    
      <Nav.Link href="#link">Career</Nav.Link>
        <Nav.Link href="#home">MEN</Nav.Link>
        <Nav.Link href="#home">WOMEN</Nav.Link>
        <Nav.Link href="#home">HOME</Nav.Link>
        <Nav.Link href="#link">GROCERY</Nav.Link>
        <Nav.Link href="#link">SPORTS</Nav.Link>
      
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>

<Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"  height='350px'
      src="https://k.nooncdn.com/cms/pages/20190722/10122026148c2ecd884a55584f90f575/en_mb-hero-01.jpg"
      alt="First slide"
    />
   
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100" height='350px'
      src="https://images.squarespace-cdn.com/content/v1/5a599e7cc027d84cad27dd04/1575013079662-L3AH9X0GYYTWK5JI6MMQ/web.gif?format=2500w"
      alt="Second slide"
    />


  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100" height='350px'
      src="https://k.nooncdn.com/mpcms/EN0001/assets/03f326dc-00aa-4272-a9dd-44b546f689e1.gif"
      alt="Third slide"
    />

  
  </Carousel.Item>
</Carousel>



<CardGroup>
  <Card>
    <Card.Img  variant="top"src="https://k.nooncdn.com/cms/pages/20211112/93fdc0d0d90a0cff91799a51e18ccdc0/en_dk_uae-category-01.png" />
    <Card.Body>
   
      <Card.Text>
     

      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted"></small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img  variant="top"src="https://k.nooncdn.com/cms/pages/20211107/70fa5ea01b7d5c40222f50957e2df81c/en_mb_uae-category-03.png"/>
    <Card.Body>
   
      <Card.Text>
     

      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted"></small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top"src="https://k.nooncdn.com/cms/pages/20211107/70fa5ea01b7d5c40222f50957e2df81c/en_mb_uae-category-15.png" />
    <Card.Body>
   
      <Card.Text>
      
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted"></small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top"src="https://k.nooncdn.com/cms/pages/20211107/70fa5ea01b7d5c40222f50957e2df81c/en_mb_uae-category-04.png" />
    <Card.Body>
   
      <Card.Text>
    

      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted"></small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top"src="https://k.nooncdn.com/cms/pages/20211107/70fa5ea01b7d5c40222f50957e2df81c/en_mb_uae-category-05.png" />
    <Card.Body>
   
      <Card.Text>
  

      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted"></small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top"src="https://k.nooncdn.com/cms/pages/20211107/70fa5ea01b7d5c40222f50957e2df81c/en_mb_uae-category-16.png" width="50px" />
    <Card.Body>
   
      <Card.Text>
    

      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted"></small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top"src="https://k.nooncdn.com/cms/pages/20211107/70fa5ea01b7d5c40222f50957e2df81c/en_mb_uae-category-17.png" />
    <Card.Body>
   
      <Card.Text>
    

      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted"></small>
    </Card.Footer>
  </Card>
 
</CardGroup>

 


<CardGroup>

<Card>
    <Card.Img variant="top" src=" https://k.nooncdn.com/mon/1636633195314-ckvux5bn60v3lt6r71ew1hu3u.png" />
    
    <Card.Footer>
    <Card>
  
</Card>
      <small className="text-muted"></small>
    </Card.Footer>
    </Card>
  <Card>
    <Card.Img variant="top" src=" https://k.nooncdn.com/cms/pages/20211109/ee55af45450d820fec137a94a6c0dbf8/en_dk_uae-mega-02.png" />
    
    <Card.Footer>
      <small className="text-muted"></small>
    </Card.Footer>
  </Card>

  <Card>
    <Card.Img variant="top" src=" https://k.nooncdn.com/mon/1636631930232-ckvuwe7i00u2xpbr8rihfidpn.png" />
    
    <Card.Footer>
      <small className="text-muted"></small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="https://k.nooncdn.com/cms/pages/20211109/ee55af45450d820fec137a94a6c0dbf8/en_dk_uae-mega-04.png" />
    
    <Card.Footer>
      <small className="text-muted"></small>
    </Card.Footer>
  </Card>
</CardGroup>

<Container>
  <h1>
    <Container>
      <p>Recommended for you</p>
    </Container>
  </h1>
</Container>


{/* second container cards */}

<Container>
  <Row>
    <Col><Card.Img variant="top" src="https://z.nooncdn.com/products/tr:n-t_240/v1635349986/N47729493A_1.jpg" /><Card>
  <Card.Body>This is some text within a card body.</Card.Body>
</Card></Col>
    <Col><Card.Img variant="top" src="https://z.nooncdn.com/products/tr:n-t_240/v1633343872/N40633047A_1.jpg" /><Card>
  <Card.Body>This is some text within a card body.</Card.Body>
</Card></Col>
    <Col><Card.Img variant="top" src="https://z.nooncdn.com/products/tr:n-t_240/v1635188660/N43748990A_1.jpg" /><Card>
  <Card.Body>This is some text within a card body.</Card.Body>
</Card></Col>
    <Col><Card.Img variant="top" src="https://z.nooncdn.com/products/tr:n-t_240/v1631683308/N50840187A_1.jpg" /><Card>
  <Card.Body>This is some text within a card body.</Card.Body>
</Card></Col>
    <Col><Card.Img variant="top" src="https://z.nooncdn.com/products/tr:n-t_240/v1636612856/N31748281A_1.jpg" /><Card>
  <Card.Body>This is some text within a card body.</Card.Body>
</Card></Col>
    <Col><Card.Img variant="top" src=" https://z.nooncdn.com/products/tr:n-t_240/v1633754977/N22732308A_1.jpg" /><Card>
  <Card.Body>This is some text within a card body.</Card.Body>
</Card></Col>
    <Col><Card.Img variant="top" src=" https://z.nooncdn.com/products/tr:n-t_240/v1605814243/N41044064A_1.jpg" /><Card>
  <Card.Body>This is some text within a card body.</Card.Body>
</Card></Col>
    
    
  </Row>
  
</Container>

{/* Alert */}

<Alert variant="success">
  <Alert.Heading>Hey, nice to see you</Alert.Heading>
  <img
      className="d-block w-100"
      src="https://k.nooncdn.com/cms/pages/20211109/50526658a9ba73690bd68873114ddf04/en_strip-01.gif
      "
      alt="First slide"
    />
  <hr />
  <p className="mb-0">
    Whenever you need to, be sure to use margin utilities to keep things nice
    and tidy.
  </p>
</Alert>

{/* END Alert */}

{/* Cards 3d */}

<Container>
  <Row><Card.Img variant="top" src=" https://k.nooncdn.com/cms/pages/20211108/fc2fda944b2b37c0f81f8ec95ca0b516/en_dk_uae-title-mega-01.png" width="150%"/></Row>
  <Row>
  
    <Col><Card.Img variant="top" src="https://k.nooncdn.com/cms/pages/20211112/56c41c8783984106157da9883fbbaaf6/en_dk_uae-mega-01.png"  width="100%" />
    <Card>
  <Card.Body>This is some text within a card body.</Card.Body>
</Card></Col>
    <Col><Card.Img variant="top" src="https://k.nooncdn.com/cms/pages/20211112/56c41c8783984106157da9883fbbaaf6/en_dk_uae-mega-01-backup.png" width="100%" /><Card>
  <Card.Body>This is some text within a card body.</Card.Body>
</Card></Col>
    <Col><Card.Img variant="top" src="https://k.nooncdn.com/cms/pages/20211112/56c41c8783984106157da9883fbbaaf6/en_dk_uae-mega-03.png" width="100%" /><Card>
  <Card.Body>This is some text within a card body.</Card.Body>
</Card></Col>
    <Col><Card.Img variant="top" src="https://k.nooncdn.com/cms/pages/20211112/56c41c8783984106157da9883fbbaaf6/en_dk_uae-mega-04.png"  width="100%"/><Card>
  <Card.Body>This is some text within a card body.</Card.Body>
</Card></Col>
    <Col><Card.Img variant="top" src="https://k.nooncdn.com/cms/pages/20211112/56c41c8783984106157da9883fbbaaf6/en_dk_uae-mega-05.png" width="100%"/><Card>
  <Card.Body>This is some text within a card body.</Card.Body>
</Card></Col>
    <Col><Card.Img variant="top" src=" https://k.nooncdn.com/cms/pages/20211112/56c41c8783984106157da9883fbbaaf6/en_dk_uae-mega-099.png" width="100%" /><Card>
  <Card.Body>This is some text within a card body.</Card.Body>
</Card></Col>
    <Col><Card.Img variant="top" src=" " /></Col>
    
   
  </Row>
  
</Container>

{/* <hr/> */}
<Container>
  <h1>
    <Container>
      <p>Recommended for you</p>
    </Container>
  </h1>
</Container>
















 {/* second Carousel */}
<Carousel variant="dark">
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://k.nooncdn.com/cms/pages/20211112/637a53bbc2fab5ab8138abe8c8157acb/en_dk_uae-strip-flash-sale-01.png"
      alt="First slide"
    />
    <Carousel.Caption>

    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://k.nooncdn.com/cms/pages/20211109/690265eebc309a72523e577c2297cd36/en_strip-mashreq-01.gif"
      alt="Second slide"
    />
    <Carousel.Caption>

    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://k.nooncdn.com/cms/pages/20211112/637a53bbc2fab5ab8138abe8c8157acb/en_dk_uae-strip-flash-sale-01.png"
      alt="Third slide"
    />
    <Carousel.Caption>
   
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>



<Container>



  <Row>
  <Card.Img variant="top" src=" https://k.nooncdn.com/cms/pages/20211109/59ecacaf1416a1572bee68f3e4f731e9/en_dk_uae-title-bestsellers.png" /><Card>
  <Card.Body></Card.Body>
</Card>
    
    <Col><Card.Img variant="top" src="https://z.nooncdn.com/products/tr:n-t_240/v1630055876/N21043556A_1.jpg" /><Card>
  <Card.Body>This is some text within a card body.</Card.Body>
</Card></Col>
    <Col><Card.Img variant="top" src="https://z.nooncdn.com/products/tr:n-t_240/v1634462237/N42772458A_1.jpg" /><Card>
  <Card.Body>This is some text within a card body.</Card.Body>
</Card></Col>
    <Col><Card.Img variant="top" src="https://z.nooncdn.com/products/tr:n-t_240/v1605898679/N40563366A_1.jpg" /><Card>
  <Card.Body>This is some text within a card body.</Card.Body>
</Card></Col>
    <Col><Card.Img variant="top" src="https://z.nooncdn.com/products/tr:n-t_240/v1611138575/N42284105A_1.jpg" /><Card>
  <Card.Body>This is some text within a card body.</Card.Body>
</Card></Col>
    <Col><Card.Img variant="top" src="https://z.nooncdn.com/products/tr:n-t_240/v1614175642/N11200643A_1.jpg" /><Card>
  <Card.Body>This is some text within a card body.</Card.Body>
</Card></Col>
    <Col><Card.Img variant="top" src=" https://z.nooncdn.com/products/tr:n-t_240/v1635356755/N38839537A_1.jpg" /><Card>
  <Card.Body>This is some text within a card body.</Card.Body>
</Card></Col>
    <Col><Card.Img variant="top" src=" 	https://z.nooncdn.com/products/tr:n-t_240/v1609243354/N39295994A_1.jpg" /><Card>
  <Card.Body>This is some text within a card body.</Card.Body>
</Card></Col>

    
    
  </Row>
  
</Container>

{/* ********************************** */}
<CardGroup>

<Card>
    <Card.Img variant="top" src="https://k.nooncdn.com/mon/1636713595780-ckvw90l1g12out6r74r0c5c1p.png" />
    
    <Card.Footer>
    <Card>
  
</Card>
      <small className="text-muted"></small>
    </Card.Footer>
    </Card>
  <Card>
    <Card.Img variant="top" src=" https://k.nooncdn.com/mon/1636707552694-ckvw5f25y10zbo4r8b5sh7j44.png" />
    
    <Card.Footer>
      <small className="text-muted"></small>
    </Card.Footer>
  </Card>

  <Card>
    <Card.Img variant="top" src="https://k.nooncdn.com/cms/pages/20211026/8ff45361c6eb861443df6f345cfa99d7/en_X3-01.png" />
    

  </Card>
</CardGroup>

{/* ?????????????????????????????????????? */}

<Container>

<Card style={{ width: '100%' }}>
  <Card.Img variant="top" src="https://k.nooncdn.com/cms/pages/20211109/690265eebc309a72523e577c2297cd36/en_strip-mashreq-01.gif" />
  
</Card>

  <Row>
  
    
    <Col><Card.Img variant="top" src="https://z.nooncdn.com/products/tr:n-t_240/v1636460944/N26849803A_1.jpg" /><Card>
  <Card.Body>This is some text within a card body.</Card.Body>
</Card></Col>
    <Col><Card.Img variant="top" src="https://z.nooncdn.com/products/tr:n-t_240/v1581947839/N34603808A_1.jpg" /><Card>
  <Card.Body>This is some text within a card body.</Card.Body>
</Card></Col>
    <Col><Card.Img variant="top" src="https://z.nooncdn.com/products/tr:n-t_240/v1618722256/N42654114A_1.jpg" /><Card>
  <Card.Body>This is some text within a card body.</Card.Body>
</Card></Col>
    <Col><Card.Img variant="top" src="https://z.nooncdn.com/products/tr:n-t_240/v1623328776/N43754098A_1.jpg" /><Card>
  <Card.Body>This is some text within a card body.</Card.Body>
</Card></Col>
    <Col><Card.Img variant="top" src="https://z.nooncdn.com/products/tr:n-t_240/v1635671669/N28983854A_1.jpg" /><Card>
  <Card.Body>This is some text within a card body.</Card.Body>
</Card></Col>
    <Col><Card.Img variant="top" src="https://z.nooncdn.com/products/tr:n-t_240/v1587562735/N29375498A_1.jpg " /><Card>
  <Card.Body>This is some text within a card body.</Card.Body>
</Card></Col>
    <Col><Card.Img variant="top" src=" https://z.nooncdn.com/products/tr:n-t_240/v1587562742/N29375493A_1.jpg" /><Card>
  <Card.Body>This is some text within a card body.</Card.Body>
</Card></Col>

    
    
  </Row>
  
</Container>
{/* Satart ?????????????????????????????????????? */}
<CardGroup>

<Card>
    <Card.Img variant="top" src="https://k.nooncdn.com/cms/pages/20211108/fc2fda944b2b37c0f81f8ec95ca0b516/en_dk_uae-b1g1-fashion-01.png" />
    
    <Card.Footer>
    <Card>
  
</Card>
      <small className="text-muted"></small>
    </Card.Footer>
    </Card>
  <Card>
    <Card.Img variant="top" src=" https://k.nooncdn.com/cms/pages/20211108/fc2fda944b2b37c0f81f8ec95ca0b516/en_dk_uae-b1g1-fashion-02.png" />
    
    <Card.Footer>
      <small className="text-muted"></small>
    </Card.Footer>
  </Card>

  <Card>
    <Card.Img variant="top" src="https://k.nooncdn.com/cms/pages/20211108/fc2fda944b2b37c0f81f8ec95ca0b516/en_dk_uae-b1g1-fashion-03.png" />
    

  </Card>
</CardGroup>

{/* OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO */}

<Card style={{ width: '100%' }}>
  <Card.Img variant="top" src="https://k.nooncdn.com/cms/pages/20211109/690265eebc309a72523e577c2297cd36/en_strip-mashreq-01.gif" />
  
</Card>
{/* OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO */}
<Card style={{ width: '100%' }}>
  <Card.Img variant="top" src="https://k.nooncdn.com/cms/pages/20211110/35a713b5b103bc42814188d6e78eaf37/en_dk_uae-title-02.png" />
  
</Card>
<Row>
  <Col><Card.Img variant="top" src="https://z.nooncdn.com/products/tr:n-t_240/v1624514065/N46941943V_1.jpg" /><Card>
  <Card.Body>This is some text within a card body.</Card.Body>
</Card></Col>
    <Col><Card.Img variant="top" src="https://z.nooncdn.com/products/tr:n-t_240/v1625916844/N38454761V_1.jpg" /><Card>
  <Card.Body>This is some text within a card body.</Card.Body>
</Card></Col>
    <Col><Card.Img variant="top" src="https://z.nooncdn.com/products/tr:n-t_240/v1619300355/N46525288V_1.jpg" /><Card>
  <Card.Body>This is some text within a card body.</Card.Body>
</Card></Col>
    <Col><Card.Img variant="top" src="https://z.nooncdn.com/products/tr:n-t_240/v1619169839/N43023138A_1.jpg" /><Card>
  <Card.Body>This is some text within a card body.</Card.Body>
</Card></Col>
    <Col><Card.Img variant="top" src="https://z.nooncdn.com/products/tr:n-t_240/v1607964273/N39784458V_1.jpg" /><Card>
  <Card.Body>This is some text within a card body.</Card.Body>
</Card></Col>
    <Col><Card.Img variant="top" src="https://z.nooncdn.com/products/tr:n-t_240/v1618840617/N43947476V_1.jpg " /><Card>
  <Card.Body>This is some text within a card body.</Card.Body>
</Card></Col>
    <Col><Card.Img variant="top" src="https://z.nooncdn.com/products/tr:n-t_240/v1619536549/N43946796V_1.jpg" /><Card>
  <Card.Body>This is some text within a card body.</Card.Body>
</Card></Col>

    
    
  </Row>
  
  <Card style={{ width: '100%' }}>
  <Card.Img variant="top" src="https://k.nooncdn.com/mon/1636708394521-ckvw5x3q117r4sar748fb13h0.png" />
  
</Card>
<Card style={{ width: '50%' }}>
  <Card.Img variant="top" src="https://k.nooncdn.com/mon/1636709168354-ckvw6dote119jsvr7pv4b8n95.png" className="cards" />
  
</Card>
<Card style={{ width: '50%' }}>
  <Card.Img variant="top" src="https://k.nooncdn.com/cms/pages/20211110/cdbb77065f89782a466ff0cb4c01014c/en_featured-01-uae.png" />
  
</Card>
<Card style={{ width: '100%' }}>
  <Card.Img variant="top"  src="https://k.nooncdn.com/cms/pages/20211108/4f1c679a8134318e5b34075aaa973bab/en_dk_uae-title-trendingelectro.png" />
  
</Card>
<Row>
  <Col><Card.Img variant="top" src="https://z.nooncdn.com/products/tr:n-t_240/v1605814308/N29884744A_1.jpg" /><Card>
  <Card.Body>This is some text within a card body.</Card.Body>
</Card></Col>
    <Col><Card.Img variant="top" src="https://z.nooncdn.com/products/tr:n-t_240/v1603040761/N41246646A_1.jpg" /><Card>
  <Card.Body>This is some text within a card body.</Card.Body>
</Card></Col>
    <Col><Card.Img variant="top" src="https://z.nooncdn.com/products/tr:n-t_240/v1607694899/N22440697A_1.jpg" /><Card>
  <Card.Body>This is some text within a card body.</Card.Body>
</Card></Col>
    <Col><Card.Img variant="top" src="https://z.nooncdn.com/products/tr:n-t_240/v1629911256/N50366787A_1.jpg" /><Card>
  <Card.Body>This is some text within a card body.</Card.Body>
</Card></Col>
    <Col><Card.Img variant="top" src="	https://z.nooncdn.com/products/tr:n-t_240/v1601222054/N40768520A_1.jpg" /><Card>
  <Card.Body>This is some text within a card body.</Card.Body>
</Card></Col>
    <Col><Card.Img variant="top" src="	https://z.nooncdn.com/products/tr:n-t_240/v1635188676/N46458528A_1.jpg " /><Card>
  <Card.Body>This is some text within a card body.</Card.Body>
</Card></Col>
    <Col><Card.Img variant="top" src="	https://z.nooncdn.com/products/tr:n-t_240/v1636367498/N50853414A_1.jpg" /><Card>
  <Card.Body>This is some text within a card body.</Card.Body>
</Card></Col>
</Row>
<Card style={{ width: '33%' }}>
  <Card.Img variant="top" src="https://k.nooncdn.com/cms/pages/20211108/4f1c679a8134318e5b34075aaa973bab/en_dk_uae-beautyb1g1-03.gif" className="cards" />
  
</Card>
<Card style={{ width: '33%' }}>
  <Card.Img variant="top" src="https://k.nooncdn.com/cms/pages/20211112/027a309dc541947db0ebbc22aea46498/en_dk_uae-beauty-01.png " />
  
</Card>
<Card style={{ width: '33%' }}>
  <Card.Img variant="top" src="  https://k.nooncdn.com/cms/pages/20211112/027a309dc541947db0ebbc22aea46498/en_dk_uae-beauty-011.png" />
  
</Card>
    {/* /////////////////// */}

    <Card style={{ width: '100%' }}>
  <Card.Img variant="top"  src="https://k.nooncdn.com/cms/pages/20211111/376206c784e876547a40e656615fb54b/en_dk_uae-strip.gif" />
  
</Card>
    <Card style={{ width: '100%' }}>
  <Card.Img variant="top"  src="https://k.nooncdn.com/cms/pages/20211112/353e7e22695f07e157a36cc0f9d88a07/en_dk_uae-price-00.png" />
  
</Card>
<Row>
  <Col><Card.Img variant="top" src="https://k.nooncdn.com/cms/pages/20211112/353e7e22695f07e157a36cc0f9d88a07/en_mb_uae-price-01.png" /><Card>
  
</Card></Col>
    <Col><Card.Img variant="top" src="https://k.nooncdn.com/cms/pages/20211112/353e7e22695f07e157a36cc0f9d88a07/en_mb_uae-price-02.png" /><Card>
  
</Card></Col>
    <Col><Card.Img variant="top" src="https://k.nooncdn.com/cms/pages/20211112/353e7e22695f07e157a36cc0f9d88a07/en_mb_uae-price-03.png" /><Card>

</Card></Col>
    <Col><Card.Img variant="top" src="	https://k.nooncdn.com/cms/pages/20211112/353e7e22695f07e157a36cc0f9d88a07/en_mb_uae-price-04.png" /><Card>
 
</Card></Col>
  

   
</Row>

<Card style={{ width: '100%' }}>
  <Card.Img variant="top" src="https://k.nooncdn.com/cms/pages/20211108/fc2fda944b2b37c0f81f8ec95ca0b516/en_uae-title-explore-01.png" />
  
</Card>
<Card style={{ width: '6rem' }}>
  <Card.Img variant="top" src="https://k.nooncdn.com/cms/pages/20211107/70fa5ea01b7d5c40222f50957e2df81c/en_mb_uae-category-22.png" />
  
</Card>
<Card style={{ width: '6rem' }}>
  <Card.Img variant="top" src="	https://k.nooncdn.com/cms/pages/20211108/fc2fda944b2b37c0f81f8ec95ca0b516/en_mb_uae-category-10.png" />
  
</Card>

<Card style={{ width: '6rem' }}>
  <Card.Img variant="top" src="https://k.nooncdn.com/cms/pages/20211107/70fa5ea01b7d5c40222f50957e2df81c/en_mb_uae-category-11.png" />
  
</Card>
<Card style={{ width: '6rem' }}>
  <Card.Img variant="top" src="https://k.nooncdn.com/cms/pages/20211107/70fa5ea01b7d5c40222f50957e2df81c/en_mb_uae-category-21.png" />
  
</Card>
<Card style={{ width: '6rem' }}>
  <Card.Img variant="top" src="https://k.nooncdn.com/cms/pages/20211107/70fa5ea01b7d5c40222f50957e2df81c/en_mb_uae-category-19.png" />
  
</Card>
<Card style={{ width: '5rem' }}>
  <Card.Img variant="top" src="	https://k.nooncdn.com/cms/pages/20211107/70fa5ea01b7d5c40222f50957e2df81c/en_mb_uae-category-23.png" />
  
</Card>
<Card style={{ width: '6rem' }}>
  <Card.Img variant="top" src="https://k.nooncdn.com/cms/pages/20211107/70fa5ea01b7d5c40222f50957e2df81c/en_mb_uae-category-24.png" />
  
</Card>
<Card style={{ width: '6rem' }}>
  <Card.Img variant="top" src="https://k.nooncdn.com/cms/pages/20211107/70fa5ea01b7d5c40222f50957e2df81c/en_mb_uae-category-08.png" />
  
</Card>
<Card style={{ width: '6rem' }}>
  <Card.Img variant="top" src="	https://k.nooncdn.com/cms/pages/20211107/70fa5ea01b7d5c40222f50957e2df81c/en_mb_uae-category-35.png" />
  
</Card>
<Card style={{ width: '6rem' }}>
  <Card.Img variant="top" src="	https://k.nooncdn.com/cms/pages/20211108/4f1c679a8134318e5b34075aaa973bab/en_mb_uae-category-12.png" />
  
</Card>
<Card style={{ width: '6rem' }}>
  <Card.Img variant="top" src="	https://k.nooncdn.com/cms/pages/20211107/70fa5ea01b7d5c40222f50957e2df81c/en_mb_uae-category-25.png" />
  
</Card>
<Card style={{ width: '6rem' }}>
  <Card.Img variant="top" src="	https://k.nooncdn.com/cms/pages/20211107/70fa5ea01b7d5c40222f50957e2df81c/en_mb_uae-category-27.png" />
  
</Card>
<Card style={{ width: '6rem' }}>
  <Card.Img variant="top" src="https://k.nooncdn.com/cms/pages/20211107/70fa5ea01b7d5c40222f50957e2df81c/en_mb_uae-category-32.png" />
  
</Card>
<Card style={{ width: '6rem' }}>
  <Card.Img variant="top" src="	https://k.nooncdn.com/cms/pages/20211108/4f1c679a8134318e5b34075aaa973bab/en_mb_uae-category-12.png" />
  
</Card>
<Card style={{ width: '100%' }}>
  <Card.Img variant="top" src="https://k.nooncdn.com/cms/pages/20211108/4f1c679a8134318e5b34075aaa973bab/en_dk_uae-plp-01.gif" />
  
</Card>

<Card style={{ width: '100%' }}>
  <Card.Img variant="top" src="https://k.nooncdn.com/cms/pages/20211108/5692ae365e0867a8eb42464337ee6660/en_dk_uae-title-exclusive-01.png" />
  
</Card>
{/* ...... */}
<Card style={{ width: '21em' }}>
  <Card.Img variant="top" src="https://k.nooncdn.com/cms/pages/20211113/01211e6f83d98540a5c2b939cef09acd/en_mb_uae-exclusive-01.png" />
  
</Card>
<Card style={{ width: '21rem' }}>
  <Card.Img variant="top" src="	https://k.nooncdn.com/cms/pages/20211113/01211e6f83d98540a5c2b939cef09acd/en_mb_uae-exclusive-02.png	" />
  
</Card>
<Card style={{ width: '21rem' }}>
  <Card.Img variant="top" src="https://k.nooncdn.com/cms/pages/20211113/01211e6f83d98540a5c2b939cef09acd/en_mb_uae-exclusive-03.png" />
  
</Card>
<Card style={{ width: '21rem' }}>
  <Card.Img variant="top" src="	https://k.nooncdn.com/cms/pages/20211113/01211e6f83d98540a5c2b939cef09acd/en_mb_uae-exclusive-04.png" />
  
</Card>
<Card style={{ width: '100%' }}>
  <Card.Img variant="top" src="	https://k.nooncdn.com/cms/pages/20211101/8e85778819b89055f5a345e50ed6f36e/en_noonsection-01.gif" />
  
</Card>
<Placeholder xs={12} bg="warning" />
<Table striped bordered hover>
  <thead>
    <tr>
      <th>#</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Username</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td></td>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <td>3</td>
      <td colSpan="2">Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</Table>




   
</>

        </div>
    )
}

export default Noon
