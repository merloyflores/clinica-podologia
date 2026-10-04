This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

---

## Agenda con Google Calendar

El proyecto incluye una agenda propia en `/reservar` conectable directamente con Google Calendar y un panel privado en `/gestion-agenda`.

### Qué hace

- Muestra el horario público del centro: martes a domingo, 7:00 AM a 4:00 PM.
- Los lunes permanecen cerrados.
- Consulta Google Calendar antes de mostrar disponibilidad.
- Los horarios ocupados se muestran como **Ocupado** y no se pueden seleccionar.
- Revalida el espacio inmediatamente antes de crear la cita.
- Usa un identificador determinista por bloque horario para que dos solicitudes simultáneas al mismo bloque no creen eventos duplicados.
- Las citas creadas manualmente en Google Calendar también bloquean la disponibilidad de la web.
- El panel privado permite ver próximas citas, crear bloqueos y liberar eventos.
- Sin credenciales de Google, `/reservar` funciona en **modo demostración** para revisar el diseño sin escribir citas reales.

### Configuración de Google Calendar

1. Cree (o seleccione) un proyecto en Google Cloud.
2. Habilite **Google Calendar API**.
3. Cree una **Service Account** y descargue una clave JSON.
4. Cree un calendario específico, por ejemplo `Centro Podológico - Citas`.
5. En Google Calendar, comparta ese calendario con el `client_email` de la Service Account y otorgue permiso para **hacer cambios en eventos**.
6. Copie `.env.example` como `.env.local` y complete:

```env
GOOGLE_CALENDAR_CLIENT_EMAIL=...
GOOGLE_CALENDAR_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----\n"
GOOGLE_CALENDAR_ID=...
AGENDA_ADMIN_PASSWORD=...
```

> La clave privada solo se usa en el servidor. Nunca debe utilizarse en un componente cliente ni publicarse en Git.

### Rutas principales

- `/reservar` — agenda pública.
- `/gestion-agenda` — panel administrativo protegido por contraseña.
- `/api/agenda/disponibilidad` — consulta disponibilidad.
- `/api/agenda/reservar` — crea la cita tras validar el horario nuevamente.

### Horarios y servicios

La configuración está centralizada en:

`app/lib/agenda-config.ts`

Ahí puede cambiar el horario semanal, la ventana máxima de reserva, anticipación mínima, duración de los servicios y precios mostrados.

Actualmente cada cita inicia en un bloque horario exclusivo de 60 minutos. Los servicios configurados duran 45 o 60 minutos. Esto simplifica la agenda y refuerza la protección contra reservas simultáneas que pudieran solaparse.
