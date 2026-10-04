export const siteConfig = {
  name: 'Centro Podológico Ximena Alvarado',
  url: 'https://centropodologicoximenaalvarado.com',
  phone: '+50662500117',
  displayPhone: '+(506) 6250-0117',
  whatsapp: 'https://wa.me/50662500117',
  location: 'Sabana Norte, San José, Costa Rica',
  shortLocation: 'Sabana Norte, San José',
  description:
    'Centro podológico en Sabana Norte, San José, Costa Rica. Atención especializada para uña encarnada, hongos en las uñas, pie diabético, callosidades, verrugas plantares y cuidado preventivo del pie.',
  social: {
    facebook: 'https://www.facebook.com/XimenaAlvaradoQuiropodista/',
    instagram: 'https://www.instagram.com/centropd_ximena.alvarado/',
    threads: 'https://www.threads.net/@centropd_ximena.alvarado',
  },
} as const;

export const serviceAreas = [
  {
    region: 'San José',
    places: ['Sabana Norte', 'La Sabana', 'Mata Redonda', 'Rohrmoser', 'Pavas', 'Escazú', 'Santa Ana', 'San Pedro', 'Curridabat', 'Desamparados'],
  },
  {
    region: 'Heredia',
    places: ['Heredia centro', 'Belén', 'Santo Domingo', 'San Rafael', 'Barva'],
  },
  {
    region: 'Alajuela',
    places: ['Alajuela centro', 'Río Segundo', 'San Rafael de Alajuela'],
  },
  {
    region: 'Cartago',
    places: ['Cartago centro', 'Tres Ríos', 'La Unión'],
  },
] as const;

export type ServicePage = {
  slug: string;
  name: string;
  eyebrow: string;
  title: string;
  seoTitle: string;
  description: string;
  image: string;
  price?: string;
  intro: string[];
  whenToConsult: string[];
  process: { title: string; text: string }[];
  considerations: string[];
  faq: { question: string; answer: string }[];
  related: string[];
  bookingServiceId: string;
};

