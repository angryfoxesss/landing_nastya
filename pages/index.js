import Head from 'next/head'
import Image from 'next/image'
import photo from '../public/photo.png'
import { Carousel, Button, Modal, Form }  from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import styles from '../styles/Home.module.css'
import logo1 from '../public/logo1.png'
import logo2 from '../public/logo2.png'
import wa from '../public/wa.png'
import fb from '../public/fb.png'
import bh from '../public/bh.png'
import inst from '../public/inst.png'


function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Сообщение
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <Form>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Ваш e-Mail</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    
  </Form.Group>

  <Form.Group className="pb-3 pt-3" controlId="exampleForm.ControlTextarea1">
    <Form.Label> Введите текст сообщения</Form.Label>
    <Form.Control as="textarea" rows={3} />
  </Form.Group>
  <Button variant="dark" type="submit" className="rounded-pill">
    Отправить
  </Button>
</Form>
      </Modal.Body>
    </Modal>
  );
}

export default function Home() {
  const [modalShow, setModalShow] = React.useState(false);

return (
<div className={styles.containn}>
 <div className={styles.nav}>
 <div className={styles.littleMenu}>
   <div>Анастасия Солопенко</div>
  <input type="checkbox" id="hmt" className={styles.hiddenMenuTicker} />
  <label className={styles.btnMenu} for="hmt">
  <span className={styles.first}></span>
  <span className={styles.second}></span>
  <span className={styles.third}></span>
  </label>
<ul className={styles.hiddenMenu}>
  <li><a href="#about">Обо мне</a></li>  
  <li><a href="">Фирменный стиль</a></li>
  <li><a href="#portfolio">Портфолио</a></li>  
  <li><a href="#contacts">Контакты</a></li>  
</ul>
   </div>
   <div className={styles.navs}>
  <div><span>Анастасия Солопенко</span></div>
  <li><a href="#about">Обо мне</a></li>  
  <li><a href="#skills">Навыки</a></li>
  <li><a href="#portfolio">Портфолио</a></li>  
  <li><a href="#contacts">Контакты</a></li>  
  
  </div>
 </div>
 <div className={styles.slide}>
  <div className={styles.centralBar}>
    <div className={styles.column}>
      <h1>Анастасия<br /> Солопенко</h1>
    </div>
    <div className={styles.column}>
      <p>Графический дизайнер<br /> 20 лет, Москва</p>
    </div>
    <div className={styles.column}>
      <span>Россия, Москва</span>
    </div>
  </div>
  <div className={styles.photo}>
      <Image src={photo} alt="Picture of the author" />
      </div>
 </div>
 <div id='about' className={styles.slide}>
  <div className={styles.named}><h2>Обо мне</h2></div>
 </div>
 <div id='skills' className={styles.slide}>
  <div className={styles.named}><h2>Навыки</h2></div>
  <p>Я работаю в следующих программах:</p>
 </div>
 <div id='portfolio' className={styles.slide}>
 <div className={styles.named}><h2>Портфолио- логотипы</h2></div>
 <div className={styles.test}>
 <div className={styles.zornet_ru_kerdsa}>
    <div className={styles.adaptberskin}><div><span>ZorNet: Создание сайта на uCoz</span></div></div>
</div>
<div className={styles.zornet_ru_kerdsa}>
<div className={styles.adaptberskin}><div>
  <Carousel variant="dark">
  <Carousel.Item>
  <Image src={logo1} alt="Picture of the author" />
    <Carousel.Caption>
      <h3>First slide label</h3>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
  <Image src={logo2} alt="Picture of the author" />
    <Carousel.Caption>
      <h3>Second slide label</h3>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="holder.js/800x400?text=Third slide&bg=20232a"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel></div></div> 
</div>
</div>
 </div>
 <div className={styles.slide}>
 <div className={styles.named}><h2>Портфолио- фирменный стиль</h2></div>
   <div className={styles.test}>
 <div className={styles.zornet_ru_kerdsa}>
    <div className={styles.adaptberskin}><div><span>ZorNet: Создание сайта на uCoz</span></div></div>
</div>
<div className={styles.zornet_ru_kerdsa}>
    <div className={styles.adaptberskin}><div><span>ZorNet: Создание сайта на uCoz</span></div></div>
</div>
</div>
 </div>
 <div id='contacts' className={styles.slide}>
 <div className={styles.named}><h2>Контакты</h2></div>
 <p>Хотите связаться?<br/>
 Напишите мне соощение!</p>
   <div className={styles.button}>
 <Button variant="dark" size='lg' className="rounded-pill" onClick={() => setModalShow(true)}>
        Направить сообщение
      </Button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
   </div>
  
   <div className={styles.social}>
   <div className={styles.logos}><Image  src={wa} alt="Picture of the author" /></div>
   <div className={styles.logos}><Image  src={fb} alt="Picture of the author" /></div>
   <div className={styles.logos}><Image  src={bh} alt="Picture of the author" /></div>
   <div className={styles.logos}><Image  src={inst} alt="Picture of the author" /></div>
   </div>
   <div className={styles.author}>
      <div className={styles.sign}><p>Powered by <span>A</span>ngryfoxess</p></div>
   </div>
 </div >
</div>
)
}