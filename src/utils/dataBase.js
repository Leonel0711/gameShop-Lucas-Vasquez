const dataFromDB = [{
    id: 100,
    title: "Teclado Hyperx Alloy Origins Rgb Mecanico Gaming Blue",
    img: "https://http2.mlstatic.com/D_NQ_NP_2X_799942-MLA42138475540_062020-F.webp",
    description: "Este teclado HyperX de alto rendimiento permite que puedas disfrutar de horas ilimitadas de juegos. Está diseñado especialmente para que puedas expresar tanto tus habilidades como tu estilo. Podrás mejorar tu experiencia de gaming, ya seas un aficionado o todo un experto y hacer que tus jugadas alcancen otro nivel.",
    marca: "Hyperx",
    precio: 20220,
    category: "Teclado"
}, {
    id: 101,
    title: "Teclado gamer Logitech Serie G Prodigy G213 QWERTY español color negro con luz RGB",
    img: "https://app.contabilium.com/files/explorer/16277/Productos-Servicios/concepto-5848377.jpg",
    description: "El teclado Logitech Serie G Prodigy G213 está dirigido especialmente para aquellos jugadores que pasan horas al frente de una pantalla con sus juegos favoritos. Sus teclas están diseñadas con tecnología Logitech G Mech-Dome, las cuales tienen una respuesta táctil superior en comparación a dispositivos estándar de la competencia.",
    marca: "Logitech",
    precio: 10177,
    category: "Teclado"
}, {
    id: 102,
    title: "Teclado Razer Ornata Chroma Rgb",
    img: "https://http2.mlstatic.com/D_NQ_NP_765269-MLA44071351996_112020-O.webp",
    description: "Hablar de Razer dentro del mundo gamer es palabra mayor. Esta compañía ofrece productos de muy alta calidad a sus usuarios. Su línea de teclados es reconocida por haber recibido distintos galardones y premios internacionales por su alto desempeño.",
    marca: "Razer",
    precio: 15500,
    category: "Teclado"
}, {
    id: 103,
    title: "Teclado Redragon Shiva Rgb",
    img: "https://http2.mlstatic.com/D_NQ_NP_799291-MLA50495610720_062022-O.webp",
    description: "Disfrutá de tus partidas en otro nivel con Redragon, marca reconocida que se especializa en brindar la mejor experiencia de juego al público gamer desde hace más de 20 años. Sus teclados se adaptan a todo tipo de jugadores y esto los convierten en un fiel reflejo de la alta gama y calidad que la compañía ofrece.",
    marca: "Redragon",
    precio: 8450,
    category: "Teclado"
}, {
    id: 200,
    title: "Mouse HyperX Pulsefire Surge RGB 16000 DPI",
    img: "https://http2.mlstatic.com/D_NQ_NP_760141-MLA32146296703_092019-O.webp",
    description: "Para trabajar desde casa con la computadora o aprovechar los momentos de ocio, necesitás comodidad y facilidad de movimiento. Con tu HyperX Pulsefire Surge encontrá eso que buscás en un solo aparato con la mejor tecnología.",
    marca: "Hyperx",
    precio: 7636,
    category: "Mouse"
}, {
    id: 201,
    title: "Mouse Logitech G203 Gaming Lightsync Black",
    img: "https://http2.mlstatic.com/D_NQ_NP_781312-MLA45385798113_032021-O.webp",
    description: "Logitech diseña productos y experiencias que ocupan un lugar cotidiano en la vida de las personas, poniendo foco en la innovación y la calidad. Su objetivo es crear momentos verdaderamente únicos y significativos para sus usuarios. Los mouses Logitech se adaptan a la forma de tu mano para proporcionarte horas de comodidad. Sin necesidad de mover el brazo para deslizar el cursor, tu mano se fatigará menos. Son ideales para cualquier espacio de trabajo y quienes tienen la mesa llena de diversos objetos.",
    marca: "Logitech",
    precio: 5611,
    category: "Mouse"
}, {
    id: 202,
    title: "Mouse de juego Razer Mamba Elite negro",
    img: "https://http2.mlstatic.com/D_NQ_NP_878171-MLA41816931837_052020-O.webp",
    description: "Desde 2005 Razer es la marca líder de estilo de vida para jugadores. Ha diseñado y construido el ecosistema de hardware, software y servicios más grande del mundo. La ubicación de cada botón y curva de los mouses Razer se crearon para adaptarse perfectamente a tu mano. Gracias a estos dispositivos, conseguirás una experiencia de juego cómoda y placentera.",
    marca: "Razer",
    precio: 15782,
    category: "Mouse"
}, {
    id: 203,
    title: "Mouse Redragon Cobra Fps",
    img: "https://http2.mlstatic.com/D_NQ_NP_715011-MLA45384661954_032021-O.webp",
    description: "Con más de 20 años de experiencia en fabricación de productos, Redragon innova día a día en diseño y calidad. Su objetivo es producir equipamiento de alta gama para jugadores, con excelentes prestaciones y a un precio accesible. Los mouses Redragon son adecuados para todas las ocasiones, ya sea para entretenerse en el hogar o usarlo en el trabajo. Experimentá el diseño cómodo y elegante de este dispositivo.",
    marca: "Redragon",
    precio: 4638,
    category: "Mouse"
}, {
    id: 300,
    title: "Auricular Hyperx Cloud 2 Gun Metal Red 7.1 Wireless",
    img: "https://http2.mlstatic.com/D_NQ_NP_2X_662259-MLA46664514420_072021-F.webp",
    description: "¡Experimentá la adrenalina de sumergirte en la escena de otra manera! Tener auriculares específicos para jugar cambia completamente tu experiencia en cada partida. Con los HyperX Cloud II Wireless no te perdés ningún detalle y escuchás el audio tal y como fue diseñado por los creadores.",
    marca: "Hyperx",
    precio: 26490,
    category: "Auriculares"
}, {
    id: 301,
    title: "Auriculares Logitech G733 Wireless negro con luz RGB LED",
    img: "https://http2.mlstatic.com/D_NQ_NP_760857-MLA44771394445_022021-O.webp",
    description: "¡Experimentá la adrenalina de sumergirte en la escena de otra manera! Tener auriculares específicos para jugar cambia completamente tu experiencia en cada partida. Con los Logitech G733 no te perdés ningún detalle y escuchás el audio tal y como fue diseñado por los creadores.",
    marca: "Logitech",
    category: "Auriculares"
}, {
    id: 302,
    title: "Auriculares Razer BLACKSHARK V2 X",
    img: "https://http2.mlstatic.com/D_NQ_NP_787883-MLA43182608158_082020-O.webp",
    description: "¡Experimentá la adrenalina de sumergirte en la escena de otra manera! Tener auriculares específicos para jugar cambia completamente tu experiencia en cada partida. Con los Razer Kraken X Lite no te perdés ningún detalle y escuchás el audio tal y como fue diseñado por los creadores.",
    marca: "Razer",
    precio: 9280,
    category: "Auriculares"
}, {
    id: 303,
    title: "Auriculares Redragon Zeus X negro con luz rgb",
    img: "https://http2.mlstatic.com/D_NQ_NP_2X_924113-MLA49786533666_042022-F.webp",
    description: "¡Experimentá la adrenalina de sumergirte en la escena de otra manera! Tener auriculares específicos para jugar cambia completamente tu experiencia en cada partida. Con los Redragon Zeus X no te perdés ningún detalle y escuchás el audio tal y como fue diseñado por los creadores.",
    marca: "Redragon",
    precio: 14980,
    category: "Auriculares"
},
]
export default dataFromDB;