export const servicePages: ServicePage[] = [
  {
    slug: 'una-encarnada',
    name: 'Uña encarnada',
    eyebrow: 'Onicocriptosis',
    title: 'Atención para uña encarnada en San José',
    seoTitle: 'Uña encarnada en San José | Atención podológica',
    description:
      'Atención podológica para uña encarnada en Sabana Norte, San José. Valoración, limpieza del canal ungueal y opciones de tratamiento según cada caso.',
    image: '/images/servicios/una-encarnada.jpg',
    price: 'Desde ₡25,000',
    intro: [
      'La uña encarnada u onicocriptosis aparece cuando uno de los bordes de la uña ejerce presión o penetra la piel que la rodea. Puede producir dolor, sensibilidad, inflamación y dificultad al utilizar calzado.',
      'En el Centro Podológico Ximena Alvarado se realiza una valoración individual del borde ungueal y del tejido circundante para definir el manejo podológico más adecuado. La atención puede incluir limpieza del canal, retiro técnico de la espícula y recomendaciones para reducir recurrencias.',
    ],
    whenToConsult: [
      'Dolor o sensibilidad persistente en uno de los bordes de la uña.',
      'Inflamación o enrojecimiento alrededor de la uña.',
      'Molestia al caminar o utilizar calzado cerrado.',
      'Episodios repetidos de uña encarnada.',
      'Cambios en la piel alrededor de la uña que requieren valoración profesional.',
    ],
    process: [
      { title: 'Valoración', text: 'Se revisa la uña, el borde afectado y el estado del tejido circundante.' },
      { title: 'Manejo podológico', text: 'La técnica se selecciona de acuerdo con el grado de afectación y las condiciones observadas.' },
      { title: 'Cuidado posterior', text: 'Se brindan indicaciones sobre higiene, corte de uñas, calzado y señales que ameritan nueva valoración.' },
    ],
    considerations: [
      'No intente profundizar el corte de una uña inflamada con herramientas caseras.',
      'Si presenta diabetes, problemas circulatorios, sangrado importante o signos de infección, comuníquelo antes de la atención.',
      'Los casos recurrentes pueden requerir valorar alternativas correctivas adicionales como la matricectomía ungueal.',
    ],
    faq: [
      { question: '¿Cuándo conviene valorar una uña encarnada?', answer: 'Cuando existe dolor, inflamación, sensibilidad recurrente o dificultad al usar calzado. Una valoración temprana permite definir el manejo adecuado antes de que la molestia avance.' },
      { question: '¿Puedo cortar la esquina de la uña en casa?', answer: 'Los cortes profundos pueden empeorar la irritación o dejar fragmentos de uña. Si la zona está dolorosa o inflamada es preferible una valoración profesional.' },
      { question: '¿La uña encarnada puede repetirse?', answer: 'Sí. La forma de la uña, el tipo de corte, el calzado y otros factores pueden favorecer recurrencias. Por eso se incluyen recomendaciones preventivas después de la atención.' },
    ],
    related: ['matricectomia-ungueal', 'pedicura-podologica', 'pie-diabetico'],
    bookingServiceId: 'una-encarnada',
  },
  {
    slug: 'matricectomia-ungueal',
    name: 'Matricectomía ungueal',
    eyebrow: 'Uña encarnada recurrente',
    title: 'Matricectomía ungueal en San José',
    seoTitle: 'Matricectomía ungueal en San José | Uña encarnada recurrente',
    description:
      'Información y valoración para matricectomía ungueal en Sabana Norte, San José, como opción correctiva en casos seleccionados de uña encarnada recurrente.',
    image: '/images/servicios/matricectomia.webp',
    price: '₡60,000',
    intro: [
      'La matricectomía ungueal es una alternativa correctiva que puede considerarse cuando la uña encarnada se presenta de forma repetitiva y el borde ungueal continúa generando molestias.',
      'La indicación depende de una valoración previa. En el centro se revisa el historial de recurrencia, la forma de la uña y el estado del tejido para determinar si este procedimiento corresponde al caso.',
    ],
    whenToConsult: [
      'Uña encarnada que reaparece con frecuencia.',
      'Dolor recurrente en el mismo borde ungueal.',
      'Inflamaciones repetidas relacionadas con el crecimiento lateral de la uña.',
      'Cuando tratamientos conservadores previos no han evitado recurrencias.',
    ],
    process: [
      { title: 'Valoración previa', text: 'Se confirma que el problema sea recurrente y que la técnica resulte apropiada para el caso.' },
      { title: 'Procedimiento', text: 'Se trabaja de forma localizada sobre el borde ungueal seleccionado, siguiendo protocolo de bioseguridad.' },
      { title: 'Seguimiento', text: 'Se indican cuidados posteriores y controles según la evolución individual.' },
    ],
    considerations: [
      'La decisión de realizar el procedimiento debe tomarse después de una valoración individual.',
      'Informe medicamentos, enfermedades crónicas o condiciones que puedan afectar la cicatrización.',
      'Siga las indicaciones posteriores y consulte ante cualquier cambio que genere preocupación.',
    ],
    faq: [
      { question: '¿La matricectomía es para todas las uñas encarnadas?', answer: 'No. Se considera principalmente en casos seleccionados y recurrentes. Una valoración previa permite determinar si es necesaria o si existe una alternativa más conservadora.' },
      { question: '¿Necesito una valoración antes?', answer: 'Sí. Es importante revisar el estado de la uña y del tejido antes de indicar un procedimiento correctivo.' },
      { question: '¿Requiere seguimiento?', answer: 'Sí. El seguimiento permite revisar la evolución y reforzar los cuidados posteriores.' },
    ],
    related: ['una-encarnada', 'pedicura-podologica'],
    bookingServiceId: 'matricectomia',
  },
  {
    slug: 'hongos-unas',
    name: 'Hongos en las uñas',
    eyebrow: 'Onicomicosis',
    title: 'Atención podológica para hongos en las uñas en San José',
    seoTitle: 'Hongos en las uñas en San José | Onicomicosis',
    description:
      'Valoración y manejo podológico de onicomicosis u hongos en las uñas en Sabana Norte, San José. Seguimiento del crecimiento y cuidado de la lámina ungueal.',
    image: '/images/servicios/onicomicosis.png',
    price: 'Desde ₡25,000',
    intro: [
      'Los cambios de color, grosor, textura o forma de una uña pueden tener distintas causas. Cuando existe sospecha de onicomicosis, una valoración permite revisar el estado de la lámina ungueal y establecer un plan de cuidado y seguimiento.',
      'El Centro Podológico Ximena Alvarado ofrece un protocolo podológico para onicomicosis que puede incluir reducción del grosor de la uña, higiene especializada y el tratamiento definido según la valoración. La evolución se controla conforme crece la nueva lámina ungueal.',
    ],
    whenToConsult: [
      'Uñas engrosadas o difíciles de cortar.',
      'Cambios persistentes de coloración.',
      'Uña quebradiza, opaca o con acumulación de material debajo.',
      'Molestia con el calzado debido al grosor de la uña.',
      'Cambios que no mejoran con el cuidado habitual.',
    ],
    process: [
      { title: 'Revisión de la lámina', text: 'Se valora grosor, color, textura y extensión del cambio ungueal.' },
      { title: 'Cuidado podológico', text: 'Se realiza el manejo local indicado y se explican medidas de higiene y prevención.' },
      { title: 'Seguimiento', text: 'El crecimiento de la uña requiere tiempo; los controles permiten revisar evolución y ajustar el cuidado.' },
    ],
    considerations: [
      'No todos los cambios de color o grosor corresponden a hongos; una valoración ayuda a orientar el manejo.',
      'Evite compartir cortaúñas, limas o calzado.',
      'Mantenga los pies secos y cambie medias húmedas lo antes posible.',
    ],
    faq: [
      { question: '¿Cuánto tarda en verse una uña sana?', answer: 'Las uñas crecen lentamente, por lo que el cambio visible suele ser progresivo. La duración depende de la extensión del problema, el crecimiento individual y la respuesta al manejo indicado.' },
      { question: '¿Todos los cambios de la uña son hongos?', answer: 'No. Traumatismos, presión del calzado y otras alteraciones pueden producir cambios similares. Por eso es importante valorar la uña antes de asumir la causa.' },
      { question: '¿Debo llevar las uñas sin esmalte?', answer: 'Siempre que sea posible, facilite la valoración llevando la uña visible y sin productos que oculten su color o superficie.' },
    ],
    related: ['pedicura-podologica', 'pie-diabetico', 'una-encarnada'],
    bookingServiceId: 'onicomicosis',
  },
  {
    slug: 'pie-diabetico',
    name: 'Cuidado del pie diabético',
    eyebrow: 'Prevención y valoración',
    title: 'Cuidado podológico del pie diabético en San José',
    seoTitle: 'Pie diabético en San José | Valoración podológica',
    description:
      'Valoración preventiva y cuidado podológico del pie diabético en Sabana Norte, San José. Revisión de piel, uñas y factores de riesgo con protocolo de bioseguridad.',
    image: '/images/servicios/pie_diabetico.webp',
    price: 'Valoración desde ₡15,000',
    intro: [
      'Las personas con diabetes requieren especial atención al estado de la piel, las uñas y cualquier cambio que pueda pasar inadvertido. El cuidado podológico preventivo busca identificar factores de riesgo y mantener el pie en condiciones seguras.',
      'La atención incluye una valoración del estado general del pie, sensibilidad referida, piel, uñas, zonas de presión y posibles lesiones. Cuando se identifica una situación que requiere valoración médica, se recomienda la referencia correspondiente.',
    ],
    whenToConsult: [
      'Cambios en la piel, grietas o resequedad marcada.',
      'Callosidades, uñas engrosadas o dificultad para cortarlas.',
      'Pérdida o cambios de sensibilidad.',
      'Rozaduras, ampollas o lesiones que requieren revisión.',
      'Como parte de un esquema preventivo periódico aunque no exista dolor.',
    ],
    process: [
      { title: 'Valoración preventiva', text: 'Se revisa piel, uñas, sensibilidad referida, puntos de presión y condiciones que puedan elevar el riesgo.' },
      { title: 'Cuidado seguro', text: 'El manejo podológico se realiza con técnicas cuidadosas y protocolo estricto de bioseguridad.' },
      { title: 'Educación', text: 'Se brindan recomendaciones para inspección diaria, higiene, calzado y señales de alerta.' },
    ],
    considerations: [
      'No manipule callos, uñas o lesiones con objetos cortantes en casa.',
      'Revise sus pies diariamente si tiene disminución de sensibilidad.',
      'Una herida, cambio de color, calor, inflamación o secreción amerita valoración oportuna y, según el caso, atención médica.',
    ],
    faq: [
      { question: '¿Debo esperar a tener dolor para consultar?', answer: 'No. En personas con diabetes la prevención es especialmente importante, ya que algunos cambios pueden no producir dolor al inicio.' },
      { question: '¿Cada cuánto conviene revisar los pies?', answer: 'La frecuencia depende del nivel de riesgo y de las condiciones de cada persona. En la valoración inicial se puede orientar un esquema de seguimiento.' },
      { question: '¿Qué pasa si tengo una herida?', answer: 'No la manipule en casa. Una herida en una persona con diabetes debe evaluarse oportunamente para determinar el nivel de atención que requiere.' },
    ],
    related: ['callosidades', 'hongos-unas', 'pedicura-podologica'],
    bookingServiceId: 'pie-diabetico',
  },
  {
    slug: 'callosidades',
    name: 'Callosidades y helomas',
    eyebrow: 'Helomas y durezas',
    title: 'Tratamiento podológico de callosidades en San José',
    seoTitle: 'Callos en los pies en San José | Helomas y durezas',
    description:
      'Atención podológica para callos, helomas y durezas en Sabana Norte, San José. Valoración de zonas de presión, cuidado profesional y prevención de recurrencias.',
    image: '/images/servicios/callos-en-los-pies.webp',
    price: 'Desde ₡24,000',
    intro: [
      'Los helomas y las callosidades aparecen como respuesta a presión o fricción repetida. Aunque pueden parecer un problema únicamente estético, algunas lesiones generan molestias importantes al caminar o al utilizar determinados tipos de calzado.',
      'El abordaje podológico busca retirar de forma controlada el exceso de tejido queratósico y, al mismo tiempo, identificar los factores que están generando presión para reducir la posibilidad de que la molestia reaparezca rápidamente.',
    ],
    whenToConsult: [
      'Dolor localizado al apoyar o caminar.',
      'Durezas que aumentan de tamaño o reaparecen con frecuencia.',
      'Molestia entre los dedos o en zonas de roce del calzado.',
      'Callosidades en personas con diabetes o alteraciones de sensibilidad.',
    ],
    process: [
      { title: 'Identificación', text: 'Se revisa la zona de presión y se diferencia entre dureza superficial, heloma u otra lesión.' },
      { title: 'Desbridamiento podológico', text: 'Se reduce el exceso de tejido de forma controlada y con instrumental esterilizado.' },
      { title: 'Prevención', text: 'Se revisan hábitos, calzado y puntos de presión que puedan favorecer la recurrencia.' },
    ],
    considerations: [
      'Evite cortar callos con cuchillas o herramientas caseras.',
      'Los productos queratolíticos de venta libre no son adecuados para todas las personas, especialmente si existe diabetes o mala sensibilidad.',
      'Si una lesión cambia de aspecto, sangra o genera dudas, requiere valoración antes de tratarla como un callo común.',
    ],
    faq: [
      { question: '¿Por qué vuelven los callos?', answer: 'Porque la presión o fricción que los origina puede continuar. Además del cuidado local, es importante revisar el calzado y los puntos de apoyo.' },
      { question: '¿Es lo mismo un callo que una verruga plantar?', answer: 'No. Pueden confundirse visualmente, pero su origen y manejo son diferentes. Una valoración permite diferenciarlos.' },
      { question: '¿Puedo retirar un callo en casa?', answer: 'No es recomendable utilizar cuchillas u objetos cortantes. El riesgo aumenta si existe diabetes, problemas de sensibilidad o circulación.' },
    ],
    related: ['verrugas-plantares', 'pedicura-podologica', 'pie-diabetico'],
    bookingServiceId: 'helomas',
  },
  {
    slug: 'verrugas-plantares',
    name: 'Verrugas plantares',
    eyebrow: 'Lesiones plantares',
    title: 'Atención para verrugas plantares en San José',
    seoTitle: 'Verrugas plantares en San José | Atención podológica',
    description:
      'Valoración y atención podológica para verrugas plantares en Sabana Norte, San José. Diferenciación de lesiones, manejo local y recomendaciones de cuidado.',
    image: '/images/servicios/verrugas-plantares.png',
    price: 'Desde ₡24,000',
    intro: [
      'Las verrugas plantares pueden confundirse con callosidades debido a su localización y a la molestia al apoyar. Una valoración ayuda a diferenciar el tipo de lesión antes de iniciar cualquier manejo local.',
      'El tratamiento se define de acuerdo con el tamaño, ubicación, evolución y características de la lesión. También se brindan recomendaciones para reducir irritación y evitar manipulación innecesaria.',
    ],
    whenToConsult: [
      'Lesión plantar que persiste o aumenta de tamaño.',
      'Molestia al caminar o apoyar el pie.',
      'Lesión que se confunde con una callosidad y no mejora.',
      'Aparición de lesiones similares en otras zonas.',
    ],
    process: [
      { title: 'Valoración', text: 'Se revisan características de la lesión y su localización para orientar el manejo.' },
      { title: 'Tratamiento local', text: 'Se aplica el protocolo indicado para el caso, cuidando el tejido circundante.' },
      { title: 'Seguimiento', text: 'Algunas lesiones requieren varias sesiones; la evolución se revisa antes de repetir el procedimiento.' },
    ],
    considerations: [
      'Evite cortar o arrancar la lesión.',
      'Mantenga el pie limpio y seco y no comparta instrumentos de cuidado personal.',
      'Si existe diabetes, alteración de sensibilidad o una lesión atípica, indíquelo antes del tratamiento.',
    ],
    faq: [
      { question: '¿Una verruga plantar y un callo son lo mismo?', answer: 'No. Pueden parecer similares, pero tienen causas diferentes. La valoración permite orientar el manejo correcto.' },
      { question: '¿Se resuelve en una sola sesión?', answer: 'Depende de la lesión y de su evolución. Algunos casos requieren seguimiento y más de una sesión.' },
      { question: '¿Puedo manipularla en casa?', answer: 'No es recomendable cortarla o arrancarla. Esto puede irritar la zona y dificultar la valoración.' },
    ],
    related: ['callosidades', 'pedicura-podologica'],
    bookingServiceId: 'verrugas',
  },
  {
    slug: 'pedicura-podologica',
    name: 'Pedicura podológica',
    eyebrow: 'Cuidado preventivo',
    title: 'Pedicura podológica y cuidado preventivo en San José',
    seoTitle: 'Pedicura podológica en San José | Cuidado preventivo',
    description:
      'Pedicura podológica en Sabana Norte, San José: corte técnico de uñas, cuidado de durezas, fresado e hidratación para mantenimiento preventivo del pie.',
    image: '/images/servicios/pedicura-podologica.png',
    price: '₡20,000',
    intro: [
      'La pedicura podológica está orientada al cuidado preventivo del pie. A diferencia de un servicio exclusivamente estético, se centra en el corte técnico de uñas, revisión de la piel, manejo de durezas y mantenimiento general.',
      'Es una opción para personas que desean conservar sus pies en buenas condiciones, tienen dificultad para realizar un corte adecuado o prefieren un mantenimiento profesional con instrumental esterilizado.',
    ],
    whenToConsult: [
      'Dificultad para cortar las uñas de forma segura.',
      'Durezas leves o piel reseca que requieren mantenimiento.',
      'Deseo de mantener un cuidado preventivo periódico.',
      'Necesidad de revisión general de uñas y piel del pie.',
    ],
    process: [
      { title: 'Revisión inicial', text: 'Antes del mantenimiento se observa el estado general de uñas y piel.' },
      { title: 'Cuidado podológico', text: 'Incluye corte técnico, fresado o reducción de durezas cuando corresponde e higiene profesional.' },
      { title: 'Hidratación y recomendaciones', text: 'La sesión finaliza con cuidado de la piel y sugerencias de mantenimiento en casa.' },
    ],
    considerations: [
      'Si existe una lesión activa o patología, la atención puede cambiar de mantenimiento preventivo a tratamiento específico.',
      'Informe si tiene diabetes, alteraciones de sensibilidad o antecedentes relevantes para el cuidado del pie.',
      'La frecuencia de mantenimiento depende del crecimiento de uñas, piel y necesidades individuales.',
    ],
    faq: [
      { question: '¿Es lo mismo que una pedicura estética?', answer: 'No. La pedicura podológica prioriza la salud y el mantenimiento técnico del pie, aunque también contribuye a una apariencia cuidada.' },
      { question: '¿Puedo reservar aunque no tenga dolor?', answer: 'Sí. El mantenimiento preventivo está pensado precisamente para cuidar el pie antes de que exista una molestia importante.' },
      { question: '¿Cada cuánto conviene realizarla?', answer: 'La frecuencia depende del crecimiento de uñas, durezas y necesidades individuales. Durante la atención se puede orientar un intervalo adecuado.' },
    ],
    related: ['callosidades', 'hongos-unas', 'una-encarnada'],
    bookingServiceId: 'pedicura',
  },
];

export const servicePageMap = Object.fromEntries(
  servicePages.map((service) => [service.slug, service])
) as Record<string, ServicePage>;
